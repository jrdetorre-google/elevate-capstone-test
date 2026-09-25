# Banco Canónico de Preguntas (questions.md) — Project Elevate Capstone (Customer Engineering)

> **Propósito de este documento**: Este archivo contiene el **Corpus Canónico en Inglés (`English Corpus`) de 150 Preguntas y Respuestas** para la preparación y acreditación del **Project Elevate Capstone**.
> Sirve como la **Fuente Única de Verdad (`Single Source of Truth`)** de datos para la aplicación de simulación descrita en [`spec.md`](spec.md).

---

## Canonical English Question Corpus — 150 Questions & Answers (Modules 0, 1, 2 & 3)

### Verified Statistical Summary of the Canonical Corpus
- **Language of Canonical Corpus**: `English (en)`
- **Total Questions**: `150` (`Q001` to `Q150`)
- **Single-Choice Questions (80.0%)**: `120` questions (1 correct option out of 4)
  - **Exact Single-Choice Correct Answer Distribution**:
    - Option **`A`**: `30 / 120` (**25.0%**) — *(M0: 9, M1: 7, M2: 7, M3: 7)*
    - Option **`B`**: `30 / 120` (**25.0%**) — *(M0: 9, M1: 7, M2: 7, M3: 7)*
    - Option **`C`**: `30 / 120` (**25.0%**) — *(M0: 9, M1: 7, M2: 7, M3: 7)*
    - Option **`D`**: `30 / 120` (**25.0%**) — *(M0: 9, M1: 7, M2: 7, M3: 7)*
- **Multi-Response Questions (20.0%)**: `30` questions (`10` with 2 correct options + `20` with 3 correct options; **0 questions with all 4 correct**)
  - **Exact Multi-Response Correct Option Frequency**:
    - Option **`A`**: `20 / 80` correct slots (**25.0%**)
    - Option **`B`**: `20 / 80` correct slots (**25.0%**)
    - Option **`C`**: `20 / 80` correct slots (**25.0%**)
    - Option **`D`**: `20 / 80` correct slots (**25.0%**)
- **Global Correct Option Probability Across All 150 Questions**:
  - **`A`: 50 (25.0%) | `B`: 50 (25.0%) | `C`: 50 (25.0%) | `D`: 50 (25.0%)**


---

### Module 0: Agentic AI Foundations & ADK

#### Q001 — [M0L1 Introduction]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the Core Purpose defined in the Project Elevate program for Google Cloud Customer Engineers (CEs)?
  - **A)** Focus technical demonstrations exclusively on pre-training proprietary foundation models from scratch.
  - **B)** Transform Customer Engineers into hands-on Agentic AI Architects capable of unblocking complex customer architecture bottlenecks and building tools to reduce their own daily administrative toil.
  - **C)** Train CEs exclusively on consultative licensing sales for Google Workspace and Gemini for Workspace.
  - **D)** Replace Professional Services (PSO) teams by taking over full-time custom coding of legacy ERP systems without using AI agents.
- **Correct Answer**: **B**
- **Explanation**: According to M0L1 (Slide 2), the core purpose of Project Elevate is to transform CEs into 'hands-on Agentic AI Architects', learning both how to unblock complex customer bottlenecks and how to build tools that reduce their own daily administrative toil.

#### Q002 — [M0L1 Introduction]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Under Elevate's 'Minimum Technical Standard', every Customer Engineer must master and execute an end-to-end 4-stage baseline workflow. What is the correct sequence of these 4 stages?
  - **A)** 01: Terraform Init → 02: GKE Cluster Provisioning → 03: Istio Service Mesh → 04: Load Testing
  - **B)** 01: Data Labeling → 02: Model Fine-Tuning → 03: Vertex Endpoint Creation → 04: Billing Export
  - **C)** 01: Prompt Engineering → 02: Cloud Functions Deployment → 03: Apigee Routing → 04: Looker Dashboarding
  - **D)** 01: Agent Definition (take or build an agent) → 02: Engine Deployment (put the agent on Agent Engine) → 03: Enterprise Integration (register with Gemini Enterprise) → 04: Live Interaction (talk to the agent in a real-time demo)
- **Correct Answer**: **D**
- **Explanation**: M0L1 (Slide 3) defines the Minimum Technical Standard in 4 stages: 01 Agent Definition (Take or build an agent), 02 Engine Deployment (Put the agent on Agent Engine), 03 Enterprise Integration (Register with Gemini Enterprise), and 04 Live Interaction (Talk to the agent in a real-time demo).

#### Q003 — [M0L1 Introduction]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to M0L1 ('What Customers Think vs. Production Reality'), after seeing a cool demo, customers often assume moving from PoC to global production is immediate. Which of the following pillars represent real production engineering gaps that a CE must surface early? *(Select the 3 correct options)*
  - **A)** CI/CD integration with model/prompt versioning and enterprise SLAs covering high availability, rate limiting, and failover.
  - **B)** Real-time monitoring of latency and hallucination rates at scale (Monitoring).
  - **C)** Automated regression testing and continuous evaluation pipelines (Evaluation).
  - **D)** Deleting all security audit logs to accelerate model token generation in production.
- **Correct Answer**: **A, B, C**
- **Explanation**: M0L1 (Slides 4-5) highlights four critical pillars separating a PoC from production reality: Monitoring (latency and hallucination rates), Evaluation (automated regression pipelines), CI/CD Integration (model and prompt versioning), and Enterprise SLAs (HA, rate limiting, failover, and audit logs).

#### Q004 — [M0L1 Introduction]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the pedagogical focus of the Learning Labs in Project Elevate ('Beyond Syntax: Conceptual Mastery & Troubleshooting')?
  - **A)** Prioritizing Architectural Intent, Understanding Agent Dynamics, and Practical Troubleshooting (root-cause analysis) over rote syntax memorization.
  - **B)** Limiting the scope to stateless REST API calls to Gemini without tools or memory.
  - **C)** Avoiding real GCP environments by relying solely on static theoretical quizzes.
  - **D)** Rote memorization of the exact syntax of every Python library without using coding assistants.
- **Correct Answer**: **A**
- **Explanation**: M0L1 (Slide 6) defines the three pillars of the Learning Labs: 01 Focusing on Architectural Intent, 02 Understanding Agent Dynamics, and 03 Practical Troubleshooting (root-cause analysis over rote memory).

#### Q005 — [Capstone Program Guide & M0L1]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the official Project Elevate Capstone accreditation structure for Customer Engineers, how is the evaluation organized across the dedicated 2-day block?
  - **A)** A single test on building Looker Studio charts without using ADK or Agent Engine.
  - **B)** Exclusively through a commercial slide presentation in front of a panel with no technical deployment.
  - **C)** In three sequential parts: Part 1 (30-question conceptual Knowledge Check on HackerRank), Part 2 (Troubleshooting Challenge Labs in Labs for Sales), and Part 3 (End-to-End Solutioning: Phase A discovery/architecture evaluated by an AI Evaluator Agent and Phase B deployment validated by an Automated Evaluation Server).
  - **D)** A 5-hour written exam on physical data center cabling and rack installation.
- **Correct Answer**: **C**
- **Explanation**: According to the official Elevate Capstone guide (go/elevate-capstone-reg), accreditation consists of 3 parts: Part 1 (30-question Knowledge Check, 90% pass mark), Part 2 (Troubleshooting Challenge Labs in LfS, 90% pass mark), and Part 3 (End-to-End Solutioning split into Phase A with an AI Evaluator Agent and Phase B with automated validation in LfS, 80% pass mark).

#### Q006 — [M0L2 Start with Scoping]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the Google Cloud Well-Architected Framework (AI/ML Operational Excellence) cited in M0L2, what is the most common failure mode when starting AI projects, and what is the recommended sequence?
  - **A)** The most common failure mode is versioning datasets alongside application code.
  - **B)** The most common failure mode is starting with a cool technology/demo and working backward to find a problem; the recommended Problem-First sequence is to define the business problem and required outcomes first, and then select the technical approach.
  - **C)** The most common failure mode is using pre-trained models from Model Garden instead of always training from scratch.
  - **D)** The most common failure mode is spending too much time defining KPIs; the recommended approach is to pick the largest model first and look for a problem later.
- **Correct Answer**: **B**
- **Explanation**: M0L2 (Slide 2) emphasizes the WAF principle: 'Use case scoping is a prerequisite to architecture, not an afterthought.' Teams must follow a Problem-First sequence: 1. Define the problem and measurable outcomes, 2. Select the approach.

#### Q007 — [M0L2 Start with Scoping]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: Within the four pillars of AI/ML Operational Excellence from the Google WAF explained in M0L2, which specific guidelines are recommended for 'Select ML Approach' and 'Version Control Everything'? *(Select the 2 correct options)*
  - **A)** Use AutoML for simple classification or regression tasks, use pre-trained models from Model Garden for common applications, and reserve custom training for complex needs where simpler approaches fall short.
  - **B)** Version control only the Python source code in Git while leaving model weights and datasets unversioned to save storage costs.
  - **C)** Discard AutoML and Model Garden completely, requiring custom training on dedicated GPUs for every use case.
  - **D)** Version control everything — code, models, and data — using Artifact Registry for containers and Model Registry for model tracking.
- **Correct Answer**: **A, D**
- **Explanation**: M0L2 (Slides 3-4) details: under 'Select ML Approach', choose AutoML for simple tasks, Model Garden for common applications, and Custom Training only for complex needs; under 'Version Control Everything', version code, models, and data using Artifact Registry and Model Registry.

#### Q008 — [M0L2 Start with Scoping]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When prioritizing AI use cases using the Impact × Feasibility matrix in M0L2, how are projects with High Impact + High Feasibility classified compared to those with High Impact + Low Feasibility?
  - **A)** High Impact + High Feasibility = 'Do First' (Quick wins with clear ROI); High Impact + Low Feasibility = 'Plan Carefully' (High value, but requires careful investment).
  - **B)** High Impact + High Feasibility = 'Plan Carefully'; High Impact + Low Feasibility = 'Do First'.
  - **C)** Both are discarded because AI should only be applied to Low Impact quadrants.
  - **D)** High Impact + High Feasibility = 'Deprioritize'; High Impact + Low Feasibility = 'Consider'.
- **Correct Answer**: **A**
- **Explanation**: In M0L2 (Slide 9), the Impact × Feasibility matrix defines four quadrants: Do First (High Impact, High Feasibility — quick wins with clear ROI), Plan Carefully (High Impact, Low Feasibility), Consider (Low Impact, High Feasibility), and Deprioritize (Low Impact, Low Feasibility).

#### Q009 — [M0L2 Start with Scoping]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: To validate use cases through pilots ('Validate Through Pilots'), the Google WAF recommends an iterative 4-step optimization cycle. What is the correct order?
  - **A)** 1. Monitor & Analyze → 2. Start Small → 3. Iterate & Refine → 4. Define Success First
  - **B)** 1. Fine-tune LLM → 2. Deploy GKE → 3. Audit Security → 4. Define Problem
  - **C)** 1. Start Small (begin with the smallest viable experiment, sample data, and pre-trained models) → 2. Define Success First (set clear criteria aligned with business KPIs before building) → 3. Monitor & Analyze → 4. Iterate & Refine
  - **D)** 1. Scale enterprise-wide → 2. Purchase Provisioned Throughput → 3. Define metrics → 4. Cut costs
- **Correct Answer**: **C**
- **Explanation**: M0L2 (Slide 10) establishes the 4-step pilot validation sequence: 1. Start Small, 2. Define Success First, 3. Monitor & Analyze, 4. Iterate & Refine.

#### Q010 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M0L3, what are the three core building blocks of an AI agent, and what differentiates an agent from a standard automated script?
  - **A)** A single static prompt with no external access; it differs by having more than 10,000 words.
  - **B)** A Docker container with cron jobs; it differs because it always executes the exact same fixed sequence of steps.
  - **C)** SQL database, Apache web server, and load balancer; it differs because it is written in C++.
  - **D)** AI model + instructions + tools; it differs from a script because the agent autonomously decides which tool to call and when based on its goal.
- **Correct Answer**: **D**
- **Explanation**: M0L3 (Slide 2) defines an agent as an autonomous unit composed of AI model + instructions + tools, whose key distinction from a script is that 'The agent decides which tool to call, and when.'

#### Q011 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When instantiating a basic agent in Google ADK (`root_agent = Agent(name=..., model=..., description=..., instruction=..., tools=...)`), what critical role does the `description` parameter play in multi-agent architectures?
  - **A)** It defines the TLS encryption private key for the Cloud Run container.
  - **B)** It is used solely as an internal comment for the Python interpreter and stripped at runtime.
  - **C)** It is what other agents or orchestrators read when deciding which specialist agent to delegate a task to.
  - **D)** It specifies the maximum monthly billing cap in dollars for the GCP project.
- **Correct Answer**: **C**
- **Explanation**: As explained in M0L3 (Slide 3), `description` goes far beyond a code comment: it is what orchestrator agents read to understand what this specialist agent excels at and decide whether to delegate a subtask to it.

#### Q012 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A customer wants to generate marketing copy in a fixed format that already works reliably with one big prompt, and also runs a heavily regulated financial system requiring only deterministic binary classification. According to M0L3 ('You don’t always need agents'), what is the right architectural recommendation?
  - **A)** Do not use agents where they are unnecessary: simpler architecture wins when the workflow is fixed and predictable (use direct LLM calls for the marketing copy and a traditional ML classifier for the regulated financial system).
  - **B)** Disable the ML classifier and allow an autonomous agent to modify financial transactions without oversight.
  - **C)** Replace both systems with a 5-tier multi-agent A2A architecture to modernize the stack.
  - **D)** Force the use of ReAct agents with 15 tools in both cases even if latency increases.
- **Correct Answer**: **A**
- **Explanation**: M0L3 (Slides 4-5) stresses that agents are ideal when the next step is not known in advance and requires adaptive reasoning and multiple tools; when the workflow is fixed and predictable ('Simpler architecture wins when the workflow is fixed and predictable'), direct LLM calls, static RAG, or a traditional ML classifier are superior.

#### Q013 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: M0L3 outlines mitigation strategies for the three major agent challenges: Predictability, Stability, and Operations. Which of the following pairings between challenge and mitigation strategy are correct? *(Select the 3 correct options)*
  - **A)** Operations: Enable verbose dev logging, automate evaluation datasets on every commit, define SLOs/alerts, and use framework tracing to spot latency bottlenecks.
  - **B)** Stability: Remove all tool descriptions from the system prompt so the model freely guesses parameter schemas.
  - **C)** Predictability: Ground the LLM in trusted data via RAG/search, guide step-by-step reasoning (Chain-of-Thought / few-shot), and add tool-call validation checks.
  - **D)** Stability: Use consistent tool abstractions via MCP, implement error handling (retries, circuit-breakers, human hand-off), and track workflow status (`workflow status field`).
- **Correct Answer**: **A, C, D**
- **Explanation**: M0L3 (Slides 8, 9, and 10) details these exact mitigations for Predictability (reasoning models, RAG grounding, CoT, state, checks), Stability (MCP abstractions, detailed system prompt & tool descriptions, retries/circuit-breakers/HITL), and Operations (verbose dev logs, automated evals on commit, token/status metrics, SLOs, tracing).

#### Q014 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: How does a general-purpose SDK (Software Development Kit) differ from the ADK (Agent Development Kit) according to M0L3?
  - **A)** An SDK only works in Java while ADK only works in assembly language.
  - **B)** A general SDK provides standard code libraries with no awareness of LLM reasoning loops, whereas ADK is purpose-built for agents and includes native primitives such as Tool, State, Workflow, and Skills.
  - **C)** ADK blocks external tool usage whereas a standard SDK enables it.
  - **D)** There is no difference; ADK is simply the new marketing name for the Google Cloud Storage SDK.
- **Correct Answer**: **B**
- **Explanation**: M0L3 (Slides 41-42) explains that 'SDK ≠ ADK': a general SDK has no awareness of agent concepts and requires manual wiring, whereas ADK natively understands what an agent is and includes four built-in primitives: Tools (Actions), State (Memory), Workflows (Coordination), and Skills (Reusability).

#### Q015 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: How does the three-level 'Progressive Disclosure' mechanism (L1, L2, and L3) work in ADK Skills, and which runtime tools does the agent use to consume them?
  - **A)** L1 encrypts the disk, L2 restarts the container, and L3 drops the database.
  - **B)** L1 runs `load_resource`, L2 runs `list_skills`, and L3 runs `load_skill`.
  - **C)** It loads every script, document, and prompt from all skills into the very first token of the system prompt to maximize memory consumption.
  - **D)** L1 (Metadata: skill name and description exposed via `list_skills`), L2 (Instructions: full rule body loaded on demand via `load_skill`), and L3 (Resources: individual files, references, or scripts loaded via `load_resource` only when the task needs them).
- **Correct Answer**: **D**
- **Explanation**: M0L3 (Slides 53 and 57) details how Progressive Disclosure prevents bloated prompts by loading Skills incrementally: L1 Metadata via `list_skills` (catalog), L2 Instructions via `load_skill` (when the skill is activated), and L3 Resources via `load_resource` (only when a task requires a specific file).

#### Q016 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Among the common ADK Skill definition patterns (M0L3 Slide 56), what is the name of the pattern for a Skill that can create or manage other Skills to enable dynamic, self-evolving agent systems?
  - **A)** External Skill
  - **B)** Inline Skill
  - **C)** File-based Skill
  - **D)** Meta Skill
- **Correct Answer**: **D**
- **Explanation**: M0L3 (Slide 56) defines four Skill patterns: Inline (defined in code for small, stable rules), File-based (folders with `SKILL.md` + resources), External (loaded from external repositories/packages), and Meta ('A skill that can create or manage other skills — enables dynamic, self-evolving agent systems').

#### Q017 — [M0L3 Intro To ADK & AI Design Patterns]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: When using the `google-agents-cli` command-line tool (`agents-cli create [agent-name] --agent [agent-template]`), which three official templates are available to scaffold the project? *(Select the 3 correct options)*
  - **A)** `adk_a2a` — extends the `adk` template with support for the Agent-to-Agent (A2A) protocol.
  - **B)** `legacy_cobol_monolith` — a JCL code generator with no Gemini model integration.
  - **C)** `agentic_rag` — an ADK agent with an integrated RAG pipeline.
  - **D)** `adk` — a ReAct agent using ADK with a sample tool.
- **Correct Answer**: **A, C, D**
- **Explanation**: M0L3 (Slide 64) specifies the three `agents-cli` templates: `adk` (ReAct agent with sample tool), `adk_a2a` (extends `adk` with A2A protocol), and `agentic_rag` (ADK agent with integrated RAG pipeline).

#### Q018 — [M0L5 Jetski & M0_01 AGY vs JetSki Guidance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the golden rule of security and compliance for a Customer Engineer regarding the use of **Antigravity** versus **Jetski**?
  - **A)** Uninstall both Antigravity and Jetski and use only plain text editors without AI.
  - **B)** Use **Antigravity** (2.0 Desktop App, CLI, and VS Code extension authenticated via Argolis) for customer-facing demos and work, and reserve **Jetski** strictly for internal productivity (1P, `google3`, Buganizer, toil reduction), NEVER showing Jetski or sharing a screen with it open in front of a customer.
  - **C)** Use consumer Antigravity IDE 1.0 with `@google.com` accounts for production customer workloads.
  - **D)** Always demo Jetski to customers on external calls because it includes direct access to `google3` and pre-release models.
