# Multi-LLM Interaction Model for KingdomCraft Personas

## 1. Guiding Principle: GitHub is the Single Source of Truth

The KingdomCraft project is designed to be tool-agnostic. While development may occur within a specific IDE or with a primary AI assistant, the system's integrity relies on a single, canonical source of truth: **the project's GitHub repository.**

All persona files, guides, guardrails, and knowledge documents reside in this repository. This ensures that any authorized Large Language Model (LLM)—be it Claude, ChatGPT, or a future equivalent—can be brought into the project, given access to the same foundational knowledge, and tasked with operating as a specific persona.

This model provides flexibility, resilience, and prevents knowledge fragmentation or vendor lock-in.

## 2. The Persona Boot-Up Sequence

To ensure consistent behavior regardless of the LLM used, a persona is activated using a two-part boot-up sequence:

1.  **The Persona Prompt File:** The core identity, directives, and capabilities of the persona are defined in its markdown file located in `/personas/`. This is the first piece of information given to the LLM.
    *   *Example: `personas/billing_and_value_steward_persona.md`*

2.  **The Required Reading Document:** Each persona has a corresponding "Required Reading" document—a Markdown file that explicitly lists all the essential documents that persona must read and understand to perform its function. This document acts as a dynamic, version-controlled reading list.
    *   *Example: `personas/required_reading/billing_and_value_steward_required_reading.md`*
    *   *Note for Client-Specific Personas:* Personas dedicated to a specific client (e.g., the MarinBio Client Steward) will have their "Required Reading" document located within their client-specific directory structure, typically `clients/[ClientName]/required_reading/[persona_name]_required_reading.md`. This ensures their core knowledge is co-located with other client-specific assets.

### 2.1. Required Reading Document Structure

A "Required Reading" document is a Markdown file. It typically uses headers to categorize different types of essential knowledge and bulleted lists to enumerate the specific file paths the persona must review. These paths point to other documents within the project repository (e.g., persona definitions, guides, client-specific data, methodologies).

The primary purpose is to provide a clear, version-controlled list of all documents a persona needs to initialize its understanding and perform its role effectively. The persona prompt itself will instruct the AI to locate, load, and confirm understanding of the documents listed in its designated "Required Reading" file.

## 3. Practical Workflow Example (Using a Hypothetical LLM Project Feature)

Let's say you want to work with the `Billing and Value Steward` in a new Claude project or a custom ChatGPT session:

1.  **Create the Project/Session:** Start a new session in your chosen LLM environment.

2.  **Load the Persona Prompt:** Copy the entire content of `personas/billing_and_value_steward_persona.md` and paste it as the initial system prompt or first message.

3.  **Instruct on Required Reading:** The persona prompt itself (loaded in step 2) should contain instructions for the AI to locate and process its specific "Required Reading" document. As part of its initialization sequence, the persona should state that it is reviewing these documents. If direct loading by an external agent is needed, you would instruct the LLM:
    > "You are the Billing and Value Steward. Your persona definition includes an instruction to consult your 'Required Reading' document located at `personas/required_reading/billing_and_value_steward_required_reading.md`. Please confirm you will now load and process the documents listed within it. If you were unable to access it directly, I would provide the contents of each file listed in that document one by one."

4.  **Facilitate Knowledge Loading (If Necessary):** Ideally, the persona (LLM) will access and process these files based on the paths provided in its "Required Reading" document, using its available tools (like `view_file`). If the LLM indicates it cannot access these files directly, or if you are in an environment without direct file system access for the LLM, you would then manually provide the content of each listed file.

5.  **Begin Work:** Once the final document has been provided, the persona is fully booted and contextualized. You can now begin interacting with it to perform its designated tasks.

By following this model, we ensure that every persona, on every platform, operates from the exact same, version-controlled set of knowledge and instructions, making our AI-assisted workflow powerful, predictable, and portable.
