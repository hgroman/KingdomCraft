# KingdomCraft Client Onboarding Protocol

**Version:** 1.0
**Date:** 2025-06-16

## 1. Purpose

This document outlines the standardized process for onboarding new clients into the KingdomCraft system. Its objective is to ensure comprehensive information gathering, consistent client profile creation, and a smooth handover to the dedicated Client Steward persona. This protocol is to be executed by the `Client Onboarding Specialist Persona`.

## 2. Scope

This protocol covers all activities from initial client engagement (post-contract) to the point where a complete Client Profile is established in the `clients/[ClientName]/profile/` directory and is ready for consumption by the `[ClientName] Client Steward Persona`.

## 3. Onboarding Phases & Procedures

### 3.1. Phase 1: Initial Information Gathering & Setup

#### 3.1.1. Create Client Directory Structure
   - Action: Create `clients/[ClientName]/` directory.
   - Action: Create `clients/[ClientName]/profile/` subdirectory.
   - Action: Create `clients/[ClientName]/transcripts/` subdirectory.
   - Action: Create `clients/[ClientName]/source_materials/` subdirectory (for raw documents, website scrapes, etc.).
   - Action: Create `clients/[ClientName]/work_products/` subdirectory (for deliverables produced for the client).

#### 3.1.2. Preliminary Client Research (Pre-Questionnaire)
   - **Objective:** Gather publicly available information to pre-populate parts of the Client Profile and tailor the Client Questionnaire.
   - **Sources:**
      - Client's primary website (scrape all relevant pages: About Us, Services, Products, Blog, Contact, Case Studies, Team).
      - LinkedIn profiles (company and key executives).
      - Industry-specific databases or publications.
      - News articles or press releases about the client.
   - **Output:** Store raw scraped data and research notes in `clients/[ClientName]/source_materials/`.

### 3.2. Phase 2: Client Questionnaire & Direct Engagement

#### 3.2.1. Prepare & Send Client Questionnaire
   - Action: Customize the standard `Client_Questionnaire_Template.md` (see Appendix A) based on preliminary research.
   - Action: Send questionnaire to the primary client contact.
   - **Note:** The questionnaire aims to fill gaps from public research and gather internal perspectives, specific goals, target audience details, brand voice nuances, technical constraints, etc.

#### 3.2.2. Collect All Communication Transcripts
   - **Action:** Diligently collect all available transcripts of client communications (kick-off meetings, subsequent update calls, workshops, etc.).
   - **Action:** Ensure all collected transcripts are accurately dated and stored in `clients/[ClientName]/transcripts/`.
   - **Objective:** Create a comprehensive repository of client interactions to support deep understanding and ongoing analysis. This raw data is crucial for the Client Steward and potential SME personas.

### 3.3. Phase 3: Client Profile Population

   - **Objective:** Synthesize all gathered information (research, questionnaire, interviews, transcripts) into the standardized Client Profile documents within `clients/[ClientName]/profile/`.
   - **Responsibility:** `Client Onboarding Specialist Persona`.
   - **Note on Further Analysis:** The Client Profile and source materials (especially transcripts) populated by the Onboarding Specialist serve as a foundational dataset. These will be subject to deeper, ongoing analysis and strategic interpretation by the `[ClientName] Client Steward Persona` and any activated Subject Matter Expert (SME) sub-personas (e.g., industry-specific SMEs, competitive analysis SMEs).

   - **Standard Client Profile Documents to Populate:**
      - **`overview.md`**: 
         - Mission Statement
         - Vision
         - Core Values
         - Key Products/Services (brief descriptions)
         - Target Audience(s)
         - Unique Selling Propositions (USPs)
         - Primary Business Goals (related to KingdomCraft engagement)
      - **`brand_guidelines.md`**: 
         - Logos (links or embedded, usage rules)
         - Color Palette (Primary, Secondary, Accent - with HEX/RGB values)
         - Typography (Heading fonts, Body fonts, usage rules)
         - Tone of Voice (keywords, adjectives, do's and don'ts)
         - Imagery Style (if applicable)
      - **`executive_team.md`**: 
         - Key Contacts (Name, Title, Role in Project, Email, Phone - if provided)
         - Organizational Chart (if available/relevant, link or embed)
      - **`active_projects.md`**: 
         - Summary of current DART tasks or project briefs related to KingdomCraft.
         - Links to relevant Work Orders or project management tools.
      - **`technical_profile.md`**: (Create if applicable)
         - Website Platform (WordPress, Shopify, custom, etc.)
         - Key Software/Tools used by client relevant to engagement.
         - Existing Marketing Automation Platforms.
         - Analytics Platforms.
      - **`industry_and_competitor_analysis.md`**: (Create if applicable)
         - Brief overview of the client's industry.
         - List of 3-5 key competitors with brief notes.

### 3.4. Phase 4: Validation & Handover

#### 3.4.1. Internal Review
   - Action: `Client Onboarding Specialist Persona` reviews the populated Client Profile for completeness and accuracy against this protocol.

#### 3.4.2. (Optional) Client Validation
   - Action: Share key sections of the populated Client Profile (e.g., `overview.md`, `brand_guidelines.md`) with the client for validation, if appropriate.

#### 3.4.3. Handover to Client Steward
   - Action: Notify the `KingdomCraft Steward Persona` that client onboarding for `[ClientName]` is complete.
   - Action: The `KingdomCraft Steward Persona` then activates/assigns the `[ClientName] Client Steward Persona`.
   - Action: The `[ClientName] Client Steward Persona`'s first task is to thoroughly review all documents in `clients/[ClientName]/profile/` and the collected materials in `clients/[ClientName]/source_materials/` and `clients/[ClientName]/transcripts/`. This review will inform their strategic approach and the potential need to activate or leverage specialized SME sub-personas to address specific client needs or industry nuances.

## 4. Appendix

### Appendix A: Client Questionnaire Template
   - *(To be developed - This section will contain a template of questions covering company background, goals, audience, brand, technical aspects, etc.)*

## 5. Protocol Version History

- v1.1 (2025-06-16): Enhanced to include comprehensive transcript collection, clarification on deeper analysis by Client Steward/SMEs, and Steward's role in leveraging SME sub-personas.
- v1.0 (2025-06-16): Initial Draft.