- **Correct Answer**: **B**
- **Explanation**: M0L5 (Slides 6 and 11) is explicit: Antigravity (2.0 Desktop App & CLI via Argolis) is approved for external demos with zero IP leakage risk; Jetski is strictly for internal productivity and must NEVER be shown to customers (risk of data leakage, pre-release model exposure, and disciplinary suspension).

#### Q019 — [M0_02 Antigravity IDE, 2.0, CLI & M0L4 Coding Agent]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Why do the Elevate guidelines explicitly state 'Don’t use Antigravity IDE' (the original standalone Electron/Windsurf-fork application) for Google Cloud enterprise demonstrations?
  - **A)** Because Antigravity IDE (1.0) is a consumer-only product, is not covered by Google Cloud ToS, and does not support customer work accounts (Workspace/GCP) or `@google.com`; instead, CEs must use Antigravity 2.0, Antigravity CLI, or the IDE extensions (VS Code, IntelliJ, etc.).
  - **B)** Because it was renamed to Cloud Spanner Studio.
  - **C)** Because it lacks a graphical interface and only accepts punch cards.
  - **D)** Because it only runs on IBM z/OS mainframe servers.
- **Correct Answer**: **A**
- **Explanation**: M0_02 (Slide 6) and M0L5 (Slide 7) explain that the original Antigravity IDE (external equivalent of Jetski IDE) remains a consumer-only app under consumer ToS, incompatible with GCP. For enterprise customers and CEs, Antigravity 2.0, Antigravity CLI, and the Antigravity VS Code/IDE extensions must be used.

#### Q020 — [M0L4 Coding Agent]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M0L4 ('Powered by Gemini models on Agent Platform'), what is the positioning between Gemini 3.7 Flash (GA) and Gemini 3.5 Pro in Antigravity with Agent Platform?
  - **A)** Gemini 3.7 Flash only handles simple text translation and costs three times more than Pro.
  - **B)** Neither model supports regional endpoints for data residency.
  - **C)** Gemini 3.7 Flash (GA) excels at coding and reasoning, outperforming Gemini 3.1 Pro with faster speeds at one-third the cost (making it the practical default), while Gemini 3.5 Pro is optimized for the most complex multi-layered agentic coding workflows.
  - **D)** Both models require the customer to physically manage their own on-premises TPUs.
- **Correct Answer**: **C**
- **Explanation**: M0L4 (Slide 4) highlights that Gemini 3.7 Flash (GA) outperforms Gemini 3.1 Pro with faster speeds at 1/3 the cost, serving as the practical default for most workflows, while the Pro model targets the most complex multi-layered problems, with both supporting regional endpoints.

#### Q021 — [M0L5 Jetski]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the mapping table between internal Google tools and external customer products (M0L5 Slide 7), which external surfaces correspond to **Jetski Hub**, **Jetski CLI**, and **Jetski Prod**, respectively?
  - **A)** They have no external equivalents because Google does not offer agentic tools to customers.
  - **B)** Jetski Hub → BigQuery Studio; Jetski CLI → gsutil; Jetski Prod → Cloud Composer.
  - **C)** Jetski Hub → Antigravity 2.0; Jetski CLI → Antigravity CLI; Jetski Prod → Antigravity Agent (harness used in Spark and GEAP).
  - **D)** Jetski Hub → Looker; Jetski CLI → Cloud Shell; Jetski Prod → Apigee.
- **Correct Answer**: **C**
- **Explanation**: M0L5 (Slide 7) explicitly maps: Jetski Hub = Antigravity 2.0 (Agent manager web/client app), Jetski CLI = Antigravity CLI (terminal-first surface), Jetski SDK = Antigravity SDK, and Jetski Prod = Antigravity Agent (harness used in Spark and GEAP).

#### Q022 — [M0_02 Antigravity IDE, 2.0, CLI]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: Which native capabilities does the **Antigravity 2.0** surface include to enable advanced agent orchestration beyond traditional developers? *(Select the 3 correct options)*
  - **A)** **Scheduled Tasks**: put agents on autopilot using cron schedules so they wake up and execute recurring tasks.
  - **B)** **Voice**: describe tasks in natural language via microphone leveraging Gemini's audio understanding capabilities.
  - **C)** **Manual Hardware Soldering**: physical configuration of Ethernet switches via voice commands.
  - **D)** **Subagents**: delegate subtasks from the primary agent to specialized subagents working in parallel.
- **Correct Answer**: **A, B, D**
- **Explanation**: M0_02 (Slide 9) and M0_01 (Slide 6) highlight three key capabilities of Antigravity 2.0: Scheduled Tasks (cron schedules), Voice (voice interaction powered by Gemini audio understanding), and Subagents (parallel delegation).

#### Q023 — [M0L5 Jetski]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A Customer Engineer needs to: (1) generate an activity report of Cloud Blockers and Daily Run Rate (DRR) consumption for their accounts in Vector using `/skill ce-tech-concord-conversational-agent` and Buganizer, and then (2) show a customer live how to build an agent from their laptop. Which tools must they use for (1) and (2)?
  - **A)** Use Antigravity for both cases by connecting Argolis to the internal Concord table.
  - **B)** Export the internal Concord table to a public GitHub repository.
  - **C)** Use Jetski for both cases while sharing the Jetski screen with the customer.
  - **D)** Use **Jetski** for (1) because it involves internal Concord/Vector/Buganizer data (sanitizing exact dollar amounts into relative percentages if context is shared), and use **Antigravity 2.0 / CLI on Argolis** for (2).
- **Correct Answer**: **D**
- **Explanation**: M0L5 (Slides 13-22) shows that internal CE Toil tasks (such as querying Concord BigQuery, Vector Expert Requests, or Buganizer via `/skill ce-tech-concord-conversational-agent` and `/skill ce-tech-sales-agent`) are performed in Jetski, while any customer-facing demonstration must be done in Antigravity with an Argolis account.

#### Q024 — [M0L4 Coding Agent]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: In M0L4 (Slide 6), as part of Antigravity's integration with **Gemini Enterprise**, which administrative controls (Admin controls on GCP Console) and enterprise resources are provided to organizations? *(Select the 2 correct options)*
  - **A)** Unrestricted access without authentication or quota controls through anonymous personal accounts.
  - **B)** Subscription bundles via Gemini Enterprise App Standard and Plus providing quota, enterprise authentication (Cloud Identity OAuth), and coverage under the Google Cloud Terms of Service.
  - **C)** Mandatory training of public consumer models using the customer's private source code.
  - **D)** Admin controls in the GCP Console to manage trusted MCP servers, secure mode controls, trusted websites, and Auto-execution (YOLO) controls.
- **Correct Answer**: **B, D**
- **Explanation**: M0L4 (Slides 5-6) details that Antigravity in Gemini Enterprise offers subscription bundles (GE App Standard and Plus with quota and OAuth under GCP ToS) and admin controls in the GCP Console (Trusted MCP servers, secure mode controls, trusted websites, and Auto-execution/YOLO controls).

#### Q025 — [M0L6 Introduction to Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In M0L6 ('What is tool calling?'), what is the critical architectural distinction regarding who actually executes the function code when an agent uses Tool Calling?
  - **A)** The end user's web browser downloads the entire SQL database to execute the function locally without a server.
  - **B)** The model NEVER runs your code: the LLM reads the request, selects the tool, and fills in the arguments to request a call; your **runtime** executes the actual function and hands the output back to the model.
  - **C)** Functions are only executed once a year during model pre-training.
  - **D)** The Large Language Model (LLM) compiles and executes Python bytecode directly inside its neural network weights.
- **Correct Answer**: **B**
- **Explanation**: M0L6 (Slide 3) emphasizes: 'The model never runs your code — it requests a call; your runtime executes it and hands back the output.' This separation between model decision and runtime execution makes tool calling safe and inspectable.

#### Q026 — [M0L6 Introduction to Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M0L6 classifies agent tools into three categories based on their effect on the world: **Retrieval / Read**, **Action / Write**, and **Computation**. What characterizes each category regarding retries and safety?
  - **A)** Retrieval/Read (`get_hardware_order`) is read-only and safe to retry; Action/Write (`create_ticket`, `escalate_to_people_ops`) changes the state of the real world and requires caution/approval; Computation (`tax_calculator`) is deterministic and side-effect free.
  - **B)** Retrieval/Read always requires manual human approval before reading any row.
  - **C)** Action/Write is deterministic and side-effect free, whereas Computation deletes live records.
  - **D)** All three modify production databases and none can be retried.
- **Correct Answer**: **A**
- **Explanation**: M0L6 (Slide 4) divides tools into: 1) Retrieval/Read (read-only, safe to retry), 2) Action/Write (changes the world, use with caution/HITL), and 3) Computation (deterministic, no side effects).

#### Q027 — [M0L6 Introduction to Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When you define a Python function in ADK and bind it to an agent's `tools=[...]` list, how does ADK automatically generate the Tool Schema that the model 'sees'?
  - **A)** By reading only comments that start with `# TODO`.
  - **B)** By requiring an external 500-line XML file for every function.
  - **C)** Directly from the Python code: the `function name` becomes the tool name, the `docstring` becomes the description the model reads to decide when to use it, `type hints` define the parameter types in the schema, and the `return type/dict` models the expected output.
  - **D)** By ignoring docstrings and picking tools at random using a random number generator.
- **Correct Answer**: **C**
- **Explanation**: M0L6 (Slides 6-7) shows how ADK constructs the Tool Schema: `function name` = tool name, `docstring` = description read by the LLM to decide when to invoke it, `type hints` = parameter types in the schema, and `return type/dict` = output structure.

#### Q028 — [M0L6 Introduction to Tooling]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: M0L6 (Slides 10 and 12) analyzes common Tool Calling pitfalls and design best practices. Which of the following statements are correct? *(Select the 2 correct options)*
  - **A)** You should never test Python functions in isolation before connecting them to the LLM.
  - **B)** If the model calls the wrong tool ('Wrong tool called'), the fix is to sharpen tool names and descriptions (docstrings); if it sends hallucinated arguments ('Bad or hallucinated args'), use strict types, validation, and return clean error dicts.
  - **C)** Don't bind everything: it is far better to expose 4 clearly differentiated tools (`get_hardware_order`, `get_badge_status`, etc.) than 12 overlapping, ambiguous tools (`get_data`, `fetch_info`, `lookup_x`).
  - **D)** The more overlapping functions with generic names (`get_item`, `find_thing`) you bind to the agent, the lower the token consumption and the higher the accuracy.
- **Correct Answer**: **B, C**
- **Explanation**: M0L6 (Slides 8, 10, and 12) emphasizes always testing tools in isolation before passing them to the model, avoiding dozens of overlapping functions, and applying the troubleshooting matrix: Wrong tool called → Sharpen names & description; Bad/hallucinated args → Strict types, validate, clean error.

#### Q029 — [M0L6 Introduction to Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the 'Local function or MCP?' comparison at the end of M0L6 (Slide 20), when should you implement a tool as a **local Python function** versus consuming an **MCP server**?
  - **A)** Use a local function when the logic is yours, lives in the repo, is fast to test in isolation, and is specific to this one agent; use MCP when the capability already exists as a server (GitHub, Drive, Slack, DB), is shared across many agents, and is maintained by another team.
  - **B)** Use local functions when 500 agents written in different languages need to connect to Google Drive without duplicating code.
  - **C)** Always use MCP even to add two integers inside a private single-agent script.
  - **D)** MCP only allows reading local text files and does not support client-server architecture.
- **Correct Answer**: **A**
- **Explanation**: M0L6 (Slide 20) establishes the decision criterion: Local function when the logic belongs to you, lives in the repo, and is specific to one agent; MCP when the capability already exists as a server, is shared across multiple agents, and is maintained as a standardized service.

#### Q030 — [M0L7 Intro to Workflows and Multi-agents]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the architectural progression of M0L7 (from a single 'weather agent' to a system with weather, transit, and personalization agents coordinated by an orchestrator), what is the primary design lesson?
  - **A)** Every project must start on Day 1 with at least 25 micro-agents even if it only answers a simple question.
  - **B)** Specialist agents must share the exact same monolithic system prompt.
  - **C)** An orchestrator agent cannot delegate tasks to other agents in ADK.
  - **D)** You do not start with a multi-agent architecture by default; you evolve into it by decomposing responsibilities into specialist agents coordinated by an orchestrator as requirements outgrow what a single agent can handle well.
- **Correct Answer**: **D**
- **Explanation**: M0L7 (Slides 2-5) shows that architectural complexity grows evolutionary: start with a single agent, and as responsibilities expand, decompose domains (weather, transit, personalization) coordinated by an orchestrator.

#### Q031 — [M0L7 Intro to Workflows and Multi-agents & M0L3]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: ADK provides three pre-built multi-agent Workflow patterns: **Sequential**, **Parallel**, and **Hierarchical**. What distinguishes the **Parallel** pattern from the **Sequential** pattern?
  - **A)** The Parallel pattern chains agents one after another waiting for the previous one to finish, whereas Sequential runs them all at once.
  - **B)** The Parallel pattern executes multiple agents/LLMs concurrently and aggregates their outputs (ideal when subtasks are independent, such as checking weather and transit simultaneously), whereas Sequential chains them in a step-by-step pipeline where the output of A feeds into B.
  - **C)** The Parallel pattern only allows running a single model without tools.
  - **D)** The Hierarchical pattern prohibits the use of a router model.
- **Correct Answer**: **B**
- **Explanation**: According to M0L3 (Slide 48) and M0L7, Sequential chains multiple specialized LLMs in a step-by-step pipeline; Parallel executes multiple LLMs concurrently and aggregates their results; and Hierarchical uses a router/orchestrator model to direct inputs to specialists based on intent or content.

#### Q032 — [M0L7 Intro to Workflows and Multi-agents]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When should you use a **Graph-based / Dynamic workflow** in ADK instead of a purely linear workflow?
  - **A)** Exclusively when querying a graph database like Neo4j.
  - **B)** When you want to remove all deterministic control and let the system fail without state management.
  - **C)** When pre-built patterns are not enough and you need explicit control over execution flow (conditional loops, deterministic branching, and combining agents, tools, and code functions as graph nodes).
  - **D)** When the agent does not use any language model.
- **Correct Answer**: **C**
- **Explanation**: M0L3 (Slide 49) and M0L7 explain that Graph-based workflows (`START → Agent A → Function → Agent B → END` with conditional branches) provide explicit control over execution flow when simple patterns are insufficient.

#### Q033 — [M0L7 Intro to Workflows and Multi-agents]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: What are two direct architectural advantages of decomposing an overloaded monolithic agent into a multi-agent system with specialists in ADK? *(Select the 2 correct options)*
  - **A)** Specialist agents can be developed, tested, evaluated, and reused modularly and independently.
  - **B)** Each specialist agent maintains a focused system prompt and toolset scoped to its domain, reducing context window noise and improving tool-selection accuracy.
  - **C)** Network calls are mathematically guaranteed to have 0 milliseconds of latency.
  - **D)** The need to use `State` or `Session` to coordinate information is eliminated.
- **Correct Answer**: **A, B**
- **Explanation**: M0L7 highlights that separating concerns into specialist agents scopes each agent's prompt and tool decision space while allowing teams to evolve, test, and reuse each specialist independently.

#### Q034 — [M0L7 Intro to Workflows and Multi-agents]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In a multi-agent workflow in ADK where Step 2 needs to remember structured data obtained in Step 1 (for example, `{"customer": "Contoso", "priority": "High", "scope_complete": false}`), which ADK primitive keeps this context alive across steps?
  - **A)** Cloud DNS
  - **B)** ADK State
  - **C)** VPC Firewall Rules
  - **D)** CSS Stylesheets
- **Correct Answer**: **B**
- **Explanation**: M0L3 (Slide 46) and M0L7 define ADK State: 'State is what makes step two remember step one. Stores structured data that persists between steps and across workflows.'

#### Q035 — [M0L8 Evaluation Testing]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M0L8 presents the maturity pyramid toward scientific evaluation ('The path to scientific evaluation'). What are its 3 levels from base to peak?
  - **A)** 1. Production → 2. Staging → 3. Sandbox
  - **B)** 1. Manual → 2. Semi-Manual → 3. Deployed
  - **C)** 1. Unit Test → 2. CSS Lint → 3. Docker Build
  - **D)** 1. Anecdotal (ad-hoc 'Vibe Checks' that ignore the long tail) → 2. Empirical (systematic measurement with datasets and metrics, but not yet closed-loop) → 3. Scientific ('Hill Climbing', where every change is a hypothesis tested against a robust evaluation suite).
- **Correct Answer**: **D**
- **Explanation**: M0L8 (Slide 4) defines the 3 levels of evaluation maturity: 1. Anecdotal (vibe checks), 2. Empirical (measurement with datasets/metrics), and 3. Scientific (Hill Climbing based on the scientific method and hypothesis testing).

#### Q036 — [M0L8 Evaluation Testing]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In ADK evaluations (M0L8 Slide 15), two primary metrics are configured with thresholds in `test_config.json`: `tool_trajectory_avg_score` and `response_match_score`. What does `tool_trajectory_avg_score` specifically measure?
  - **A)** Whether the agent called the expected sequence of tools (`expected tools and arguments called`) during its execution trajectory to solve the case.
  - **B)** The rotational speed of the server's hard drives.
  - **C)** The dollar cost of the monthly BigQuery bill.
  - **D)** The lexical similarity (ROUGE word overlap) of the final text without checking which tools were executed.
- **Correct Answer**: **A**
- **Explanation**: M0L8 (Slides 14-15) shows that the Golden Dataset evaluates both the final response (`response_match_score`, word overlap) and the tool trajectory (`tool_trajectory_avg_score`: whether the agent called the right tools in the expected order, e.g., `get_purchase_history → issue_refund`).

#### Q037 — [M0L8 Evaluation Testing]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: During an ADK evaluation run (M0L8 Slide 19), one test fails with `tool_trajectory_avg_score = 0.0 < Threshold 1.0` because `EXPECTED: lookup_order, issue_refund` but `ACTUAL: issue_refund` occurred. Another test fails on `response_match_score = 0.45 < 0.8` because it expected `'...processed successfully.'` and the agent replied `'...returned the money...'`. What is the correct diagnosis of both failures?
  - **A)** The first case is a harmless false positive (issuing refunds without looking up the order is fine) and the second case requires deleting the agent.
  - **B)** Neither failure can be diagnosed with ADK.
  - **C)** In the first case the agent skipped a mandatory step (a real logic error → fix the prompt/instructions); in the second case the response conveys the same meaning in different words (the ROUGE metric is too literal → lower the threshold or switch to a semantic/LLM-as-a-judge metric).
  - **D)** Both are critical network hardware failures requiring a GKE cluster reboot.
