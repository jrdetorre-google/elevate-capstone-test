#!/usr/bin/env bash
set -eo pipefail

PROJECT_ID="elevate-capstone-testprep"
REGION="europe-southwest1"
SERVICE_NAME="elevate-capstone-simulator"
BUCKET_NAME="elevate-capstone-testprep-questions"

echo "============================================================"
echo " Google Cloud Project Elevate: Capstone Simulator Deployment"
echo " Project: $PROJECT_ID | Region: $REGION"
echo "============================================================"

# 1. Set Google Cloud active project
echo "--> Configuring gcloud project..."
gcloud config set project "$PROJECT_ID"

# 2. Enable Required APIs
echo "--> Enabling required Google Cloud APIs..."
gcloud services enable \
  run.googleapis.com \
  storage.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  firestore.googleapis.com

# 3. Provision Cloud Storage Bucket for dynamic questions corpus
echo "--> Checking Cloud Storage bucket gs://${BUCKET_NAME}..."
if ! gcloud storage buckets describe "gs://${BUCKET_NAME}" >/dev/null 2>&1; then
  echo "--> Creating Cloud Storage bucket gs://${BUCKET_NAME} in ${REGION}..."
  gcloud storage buckets create "gs://${BUCKET_NAME}" --location="${REGION}" --uniform-bucket-level-access
fi

# 4. Upload questions.json to GCS bucket
echo "--> Syncing canonical questions corpus to gs://${BUCKET_NAME}/questions.json..."
gcloud storage cp public/data/questions.json "gs://${BUCKET_NAME}/questions.json" \
  --cache-control="public, max-age=3600"

# Set public readable for client fetch (or via CDN)
gcloud storage buckets add-iam-policy-binding "gs://${BUCKET_NAME}" \
  --member="allUsers" \
  --role="roles/storage.objectViewer" || true

# 5. Build and Deploy Container to Cloud Run
echo "--> Deploying to Cloud Run in ${REGION}..."
gcloud run deploy "$SERVICE_NAME" \
  --source . \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars="VITE_QUESTIONS_BUCKET_URL=https://storage.googleapis.com/${BUCKET_NAME}/questions.json"

echo "============================================================"
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" --region "$REGION" --format="value(status.url)")
echo " Deployment Complete!"
echo " Service URL: $SERVICE_URL"
echo " GCS Corpus:  https://storage.googleapis.com/${BUCKET_NAME}/questions.json"
echo "============================================================"
