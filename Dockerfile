# Production runtime image: Serve pre-built SPA via Nginx
FROM nginx:1.27-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy pre-compiled production build
COPY dist/ .

# Copy hardened nginx configuration with SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Default Cloud Run port
ENV PORT=8080
EXPOSE 8080

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