- **Correct Answer**: **C**
- **Explanation**: M0L8 (Slide 19 'When a Test Fails') explains both exact cases: skipping `lookup_order` before `issue_refund` is a real logic bug requiring a prompt fix; whereas `'returned the money'` vs `'processed successfully'` expresses the same meaning in different words, showing that ROUGE is too literal and the threshold should be tuned or replaced with a semantic metric.

#### Q038 — [M0L8 Evaluation Testing]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: How are ADK agent evaluations integrated into a CI/CD pipeline with `pytest` according to M0L8 (Slide 21)?
  - **A)** By invoking `await AgentEvaluator.evaluate(agent_module=..., eval_dataset_file_path_or_dir=..., num_runs=1)` inside an asynchronous test (`@pytest.mark.asyncio`) executed via `uv run pytest`.
  - **B)** By printing responses on paper and mailing them to the QA team.
  - **C)** By manually modifying the Linux kernel binary file.
  - **D)** ADK does not allow running evaluations from `pytest` or the command line.
- **Correct Answer**: **A**
- **Explanation**: M0L8 (Slide 21) shows the exact CI/CD integration pattern: use `@pytest.mark.asyncio` and call `await AgentEvaluator.evaluate(agent_module=module_name, eval_dataset_file_path_or_dir=eval_file, num_runs=1)` executed via `uv run pytest`.

#### Q039 — [M0L8 Evaluation Testing]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: In the **Hill Climbing** process for optimizing generative and agentic systems (M0L8 Slides 23-25), which of the following actions are legitimate iteration levers once a baseline (Iteration 0) is established? *(Select the 3 correct options)*
  - **A)** Manually editing the final score report without re-running the agent to pretend the threshold was met.
  - **B)** Re-architecting workflows, prompt chains, or sub-agent and tool decomposition while measuring impact against the evaluation dataset.
  - **C)** Tuning model behavior (generation parameters, selecting different models, or fine-tuning).
  - **D)** Changing and optimizing prompts (manually or via automated prompt optimization).
- **Correct Answer**: **B, C, D**
- **Explanation**: M0L8 (Slide 24) lists the Hill Climbing levers: 1) Change prompts, 2) Change model behavior (parameters, different models, fine-tuning), 3) Break down individual components, and 4) Re-architect flows/chains/agents.

#### Q040 — [M0L9 Agent Deployment]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M0L9 ('The same code runs on three runtimes unchanged'), how many lines of ADK agent definition code (`root_agent = Agent(...)`) must be rewritten to move between **Agent Runtime (Agent Engine)**, **Cloud Run**, and **GKE**?
  - **A)** At least 500 lines for every connected tool.
  - **B)** **0 lines of agent code**: deployment is purely a runtime and state-persistence decision; only the container, scaling parameters, and where live sessions reside change.
  - **C)** It is only compatible with Cloud Run; Agent Runtime requires a different programming language.
  - **D)** 100% of the agent must be rewritten from Python to Go.
- **Correct Answer**: **B**
- **Explanation**: M0L9 (Slide 3) highlights: '0 lines of agent code changed to move between Agent Runtime, Cloud Run, and GKE. Not a rewrite. Deployment is purely a runtime and state decision.'

#### Q041 — [M0L9 Agent Deployment]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What happens by default to a user's conversational memory (from Day 1 to Day 14) if an ADK agent is deployed to **Cloud Run** without configuring an external session service, compared to deploying it to **Agent Runtime**?
  - **A)** Cloud Run automatically stores sessions for 10 years in volatile RAM even if the server is powered off.
  - **B)** Agent Runtime deletes all conversations every 5 minutes by design.
  - **C)** On Cloud Run it is impossible to connect a managed session even when passing `--agent_engine_id`.
  - **D)** On Cloud Run without a session service, memory lives in-process (`in-process memory`) and a container restart wipes the conversation; deploying to Agent Runtime automatically provisions a managed session service (`VertexAiSessionService`) where Day 1 context survives on Day 14 with zero configuration.
- **Correct Answer**: **D**
- **Explanation**: M0L9 (Slides 9-10) explains that Cloud Run uses in-process memory by default (a restart wipes the session unless `--agent_engine_id` is added to reuse `VertexAiSessionService` or a custom Firestore/Postgres backend is configured), whereas Agent Runtime provisions `VertexAiSessionService` automatically.

#### Q042 — [M0L9 Agent Deployment]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: If you deploy your agent to **Cloud Run** because you need custom containers, but you want it to reuse Agent Engine's managed sessions without building your own database in Firestore or Postgres, which flag should you add to `adk deploy cloud_run`?
  - **A)** `--disable-all-memory`
  - **B)** `--kubernetes-node-pool=default`
  - **C)** `--agent_engine_id=$AGENT_ENGINE_ID`
  - **D)** `--use-local-ram-only`
- **Correct Answer**: **C**
- **Explanation**: M0L9 (Slides 10 and 13) shows the exact command: `adk deploy cloud_run --project=$PROJECT --region=$REGION --agent_engine_id=$AGENT_ENGINE_ID promptdesk`, allowing the Cloud Run container to reuse Agent Engine's managed session service.

#### Q043 — [M0L9 Agent Deployment]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Comparing the **Cold Start** and **Billing** axes between **Agent Runtime** and **Cloud Run** in M0L9 (Slide 11), which of the following statements is true?
  - **A)** Agent Runtime has 15-minute cold starts, whereas Cloud Run always charges per hour even when idle.
  - **B)** Cloud Run does not support real HTTPS endpoints.
  - **C)** Both Agent Runtime and Cloud Run are completely free and unlimited for any enterprise workload.
  - **D)** Agent Runtime offers sub-second cold starts (as of April 2026) and bills per vCPU-hour + GB-hour while instances are live; Cloud Run scales to zero when idle (pay-per-use), but experiences cold starts when waking from zero.
- **Correct Answer**: **D**
- **Explanation**: M0L9 (Slide 11) compares both axes: Cold start (Agent Runtime is sub-second; Cloud Run scales from zero with cold starts on wake-up) and Billing (Agent Runtime bills by vCPU-hour + GB-hour while instances are active; Cloud Run is pay-per-use and scales to zero when idle).

#### Q044 — [M0L9 Agent Deployment]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to the deployment decision framework in M0L9 (Slides 7 and 15), which of the following target platform recommendations based on workload characteristics are correct? *(Select the 3 correct options)*
  - **A)** Need for custom containers, sidecars, or scale-to-zero economics during idle periods → **Cloud Run**.
  - **B)** No-code workloads that only require a standard UI without custom tools → **Local bare-metal assembly cluster**.
  - **C)** Advanced custom networking requirements, running open models on custom hardware, and full DevOps control → **GKE**.
  - **D)** Long-running conversations dependent on persistent memory without wanting to manage infrastructure → **Agent Runtime**.
- **Correct Answer**: **A, C, D**
- **Explanation**: M0L9 (Slide 15 'Pick the target from the workload') maps: 1) Durable conversation/memory → Agent Runtime; 2) Custom container, sidecars, or scale-to-zero → Cloud Run; 3) Custom networking, open models, and enterprise DevOps control → GKE; 4) No code, standard UI without custom tools → Gemini Enterprise.

#### Q045 — [M0L9 Agent Deployment]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M0L9 (Slide 5) lists the 5 requirements that any production-deployed agent actually needs (and that a local laptop does NOT satisfy). What are they?
  - **A)** 01 Runtime (somewhere to run), 02 Durable sessions (persistent sessions), 03 Access (a safe, reliable endpoint for users), 04 Credentials (secure access to tools and data), and 05 Observability (traces and logs to debug in production).
  - **B)** Only a public IP address without authentication or logs.
  - **C)** A local CSV file and a spreadsheet shared via email.
  - **D)** Mechanical keyboard, 4K monitor, lithium battery, wireless mouse, and screen protector.
- **Correct Answer**: **A**
- **Explanation**: M0L9 (Slide 5 'What a deployed agent actually needs') defines the 5 pillars: 01 Runtime, 02 Durable sessions, 03 Access (safe endpoint), 04 Credentials (secure access to tools and data), and 05 Observability (traces and logs).


---

### Module 1: Cloud Modernization, Context Engineering & MCP

#### Q046 — [M1L2 Context Engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In M1L2 ('Beyond Vibe Coding'), relying on intuitive, unstructured prompting ('vibe coding') in production repositories leads to three systemic failures. What are they?
  - **A)** CPU Throttling, Disk Fragmentation, and DNS Spoofing.
  - **B)** **Context Rot** (intent gets buried under tangential discussions), **PR Slop** (massive generation of low-quality code causing 3 AM pager alerts), and **Architectural Drift** (the code reality diverges from the intended architectural design).
  - **C)** Excessive Documentation, Zero Latency, and Strict Typing.
  - **D)** Overfitting, Underfitting, and Vanishing Gradients.
- **Correct Answer**: **B**
- **Explanation**: M1L2 (Slide 3) identifies the three systemic failures of Vibe Coding: Context Rot, PR Slop, and Architectural Drift.

#### Q047 — [M1L2 Context Engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M1L2, what two underlying mechanisms drive the degradation of coding agents in enterprise environments when Context Engineering is not applied?
  - **A)** The lack of dedicated graphics cards on user laptops and keyboard layout differences.
  - **B)** Running deterministic linters before every commit.
  - **C)** **The Context Tax** (dumping massive repositories into the context window is expensive, slow, and introduces noise that degrades quality) and **The Amnesia Loop** (the agent fixes a bug today but forgets the constraints tomorrow because context is ephemeral across sessions).
  - **D)** The excessive use of `AGENTS.md` files and automated unit tests.
- **Correct Answer**: **C**
- **Explanation**: M1L2 (Slide 3, Talking Points & Narration) defines the two root causes: The Context Tax (cost, latency, and noise when dumping entire repos into the context window) and The Amnesia Loop (loss of constraints across sessions because context is ephemeral).

#### Q048 — [M1L2 Context Engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the M1L2 experiment (Slide 4) with a small model (Gemma 2B) asked to `'fix the bug in parser.py'`, Run 1 fails by hallucinating the file contents, while Run 2 (same model, same task) succeeds. What was the single variable that changed in Run 2?
  - **A)** A structured **`AGENTS.md`** file was added instructing the agent to list the directory first, read the file before editing, and run `verify.py` before considering the task complete.
  - **B)** The filesystem was disconnected so the model could not read `parser.py`.
  - **C)** The model temperature was increased to 2.0.
  - **D)** The model was upgraded to a 10-trillion-parameter cluster.
- **Correct Answer**: **A**
- **Explanation**: M1L2 (Slide 4) demonstrates that with the exact same model (Gemma 2B) and prompt (`'fix the bug in parser.py'`), adding `AGENTS.md` with clear operational rules (list directory, read file before editing, run `verify.py`) turns a hallucination FAIL into a PASS.

#### Q049 — [M1L2 Context Engineering]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: In **Spec-Driven Development** introduced in Module 1, which structured context artifacts are combined to anchor the agent and prevent Architectural Drift? *(Select the 3 correct options)*
  - **A)** An unformatted 50,000-message chat log filled with irrelevant conversations.
  - **B)** `AGENTS.md` / `SKILL.md` files (operational instructions for the agent, coding conventions, and mandatory verification steps).
  - **C)** `README.md` (project overview, architecture, and bootstrap commands).
  - **D)** `SPEC.md` (detailed functional specification, requirements, data contracts, and acceptance criteria).
- **Correct Answer**: **B, C, D**
- **Explanation**: M1L1 and M1L2 highlight using `README.md`, `SPEC.md`, and `AGENTS.md` / `SKILL.md` as the pillars of Spec-Driven Development and Context Engineering to give the agent persistent memory and verifiable constraints.

#### Q050 — [M1L1 Skills Framework]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: During Day 2 of Elevate (Module 1: Cloud Modernization), CEs step into the role of Platform Cloud Engineers for the fictional customer Cymbal Group under a key operational constraint in the labs. What is that constraint?
  - **A)** They are forbidden from using AI tools and must configure everything by manually clicking in the GCP Web Console.
  - **B)** They have no manual access to the web Cloud Console to fix outages; they must diagnose, architect, and remediate multiregion failures using exclusively AI-powered developer tools (Antigravity 2.0, Gemini CLI, Agent Skills, and MCP).
  - **C)** They must migrate all Google Cloud workloads to local Windows XP servers.
  - **D)** They can only write code on paper without internet access.
- **Correct Answer**: **B**
- **Explanation**: M1L1 (Slides 1 and 3) and the Day 2 recap explain that in the modernization and multiregion outage diagnosis labs, there is no manual Cloud Console access: AI tools (Antigravity 2.0, Gemini CLI, Skills, and MCP) are the only lifeline.

#### Q051 — [M1L1 Skills Framework & M0L3]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Why does binding dozens of tools directly to an agent's base definition degrade performance, and how does the **Skills Framework** solve this?
  - **A)** Because Skills delete the Gemini model and replace it with a regular expression.
  - **B)** Because Python does not allow lists with more than 2 elements.
  - **C)** Skills force teams to duplicate the same validation rules across all 20 agents in the enterprise.
  - **D)** Because every directly bound tool permanently inflates the initial prompt and the model's decision space; Skills solve this by packaging instructions and tools modularly and loading them on demand (Progressive Disclosure).
- **Correct Answer**: **D**
- **Explanation**: M0L3 (Slides 45, 52-55) and M1L1 explain that every added tool bloats the prompt and decision space; Skills allow defining a capability once ('Build once, reuse across agents'), keeping prompts small and updating logic in a single place.

#### Q052 — [M1L2 Context Engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What principle defines the difference between traditional Prompt Engineering and **Context Engineering** in production agentic systems?
  - **A)** They are exact synonyms for increasing the `top_k` parameter to 1000.
  - **B)** Prompt Engineering is about assembling filesystems, whereas Context Engineering is about finding more polite adjectives in a single sentence.
  - **C)** Context Engineering is the dynamic, structured, and governed assembly of all relevant information (specifications, `AGENTS.md` rules, on-demand skills, state, and verification tools) so the agent is environment-aware and maintains coherence across sessions.
  - **D)** Context Engineering consists of deleting all `.md` files from the repository.
- **Correct Answer**: **C**
- **Explanation**: M1L1 (Slide 3) and M1L2 define Context Engineering as the dynamic, structured assembly of information (specs, rules, skills, verification) that gives the agent state, environmental awareness, and engineering rigor beyond an isolated prompt.

#### Q053 — [M1L1 Skills Framework & ADK vs Jetski Guide]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: According to the architectural selection guide ('Skill-First Decision Logic: Jetski/CLI + Skills vs. Formal ADK Agent'), in which scenarios is building **portable Skills** sufficient versus when is building and deploying a **formal ADK Agent** as a service mandatory? *(Select the 2 correct options)*
  - **A)** Skills in a local session have infinite duration independent of `gcert` and auto-scale for millions of external customers.
  - **B)** **Skills** are ideal when the workflow is manually initiated by a technical user in their interactive session (CLI/IDE) and operates under the user's own credentials (EUC).
  - **C)** A 10-agent ADK cluster on GKE must always be built even to format a local file on a developer's laptop.
  - **D)** A **deployed ADK Agent** is required when the workflow must be triggered programmatically (API, events, cron without an active user session), exposed to non-CLI users (Web UI, Chat, A2A), or requires a dedicated service identity with multi-user managed state.
- **Correct Answer**: **B, D**
- **Explanation**: The ADK vs. Skills guide (Moma/M1L1) establishes the Skill-First logic: use Skills for user-initiated workflows in CLI/IDE with End-User Credentials (EUC), and graduate to a formal ADK Agent when automated triggers (cron/events/RPC), Web/Chat/A2A interfaces, dedicated service identities, or multi-session persistent state are required.

#### Q054 — [M1L3 App Modernization]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M1L3 ('Why an Agentic AI Future Requires Modernization Now'), why is legacy application modernization an indispensable prerequisite for an enterprise's Agentic AI strategy?
  - **A)** Because Gemini models refuse by license to answer questions from companies founded before 2015.
  - **B)** Because the most capable AI agents are context-aware, and the highest-value data and critical business processes are typically locked inside legacy silos (mainframes, Java/.NET monoliths, legacy databases) that prevent real-time access.
  - **C)** Because application modernization consists solely of changing the colors of the company logo.
  - **D)** Because cloud migration and AI are opposing, incompatible strategies.
- **Correct Answer**: **B**
- **Explanation**: M1L3 (Slide 2) explains that AI, cloud migration, and app modernization converge into a single strategy because legacy siloed systems hold the highest-value data and critical business logic needed by context-aware AI agents.

#### Q055 — [M1L3 App Modernization]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In Google Cloud's **Mainframe Modernization** portfolio (M1L3 Slides 7-8), what role does **Google Cloud Dual Run** play?
  - **A)** It only converts MP3 files into WAV format.
  - **B)** It immediately powers off the mainframe on Day 1 without running unit or equivalence tests.
  - **C)** It doubles the price of COBOL licenses on the original mainframe.
  - **D)** It duplicates and compares live production mainframe traffic in parallel against the modernized application to de-risk the migration, certify functional equivalence, completeness, and performance, and accelerate production cutover.
- **Correct Answer**: **D**
- **Explanation**: M1L3 (Slide 8 'De-Risk with Dual Run') details that Dual Run duplicates and compares live production traffic between the mainframe application and the modernized application to guarantee accuracy, completeness, and performance before final cutover.

#### Q056 — [M1L3 App Modernization]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: For modernizing **Windows, .NET, and MSSQL** workloads to cloud-native solutions (`.NET Core` on Linux over Cloud Run/GKE and `AlloyDB for PostgreSQL`), what combination of Gemini-powered tools does M1L3 (Slides 10-19) present?
  - **A)** **Google Cloud CodMod** (Application Modernization Advisor) for automated dependency/API assessment, combined with **Gemini CLI and .NET Agent Skills** to refactor SOAP (ASMX/WCF), WebForms (ASPX), and .NET Framework to .NET Core, plus **Database Migration Service (DMS)** with AI-assisted schema and stored procedure conversion to AlloyDB/Cloud SQL.
  - **B)** Manually rewriting every ASPX form in assembly language without assessment tools.
  - **C)** Keeping Windows Server 2003 unchanged and disabling all APIs.
  - **D)** Using Google Sheets exclusively as a drop-in replacement for Microsoft SQL Server.
- **Correct Answer**: **A**
- **Explanation**: M1L3 (Slides 10-19) presents the complete workflow: Google Cloud CodMod for Assessment & Discovery, Gemini CLI + .NET Agent Skills to refactor ASMX/WCF/WebForms/.NET Framework to .NET Core (C#), and DMS with AI-assisted conversion to migrate MSSQL/Oracle to AlloyDB or Cloud SQL for PostgreSQL.

#### Q057 — [M1L3 App Modernization]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In Google Cloud's **Application Modernization Accelerator Program** (M1L3 Slide 16), how are the three phases and their typical durations structured?
  - **A)** Three phases dedicated exclusively to purchasing physical networking hardware.
  - **B)** A single 2-hour phase without access to the application's source code.
  - **C)** 1. **App Assessment** (~3 weeks: identify shortlist of 3-10 apps, assess code, and select pilot app) → 2. **First App Modernization** (~2-4 weeks: modernize the pilot app side-by-side with Google engineers and AI to pre-prod and upskill the customer team) → 3. **Ongoing App Estate Modernization** (ongoing: scale the roadmap across the rest of the portfolio).
  - **D)** 1. App Assessment (3 years) → 2. First App Modernization (5 years) → 3. Retirement (10 years).
- **Correct Answer**: **C**
- **Explanation**: M1L3 (Slide 16) defines the 3 stages of the Application Modernization Accelerator Program: 1) App Assessment (3 Weeks), 2) First App Modernization (2-4 Weeks, taking the pilot app to pre-prod and training the customer team), and 3) Ongoing App Estate Modernization (Ongoing).

#### Q058 — [M1L3 App Modernization]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to M1L3 (Slides 3 and 21), what are three primary use cases addressed by **CodMod** and Google Cloud's Agentic Enterprise Application Modernization portfolio? *(Select the 3 correct options)*
  - **A)** Industrial manufacturing of optical microprocessors in chemical plants.
  - **B)** Decomposing `Java` monoliths (Java EE / Spring) by identifying tightly coupled components and candidates for independently deployable microservices.
  - **C)** Modernizing legacy on-premises Microsoft `.NET Framework` applications to `.NET Core` running on Linux over GKE or Cloud Run.
  - **D)** Migrating and modernizing `MS SQL Server` or `Oracle` databases to `AlloyDB for PostgreSQL` or `Cloud SQL`, analyzing schemas, stored procedures, and SQL dialect translation.
- **Correct Answer**: **B, C, D**
- **Explanation**: M1L3 (Slide 21 'CodMod: Sample Use Cases') explicitly highlights these three scenarios: 1) Modernizing Legacy .NET to Google Cloud (.NET Core on Linux/GKE/Cloud Run), 2) MS SQL to AlloyDB, and 3) Decomposing a Java Monolith.

#### Q059 — [M1L3 App Modernization]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What are the four cross-cutting AI-powered capabilities that span all modernization domains (Mainframe, Windows/.NET, Java, Databases, and Infrastructure) in M1L3 (Slide 3)?
  - **A)** Email Marketing, Social Media Ads, Video Editing, and Audio Mixing.
  - **B)** AI Assessments, Application Transformation, Data Modernization, and Automated Testing.
  - **C)** Manual Code Freeze, Waterfall Documentation, Annual Audits, and Hardware Leasing.
  - **D)** Print Spooling, Fax Routing, Tape Backup, and Dial-up Networking.
- **Correct Answer**: **B**
- **Explanation**: M1L3 (Slide 3) establishes the four cross-cutting capabilities: AI Assessments | Application Transformation | Data Modernization | Automated Testing.

#### Q060 — [M1L4 Advanced Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the **$N \times M$ problem (NxM problem)** that the **Model Context Protocol (MCP)** solves in enterprise agent architectures (M1L4 Slide 5)?
  - **A)** Before MCP, each of the $N$ agents or hosts (e.g., Gemini CLI, Antigravity, custom agent) needed a bespoke connector for each of the $M$ services (e.g., BigQuery, Cloud Run, GitHub, Slack), resulting in $N \times M$ unscalable ad-hoc integrations; MCP turns this into a single client-server standard ($N + M$).
  - **B)** MCP forces developers to write $N^M$ proprietary connectors per user.
  - **C)** Relational databases do not support more than 12 tables.
  - **D)** Language models only know how to multiply positive integers.
- **Correct Answer**: **A**
- **Explanation**: M1L4 (Slide 5) illustrates how 3 agent hosts × 4 services required 12 custom connectors ($3 \times 4 = 12$). With MCP ('the USB-C for AI'), each host implements an MCP Client and each service exposes a reusable MCP Server.

#### Q061 — [M1L4 Advanced Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Model Context Protocol (MCP)** architecture detailed in M1L4, what are the three primary roles and how do they communicate?
  - **A)** BGP Router, VLAN Switch, and Coaxial Cable.
  - **B)** Browser, FTP Server, and Telnet Daemon communicating over SMTP.
  - **C)** SQL Trigger, Stored Procedure, and Cursor communicating over Windows-only ODBC.
  - **D)** **MCP Host** (the AI application such as Antigravity, Gemini CLI, or your ADK agent), **MCP Client** (the component inside the host maintaining a 1:1 connection with a server), and **MCP Server** (the lightweight service exposing Tools, Resources, and Prompts via **JSON-RPC 2.0** messages).
- **Correct Answer**: **D**
- **Explanation**: M1L4 explains the Host → Client → Server architecture of MCP based on JSON-RPC 2.0, where the MCP Server exposes standardized capabilities (Tools, Resources, Prompts) to the MCP Client inside the Host.

#### Q062 — [M1L4 Advanced Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What are the standard transport mechanisms supported by MCP to connect an **MCP Client** to an **MCP Server** depending on whether the server is local or remote?
  - **A)** **stdio** (Standard Input/Output) for local processes running on the same machine, and **SSE / Streamable HTTP** for remote MCP servers deployed in the cloud (for example, on Cloud Run or managed Google Cloud endpoints).
  - **B)** Unacknowledged UDP video streaming protocols exclusively.
  - **C)** Kernel shared memory only, with no support for HTTP or cloud containers.
  - **D)** Carrier pigeons and RS-232 serial ports exclusively.
- **Correct Answer**: **A**
- **Explanation**: M0L6 (Slide 18) and M1L4 detail the use of `stdio` for local MCP servers (subprocesses) and `SSE` / `Streamable HTTP` for remote MCP servers hosted on services like Cloud Run or Google Cloud MCP Servers.

#### Q063 — [M1L4 Advanced Tooling]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to M1L4 (Slide 3), an enterprise-grade AI agent system consists of four foundational components working together (of which **Tools** is the critical integration surface where MCP operates). What are the other three components? *(Select the 3 correct options)*
  - **A)** **Runtime**: executes the system when invoked, managing lifecycle and responses.
  - **B)** **Orchestration**: maintains short- and long-term memory/state, the tool registry, and coordinates the planning/reflection loop.
  - **C)** **Floppy Disk Controller**: a mandatory mechanical drive for reading 3.5-inch floppy disks.
  - **D)** **Model(s)**: used to reason through goals, decompose questions, determine the plan, and generate responses.
- **Correct Answer**: **A, B, D**
- **Explanation**: M1L4 (Slide 3 'AI agents: The next frontier of software') defines the 4 core components: 1) Model(s), 2) Tools, 3) Orchestration, and 4) Runtime.

#### Q064 — [M1L4 Advanced Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In lab `M01L02` ('Diagnose & Remediate Multiregion Cloud Infrastructure Outages via AI'), how does the agent use the **Model Context Protocol (MCP)** alongside Antigravity to resolve the outage?
  - **A)** By permanently disabling the global load balancer.
  - **B)** By sending an email to technical support and waiting 72 hours without reading any logs.
  - **C)** By deleting the entire GCP project to clear error alerts.
  - **D)** By connecting to Google Cloud MCP servers (Cloud Observability/Logging, Cloud Run, Compute/Networking) to read real-time telemetry logs, diagnose the root cause of the multiregion failure, and apply the hotfix without manually using the web console.
- **Correct Answer**: **D**
- **Explanation**: As covered in M1L1 (Slide 3), M1L4, and the Day 2 recap, Lab M01L02 uses Google Agent Skills and GCP MCP servers from Antigravity to query observability logs, diagnose systemic multiregion failures, and deploy hotfixes without touching the Cloud Console.

#### Q065 — [M1L4 Advanced Tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What Gartner market prediction is cited in M1L4 (Slide 4) to explain why ad-hoc tool integrations are unsustainable and enterprises require standards like MCP?
  - **A)** AI agent usage will drop by 95% in 2027.
  - **B)** By 2028, no enterprise will use APIs or databases.
  - **C)** By 2028, AI agents will outnumber human sellers by 10 to 1 (10X).
  - **D)** By 2028, 100% of software will be written in COBOL.
- **Correct Answer**: **C**
- **Explanation**: M1L4 (Slide 4) cites the Gartner report: 'Gartner Predicts By 2028 AI Agents Will Outnumber Sellers by 10X', underscoring the need for standardized tool and data infrastructure like MCP.

#### Q066 — [M1L5 AWS Migration]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M1L5 (Slide 3), what are the four sequential phases of the **Migration Framework** recommended by Google Cloud for migrating workloads from AWS?
  - **A)** 1. Buy Hardware → 2. Ship Disks → 3. Install Windows → 4. Configure Printer
  - **B)** 1. **Assess** (inventory, workload catalog, TCO calculation, strategy) → 2. **Plan & Build** (resource hierarchy, IAM, billing, networking, security baseline) → 3. **Migrate** (deploy workloads, transfer data, validate functionality, shift traffic) → 4. **Optimize** (tune performance, refine costs, and iterate).
  - **C)** 1. Delete AWS → 2. Create GCS Bucket → 3. Reboot → 4. Invoice
  - **D)** 1. Optimize → 2. Migrate → 3. Plan & Build → 4. Assess
- **Correct Answer**: **B**
- **Explanation**: M1L5 (Slide 3 'The Migration Framework') defines the 4 phases in order: 1. Assess → 2. Plan & Build → 3. Migrate → 4. Optimize (which can be executed in waves across workload groups).

#### Q067 — [M1L5 AWS Migration]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **AWS to Google Cloud** service mapping presented in M1L5 (Slide 4), what is the correct correspondence for **Amazon EC2**, **Amazon EKS**, **AWS Lambda**, and **Amazon Redshift**?
  - **A)** EC2 → Cloud Functions; EKS → Cloud Storage; Lambda → Bigtable; Redshift → Cloud DNS.
  - **B)** All AWS services map exclusively to Cloud Pub/Sub.
  - **C)** EC2 → **Compute Engine**; EKS → **Google Kubernetes Engine (GKE)**; Lambda → **Cloud Run**; Redshift → **BigQuery**.
  - **D)** EC2 → BigQuery; EKS → Cloud SQL; Lambda → GCVE; Redshift → Memorystore.
- **Correct Answer**: **C**
- **Explanation**: M1L5 (Slide 4 'AWS to Google Cloud Migration Paths') maps: EC2 → Compute Engine, EKS → GKE, VMware → GCVE, S3 → Cloud Storage, RDS → Cloud SQL, DynamoDB → Spanner (or Bigtable depending on access pattern), Lambda → Cloud Run, and Redshift → BigQuery.

#### Q068 — [M1L5 AWS Migration]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the architectural nuance highlighted in M1L5 (Slide 4 Talking Points) for migrating NoSQL databases from **Amazon DynamoDB** to Google Cloud, when should you choose **Cloud Spanner** versus **Cloud Bigtable**?
  - **A)** **Cloud Spanner** is the typical mapping when globally distributed transactions, strong consistency, or relational SQL/key-value queries are needed; whereas **Cloud Bigtable** is the right choice for ultra-low-latency, high-throughput time-series and wide-column access patterns.
  - **B)** DynamoDB must always be migrated to Cloud DNS.
  - **C)** Bigtable is only for storing JPEG images and Spanner only accepts audio files.
  - **D)** Neither Spanner nor Bigtable supports workloads over 100 rows.
- **Correct Answer**: **A**
- **Explanation**: M1L5 (Slide 4) explicitly notes that while DynamoDB → Spanner is the general mapping, the choice depends on the access pattern: Bigtable is the right answer for time-series and wide-column workloads.

#### Q069 — [M1L5 AWS Migration & Recap Day 2]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: Which managed Google Cloud tools are highlighted in M1L5 and Day 2 resources to (1) migrate **Amazon EC2 virtual machines to Compute Engine** without agents and (2) transfer objects from **Amazon S3 to Cloud Storage**? *(Select the 2 correct options)*
  - **A)** **Migrate to Virtual Machines (M2VM)** for agentless migration of Amazon EC2 instances to Compute Engine.
  - **B)** Printing the EC2 EBS disk in hexadecimal on paper and scanning it with OCR.
  - **C)** **Storage Transfer Service (STS)** for automated, scheduled, or event-driven data transfer from Amazon S3 buckets to Cloud Storage.
  - **D)** Manually downloading petabytes from S3 to an administrator's mobile phone over Bluetooth.
- **Correct Answer**: **A, C**
- **Explanation**: M1L5 (Slide 2) and the Day 2 recap highlight Migrate to Virtual Machines (M2VM) for agentless EC2-to-Compute Engine migrations and Storage Transfer Service (STS) for S3-to-Cloud Storage transfers.

#### Q070 — [M1L5 AWS Migration]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In lab `M01L03` ('Using AGY to Compare an AWS to GCP and Generate Terraform'), how does the agentic workflow with Antigravity accelerate the Plan & Build phase?
  - **A)** By installing physical servers in the customer's office.
  - **B)** By analyzing AWS inventory/architecture exports, mapping each service to its optimal Google Cloud equivalent, and automatically generating ready-to-deploy Infrastructure as Code (**Terraform**) for GCP.
  - **C)** By deleting the AWS account without generating any configuration files.
  - **D)** By creating only MS Paint diagrams with no executable code.
- **Correct Answer**: **B**
- **Explanation**: In M1L1/M1L5 (Lab M01L03) and M1L7 (Slide 12), CEs use agentic workflows in Antigravity to analyze AWS exports, compare AWS vs. GCP architectures, and automatically generate target Terraform code.

#### Q071 — [M1L6 Identity & IT Environments with GE]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the historical evolution of identity architecture in **Gemini Enterprise (GE)** explained in M1L6 (Slide 6), what is the generally recommended approach in 2026 and why?
  - **A)** Use only Ingested Connectors with no identity provider at all.
  - **B)** Create shared passwords in a plaintext file for all employees.
  - **C)** Disable Single Sign-On (SSO) across the entire organization.
  - **D)** Use **Google / Cloud Identity** combined with **Federated GE Connectors**, because with federated connectors users authenticate directly against the SaaS provider at query time, enforcing real-time permissions without needing to map or synchronize ACLs (Access Control Lists).
- **Correct Answer**: **D**
- **Explanation**: M1L6 (Slide 6) shows that since late 2025 and into 2026, the general recommendation is Google/Cloud Identity with Federated Connectors, because federated connectors enforce real-time source SaaS permissions without requiring prior ACL synchronization or mapping.

#### Q072 — [M1L6 Identity & IT Environments with GE]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Why was **Workforce Identity Federation (WIF)** temporarily recommended in Spring 2025 prior to the broad rollout of federated connectors in Gemini Enterprise (M1L6 Slide 6)?
  - **A)** Due to a Microsoft ingestion connector limitation when using Google Identity / Cloud Identity to synchronize ACLs.
  - **B)** Because Workforce Identity Federation does not require any external Identity Provider (IdP).
  - **C)** Because Google Cloud Identity did not exist yet in 2025.
  - **D)** Because federated connectors duplicated storage in BigQuery.
- **Correct Answer**: **A**
- **Explanation**: M1L6 (Slide 6) explains that in Spring 2025 Workforce Identity Federation became the default recommendation due to the Microsoft ingestion limitation with Google/Cloud Identity; subsequently, with the shift to Federated Connectors in Fall/Dec 2025, Google/Cloud Identity returned as the generally recommended option.

#### Q073 — [M1L6 Identity & IT Environments with GE]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to M1L6 (Slide 3 'Why does Identity Choice Matter?'), what are the three critical business implications of properly choosing and configuring identity in Gemini Enterprise? *(Select the 3 correct options)*
  - **A)** **Streamline Consumption**: drastically reduces support calls and troubleshooting escalations caused by identity misconfigurations.
  - **B)** **Bypass Security**: allows any external unauthenticated user to read confidential HR documents.
  - **C)** **Customer Experience**: streamlines user and use-case onboarding, avoiding double-login friction or mobile app failures.
  - **D)** **Meet Compliance**: enables customers to meet their existing regulatory, security, and identity governance requirements (such as federation without synchronization when internal policy mandates it).
- **Correct Answer**: **A, C, D**
- **Explanation**: M1L6 (Slide 3) identifies these exact three pillars: Streamline Consumption, Customer Experience, and Meet Compliance.

#### Q074 — [M1L6 Identity & IT Environments with GE]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: If a Customer Engineer encounters a complex identity or security scenario in Gemini Enterprise requiring specialist assistance, which internal go-link does M1L6 (Slides 4 and 19) specify for opening an Expert Request?
  - **A)** `go/free-lunch`
  - **B)** `go/new-er`
  - **C)** `go/delete-project`
  - **D)** `go/consumer-gmail`
- **Correct Answer**: **B**
- **Explanation**: M1L6 (Slides 4 and 19) directs CEs to `go/new-er` to open an Expert Request and get support from identity and security specialists.

#### Q075 — [M1L7 Popular Tools]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the 2025/2026 developer market statistics cited in M1L7 (Slide 3: Stack Overflow & JetBrains AI Pulse Survey), what is the strategic gap ('The Trust Gap') that creates the opportunity for Antigravity's artifact-based governance and auditability?
  - **A)** Nobody cares about security or privacy when using coding agents.
  - **B)** 100% of developers have stopped using IDEs to code exclusively on scientific calculators.
  - **C)** Adoption is near-universal (**84%** use or plan to use AI in development and **90%** regularly use at least one tool at work), but trust is low (only **29%** trust the accuracy of AI output, and **66%** cite *'almost right, but not quite'* as their #1 frustration).
  - **D)** Only 2% of developers use AI tools, but 99% blindly trust their accuracy.
- **Correct Answer**: **C**
- **Explanation**: M1L7 (Slide 3) highlights: 84% adoption/plan (Stack Overflow), 90% regular work usage (JetBrains Jan 2026), contrasted with only 29% trusting accuracy and 66% frustrated by 'almost right, but not quite' outputs.

#### Q076 — [M1L7 Popular Tools]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the January 2026 JetBrains AI Pulse Survey (~10,000+ professional developers) shown in M1L7 (Slide 4), how is workplace adoption share distributed among the leading competitors and Google Antigravity?
  - **A)** Cursor is a Rust-only command-line tool with no VS Code support.
  - **B)** OpenAI Codex holds 95% of the market and GitHub Copilot holds 0%.
  - **C)** Google Antigravity has been on the market for 10 years with an 80% share.
  - **D)** GitHub Copilot leads but has plateaued at **29%**; **Cursor** and **Claude Code** are tied at **18%** with rapid growth (Claude Code grew 6× from ~3% in 8 months); **JetBrains Junie** holds **11%**; **Google Antigravity** reached **6%** just 2 months after launch; and **OpenAI Codex** was at **3%** in Jan '26 prior to its February desktop push.
- **Correct Answer**: **D**
- **Explanation**: M1L7 (Slide 4) shows these exact workplace adoption figures: GitHub Copilot (29%, plateauing), Cursor (18%), Claude Code (18%, 6x growth in 8 months), JetBrains AI/Junie (11%), Google Antigravity (6% only 2 months after launch), and OpenAI Codex (3% in Jan 2026).

#### Q077 — [M1L7 Popular Tools]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M1L7 (Slides 6-7) analyzes competitive differentiators and positioning angles against market tools. What is the **Antigravity angle** when a customer uses **Windsurf / Codeium**, **JetBrains Junie**, or **Sourcegraph Cody**?
  - **A)** Claim that Antigravity has neither a CLI nor an SDK.
  - **B)** Recommend uninstalling Google Cloud and migrating everything to offline local servers.
  - **C)** Tell the customer that none of those tools exist.
  - **D)** Against **Windsurf** (which emphasizes FedRAMP High government positioning following the Codeium → Windsurf → Cognition acquisition), Antigravity competes on native Google Cloud ecosystem fit; against **Junie** (tied to JetBrains IDEs), Antigravity brings multi-surface CLI/SDK/artifact workflows; and with **Sourcegraph Cody**, Antigravity can be positioned complementarily (Cody for search/context across massive monorepos and Antigravity for end-to-end agentic execution).
- **Correct Answer**: **D**
- **Explanation**: M1L7 (Slide 7 'Also On the Radar') details these exact three competitive angles ('AG angle') for Windsurf/Codeium, JetBrains Junie, and Sourcegraph Cody.

#### Q078 — [M1L7 Popular Tools]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Open-Source & Terminal Workflows** lane ('the invisible layer of AI adoption your customers are already using', M1L7 Slide 8), what characterizes tools such as **Aider**, **Goose (Block)**, and **OpenHands**?
  - **A)** **Aider** is git-native, editor-agnostic terminal pair-programming; **Goose (Block)** is an open-source, local, MCP-first agent runtime; and **OpenHands** is a self-hosted enterprise agent with SSO/RBAC and a containerized sandbox.
  - **B)** They are three proprietary relational database engines owned by Oracle.
  - **C)** They are Microsoft Excel-only accounting add-ins.
  - **D)** None of them work on Linux or in a terminal.
- **Correct Answer**: **A**
- **Explanation**: M1L7 (Slide 8) describes open-source Agent Runtimes: Aider (terminal pair-programming, git-native), Cline (VS Code agent with BYO model), Block's Goose (open-source, local, MCP-first), and OpenHands (self-hosted enterprise agent with SSO/RBAC and containerized sandbox).

#### Q079 — [M1L7 Popular Tools]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the customer AI tool adoption maturity curve (M1L7 Slide 9), what are the 4 evolutionary stages, and in which two areas is there currently the **highest resistance** to using AI according to Stack Overflow?
  - **A)** Developers 100% trust AI to deploy to production unsupervised, but refuse to use it for searching documentation.
  - **B)** Stages: 1. **Search & Learn** (most mature) → 2. **Write & Fix** (growing fast) → 3. **Orchestrate** (multi-file edits, PRs, CI triage) → 4. **Automate** (scheduled tasks, background agents, security remediation). Highest resistance: **Deployment & monitoring** (76% don't plan to use AI) and **Project planning** (69% don't plan to use AI).
  - **C)** There is only one documentation search stage with zero resistance in deployment.
  - **D)** Stages: 1. Automate → 2. Orchestrate → 3. Write & Fix → 4. Search & Learn. Highest resistance: writing code comments (99% refuse).
- **Correct Answer**: **B**
- **Explanation**: M1L7 (Slide 9 'How Customers Adopt AI Tools') shows the progression Stage 1 (Search & Learn) → Stage 2 (Write & Fix) → Stage 3 (Orchestrate) → Stage 4 (Automate) and pinpoints the two areas of highest resistance: Deployment & monitoring (76%) and Project planning (69%).

#### Q080 — [M1L7 Popular Tools]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: **81%** of developers express concern about security and privacy when using AI agents (M1L7 Slide 10). Which of the following controls belong to the **Enterprise Governance Checklist** that organizations require before approving progression to Stages 3 (Orchestrate) and 4 (Automate)? *(Select the 3 correct options)*
  - **A)** MCP server allowlisting, command approval & sandbox mode, and secrets exposure prevention.
  - **B)** Audit logging, cost budgets, and Pull Request / human review gates.
  - **C)** Identity & SSO integration, along with clear data retention policies and a non-training posture on customer data.
  - **D)** Allowing any agent to execute `rm -rf /` as `root` on production servers without logs or network boundaries.
- **Correct Answer**: **A, B, C**
- **Explanation**: M1L7 (Slide 10 'Enterprise Governance Checklist') lists the 9 enterprise requirements: Identity & SSO, Data retention & model training posture, Code location & repo scope, Network access restrictions, Secrets handling, MCP server allowlisting, Command approval & sandbox mode, Audit logging & cost budgets, and PR/human review gates.


---

### Module 2: Machine-Speed Security & Agent Governance

#### Q081 — [M2S1 Foundations of AI Threat Defense]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In M2S1 ('The Defender’s Dilemma'), how does AI intensify the fundamental cybersecurity asymmetry between the **Attacker's Constraint** and the **Defender's Mandate**?
  - **A)** The attacker must protect every server in the world, while the defender only needs to find a single open port.
  - **B)** Attackers can no longer use open-weight models for reconnaissance.
  - **C)** The attacker only needs to **Find A Single Exploitable Path** — and AI drastically reduces the time, cost, and skill needed to chain low-severity findings into critical exploits — while the defender must **Protect Every Asset Continuously**, making manual triage and periodic scans insufficient and requiring autonomous machine-speed defense.
  - **D)** AI completely eliminates software vulnerabilities across all programming languages.
- **Correct Answer**: **C**
- **Explanation**: M2S1 (Slides 2 and 24) explains that AI reduces the time, cost, and skill barrier for threat actors to discover and chain a single exploitable path, forcing defenders to adopt autonomous machine-speed defenses.

#### Q082 — [M2S1 Foundations of AI Threat Defense]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to M2S1 (Slides 21-22), which AI-driven mechanisms do adversaries use today to accelerate vulnerability discovery and evasion? *(Select the 3 correct options)*
  - **A)** **Manual Paper Auditing**: physically reviewing green-bar paper printouts once every five years.
  - **B)** **Continuous Untiring Scanning & AI Reconnaissance**: autonomous agents monitor exposed assets 24/7 without fatigue, hunting for leaked credentials, misconfigured services, and Shadow IT.
  - **C)** **Semantic Code Understanding & Zero-Day Discovery**: LLMs trained on code and CVEs analyze binaries/source code to spot subtle architectural flaws missed by static scanners, combined with AI-assisted fuzzing.
  - **D)** **Adaptive Evasion Loops**: iteratively modifying payloads against target detection systems in an automated red-teaming loop.
- **Correct Answer**: **B, C, D**
- **Explanation**: M2S1 (Slides 21-22 'AI Mechanisms in Vulnerability Discovery') lists: Continuous Untiring Scanning, Semantic Code Understanding, Zero-Day Discovery at Scale (AI-guided fuzzing), and Adaptive Evasion Loops.

#### Q083 — [M2S1 Foundations of AI Threat Defense & Day 3 Recap]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Shift-Left Reimagined** paradigm (Lab `M02L01: Secure Agentic Coding with Antigravity and TDD`), how are vulnerabilities detected and self-corrected before code ever leaves the developer's workstation?
  - **A)** By disabling `git` and emailing source files manually.
  - **B)** By combining **Antigravity**, **Test-Driven Development (TDD)**, and local **Git pre-commit hooks** on the developer's workstation to intercept, verify, and remediate vulnerabilities before `git commit` completes.
  - **C)** By deploying code straight to production on Friday afternoon and waiting for the CISO's report next month.
  - **D)** By deleting all unit tests so builds compile faster.
- **Correct Answer**: **B**
- **Explanation**: M2S1 (Slide 2) and the official Day 3 recap explain that Shift-Left Reimagined enforces secure-by-default standards directly on the developer workstation using Antigravity, TDD, and Git pre-commit hooks.

#### Q084 — [M2S1 Foundations of AI Threat Defense]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the autonomous three-phase workflow executed by the **vuln·hawk CodeMender** platform (powered by Google DeepMind technology) to audit and remediate critical vulnerabilities in applications such as Vulnerable Flask App or OWASP Juice Shop (Lab `M02L02`)?
  - **A)** Compile → Obfuscate → Delete.
  - **B)** Ignore → Compress → Archive.
  - **C)** Scan → Print PDF → Close Bug without patch.
  - **D)** **Find → Verify → Fix** (dynamically discover the vulnerability in the code/application, verify its real-world exploitability to eliminate false positives, and automatically generate/validate the remediation patch).
- **Correct Answer**: **D**
- **Explanation**: The Day 3 recap and M2S1 highlight CodeMender's autonomous loop: **find-verify-fix** (find the vulnerability, verify it to eliminate false positives and prioritize real risk, and generate the verified patch).

#### Q085 — [M2S1 Foundations of AI Threat Defense & Day 3 Recap]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Continuous Remediation** lab (`M02L03: Guardrails with CodeMender`), what does the **self-healing CI/CD pipeline** do when CodeMender is integrated into **GitHub Actions**?
  - **A)** It allows deployment to production even with critical vulnerabilities, sending only an informational SMS.
  - **B)** It disables the Google Cloud Armor firewall to allow test traffic.
  - **C)** It not only halts the deployment when high- or critical-severity defects are detected, but also autonomously creates remediation branches and submits Pull Requests with ready-to-review code patches.
  - **D)** It deletes the GitHub repository and revokes all developer licenses.
- **Correct Answer**: **C**
- **Explanation**: M2S1 and the Day 3 recap detail that in Lab M02L03, CEs build a self-healing pipeline in GitHub Actions with CodeMender that halts deployment upon High/Critical findings and autonomously submits remediation branches and Pull Requests containing the fix.

#### Q086 — [M2S1 Foundations of AI Threat Defense]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: According to **CodeMender**'s security and privacy architecture (M2S1 Slide 48), which enterprise guarantees does Google Cloud provide regarding customer source code handling? *(Select the 3 correct options)*
  - **A)** **Public Code Publishing**: automatic publication of all scanned source code to a public internet bucket for community review.
  - **B)** **Zero data retention & No training**: data is only held during active sessions; no source code is retained in Google databases or ever used to train models.
  - **C)** **Human-in-the-loop (HITL) & Minimum data exchange**: configurable guardrails that by default require human approval (HITL) before running shell commands or modifying files, sending only essential metadata (patches/scripts) to the GCP-hosted agent.
  - **D)** **Internal traffic routing & Data isolation**: traffic between the CLI and the agent can be routed through the customer's VPC over Google's private backbone, encrypted with customer and session keys.
- **Correct Answer**: **B, C, D**
- **Explanation**: M2S1 (Slide 48) lists CodeMender's guarantees: No source code retained / never used for training, Internal traffic routing via VPC, Data isolation (customer & session keys), Human-in-the-loop by default before shell commands/file edits, Minimum data exchange, and support for threat model context.

#### Q087 — [M2S1 Foundations of AI Threat Defense]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: How does **CodeMender** reduce false positive rates during security analysis of an enterprise application (M2S1 Slide 48)?
  - **A)** By allowing teams to inject specific context about the application's threat model ('Supports adding context: Reduce false positives by giving CodeMender context about your application’s threat model') in addition to empirically verifying findings.
  - **B)** By ignoring any file with more than 100 lines of code.
  - **C)** By randomly disabling 90% of its analysis rules.
  - **D)** By reporting only spelling mistakes in Markdown files.
- **Correct Answer**: **A**
- **Explanation**: M2S1 (Slide 48) explicitly states that CodeMender supports adding context about the application's threat model to reduce false positives.

#### Q088 — [M2S1 Foundations of AI Threat Defense & M1L7]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When configuring the **GitHub Personal Access Token (PAT Classic)** for continuous remediation workflows in Module 2 (M1L7 Slide 13), which three permission **scopes** must be selected on GitHub?
  - **A)** `gist` only.
  - **B)** `delete_repo`, `admin:gpg_key`, and `codespace`.
  - **C)** No scopes; an empty token must be used.
  - **D)** `repo`, `workflow`, and `read:org`.
- **Correct Answer**: **D**
- **Explanation**: M1L7 (Slide 13 'Sneak Peek From Lab') specifies: 'If generating a new PAT on GitHub, ensure you select the `repo`, `workflow`, and `read:org` scopes.'

#### Q089 — [M2S1 Foundations of AI Threat Defense & Day 3 Recap]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Following Google Cloud's acquisition of **Wiz** highlighted in Module 2 ('Wiz AI Threat Defense + AI-powered Wiz'), what joint value does the integration of Wiz with Gemini Enterprise and Google Cloud Security deliver?
  - **A)** Eliminating the need for IAM in Google Cloud.
  - **B)** Limiting security solely to offline physical servers.
  - **C)** Providing unified cloud and AI security posture visibility (AI-SPM), cloud risk graph correlation (identifying real attack paths toward models, data, and agents), and AI-powered threat defense integrated with the Wiz AI App in Gemini Enterprise.
  - **D)** Replacing BigQuery with local spreadsheets.
- **Correct Answer**: **C**
- **Explanation**: M1L1, M2S1, and the Day 3 recap highlight Wiz's role alongside Google Cloud in redefining security in the AI era (Wiz AI Threat Defense and the Wiz AI App in Gemini Enterprise), correlating vulnerabilities, identities, and AI asset exposure across the cloud.

#### Q090 — [M2S1 & Google DeepMind AI Control Roadmap]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In Google DeepMind's **AI Control Roadmap** included in the Module 2 repository ('Securing internal systems against increasingly capable and imperfectly aligned AI'), how is a highly capable but potentially misaligned AI agent modeled, and which metrics are monitored?
  - **A)** Defense-in-depth is applied by treating the agent as a potential **'insider threat'** (using a MITRE ATT&CK-based framework and trusted 'overseer' agents), measuring three critical metrics: **coverage** (fraction of traffic monitored), **recall** (fraction of misaligned behaviors detected), and **time-to-response**.
  - **B)** All servers are powered down at 6:00 PM.
  - **C)** Only CPU fan speed is measured.
  - **D)** Training alignment is assumed to be 100% infallible and no runtime controls are applied.
- **Correct Answer**: **A**
- **Explanation**: The Google DeepMind paper in Module 2 details the AI Control Roadmap: defense-in-depth beyond training alignment by treating agents as potential 'insider threats' (with MITRE ATT&CK and overseer agents) and measuring coverage, recall, and time-to-response.

#### Q091 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M2S2 (Slide 5) explains that agents don't just inherit risks from the AI stack — they **amplify** them. What is the name of the attack in which malicious instructions hidden inside a document the agent reads or a webpage it visits hijack its entire task sequence without the attacker ever interacting directly with the agent?
  - **A)** Hardware Clock Skew
  - **B)** **Indirect Prompt Injection**
  - **C)** BGP Route Hijacking
  - **D)** Direct Console Login
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slide 5 Narration) defines **Indirect prompt injection**: 'malicious instructions embedded in a document the agent reads or a webpage it visits can hijack its entire task sequence — without the attacker ever touching the agent directly.'

#### Q092 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the taxonomy of agent-amplified risks in M2S2 (Slide 5), how does **Tool Poisoning** differ from **Agentic Misalignment**?
  - **A)** Tool Poisoning means spilling liquid on a keyboard and Agentic Misalignment means unplugging the monitor.
  - **B)** Tool Poisoning only occurs when the agent has no connected tools.
  - **C)** Both refer exclusively to electrical failures in UPS batteries.
  - **D)** **Tool Poisoning** is the supply-chain equivalent where compromised MCP servers or tools return malicious outputs or manipulated descriptions to corrupt agent reasoning; whereas **Agentic Misalignment** occurs when the agent technically fulfills its instruction but in a way that causes unintended harm.
- **Correct Answer**: **D**
- **Explanation**: M2S2 (Slide 5 Narration) clearly distinguishes Tool Poisoning ('compromised MCP servers or tools that provide malicious outputs to corrupt agent reasoning') from Agentic Misalignment ('the agent is technically doing what it was instructed to do, just in a way that causes unintended harm').

#### Q093 — [M2S2 Agent Governance]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: M2S2 (Slides 7, 8, and 9) structures enterprise **Agent Governance** requirements into three core pillars: **Visibility**, **Control**, and **Security**. Which of the following definitions accurately correspond to these three pillars? *(Select the 3 correct options)*
  - **A)** **Control**: deterministic guardrails over probabilistic systems by aligning agent identity with human user permissions, managing lifecycle/ownership transitions, and enforcing regulatory compliance and data residency.
  - **B)** **Anonymity**: hiding which agents exist in the enterprise so administrators cannot audit their costs or stop their execution.
  - **C)** **Security**: network perimeter and policy controls over audited channels, continuous payload threat detection (prompt injection, data leakage), and an immediate **circuit breaker** to halt a rogue agent ('Stop a rogue Agent').
  - **D)** **Visibility**: real-time universal discovery of all agents across the domain (single catalog), mapping access and ownership to human owners (Access and Ownership), and accurate usage and cost attribution per department/application (Attribution).
- **Correct Answer**: **A, C, D**
- **Explanation**: M2S2 (Slides 7-9) defines these exact three pillars: Visibility (Universal discovery, Access and Ownership, Attribution), Control (Identity, Lifecycle Management, Compliance), and Security (Network and policy, Threat detection, Stop a rogue Agent).

#### Q094 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is **Google Cloud Agent Registry** within Gemini Enterprise Agent Platform (M2S2 Slides 12-19), and what is its 4-step operational workflow?
  - **A)** The centralized catalog and single source of truth on Google Cloud to store, discover, and govern MCP servers, tools, standalone skills, and AI agents; its workflow is **1. Register → 2. Discover → 3. Govern → 4. Orchestrate**.
  - **B)** A bitmap image editor whose workflow is Draw → Crop → Filter → Print.
  - **C)** A local Excel spreadsheet that only tracks AWS virtual machines.
  - **D)** A Layer 2 firewall that blocks HTTPS traffic.
- **Correct Answer**: **A**
- **Explanation**: M2S2 (Slides 12, 13, and 19) defines Agent Registry as the centralized catalog for agents, MCP servers, tools, and skills, operating under the cycle: 1. Register → 2. Discover → 3. Govern → 4. Orchestrate.

#### Q095 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M2S2 (Slide 20), across which Google Cloud platforms is **Automatic registration** in Agent Registry supported?
  - **A)** Only on Cloud Functions written in Perl.
  - **B)** **Agent Runtime** (Gemini Enterprise Agent Platform), **Google Workspace** (built-in agents and extensions), **Gemini Enterprise** (Discovery Engine instances), **GKE** (Kubernetes Engine deployments with Agent Registry annotations), and official remote Google and Google Cloud **MCP Servers**.
  - **C)** Agent Registry does not support automatic registration on any platform.
  - **D)** Exclusively on offline Windows NT 4.0 servers.
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slide 20 'Supported Platforms') lists the 5 environments with auto-registration: Agent Runtime, Google Workspace, Gemini Enterprise, GKE (with Agent Registry annotations), and official remote Google and Google Cloud MCP Servers.

#### Q096 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Agent Registry** data model (M2S2 Slides 17 and 21), what is the difference between an **Agent Identifier**, an **Agent Principal**, and **Skill Revisions**?
  - **A)** The Agent Principal is the customer's commercial account name in Salesforce.
  - **B)** Skill Revisions erase version history and force every consuming agent to change its URN whenever a typo is fixed.
  - **C)** The **Agent Identifier** is a globally unique, immutable URN identifying the agent regardless of infrastructure changes; the **Agent Principal** is the unique IAM identifier (service account or workload identity) for permissions and auditing; and **Skill Revisions** are immutable, versioned snapshots of a skill package that allow updating instructions/code without changing the parent skill identifier (`urn:skill:...`).
  - **D)** They are three different names for the load balancer's public IP address.
- **Correct Answer**: **C**
- **Explanation**: M2S2 (Slides 17 and 21) precisely defines: Agent Identifier (unique immutable URN), Agent Principal (IAM identifier for permissions/auditing), Binding (connection between source agent and target resource), and Skill Revisions (immutable versioned snapshots without altering the parent skill URN).

#### Q097 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the Zero Trust **Agent Identity** architecture (M2S2 Slides 23-24), three distinct identity types are defined in agentic applications: **ID-1**, **ID-2**, and **ID-3**. What does each represent in a scenario where a user queries a support agent that reads data from BigQuery and Zendesk?
  - **A)** **ID-1 (User Identity)** is the human identity (issued by Entra, Cloud Identity, Auth0) used by the user to access the agent; **ID-2 (Agent Identity using its own authority, `spiffe://` / `principal://`)** is the agent's own GCP-issued identity used to access e.g. BigQuery under its own authority; and **ID-3 (Agent Identity using delegated authority from end-user)** is the delegated OAuth token authority (3LO) used to access e.g. Zendesk on the user's behalf.
  - **B)** ID-1 is the network card MAC address, ID-2 is the monitor serial number, and ID-3 is the postal code.
  - **C)** ID-3 allows the agent to access all users' bank accounts without OAuth consent.
  - **D)** All three identities share a single static API key hardcoded in the source code.
- **Correct Answer**: **A**
- **Explanation**: M2S2 (Slide 24 'Identities in Agentic Apps') defines the three levels: ID-1 (User Identity from the human IdP), ID-2 (Agent Identity using its own authority via SPIFFE on GCP, e.g., querying BigQuery), and ID-3 (Agent Identity using delegated authority from the end-user via OAuth, e.g., querying Zendesk).

#### Q098 — [M2S2 Agent Governance & Agent Identity Architecture]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: How does the combination of **Agent Identity Authentication Manager** and **Agent Gateway** protect end-user OAuth tokens (3LO / ID-3 flow) so the agent's runtime code can never leak raw credentials (M2S2 Slide 25)?
  - **A)** By emailing the username and password on every tool invocation.
  - **B)** The **Auth Manager** acts as a secure token acquirer and vault that obtains the user token and hands the agent only an **encrypted token / opaque session reference** cryptographically bound to the agent's mTLS (SPIFFE) identity; when the agent calls the tool through the **Agent Gateway**, the Gateway intercepts the call, decrypts/resolves the token, enforces authZ policies, and injects it into the outbound call, keeping raw OAuth tokens completely hidden from the agent itself.
  - **C)** By storing the plaintext OAuth token directly inside the LLM prompt.
  - **D)** By disabling TLS encryption on all outbound calls.
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slide 25 'Managed Authentication for Agents') explains that the Auth Manager acts as acquirer and vault: when paired with Agent Gateway, OAuth tokens are encrypted/referenced and hidden from the agent runtime ('all OAuth tokens are fully encrypted and hidden from the agent itself'); the Gateway decrypts them and enforces authZ policies before calling the tool.

#### Q099 — [M2S2 Agent Governance & Agent Identity]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When an agent is deployed on Google Cloud with **Agent Identity**, which open standard does its identity string (`principal://agents.global.org-...` / `spiffe://...`) use, and how does the infrastructure manage its X.509 certificate for the mTLS handshake with the Agent Gateway?
  - **A)** It uses unencrypted telnet without certificates.
  - **B)** It requires the user to solve a CAPTCHA on every TCP packet.
  - **C)** It uses the **SPIFFE** standard, and the infrastructure's Ambient Node Proxy automatically issues a highly ephemeral X.509 certificate (valid for only 24 hours and auto-rotated every 12 hours in the background) to authenticate the agent via **Zero-Trust mutual TLS (mTLS)** against the Agent Gateway.
  - **D)** It uses a 50-year self-signed certificate that the developer must manually copy via USB drive.
- **Correct Answer**: **C**
- **Explanation**: According to M2S2 (Slides 23-25) and the Agent Identity architecture (SPIFFE + Ambient Node Proxy), each agent receives a unique SPIFFE ID tied to its resource path and an ephemeral X.509 certificate (24h validity, rotated every 12h) used to establish Zero-Trust mTLS with the Agent Gateway from a credential-less sandbox.

#### Q100 — [M2S2 Agent Governance]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: In M2S2 (Slide 26 'Authz Policy'), what are the three control mechanisms that enforce intent-aware authorization policies over agent access? *(Select the 3 correct options)*
  - **A)** **Extensible Policy Fabric**: open-source-standard (Envoy) **Service Extensions** allowing customers and ISVs to inject custom governance logic into the agent data plane.
  - **B)** **GCP IAM Policy**: administrators define which registered agents/clients are approved to access MCP servers, blocking any unregistered agent.
  - **C)** **Dynamic Policy Engine**: natural language constraints (powered by **Conseca**) that dynamically evaluate business rules against live context out-of-band.
  - **D)** **Unrestricted Broadcast**: allowing any unregistered agent to modify organization-level IAM policies.
- **Correct Answer**: **A, B, C**
- **Explanation**: M2S2 (Slide 26) presents the three Authz Policy mechanisms: 1) GCP IAM policy, 2) Dynamic Policy Engine (natural language constraints via Conseca), and 3) Extensible Policy Fabric (OSS-standard Service Extensions).

#### Q101 — [M2S2 Agent Governance & M3L2]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Why is **Agent Gateway** described as *'Air traffic control for your AI workforce'* in M2S2 (Slides 27-28) and M3L2 (Slide 11)?
  - **A)** Because it replaces the Python compiler on the user's laptop.
  - **B)** Because it stores magnetic tape backups.
  - **C)** Because it is used exclusively at commercial airports.
  - **D)** Because it consistently governs, secures, and observes both **ingress (Client-to-Agent)** traffic from humans, agents, and services (integrating Model Armor and authorization) and **egress (Agent-to-Any)** traffic from the agent to other agents (A2A), MCP servers, tools, models, and APIs.
- **Correct Answer**: **D**
- **Explanation**: M2S2 (Slides 27-28) and M3L2 (Slide 11) show that Agent Gateway operates on both ingress (Client-to-Agent) and egress (Agent-to-Any: agents, tools, MCP, APIs), enforcing registration, authorization, security (Model Armor), and observability on every call.

#### Q102 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Turning to **Model Armor** in M2S2 (Slide 43), what are the **four primary filter categories** it provides to secure AI applications?
  - **A)** It only provides a basic regular-expression profanity filter.
  - **B)** 1. SQL Optimizer, 2. CSS Minifier, 3. Image Resizer, and 4. Audio Normalizer.
  - **C)** 1. **Responsible AI Safety**, 2. **Prompt Injection & Jailbreak**, 3. **Sensitive Data Protection (SDP)**, and 4. **Malicious URL Detection**.
  - **D)** 1. Floppy Antivirus, 2. POP3 Spam Filter, 3. ZIP Compressor, and 4. FAT32 Defragmenter.
- **Correct Answer**: **C**
- **Explanation**: M2S2 (Slide 43 'Model Armor Filters') defines the 4 categories: 1) Responsible AI Safety, 2) Prompt Injection & Jailbreak, 3) Sensitive Data Protection, and 4) Malicious URL Detection.

#### Q103 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Within Model Armor's **Responsible AI Safety** filter (M2S2 Slides 43-44), there are 7 subcategories: *Hate speech, Harassment, Sexually explicit, Sexually suggestive, Dangerous content, Violence*, and *CSAM*. What is special about **CSAM**, **Sexually suggestive**, and **Violence**?
  - **A)** Hate speech and Harassment cannot be configured in templates.
  - **B)** All subcategories can be completely disabled via a flag in the user prompt.
  - **C)** CSAM is disabled by default and must be manually enabled via a support ticket.
  - **D)** **CSAM** (Child sexual abuse material) is **always applied by default and CANNOT be disabled (`always on, cannot be disabled`)**; while **Sexually suggestive** and **Violence** are specifically available through **templates (`templates only`)**.
- **Correct Answer**: **D**
- **Explanation**: M2S2 (Slides 43 and 44) clearly specifies: `CSAM — always applied by default, cannot be disabled`, and notes that `Sexually suggestive` and `Violence` are applied via `templates only`.

#### Q104 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the per-input inspection limit of Model Armor's **Malicious URL Detection** filter (M2S2 Slide 43)?
  - **A)** It scans a maximum of 1 URL per month per organization.
  - **B)** It scans up to the **first 40 URLs per input (`Scans first 40 URLs per input`)** to identify disguised URLs, phishing attacks, and malware distribution.
  - **C)** It downloads and executes malware in the user's browser to check if it is dangerous.
  - **D)** It only scans URLs ending in `.gov`.
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slide 43) details under Malicious URL Detection: Identifies disguised URLs, Phishing attack protection, Malware distribution blocking, and **Scans first 40 URLs per input**.

#### Q105 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In **Model Armor Templates** (M2S2 Slides 41-42), confidence thresholds (**HIGH**, **MEDIUM+**, and **LOW+**) are configured. What is the correct relationship between the chosen threshold, false positive risk, and the recommended initial configuration strategy?
  - **A)** The **HIGH** threshold only triggers on near-certain violations (**very low** false positive risk, ideal for avoiding production disruptions); **MEDIUM+** offers a balanced trade-off; and **LOW+** triggers on any slight indication (**high** false positive risk). The recommended strategy is to start with **HIGH** for Responsible AI filters and **MEDIUM** for Prompt Injection detection.
  - **B)** The LOW+ threshold ignores all violations except high-certainty ones.
  - **C)** Using separate templates for user prompts and model responses is prohibited.
  - **D)** The HIGH threshold generates the maximum number of false positives and blocks 99% of legitimate traffic.
- **Correct Answer**: **A**
- **Explanation**: M2S2 (Slides 41-42) explains that HIGH = 'High confidence content contains harmful material / Very low false positive risk'; MEDIUM+ = 'Balanced / Moderate FP risk'; LOW+ = 'Any slight indication / High FP risk'. The recommended strategy (Slides 42 and 51) is to start with HIGH on Responsible AI filters, MEDIUM on Prompt Injection, and decouple templates for prompts and responses.

#### Q106 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Model Armor offers two configurations for **Sensitive Data Protection (SDP)**: **Basic Configuration** and **Advanced Configuration** (M2S2 Slide 46). What core capability does **Advanced Configuration** add that is NOT available in **Basic Configuration**?
  - **A)** Neither configuration can detect Google Cloud API keys.
  - **B)** Basic Configuration drops the database whenever it finds a phone number.
  - **C)** **Basic Configuration** supports **inspection operations only** for 6 predefined types (credit cards, US SSN, financial accounts, ITIN, GCP credentials, and GCP API keys); whereas **Advanced Configuration** uses SDP templates to support **both inspection & de-identification**, enabling transformation, tokenization, and redaction of sensitive elements.
  - **D)** Basic Configuration supports tokenization and redaction, whereas Advanced only inspects.
- **Correct Answer**: **C**
- **Explanation**: M2S2 (Slide 46) contrasts Basic Configuration (inspection only across 6 predefined infoTypes) with Advanced Configuration (SDP templates with granular rules and de-identification techniques: transform, tokenize, and redact sensitive data).

#### Q107 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the difference between Model Armor's two **Enforcement Types** — **Inspect Only** and **Inspect & Block** (M2S2 Slide 47) — and how are they combined in the 3-phase rollout strategy (Slide 51)?
  - **A)** Model Armor does not integrate with Cloud Logging.
  - **B)** **Inspect Only** analyzes content and logs violations to **Cloud Logging** without halting the request/response (used in **Phase 1: Initial Deployment** and **Phase 2: Testing & Validation** to measure false positives); **Inspect & Block** logs the event AND blocks the offending prompt or response in real time (enabled in **Phase 3: Adjustment & Production** once thresholds are calibrated).
  - **C)** It is recommended to enable Inspect & Block with the LOW+ threshold on Day 1 in production without prior testing.
  - **D)** Inspect Only blocks all traffic without logging, and Inspect & Block allows attacks through while logging to a local file.
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slides 47 and 51) details both modes: Inspect Only logs to Cloud Logging without blocking (Phases 1 and 2 to audit and measure false positives), transitioning to Inspect & Block in Phase 3 after tuning thresholds.

#### Q108 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What are **Floor Settings** in Model Armor (M2S2 Slide 48)?
  - **A)** Mandatory minimum protection requirements defined at the **Organization / Project** level in the Google Cloud resource hierarchy that establish a baseline that all individual Model Armor templates must meet at a minimum.
  - **B)** The minimum number of physical servers in the data center rack.
  - **C)** An optional template that allows developers to disable CSAM filtering.
  - **D)** A screen brightness adjustment in the Google Cloud Console.
- **Correct Answer**: **A**
- **Explanation**: M2S2 (Slide 48 'Floor Settings') explains that while templates give flexibility to individual apps, Floor Settings establish minimum protection requirements across the hierarchy (Organization → Project → Individual Templates) that no individual template can weaken.

#### Q109 — [M2S2 Agent Governance]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: Regarding Model Armor's **Document & Image Screening** capabilities (M2S2 Slide 49), which of the following technical specifications and limits are correct? *(Select the 2 correct options)*
  - **A)** **Document Screening** supports PDFs, CSV, TXT, and Microsoft Office documents (Word `DOCX/DOCM/DOTX/DOTM`, PowerPoint `PPTX/PPTM/POTX/POTM/POT`, Excel `XLSX/XLSM/XLTX/XLTM`) with a **4 MB limit per file/text** (files exceeding this limit are skipped).
  - **B)** **Image Screening** (Preview) uses Visual Scanning (with advanced SDP) and OCR across **JPEG, PNG, and BMP** formats, with a **4 MB maximum per image**, a single image per request, and availability in the **US and EU** multi-regions.
  - **C)** Image Screening processes 50 GB 8K MKV videos with no file size limit.
  - **D)** Document Screening only accepts binary executable `.exe` files.
- **Correct Answer**: **A, B**
- **Explanation**: M2S2 (Slide 49) specifies Document Screening support (PDF, CSV, TXT, Word, PowerPoint, Excel with a 4 MB limit per file) and Image Screening support (Visual Scanning + OCR, JPEG/PNG/BMP formats, max 4 MB per image, 1 image per request, US and EU multi-regions).

#### Q110 — [M2S2 Agent Governance]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: With which ecosystem services and frameworks does **Model Armor** provide direct integrations according to M2S2 (Slide 50)? *(Select the 3 correct options)*
  - **A)** **Gemini Enterprise**, **Vertex AI Agent Platform**, and **Google Cloud MCP Servers** (for native content safety and model context protection).
  - **B)** **Cloud Networking** (including VPC and Private Service Connect) and the **LangChain** development framework.
  - **C)** MS-DOS LPT1 dot-matrix printer drivers.
  - **D)** **Agent Gateway** and **Apigee** (to secure agents and AI-powered APIs at the gateway layer).
- **Correct Answer**: **A, B, D**
- **Explanation**: M2S2 (Slide 50 'Integrations') lists the 7 Model Armor integrations: Agent Gateway, Apigee, Gemini Enterprise, Google Cloud MCP Servers, Cloud Networking (VPC / Private Service Connect), Agent Platform, and LangChain.

#### Q111 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to **Model Armor Templates** best practices (M2S2 Slide 41), why is it recommended to **decouple** templates for user prompts and model responses?
  - **A)** Because model responses can never contain text.
  - **B)** Because Model Armor charges triple if the same template is used.
  - **C)** Because input templates only work on Mondays and output templates only work on Tuesdays.
  - **D)** Because input risks and tolerances (for example, detecting Prompt Injection or Jailbreak attacks in the user prompt) can differ from output controls (for example, preventing sensitive data leakage or toxic content in the model's generated response).
- **Correct Answer**: **D**
- **Explanation**: M2S2 (Slide 41 'Best Practices') explicitly recommends: 'Decouple templates for user prompts and model responses separately', allowing teams to tune specific filters and thresholds for each direction of the flow.

#### Q112 — [M2S2 Agent Governance & Acceptable Use of AI Agents Policy]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the corporate **Acceptable Use of AI Agents** policy and Module 2 governance principles, what rule governs the permissions of an agent acting on behalf of a user and its ability to approve critical changes?
  - **A)** Agents must operate under the **principle of least privilege** with **strictly fewer permissions** than the human user holds, uncontrolled execution without safeguards ('YOLO mode' in production/corporate environments) is prohibited, and **agents cannot be used to unilaterally approve code or change requests** (such as self-approving CLs or Multi-Party Authorization requests).
  - **B)** The agent must be granted super-admin permissions higher than the human user's and may self-approve its own CLs.
  - **C)** The human user is exempt from all accountability even if they explicitly instruct the agent to perform a harmful action.
  - **D)** Agents may share their private tokens with any external service without auditing.
- **Correct Answer**: **A**
- **Explanation**: Both M2S2 and the Acceptable Use of AI Agents policy establish that agents operate with least privilege (strictly fewer permissions than the human operator), prohibit unilateral self-approval of changes/CLs, and preserve organizational accountability and traceability.

#### Q113 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Agent Registry** model (M2S2 Slide 17), what is the name of the declarative capability metadata included inside an **Agent Card** that describes agent-to-agent communication interfaces?
  - **A)** `DNS MX Record`
  - **B)** `Cron Job Tab`
  - **C)** `SQL Foreign Key`
  - **D)** `A2A Skill`
- **Correct Answer**: **D**
- **Explanation**: M2S2 (Slide 17) defines `A2A Skill` as: 'Declarative capability metadata within an Agent Card describing agent-to-agent interfaces.'

#### Q114 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the difference in URN format in **Agent Registry** (M2S2 Slide 21) between a Skill created by a Google publisher and a private Skill manually registered within a project?
  - **A)** Google skills start with `ftp://`.
  - **B)** Both use IPv4 addresses on port 80.
  - **C)** The Google-created Skill uses `urn:skill:{publisher}:{ns}:{id}` and the manually registered project Skill uses `urn:skill:projects-{num}:locations:{loc}:private-{id}`.
  - **D)** Private skills have no URN and are identified only by an emoji.
- **Correct Answer**: **C**
- **Explanation**: M2S2 (Slide 21 'Skills & Skill Revisions') specifies both URN formats: Google-created (`urn:skill:{publisher}:{ns}:{id}`) and Manually registered (`urn:skill:projects-{num}:locations:{loc}:private-{id}`).

#### Q115 — [M2S2 Agent Governance]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In **M2S2 (Slide 6 'Three Takeaways')**, what three practical recommendations are given to enterprise architects as agents scale across organizations?
  - **A)** 1) Ban all agents for 10 years, 2) Delete evaluation tools, and 3) Keep architecture static.
  - **B)** 1) **Don't dismiss agents or fall in love** (agents are a great tool in some cases and unnecessary in others), 2) **Get your platform ready for agents** (prepare evaluation and registry services now), and 3) **Evolve your architecture patterns** (adapt to new patterns and interactions).
  - **C)** Replace all security architects with a single bash script.
  - **D)** 1) Use agents for absolutely everything without scoping use cases, 2) Skip agent registration, and 3) Disable Model Armor.
- **Correct Answer**: **B**
- **Explanation**: M2S2 (Slide 6) summarizes the three key takeaways: 1) Don't dismiss agents or fall in love, 2) Get your platform ready for agents (don't forget eval and registry services!), and 3) Evolve your architecture patterns.


---

### Module 3: ADK 2.0, GEAP Evaluation, Harness Engineering, Data & Observability/Cost

#### Q116 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M3L1 (Slide 9 'The Paradigm Shift'), what is the fundamental architectural shift in the transition from **ADK 1.x** to **ADK 2.0**?
  - **A)** ADK 1.x relied on a hierarchical agent executor with prompt-based orchestration and linear chains with limited flow control; **ADK 2.0** evolves into a **Graph-based workflow engine** with deterministic code routing, directed graphs of nodes & edges, conditional & parallel branching, and built-in **Human-in-the-loop**.
  - **B)** ADK 2.0 drops Python support and only allows programming in assembly language.
  - **C)** ADK 2.0 removes support for tools and memory.
  - **D)** ADK 1.x was a deterministic graph engine and ADK 2.0 removes graphs to use only a free-text prompt.
- **Correct Answer**: **A**
- **Explanation**: M3L1 (Slide 9) details the paradigm shift: from ADK 1.x (Hierarchical agent executor, prompt-based orchestration, linear chain) to ADK 2.0 (Graph-based workflow engine, deterministic code routing, directed graph of nodes & edges, conditional & parallel branching, HITL built-in).

#### Q117 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: In the **Google ADK** architecture (M3L1 Slide 10), the **`State`** dictionary supports **Scoped State Prefixes** to control variable visibility and lifecycle without bloating the LLM context window. Which state scopes are supported in ADK? *(Select the 3 correct options)*
  - **A)** **`app:` scoped** (global across the entire application for all users) and **`temp:` scoped** (ephemeral state that only lives during the current turn/invocation and is discarded afterward).
  - **B)** **Unprefixed / `session`-scoped**: state bound to the current conversation thread (`Session`).
  - **C)** **`bios:` scoped**: state physically burned into the client motherboard's ROM chip.
  - **D)** **`user:` scoped**: persistent state associated with the specific user across all of their sessions.
- **Correct Answer**: **A, B, D**
- **Explanation**: M3L1 (Slides 10 and 15) shows the four `State` scopes in ADK: `session`-scoped, `user:` scoped, `app:` scoped, and `temp:` scoped, combined with `output_key` and dynamic `{state_key}` injection.

#### Q118 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A customer has a 3-agent loan underwriting pipeline (Agent A verifies identity, Agent B calculates debt ratios, and Agent C drafts the memo) and asks: *'How do we pass structured variables (SSN verification token, calculated credit tier) between agents without dumping all raw intermediate messages into the LLM context window?'* According to M3L1 (Slides 14-15), what is the native ADK solution?
  - **A)** Ask the end user to manually copy and paste the JSON between Agent A, B, and C.
  - **B)** Use **State** with **Scoped State Prefixes**, save each agent's structured output via **`output_key`**, and dynamically inject it into the next agent's instructions using **`{state_key}`** templates.
  - **C)** Concatenate all 50 raw messages into a single giant string and send it over HTTP on every turn.
  - **D)** Save the variables in an unauthenticated public internet file.
- **Correct Answer**: **B**
- **Explanation**: M3L1 (Slides 14-15 'Scenario 2: Data Flow & Scoped Variables Across Multi-Agent Pipelines') specifies the exact solution: `State (Scoped State Prefixes + output_key + Dynamic {state_key} Injection)`.

#### Q119 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A customer's CISO mandates two non-negotiable guardrails on their ADK agent without cluttering the agent's core business logic (M3L1 Slides 18-19): (1) any SSN or credit card in the prompt must be scrubbed BEFORE reaching Gemini, and (2) any SQL delete tool must be blocked if triggered by a non-admin user. Which ADK primitive solves both requirements?
  - **A)** Reduce the `max_output_tokens` parameter to 5.
  - **B)** Run `after_agent_callback` one week after the SQL table has already been dropped.
  - **C)** Lifecycle **Callbacks**: use **`before_model_callback`** to inspect/redact PII before invoking the Gemini model, and **`before_tool_callback`** to validate permissions and block execution of the SQL tool if the user is not an admin.
  - **D)** Change the web UI background color to red.
- **Correct Answer**: **C**
- **Explanation**: M3L1 (Slides 18-19 'Scenario 5: Enterprise Guardrails, PII Redaction, & Auditing') answers with: `Callbacks (before_model_callback, before_tool_callback)`.

#### Q120 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the agent memory hierarchy (M3L1 Slide 20), **Long-term memory** is divided into three cognitive types. What are they?
  - **A)** FAT16, FAT32, and NTFS.
  - **B)** Input tokens, Output tokens, and Thinking tokens.
  - **C)** L1 Cache, L2 Cache, and L3 Cache of the Intel processor.
  - **D)** **Episodic** (specific past experiences and events), **Semantic** (facts, concepts, and structured knowledge about the user/domain), and **Procedural** (rules, skills, and how to execute processes).
- **Correct Answer**: **D**
- **Explanation**: M3L1 (Slide 20 'Memory hierarchy') divides Agent Memory into Short-term memory and Long-term memory, which comprises: **Episodic**, **Semantic**, and **Procedural**.

#### Q121 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is the correct 4-step sequence of how **Vertex AI Agent Memory Bank** works according to M3L1 (Slides 21-25)?
  - **A)** Memory Bank only stores binary `.mp4` files with no relation to `userID`.
  - **B)** Step 1: **`CreateSessions`** (start session linked to `userID`) → Step 2: **`AppendEvent`** (sequentially log messages and actions as events) → Step 3: **`GenerateMemories`** (automatic fact extraction at intervals) or **`CreateMemory`** (agent writes directly as a tool for fine-grained control) → Step 4: **`RetrieveMemories`** (retrieve user memories to inform the next response).
  - **C)** Step 1: `DeleteSession` → Step 2: `FormatDisk` → Step 3: `Reboot` → Step 4: `Crash`.
  - **D)** Step 1: `RetrieveMemories` → Step 2: `CreateSessions` → Step 3: `DropTable` → Step 4: `AppendEvent`.
- **Correct Answer**: **B**
- **Explanation**: M3L1 (Slides 21-25 'How Memory Bank works') details the 4 steps and their APIs: 1) `CreateSessions`, 2) `AppendEvent`, 3) `GenerateMemories` (automatic) / `CreateMemory` (direct as a tool), and 4) `RetrieveMemories`.

#### Q122 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A customer needs to stream tokens in real time to the browser, show when a tool (such as SQL Search) has started or finished, and push structured interactive cards (**A2UI cards**) for user confirmation without a 10-second blank wait. According to M3L1 (Slides 16-17), which ADK mechanism enables this?
  - **A)** The **Events** system (`Event`, `EventActions`) consumed asynchronously via **`runner.run_async()`**.
  - **B)** A full HTML page refresh every 30 seconds via `<meta http-equiv="refresh">`.
  - **C)** ADK only supports blocking batch execution with no real-time events.
  - **D)** Mailing the results via postal service after the nightly batch finishes.
- **Correct Answer**: **A**
- **Explanation**: M3L1 (Slides 16-17 'Scenario 3: Real-Time UI Streaming & Custom Front-End Events') specifies the ADK solution: `Events (Event, EventActions, runner.run_async())`.

#### Q123 — [M3L1 Introduction to Agent SDKs & ADK Fundamentals]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: In the ADK architecture (M3L1 Slide 10), what is the difference in purpose between **`InvocationContext`**, **`ToolContext`**, and **`ArtifactService`**? *(Select the 2 correct options)*
  - **A)** `ArtifactService` is only used to store plaintext passwords inside browser cookies.
  - **B)** `ToolContext` destroys the active session every time a read tool is invoked.
  - **C)** **`InvocationContext`** is the per-turn carrier that encapsulates the current `Session`, `agent`, and run configuration; whereas **`ToolContext`** gives tools secure access to `state`, `artifacts`, `auth`, and `memory` search.
  - **D)** **`ArtifactService`** manages storage and versioning of binary data and files (such as generated PDFs, images, or reports) outside the lightweight `State` dictionary.
- **Correct Answer**: **C, D**
- **Explanation**: M3L1 (Slide 10 'Google ADK architecture') defines `InvocationContext` (per-turn carrier: Session, agent, config), `ToolContext` (State, artifacts, auth, memory search), and `ArtifactService` (Binary data / files).

#### Q124 — [M3L2 Agent Lifecycle, Evaluation & tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M3L2 (Slide 2) presents the **Agentic Development Lifecycle** not as a linear waterfall, but as a continuous feedback loop. What are the 6 phases of the full cycle, and what distinguishes evaluations in the **Scale** phase from those in the **Optimize** phase?
  - **A)** Cycle: Code → Zip → Email → Forget.
  - **B)** In Scale, Golden Datasets are forbidden, and in Optimize, observability is disabled.
  - **C)** Cycle: **Build → Deploy → Scale → Optimize → Govern → Observe → (back to Build)**. In **Scale**, teams run **Offline Evals** with **Golden Datasets** and simulation/testing before scaling; in **Optimize**, teams run **Online Evals** in production monitoring quality with **LLM-as-a-judge** fed by **Observe** data (Tracing, Audit logs, Token Cost).
  - **D)** Evaluation is only performed manually once a year.
- **Correct Answer**: **C**
- **Explanation**: M3L2 (Slide 2) shows the loop Build → Deploy → Scale (Offline Evals, Golden Datasets, Simulation & Testing) → Optimize (Online Evals, Monitor Quality, LLM as a judge) → Govern → Observe (Tracing, Debugging, Audit logs, Token Cost) → back to Build.

#### Q125 — [M3L2 Agent Lifecycle, Evaluation & tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In M3L2 (Slide 7 'The challenge: Agent sprawl'), what are the three types of uncontrolled proliferation (**sprawl**) that threaten enterprises when scaling AI without Google Cloud's governance platform?
  - **A)** Cable sprawl, Keyboard sprawl, and Mouse sprawl.
  - **B)** The only risk is having too many monitors plugged in.
  - **C)** CSS sprawl, HTML sprawl, and Font sprawl.
  - **D)** **LLM sprawl** (ungoverned access to foundation models without safety or budget controls), **Agent sprawl** (ungoverned collaboration across agents leading to unbounded data access), and **MCP sprawl** (ungoverned integration with enterprise systems and data via unsecured protocols/APIs).
- **Correct Answer**: **D**
- **Explanation**: M3L2 (Slide 7) defines these exact three phenomena: LLM sprawl, Agent sprawl, and MCP sprawl.

#### Q126 — [M3L2 Agent Lifecycle, Evaluation & tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M3L2 (Slide 5), what does the term **'reasoning thrash'** refer to in an agent's business and technical KPIs?
  - **A)** The phenomenon where an agent enters repetitive loops of thinking and tool calling without converging on task resolution, spiking cost-per-action and latency while degrading CSAT.
  - **B)** A PNG image compression technique.
  - **C)** End-to-end encryption of network packets.
  - **D)** An automatic Linux operating system update.
- **Correct Answer**: **A**
- **Explanation**: M3L2 (Slide 5) highlights the need for deep traceability of the think-act-observe loop to measure technical KPIs (task success rate, tool correctness, hallucination rate, cost-per-action, latency) and business KPIs (cost-to-serve, CSAT) and detect 'reasoning thrash'.

#### Q127 — [M3L2 Agent Lifecycle, Evaluation & tooling]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: M3L2 (Slide 14 'Why Evaluating Vibe Coding Agents Is Different') explains three fundamental reasons why evaluating code/app-generation agents is far more complex than evaluating a traditional chatbot. What are they? *(Select the 3 correct options)*
  - **A)** **2. Users Can't Validate Output**: non-technical users (and even engineers in real time) cannot review 600 lines of generated code on the spot; the gap between perceived correctness and actual correctness is massive.
  - **B)** **3. Iterative Sessions as State**: every turn mutates real files on a live codebase, so bad early decisions compound across the conversation.
  - **C)** **1. The Underspecification Gap**: the user's natural language prompt is inherently underspecified; evaluation must determine whether the agent reconstructed the right implicit specification.
  - **D)** **4. Zero File Creation**: vibe coding agents never create or modify any files.
- **Correct Answer**: **A, B, C**
- **Explanation**: M3L2 (Slide 14) lists these exact three reasons: 1) The Underspecification Gap, 2) Users Can't Validate Output, and 3) Iterative Sessions as State.

#### Q128 — [M3L2 Agent Lifecycle, Evaluation & tooling & Lab M3L03]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In lab `M3L03: Implement Agent Evaluation with GEAP`, how do you mathematically prove to business stakeholders that a deployed agent meets accuracy, grounding, and safety requirements before moving to production?
  - **A)** By checking only whether the Docker container boots without syntax errors.
  - **B)** By disabling hallucination metrics.
  - **C)** By ingesting a **Golden Dataset** into **Gemini Enterprise Agent Platform (GEAP)** and running bulk automated evaluation jobs with auto-raters / LLM-as-a-Judge.
  - **D)** By conducting an informal 2-question hallway survey.
- **Correct Answer**: **C**
- **Explanation**: According to M3L1 (Slide 2), M3L2, and the Day 3/4 recap, in Lab M3L03 teams ingest a Golden Dataset into GEAP to run bulk automated evaluation jobs that mathematically prove grounding, functional accuracy, and safety.

#### Q129 — [M3L2 Agent Lifecycle, Evaluation & tooling]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: Why does M3L2 (Slide 5) state that **training-time alignment** is insufficient for governing agents in the enterprise?
  - **A)** Because runtime controls consist solely of changing the system prompt.
  - **B)** Because agents are 100% deterministic like a pocket calculator.
  - **C)** Because models never receive pre-training.
  - **D)** Because the behavior of an agent interacting across multiple interfaces (users, other agents, tools, memory) is non-deterministic and complex; therefore, **runtime controls and sandboxing** must be independent of the agent's own reasoning layer.
- **Correct Answer**: **D**
- **Explanation**: M3L2 (Slide 5) emphasizes under 'Runtime Controls and Sandboxing': 'Training-time alignment is insufficient; runtime guardrails must be independent of the agent's reasoning layer.'

#### Q130 — [M3L3 Harness engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In M3L3 (Slide 2), the foundational equation **`Agent = Model + Harness`** (Vivek Trivedy / Mitchell Hashimoto, 2026) and the evolution of AI engineering from Prompt Engineering (2022–2023) and Context Engineering (2024–2025) to **Harness Engineering (2026)** are introduced. What is a **Harness**?
  - **A)** A physical fiber-optic cable connecting two server racks.
  - **B)** **Everything outside the AI model that makes it reliable**: the tools it can access, the rules it must follow, enforcement hooks, feedback loops that catch and fix mistakes, and the operating environment that keeps the agent on-track for hours instead of minutes.
  - **C)** A synonym for the matrix weight of the first Transformer attention layer.
  - **D)** A library used exclusively for rendering 2D charts.
- **Correct Answer**: **B**
- **Explanation**: M3L3 (Slide 2 'What Is a Harness?') defines it verbatim: 'A harness is everything outside the AI model that makes it reliable: the tools it can access, the rules it must follow, the feedback loops that catch mistakes, and the environment it operates in. Agent = Model + Harness.'

#### Q131 — [M3L3 Harness engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M3L3 (Slides 3 and 5) empirically proves that **the harness determines the outcome far more than the underlying model** by citing **LangChain on Terminal Bench 2.0**. What happened on that benchmark while keeping the exact same model?
  - **A)** Performance dropped from #5 to #30 when automated verification was added.
  - **B)** They had to switch to a 10× larger model to gain 0.1%.
  - **C)** Without changing the model or adding new training data, LangChain jumped from rank **#30 to #5** (climbing from **52.8% to 66.5%**, a **+13.7 point** gain) purely by improving the **harness**: adding self-verification loops, loop-detection middleware, and upfront context injection.
  - **D)** Terminal Bench 2.0 only evaluates human typing speed on a keyboard.
- **Correct Answer**: **C**
- **Explanation**: M3L3 (Slides 3 and 5) highlights the LangChain Terminal Bench 2.0 case: with the exact same model, it jumped from rank #30 to #5 (52.8% → 66.5%, +13.7 points) solely by adding self-verification loops, loop-detection middleware, and upfront context injection in the harness.

#### Q132 — [M3L3 Harness engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **OpenAI + Codex** case study (M3L3 Slide 4: *'Engineers stopped writing code. They started designing environments'*), how did 3 to 7 engineers produce ~1 million lines of production code and 1,500 merged PRs with **0 manually written lines**?
  - **A)** By copying and pasting random repositories from the internet without running tests.
  - **B)** By designing a rigorous **harness** that provided repository structure, CI configuration, `AGENTS.md` as the system of record for context injection, architectural constraints enforced by deterministic linters, progressive disclosure, and automated feedback loops.
  - **C)** By secretly hiring 5,000 external contractors.
  - **D)** By generating only blank lines and repeated comments.
- **Correct Answer**: **B**
- **Explanation**: M3L3 (Slide 4) details what the harness provided to achieve ~1M lines with 0 manual lines: repo structure & CI config, `AGENTS.md`, architectural constraints via linters, automated feedback loops, and progressive disclosure.

#### Q133 — [M3L3 Harness engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In Google's internal proof point (**The ADK Kotlin Success Story**, M3L3 Slide 12), a small team of 3 EPE engineers + 1 Cloud engineer delivered the ADK Kotlin SDK in just 2 months by applying **Harness Engineering**. What were the verified metrics of this project?
  - **A)** 10 million lines with no tests or reviews.
  - **B)** The project was canceled because Kotlin does not support agents.
  - **C)** 500 lines of code in 2 years with 0% tests.
  - **D)** **57,000+ lines of code** in 2 months (125,000+ total lines changed), a **37.5-hour** average CL submission turnaround, and **~35% test coverage** built in by design thanks to clear contextual guardrails, reusable skills, and automated feedback loops.
- **Correct Answer**: **D**
- **Explanation**: M3L3 (Slides 3 and 12) documents the internal ADK Kotlin proof point: 4 engineers (3 EPE + 1 Cloud), 57,000+ lines of code in 2 months, 125,000+ lines changed, 37.5h average CL turnaround, and ~35% of code in tests.

#### Q134 — [M3L3 Harness engineering]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In **The Sled Dog Analogy** from M3L3 (Slide 9) used to explain to an executive customer why Harness Engineering matters, what do **The dogs**, **The sled**, and **The harness** represent, respectively?
  - **A)** **The dogs** are the individual AI models/agents with their skills; **the sled** is the complex business task or goal; and **the harness** is the framework that binds and aligns them so they pull in the same direction instead of tangling and pulling apart.
  - **B)** The dogs are hard drives, the sled is the network cable, and the harness is the electricity bill.
  - **C)** The harness replaces the dogs so the sled moves without AI agents.
  - **D)** The dogs are end customers and the sled is the support center.
- **Correct Answer**: **A**
- **Explanation**: M3L3 (Slide 9 'Why harnesses matter: the sled dog analogy') explains: The dogs = AI Agents; The sled = The Task; The harness = The Framework ('binds agents to the task so they pull the same way').

#### Q135 — [M3L3 Harness engineering]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: According to M3L3 (Slides 3 and 5), what architectural advantage does **Google Antigravity's '1 Harness, 4 Surfaces'** design offer, and what did **Anthropic's 3-Agent Harness** experiment demonstrate? *(Select the 2 correct options)*
  - **A)** A solo agent without a harness always outperforms a Planner + Generator + Evaluator architecture in quality.
  - **B)** In Antigravity, each surface has an incompatible harness that forces teams to rewrite skills four times.
  - **C)** In **Anthropic's** experiment, a 3-agent harness (**Planner + Generator + Evaluator**) built a polished, playable 2D game engine in 6 hours, whereas a solo agent without a harness produced a non-functional prototype in 20 minutes.
  - **D)** In **Google Antigravity**, all 4 surfaces (**IDE, CLI, SDK, and Agent Manager**) share **one underlying harness**, so any improvement in agentic behavior lands across all four surfaces simultaneously without divergence.
- **Correct Answer**: **C, D**
- **Explanation**: M3L3 (Slides 3 and 5) highlights both milestones: Google Antigravity shares 1 Harness across its 4 surfaces (IDE, CLI, SDK, and Agent Manager), preventing divergence; and the 3-agent harness (Planner + Generator + Evaluator) dramatically outperformed the solo unharnessed agent.

#### Q136 — [M3L3 Harness engineering & Lab M3L04]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What three key organizational problems does standardizing **Harness Engineering** solve within the Cohesive Agentic Experiences (CAE) program in an enterprise (M3L3 Slide 8)?
  - **A)** It eliminates the need for unit testing or linters.
  - **B)** It eliminates **Fragmentation** (siloed bespoke tools), prevents **Cross-purposes** (agents pulling in opposite directions), and stops **Reinvention** by standardizing interfaces and sharing components.
  - **C)** It replaces Gemini models with offline local spreadsheets.
  - **D)** It forces every department to build its own proprietary network protocol from scratch.
- **Correct Answer**: **B**
- **Explanation**: M3L3 (Slide 8 'Accelerating AI in the enterprise') identifies the three organizational problems solved by a well-engineered harness: Fragmentation, Cross-purposes, and Reinvention.

#### Q137 — [M3L4 Connect Agent to Data]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Blueprint for Agentic Data Platforms** in M3L4 (Slides 8-9), what are the four vertical layers that structure the data platform for AI agents on Google Cloud?
  - **A)** There is only a single flat layer of CSV files without governance.
  - **B)** 1. Front-end CSS, 2. Flash Animations, 3. Cookies, and 4. Pop-ups.
  - **C)** 1. **Data Collection** (Agent Data Provisioning), 2. **Data Storage** (Knowledge & Operational Base), 3. **Data Processing** (Cognitive Search & Understanding), and 4. **Data Governance** (Agent Data Governance).
  - **D)** 1. Network Card, 2. HDMI Cable, 3. Keyboard, and 4. Printer.
- **Correct Answer**: **C**
- **Explanation**: M3L4 (Slides 8 and 9) structures the Blueprint into 4 layers: 1) Data Collection (Agent Data Provisioning), 2) Data Storage (Knowledge & Operational Base), 3) Data Processing (Cognitive Search & Understanding), and 4) Data Governance (Agent Data Governance).

#### Q138 — [M3L4 Connect Agent to Data]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: When designing enterprise data integration in M3L4 (Slide 16), the trade-offs between **Search-Ingested** connectors and **Search-Federated** connectors are compared. What is the key difference between the two?
  - **A)** **Search-Ingested** is optimized for RAG and gives greater control over data for LLM consumption, but increases storage costs, can introduce data staleness, and requires permission synchronization; **Search-Federated** accesses real-time data with zero duplication and respects live source permissions, though performance depends on the source system and search enrichments may be more limited.
  - **B)** Search-Ingested never stores data and Search-Federated copies all petabytes three times a day.
  - **C)** Search-Federated ignores user permissions in the source system.
  - **D)** Both require rewriting the customer's CRM system from scratch.
- **Correct Answer**: **A**
- **Explanation**: M3L4 (Slide 16) details these exact trade-offs between Custom API-based, Search-Ingested (optimized for RAG but with storage cost, staleness, and permission sync), and Search-Federated (real-time data, zero duplication, and live source permission enforcement, dependent on source performance).

#### Q139 — [M3L4 Connect Agent to Data]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: What is **MCP Toolbox for Databases** (`go/mcp-toolbox`, M3L4 Slide 20), and what technical challenges does it solve when connecting GenAI agents to databases like AlloyDB, Cloud SQL, Spanner, BigQuery, or on-premise systems?
  - **A)** It only works with local text files and supports neither Cloud SQL nor AlloyDB.
  - **B)** A script that disables database authentication so any internet user can drop tables.
  - **C)** A graphical tool used exclusively for designing 3D logos.
  - **D)** An open-source Google server that simplifies building GenAI database tools (integrating with ADK in under 10 lines of code) while automatically handling critical complexities such as **connection pooling**, **integrated authentication**, and **end-to-end observability with OpenTelemetry**, deployable as a container on Cloud Run.
- **Correct Answer**: **D**
- **Explanation**: M3L4 (Slide 20 'MCP Toolbox for Databases') highlights its 5 pillars: Simplified development (<10 lines of code, native ADK support), Better performance (connection pooling), Enhanced security (integrated auth), End-to-end observability (built-in OpenTelemetry), and Portability (container on Cloud Run for Cloud SQL, AlloyDB, BigQuery, Spanner, and on-prem DBMS).

#### Q140 — [M3L4 Connect Agent to Data]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to the **Vector Database** design table in M3L4 (Slide 23), when should an architect choose **Vertex AI Vector Search** versus **BigQuery Vector Search** or **AlloyDB (`pgvector`) / Spanner**?
  - **A)** Vertex AI Vector Search does not support vector embeddings.
  - **B)** Use BigQuery Vector Search when sub-millisecond OLTP transactional latency is required, and AlloyDB exclusively for storing unindexed videos.
  - **C)** Choose **Vertex AI Vector Search** (Managed, Dedicated) when massive scale and the lowest possible latency on pure vector queries are required; choose **BigQuery Vector Search** (Integrated, Analytical) for large-scale analytical queries combining vector search with business data (not optimized for real-time low latency); and choose **AlloyDB / Cloud SQL (`pgvector`) or Spanner** (Integrated, Transactional) when combining transactional/operational consistency with semantic search in a single system.
  - **D)** Spanner has no native vector functions.
- **Correct Answer**: **C**
- **Explanation**: M3L4 (Slide 23 'Key design options and considerations: Vector Database') establishes this decision matrix: Managed/Dedicated (Vertex AI Vector Search: massive scale and lowest vector latency), Integrated/Analytical (BigQuery Vector Search: combined massive analytics), and Integrated/Transactional (AlloyDB/Cloud SQL with pgvector and Spanner: transactional consistency + semantic search).

#### Q141 — [M3L4 Connect Agent to Data]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: In designing **High Performance Object Storage** on Google Cloud Storage for AI/ML workloads (M3L4 Slide 21), which of the following pairings between design option and use case / trade-off are correct? *(Select the 3 correct options)*
  - **A)** **Google Cloud Managed Lustre**: delivers sub-millisecond latency and massive IOPS for extreme HPC and AI training workloads, with higher cost and operational overhead.
  - **B)** **Anywhere Cache** and **Rapid Storage**: Anywhere Cache accelerates reads by caching frequently accessed data close to compute, and Rapid Storage delivers zonal low latency and high throughput.
  - **C)** **Cloud Storage FUSE with Hierarchical Namespace (HNS)**: provides filesystem semantics required by many ML frameworks, though it may have lower performance on write-heavy workloads.
  - **D)** **Coldline Archive Tape**: delivers sub-millisecond latency for real-time GPU training.
- **Correct Answer**: **A, B, C**
- **Explanation**: M3L4 (Slide 21) compares the 4 High Performance Object Storage options: Cloud Storage FUSE + HNS, Rapid Storage class, Anywhere Cache, and Managed Lustre.

#### Q142 — [M3L4 Connect Agent to Data]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: A customer stores CRM data in a `gs://CRM/` bucket structured into folders by table and month (`gs://CRM/Customer/Feb/`), and needs to grant `James@google.com` read permissions (`roles/storage.objectViewer`) **only on the February partition of the Customer table** without granting access to January or March. According to M3L4 (Slide 22), which Cloud Storage feature solves this?
  - **A)** **Cloud Storage Managed Folders**, applying a direct IAM policy binding to the managed folder (`gcloud alpha storage managed-folders add-iam-policy-binding gs://CRM/Customer/Feb/ --member=user:James@google.com --role=roles/storage.objectViewer`).
  - **B)** Creating a separate GCP project for every day of the year.
  - **C)** Making the entire bucket public on the internet.
  - **D)** Cloud Storage never allows IAM policies at the folder level under any circumstances.
- **Correct Answer**: **A**
- **Explanation**: M3L4 (Slide 22 'Cloud Storage Managed Folders') shows this exact scenario and command: `gcloud alpha storage managed-folders add-iam-policy-binding gs://CRM/Customer/Feb/ --member=user:James@google.com --role=roles/storage.objectViewer`.

#### Q143 — [M3L4 Connect Agent to Data]
- **Type**: `Multi-Response (2 correct options out of 4)`
- **Number of correct answers**: `2`
- **Question**: In the **Data Governance** layer of the M3L4 Blueprint (Slide 9), which Google Cloud services map to ensuring (1) **Data-to-AI Lineage** and (2) the **Enterprise Knowledge Graph**, respectively? *(Select the 2 correct options)*
  - **A)** For **Enterprise Knowledge Graph**: **Cloud Spanner**, **BigQuery**, **Graph Fabric**, and **Gemini Enterprise Knowledge Graph (KG)**.
  - **B)** For Data-to-AI Lineage: using only temporary `.txt` files in `/tmp` with no metadata.
  - **C)** For **Data-to-AI Lineage**: **Dataplex (Catalog, Lineage)** paired with **Vertex AI (ML Metadata, Experiments, Model Registry)**, enabling traceability of every agent response back to its original data source.
  - **D)** For Enterprise Knowledge Graph: using Cloud DNS exclusively.
- **Correct Answer**: **A, C**
- **Explanation**: M3L4 (Slide 9 'Data Capabilities for AI Agents: Mapping core capabilities with GCP services') maps Dataplex (Catalog, Lineage) + Vertex AI (ML Metadata, Experiments, Model Registry) to Data-to-AI Lineage, and Spanner, BigQuery, Graph Fabric, and Gemini Enterprise KG to Enterprise Knowledge Graph.

#### Q144 — [M3L4 Connect Agent to Data & Lab M3L05]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In lab `M3L05: Structured & Unstructured Data for Agents` (Day 4), which two core Google Cloud data repositories does the agent connect to bridge unstructured document processing with real-time structured SQL analytics?
  - **A)** Local Notepad files only.
  - **B)** Local floppy disks and LTO tapes.
  - **C)** Cloud Router and Cloud NAT.
  - **D)** **Google Cloud Storage (GCS)** for unstructured documents and **AlloyDB for PostgreSQL** for structured relational SQL data and analytics.
- **Correct Answer**: **D**
- **Explanation**: M3L1 (Slide 2) and the Day 3/4 recap specify that in Lab M3L05 the agent bridges unstructured documents in **Google Cloud Storage** with structured SQL analytics in **AlloyDB**.

#### Q145 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: According to M3L5 (Slides 8-10), agent observability on Google Cloud is built on the open standard **OpenTelemetry (OTel)** and its **GenAI Semantic Conventions** (`gen_ai.agent.id`, `gen_ai.conversation.id`, `gen_ai.usage.input_tokens`, etc.). What is the correct hierarchy of tracing concepts from the most atomic unit up to the full workflow?
  - **A)** OpenTelemetry only logs hard drive usage and does not support `gen_ai.*` attributes.
  - **B)** **SPAN** (a single timed atomic action, such as an LLM call or Tool call) → **TRACE** (end-to-end record of a single `user → agent` turn composed of multiple spans) → **SESSION** (a multi-turn conversation spanning multiple traces) → **TASK** (a background workflow orchestrating multiple agents).
  - **C)** TASK → SESSION → TRACE → SPAN (where TASK is a single function call and SPAN lasts several months).
  - **D)** All four concepts mean the exact same thing and have no hierarchical relationship.
- **Correct Answer**: **B**
- **Explanation**: M3L5 (Slides 8, 9, and 10 'OpenTelemetry Tracing 101') defines the exact hierarchy: SPAN (single atomic action: LLM call, Tool call) → TRACE (single turn: collection of spans) → SESSION (multi-turn conversation spanning multiple traces) → TASK (background workflow orchestrating multiple agents).

#### Q146 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M3L5 (Slide 14 'The Cost Challenge') highlights three headline cost-saving figures when optimizing AI inference in production. What are they?
  - **A)** Inference cost is fixed and independent of the number of tokens processed.
  - **B)** Pro models are 90% cheaper than Flash-Lite models.
  - **C)** 0% cache savings and a 200% surcharge for using Batch Inference.
  - **D)** A **3x** cost gap between Pro and Flash-Lite models, up to **90% savings** on cached tokens via **Context Caching**, and a **50% discount** via **Batch Inference** for asynchronous jobs.
- **Correct Answer**: **D**
- **Explanation**: M3L5 (Slide 14) highlights the three headline metrics: `3x cost gap between Pro and Flash-Lite models`, `90% savings on cached tokens with context caching`, and `50% discount via Batch inference for async jobs`.

#### Q147 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Multi-Response (3 correct options out of 4)`
- **Number of correct answers**: `3`
- **Question**: When selecting **Consumption Options** (M3L5 Slides 15-16) for a production agent's traffic profile, which of the following pairings are correct? *(Select the 3 correct options)*
  - **A)** For **mission-critical, steady-state, latency-sensitive workloads requiring SLA coverage**: cover baseline traffic with **Provisioned Throughput** (capacity commitment) and handle burst spillover with **Standard PayGo** or **Priority PayGo**.
  - **B)** For **latency-tolerant (near-real-time) tasks** that trade speed for lower per-token cost: choose **Flex PayGo**.
  - **C)** Purchase over-provisioned Provisioned Throughput sized to the single highest 1-minute peak of the year for a script that only runs in batch once a month.
  - **D)** For **large-scale asynchronous backlogs** such as document summarization, image labeling, or sentiment analysis: choose **Batch Inference** (lowest cost per token, with a 50% discount).
- **Correct Answer**: **A, B, D**
- **Explanation**: M3L5 (Slides 15-16) defines the 5 consumption options (Provisioned Throughput, Standard PayGo, Priority PayGo, Flex PayGo, and Batch Inference) and how to combine them for Latency-Sensitive vs. Async & Cost-Sensitive profiles.

#### Q148 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: In the **Model Routing** strategy (routing each query to the smallest model capable of solving it: Gemini Pro, Gemini Flash, or Gemini Flash-Lite), M3L5 (Slides 17-18) compares three router patterns: **Rule-Based**, **LLM-Based**, and **Semantic Routing**. Why is **Semantic Routing** recommended as the default production best practice?
  - **A)** Because it converts example queries into vectors (embeddings) and matches incoming queries by vector similarity in **~5 milliseconds** with **high quality**, avoiding both the brittleness of Rule-Based routing (<1ms but low quality on nuanced language) and the extra inference latency/cost of LLM-Based routing (500ms+).
  - **B)** Because it routes every simple greeting directly to Gemini Pro.
  - **C)** Because it requires an additional 10-second call to a Gemini Ultra model before every response.
  - **D)** Because it uses only static regular expressions (`if/else`) based on string length.
- **Correct Answer**: **A**
- **Explanation**: M3L5 (Slide 18 'Routing Patterns') compares Rule-Based (<1ms, Quality: Low), LLM-Based (500ms+, Quality: High), and Semantic (~5ms, Quality: High), concluding: 'Recommendation: Semantic routing is the default best practice — millisecond decisions, no extra LLM call overhead.'

#### Q149 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: M3L5 (Slide 19) distinguishes between **Implicit Caching** and **Explicit Caching** in Gemini to avoid reprocessing repeated tokens (with a 90% discount on Gemini 2.5+). What characterizes each, and what is the default TTL of Explicit Caching?
  - **A)** Context Caching increases token costs by 90%.
  - **B)** For Implicit Caching to work, variable user content must be placed at the start of the prompt and static instructions at the end.
  - **C)** **Implicit Caching** is enabled by default with zero setup (simply place large common content at the beginning of the prompt and send requests with similar prefixes close together in time); **Explicit Caching** allows manually declaring and managing caches via the Gemini API with a **60-minute default TTL** (ideal for large documents or system prompts reused across sessions).
  - **D)** Implicit Caching requires paying a separate license fee and Explicit Caching has a maximum TTL of 2 seconds.
- **Correct Answer**: **C**
- **Explanation**: M3L5 (Slide 19 'Context Caching') details that Implicit Caching is active by default (by placing large common content at the start of the prompt) and Explicit Caching is managed via API with a 60-minute default TTL and a 90% discount on cached tokens in Gemini 2.5+.

#### Q150 — [M3L5 Observability, Tracing, Telemetry & Cost optimisation]
- **Type**: `Single-Choice (1 correct option)`
- **Number of correct answers**: `1`
- **Question**: To close Module 3 (M3L5 Slide 20 'Putting It All Together'), what are the **4 sequential steps of Layered Optimization** that achieve compounded cost reduction in production agentic architectures?
  - **A)** Use a single model without caching or routing for all workloads.
  - **B)** 1. **Classify** (is it latency-sensitive, async, or batch-eligible?) → 2. **Consume** (Provisioned for steady-state, PayGo for variable traffic, Batch for bulk volume) → 3. **Route** (the Semantic Router directs each query to Pro, Flash, or Flash-Lite) → 4. **Cache** (reuse system instructions and document context for up to 90% token savings).
  - **C)** 1. Buy servers → 2. Compile kernel → 3. Disable network → 4. Archive.
  - **D)** 1. Cache → 2. Delete Logs → 3. Disable Security → 4. Use Pro for Everything.
- **Correct Answer**: **B**
- **Explanation**: M3L5 (Slide 20 'Putting It All Together') synthesizes the 4-layer methodology where each layer compounds savings: 1. Classify → 2. Consume → 3. Route → 4. Cache.
