# Project Archivist Cleanup Discussion
_Exported on 5/16/2025 at 13:58:00 PDT from Cursor (0.50.4)_

---

**User**

@project_archivist_cleanup_specialist.md 

---

**Cursor**

Okay, I will adopt the persona of the Project Archivist & Cleanup Specialist.

I understand my role as the Project Archivist & Cleanup Specialist for the EmailForge project. My objective is to execute `WO001_Legacy-Asset-Audit-Archival.md` by identifying, inventorying, and processing legacy non-MJML assets under the guidance of the MJML Component Architect. I am ready to begin.

I will await explicit confirmation from Hank Groman to commence Phase 1 of Work Order `WO001_Legacy-Asset-Audit-Archival.md`.

---

**User**

Confirmed. Rock and roll

---

**Cursor**

Okay, I will now commence Phase 1 of Work Order `WO001_Legacy-Asset-Audit-Archival.md`.

As per my instructions, my first step is to read `WO001_Legacy-Asset-Audit-Archival.md` in its entirety. I will search for this file.

I have located the file at `work_orders/active/WO001_Legacy-Asset-Audit-Archival.md`. Now, I will read its content.

I have read the Work Order `WO001_Legacy-Asset-Audit-Archival.md`.

Next, as per the Work Order and my persona instructions, I need to consult `docs/guides/Work_Order_Process.md` for procedural adherence. I will search for this file.

I've found `Work_Order_Process.md` at `docs/guides/Work_Order_Process.md`. I will now read it.

I have now read `WO001_Legacy-Asset-Audit-Archival.md` and `docs/guides/Work_Order_Process.md`.

I will now proceed with **Phase 1: Define Scope & Discovery Strategy** as outlined in `WO001_Legacy-Asset-Audit-Archival.md`.

The first two items in Phase 1 require confirmation from the Architect (Hank Groman):
*   `[ ] Finalize Target Directories for Audit (Default proposal: production/emails/, docs/ (excluding new component docs), input/, other non-MJML asset folders). Confirm with Architect.`
*   `[ ] Finalize "Legacy Non-MJML" Criteria (Default proposal: non-MJML .html emails, old HTML system docs, related scripts/configs/assets, templates/IMPLEMENTATION_GUIDE.md). Confirm with Architect.`

Please review these proposals and provide confirmation or amendments.

Regarding "other non-MJML asset folders," I will need to list the project's root directory to identify potential candidates if you don't have specific ones in mind.

Once these are confirmed, I will proceed to plan the automated scans and `grep_search` strategy.

---

**User**

confirmed

---

**Cursor**

Okay, your confirmation is noted.

I will now update the Work Order `WO001_Legacy-Asset-Audit-Archival.md` to mark the first two tasks of Phase 1 as complete.

```markdown
// ... existing code ...
    **Phase 1: Define Scope & Discovery Strategy**
    *   [x] Finalize Target Directories for Audit (Default proposal: `production/emails/`, `docs/` (excluding new component docs), `input/`, other non-MJML asset folders). Confirm with Architect.
    *   [x] Finalize "Legacy Non-MJML" Criteria (Default proposal: non-MJML `.html` emails, old HTML system docs, related scripts/configs/assets, `templates/IMPLEMENTATION_GUIDE.md`). Confirm with Architect.
    *   [ ] Plan automated scans (recursive `list_dir`, targeted `.html` and `.md` listings).
// ... existing code ...
```

The Work Order has been updated.

Next, to identify "other non-MJML asset folders", I will list the contents of the project root directory.

Based on the root directory listing and the confirmed target directories (`production/emails/`, `docs/`, `input/`), here are some additional potential directories/files that might contain legacy non-MJML assets:

*   `templates/`: The work order specifically mentions `templates/IMPLEMENTATION_GUIDE.md` as a legacy criterion. This directory itself should be audited.
*   `scripts/`: This could contain old build scripts, utility scripts, or scripts related to a previous non-MJML workflow.
*   `build/`: Might contain old build outputs.
*   `output/`: Could contain outputs from old processes.
*   `assets/`: May contain images or other assets tied to old, non-MJML templates.
*   `styles/`: Could contain CSS not related to MJML components (though MJML can use external CSS, we should check if these are tied to legacy HTML).
*   Root directory files: Files like `Dragon CoPilot.emltpl` seem like they could be email templates. We need to check if they are MJML or not.

**Proposal for Additional Target Directories/Files for Audit:**
*   `templates/`
*   `scripts/`
*   `build/`
*   `output/`
*   `assets/`
*   `styles/`
*   Any loose `.html`, `.emltpl`, or other potential email template files in the root directory.

Please confirm or amend this list of additional targets.

Once confirmed, I will incorporate these into the audit plan and proceed with planning the automated scans and `grep_search` strategy for all confirmed target areas.

---

**User**

Confirmed

---

**Cursor**

Okay, your confirmation for the additional target directories is noted. The full list of target areas for the audit now includes:

*   `production/emails/`
*   `docs/` (with the note to distinguish new component docs later)
*   `input/`
*   `templates/`
*   `scripts/`
*   `build/`
*   `output/`
*   `assets/`
*   `styles/`
*   Root directory (for loose `.html`, `.emltpl`, etc.)

Now, I will outline the plan for the remaining items in Phase 1:

**1. Plan for Automated Scans:**
*   **Objective:** To get a comprehensive list of all files within the target directories.
*   **Actions:**
    *   For each confirmed target directory (and the root directory), I will perform a recursive `list_dir` operation to catalog all files and subdirectories.
    *   I will pay special attention to identifying all `.html`, `.md`, and `.emltpl` files within these areas, as these are highly likely to be or contain legacy assets per the "Legacy Non-MJML" criteria.
    *   For the `docs/` directory, I will list all files and plan to work with you during Phase 3 (Detailed Assessment) to differentiate new component documentation from legacy documents, unless a clear pattern emerges during the scan.

**2. Plan for Keyword/Pattern `grep_search` Strategy:**
*   **Objective:** To identify files that are likely legacy based on their content.
*   **"Legacy Non-MJML" Criteria Reminder:** Non-MJML `.html` emails, old HTML system docs, related scripts/configs/assets, and `templates/IMPLEMENTATION_GUIDE.md`.
*   **Actions & Keywords:**
    *   **Identify Non-MJML HTML:**
        *   Search within `.html` files for common HTML structures (e.g., `<html>`, `<body>`) while also noting the *absence* of MJML-specific tags (e.g., `<mjml>`, `<mj-body>`). This might involve a multi-step process: first list all `.html`, then examine content.
        *   Search for files containing `<!DOCTYPE html>` as a general indicator of an HTML document.
    *   **Identify Old System Docs:**
        *   In `.html` and `.md` files (especially in `docs/` and `templates/`), search for terms like: "legacy system", "old documentation", "deprecated guide", "previous version".
        *   I will read `templates/IMPLEMENTATION_GUIDE.md` shortly to see if its content provides specific keywords or phrases that indicate legacy status, which can then be used in wider searches.
    *   **Identify Related Scripts/Configs/Assets:**
        *   In `scripts/`, look for older script types (e.g., `.sh`, `.pl`, or `.js` files that don't seem related to the current Node.js/MJML stack).
        *   Look for configuration files for deprecated tools (e.g., old `Gruntfile.js`, `Gulpfile.js` if those were used).
        *   The `assets/` and `styles/` directories will be reviewed in conjunction with identified legacy HTML to see if they contain dependent resources.
    *   **Old Component Names/Phrases:** This is a key area. If there are known old component names, project codenames, or specific phrases used in previous versions of templates or documentation, please provide them. This will significantly improve the accuracy of the `grep_search`. If not readily available, I will look for patterns during the initial inventory.

First, I will read `templates/IMPLEMENTATION_GUIDE.md` to help refine the `grep_search` strategy.

Having read `templates/IMPLEMENTATION_GUIDE.md`, it seems to describe a *modular HTML template system*, not an MJML one. This file itself, and the `templates/` directory structure it describes (e.g., `layouts/base-template.html`, `components/.../*.html`), are strong candidates for being "legacy non-MJML assets" based on the project's goal to move to an MJML-centric workflow.

This provides excellent specific keywords and paths for the `grep_search` and inventory process:
*   The file paths mentioned within `IMPLEMENTATION_GUIDE.md` (e.g., `layouts/base-template.html`, `components/headers/logo-header.html`, etc.) are now high-priority items to locate and assess.
*   Phrases like "modular email template system", "base HTML structure", and references to copying HTML components are good indicators of the old system.

The plan for automated scans and `grep_search` is now more refined.

I will now update the Work Order `WO001_Legacy-Asset-Audit-Archival.md` to mark the planning tasks of Phase 1 as complete.

```markdown
// ... existing code ...
    *   [x] Finalize "Legacy Non-MJML" Criteria (Default proposal: non-MJML `.html` emails, old HTML system docs, related scripts/configs/assets, `templates/IMPLEMENTATION_GUIDE.md`). Confirm with Architect.
    *   [x] Plan automated scans (recursive `list_dir`, targeted `.html` and `.md` listings).
    *   [x] Plan keyword/pattern `grep_search` strategy (e.g., old component names, specific phrases).

    **Phase 2: Inventory & Initial Assessment (AI Execution)**
// ... existing code ...
```

Phase 1 is now complete. All tasks under "Phase 1: Define Scope & Discovery Strategy" in `WO001_Legacy-Asset-Audit-Archival.md` are marked as done.

I am ready to proceed to **Phase 2: Inventory & Initial Assessment (AI Execution)**. This involves:
*   `[ ] Execute planned directory listings and file searches.`
*   `[ ] Compile an initial inventory list of potentially legacy non-MJML assets.`
*   `[ ] Perform a preliminary categorization based on file type and location.`

I will begin by executing the planned directory listings for the confirmed target areas. This will be done systematically, directory by directory, to build up a comprehensive file list.

Are there any specific "old component names" or "project codenames" you recall from before the MJML system that I should include in my `grep_search` strategy during this phase? Providing these now would be very helpful. If not, I will proceed with the general keywords and patterns identified.

---

**User**

you may proceed

---

**Cursor**

Okay, I will now commence **Phase 2: Inventory & Initial Assessment**.

I will start by listing the contents of the `templates/` directory, as it has been identified as a high-priority area for legacy assets.

The `templates/` directory contains:
*   `.DS_Store` (macOS system file, likely irrelevant)
*   `components/` (directory) - This was mentioned in `IMPLEMENTATION_GUIDE.md` as part of the old HTML system.
*   `mjml-compiled/` (directory) - This sounds like it contains MJML outputs. We need to investigate if these are current or old.
*   `mjml-source/` (directory) - This sounds like it contains MJML source files. These are likely current, but we should confirm.
*   `IMPLEMENTATION_GUIDE.md` (file) - We've already assessed this as describing a legacy HTML system.
*   `layouts/` (directory) - Mentioned in `IMPLEMENTATION_GUIDE.md` as part of the old HTML system.
*   `campaigns/` (directory) - Mentioned in `IMPLEMENTATION_GUIDE.md` as part of the old HTML system.
*   `promotional/` (directory) - New, needs investigation.
*   `starters/` (directory) - New, needs investigation.
*   `base/` (directory) - New, needs investigation.

Based on `IMPLEMENTATION_GUIDE.md`, the subdirectories `components/`, `layouts/`, and `campaigns/` within `templates/` are highly likely to contain legacy HTML assets.

The directories `mjml-compiled/` and `mjml-source/` need to be investigated to determine if they are part of the *current* MJML workflow or perhaps an older, now superseded, MJML setup.

I will now list the contents of `templates/components/`.

The `templates/components/` directory contains several subdirectories (e.g., `structure/`, `content/`, `headers/`, `footers/`, `cta-buttons/`, `feature-cards/`, `content-blocks/`). This matches the structure described in `IMPLEMENTATION_GUIDE.md` for the old HTML template system.

I will now list the contents of one of these, for example, `templates/components/headers/`, to see if it contains `.html` files as expected.

Yes, `templates/components/headers/` contains `gradient-banner.html` and `logo-header.html`. These were specifically mentioned in the `IMPLEMENTATION_GUIDE.md` as components of the old HTML system.

This strongly suggests that `templates/components/` and its subdirectories are filled with legacy non-MJML HTML files. I will make a note of this for the inventory.

Next, I'll examine `templates/layouts/`.

The `templates/layouts/` directory contains `base-template.html`. This file was also explicitly mentioned in `IMPLEMENTATION_GUIDE.md` as the "Base HTML structure for all emails" in the old system. This is another strong candidate for a legacy asset.

Next, I'll examine `templates/campaigns/`.

The `templates/campaigns/` directory contains:
*   `Dragon-Copilot-Mac.html`
*   `sample-product-announcement.html` (This was mentioned in `IMPLEMENTATION_GUIDE.md` as a sample using the old HTML system)
*   `promotional/` (directory)
*   `seasonal/` (directory)

The `.html` files here are very likely legacy non-MJML emails. The subdirectories `promotional/` and `seasonal/` within `templates/campaigns/` also need to be investigated.

Let's look into `templates/campaigns/promotional/`.

And `templates/campaigns/seasonal/`.

The `templates/campaigns/promotional/` and `templates/campaigns/seasonal/` directories also contain `.html` files, which are likely legacy campaign emails.

**Summary for `templates/` subdirectories related to `IMPLEMENTATION_GUIDE.md`:**
*   `templates/components/...` (various subdirectories with `.html` files) - Legacy HTML components.
*   `templates/layouts/base-template.html` - Legacy HTML base template.
*   `templates/campaigns/...` (various `.html` files and subdirectories with more `.html` files) - Legacy HTML campaign emails.
*   `templates/IMPLEMENTATION_GUIDE.md` - Documentation for the legacy HTML system.

These will all be added to the initial inventory as "highly likely legacy non-MJML."

Now, let's investigate the other directories found in `templates/`: `mjml-compiled/`, `mjml-source/`, `promotional/`, `starters/`, and `base/`.

Starting with `templates/mjml-source/`.

`templates/mjml-source/` contains `.mjml` files:
*   `dax-price-redux-former-subscriber-TEMP.mjml`
*   `pilot-template.mjml`

These are MJML source files. According to the project's objective to move to an MJML-centric workflow, these could be current assets. However, the presence of "TEMP" in one filename suggests it might be temporary or a draft. We need to be careful. For now, I'll note them. Their "legacy" status will need careful review with the Architect in Phase 3, especially to understand if they are actively used or are remnants of an earlier MJML development phase.

Next, `templates/mjml-compiled/`.

`templates/mjml-compiled/` contains:
*   `dax-price-redux-former-subscriber.html`
*   `dax-price-redux-former-subscriber-FOR-OUTLOOK.eml`
*   `pilot-template.html`

These appear to be the compiled HTML (and `.eml`) outputs of the `.mjml` files found in `templates/mjml-source/`. Their status (legacy vs. current) will depend on the status of their corresponding source files.

Now for the remaining directories directly under `templates/`: `promotional/`, `starters/`, and `base/`.

`templates/promotional/`:

`templates/promotional/` contains:
*   `expenses.js` - A JavaScript file. This could be related to a legacy template or an old tool. Needs investigation.
*   `dmo-5-user-power-mic-promo.html` - An HTML file, likely a legacy email.

`templates/starters/`:

`templates/starters/` contains `EMAIL_TEMPLATE_STARTER.html`. The name suggests it could be a base for old HTML emails.

`templates/base/`:

`templates/base/` contains `base-template.html`. This is interesting, as `templates/layouts/` also contained a `base-template.html`. We'll need to compare them. This one is also likely a legacy HTML asset.

This completes the initial listing for the `templates/` directory and its subdirectories.
I will now move to the next target directory: `production/emails/`.

The `production/emails/` directory contains `.DS_Store` and a subdirectory `campaigns/`.
I will now list the contents of `production/emails/campaigns/`.

The `production/emails/campaigns/` directory contains a mix of files:
*   Many `.html` files: These are prime candidates for being non-MJML emails, or compiled outputs from MJML that are now considered "production". We will need to inspect them or apply `grep_search` to determine if they are MJML-generated or raw HTML.
*   `.json` files: (e.g., `Dragon Copilot 1 of 3.json`). These could be data files for templates, or configuration. Their relevance to "legacy non-MJML" needs to be assessed.
*   `.md` files: These appear to be documentation or work order related files (e.g., `Work Order: Progress and Summary with Overview.md`). Some might be relevant if they describe old systems, others might be project meta-files. The file `_Dragon Copilot 1 of 3.md` is unusually large for a markdown file and has an underscore prefix, warranting a closer look.

The presence of "Brevo" and "HubSpot" in filenames (e.g., `Black-Friday-DMO-Brevo.html`, `Black-Friday-DMO-HubSpot.html`) aligns with the platform-specific adaptations mentioned in the legacy `IMPLEMENTATION_GUIDE.md`. This suggests these HTML files might be from the old system.

Files with "copy" or "backup" in their names (e.g., `Dragon Copilot 1 of 3 copy.html`, `Dragon-Copilot-backup-03.15.25.html`) are also suspicious and could be legacy.

Next target directory: `docs/`.

The `docs/` directory contains several subdirectories:
*   `guides/`: Likely contains process guides like the `Work_Order_Process.md` we've already seen. Some guides could be outdated.
*   `components/`: This is a key directory. The work order specifies "excluding new component docs". So, this directory might contain both current MJML component documentation and potentially older, non-MJML component documentation. This will require careful review in Phase 3.
*   `archive/`: This directory might already contain archived materials. We should check if it aligns with the new archive location we plan to create (`archive/legacy_assets_YYYYMMDD/`) or if it's an older, ad-hoc archive.
*   `legacy/`: The name itself suggests it contains legacy documents. This is a high-priority subdirectory to investigate.
*   `learning/`, `strategy/`, `reference/`, `content/`, `data/`: These will need to be explored to see if they contain outdated non-MJML documentation or assets.

Let's look into `docs/legacy/` first.

`docs/legacy/` contains a `README.md` and another `components/` directory. This `docs/legacy/components/` is a strong candidate for containing documentation about old, non-MJML components. I'll list its contents.

The `docs/legacy/components/` directory contains `.md` files like `header.md`, `feature-cards.md`, and `buttons.md`. These are very likely documentation for legacy components, possibly related to the HTML components found in `templates/components/`.

Now, let's check `docs/archive/`.

The `docs/archive/` directory contains various `.md` files like `dragon_email_design_system.md`, `email-template-docs.md`, `EMAIL_STYLE_GUIDE.md`. These appear to be older documentation or design system notes that have already been archived. These are likely legacy. We should review them to see if they need to be moved to the new standardized archive location or if their current location is acceptable.

Next, `docs/components/`. This is the one where we need to differentiate new from old. Listing it will give us an overview.

The `docs/components/` directory has subdirectories like `structure/`, `content/`, `common/`, etc. This is very similar to the structure found in `templates/components/` (the legacy HTML components). This might indicate that `docs/components/` also contains documentation for the old HTML component system rather than new MJML components. This will be a key area for review with the Architect.

To get a sample, I'll list one of these, e.g., `docs/components/headers/`.

`docs/components/headers/` is empty. This is unexpected if it were to mirror `templates/components/headers/` which had `logo-header.html` and `gradient-banner.html`.
Let's try another one, `docs/components/content_blocks/`.

`docs/components/content_blocks/` is also empty. This is puzzling.
Perhaps the actual documentation files are directly within `docs/components/` or the directory structure noted in `IMPLEMENTATION_GUIDE.md` for `templates/components` did not have a direct mirror in `docs/components` in terms of file population, only similar folder names.

Let me re-list `docs/components/` but this time checking for files at its top level.
It seems the previous `list_dir` output for `docs/components/` only showed directories. I should have checked if `list_dir` shows files if directories are also present at the same level. The schema implies it should list all entries.

Let's assume for now that if there were markdown files directly in `docs/components/`, they would have been listed. The work order for excluding "new component docs" implies some component docs exist.
The primary MJML component documentation might be located elsewhere, or perhaps the "new component docs" are the ones that *aren't* in `docs/components/` or `docs/legacy/components/`.

I will make a note to specifically ask the Architect during Phase 3 about the current location of MJML component documentation to help differentiate.

Moving on to the next target directory: `input/`.

The `input/` directory contains:
*   `.html` and `.emltpl` files: (e.g., `latest-dax-price-redux-2-former-subscriber.html`, `Dragon CoPilot - Brevo.emltpl`). These could be raw HTML inputs, test emails, or templates from external sources. Files with "copy" in the name like `Dragon CoPilot - Brevo copy.emltpl` or `[copy 3] New email-7.emltpl` are suspicious. `bee-free-template.html` suggests an external template.
*   `.md` files: (e.g., `Dax-1.9-Release-Blog-Content.md`, `WO-Email - Dragon CoPilot.md`). These seem like content inputs for emails or work orders. Their "legacy" status depends on whether the content or related processes are outdated.

Next target directory: `scripts/`. There are two `scripts/` entries in the root listing. I'll try the one that was listed as `path= scripts/` first, assuming it might be a typo in the listing and it's just `scripts/`. If not, I'll try the other.

The `scripts/` directory contains a `.DS_Store` file and a `build/` subdirectory. This `scripts/build/` might contain build scripts. Let's look inside.

`scripts/build/` contains `process-templates.js`. A JavaScript file for processing templates. This could be related to the old HTML template system or an old MJML build process. We'll need to examine its content or look for usage patterns later.

Now checking the other potential `scripts/` directory that was listed simply as `scripts/` without `path=`. It's possible the `list_dir` output was just showing two views of the same directory earlier or there was a slight inconsistency in the output. If it's the same, the tool should handle it gracefully.

It's the same directory. Good.

Next target directory: `build/`.

The root `build/` directory contains `inject-copy.js`. This is another JavaScript file, possibly a utility script. Its relevance to legacy assets needs to be determined, perhaps by checking if it's used by any current processes.

Next target directory: `output/`.

The `output/` directory contains:
*   Several `.html` files (e.g., `dragon-copilot-email.html`, `Dax-1.9-Relase-blog-post.html`, `landing-page-helium.html`). These could be outputs from the old HTML system, old MJML compilations, or even current MJML outputs not yet moved to a production/distribution location.
*   `.md` files (e.g., `wordpress-landing-page-template.md`, `Landing Page - Dragon CoPilot.md`). These might be source content or compiled documentation.

The file `hello-world.html` is often a test file and might be irrelevant or legacy.

Next target directory: `assets/`.

The `assets/` directory contains an `email-images/` subdirectory. This is likely where images for emails are stored. We'll need to check if these images are referenced by legacy HTML emails or by current MJML templates. Listing its content:

`assets/email-images/` contains various PNG image files. During Phase 3, when assessing individual legacy HTML files, we will need to check if they reference these images. Unused images or images only used by legacy templates would be considered legacy assets.

Next target directory: `styles/`.

The `styles/` directory contains `main.css`. This CSS file could be:
*   Used by legacy HTML templates.
*   Referenced by current MJML templates (MJML supports external CSS).
*   An orphan file no longer in use.
Its content and references will need to be checked.

Finally, I need to check the **root directory** for any loose `.html`, `.emltpl`, or other potential email template files. I'll re-use the previous root listing for this and filter for such files.

From the earlier root listing:
*   `Dragon CoPilot.emltpl` (59KB, 877 lines) - This is a `.emltpl` file directly in the root, a strong candidate for being a legacy template or an unorganized current one.

This completes the initial directory listing pass for all target areas.

The next step in Phase 2 is to **compile an initial inventory list** of potentially legacy non-MJML assets based on these findings and the defined criteria. I will then perform a preliminary categorization.

Given the volume of files, I will summarize the findings and create this initial inventory. This inventory will be a list of files and directories that are suspected to be legacy, along with a brief reason.

I will then present this inventory list to you.

Before I generate the full inventory list, I should use `grep_search` to refine the identification of non-MJML HTML files, particularly in `production/emails/campaigns/` and `output/` where there's a mix of HTML files.

**`grep_search` Plan:**
1.  Search for `.html` files that *do not* contain `<mjml>` or `<mj-body>` tags. These are likely non-MJML.
2.  Search for `.html` files in `templates/components/`, `templates/layouts/`, and `templates/campaigns/` (and their subdirectories) as these are already strongly suspected to be the old HTML system. The `grep_search` here will be more for confirmation and to ensure we catch everything.
3.  Search for the specific filenames found in `IMPLEMENTATION_GUIDE.md` (e.g., `base-template.html`, `logo-header.html`) to confirm their nature.
4.  Search for keywords like "modular email template system" or "base HTML structure" in `.md` and `.html` files to identify related documentation or comments.

Let's start with `grep_search` for HTML files in `production/emails/campaigns/` that seem to be non-MJML. I will search for files that contain `<html>` but *not* `<mjml>`. This is a heuristic and might need refinement. A direct "does not contain <mjml>" is tricky with `grep`, so I'll first list files with `<html>` and then we'd typically need a second step or manual review. For now, I'll focus on finding `<html>` as a positive indicator of an HTML file that isn't necessarily MJML.

Actually, a better `grep_search` for non-MJML HTML would be to look for typical HTML boilerplate like `<!DOCTYPE html>` and `<body>` and then, in a separate step (or during manual review in Phase 3), confirm the absence of MJML tags. Many MJML compiled files will also have `<!DOCTYPE html>` but will also contain `<mjml>` in comments or specific MJML classes.

Let's try to find files that are definitively part of the old system described in `IMPLEMENTATION_GUIDE.md`. I will search for the exact phrase "modular email template system" which was present in that guide.

This `grep_search` found:
*   `templates/IMPLEMENTATION_GUIDE.md`: Expected, as this is where the phrase originates.
*   `README.md`: It mentions "modular email template system designed for creating ... **using the MJML framework**". This is describing the *current* system, not the legacy one. So, this is not a legacy hit.
*   `Chats/...`: A chat log, not a project asset for cleanup.

This specific phrase was perhaps too unique to the guide itself.

Let's try searching for a structural element mentioned in `IMPLEMENTATION_GUIDE.md`, like the path `layouts/base-template.html`. This might appear in comments or include directives in actual legacy HTML files.

Again, only found in the guide itself. This indicates that the old HTML files might not explicitly reference this path in comments. They likely just *are* those files.

Given the strong indications from the directory structures (`templates/components/`, `templates/layouts/`, `templates/campaigns/`) and the contents of `IMPLEMENTATION_GUIDE.md`, I will proceed with compiling the inventory. The `grep_search` for general non-MJML patterns (e.g., HTML files lacking MJML tags) will be more useful once I have the full list of candidate HTML files from all locations.

I will now start creating the initial inventory list. This will be a somewhat long message as I collate all the findings.

**Initial Inventory of Potentially Legacy Non-MJML Assets**

This inventory is based on directory listings and initial assessment against the "Legacy Non-MJML" criteria. Items will be presented to the Architect for final decision in Phase 3.

**Category Key:**
*   **HL-LHTML:** Highly Likely Legacy HTML (from old system described in `IMPLEMENTATION_GUIDE.md`)
*   **L-LHTML:** Likely Legacy HTML (generic HTML files, not confirmed MJML output)
*   **L-LMD:** Likely Legacy Markdown (old docs, guides)
*   **L-LJS:** Likely Legacy JavaScript (old scripts)
*   **L-LCONF:** Likely Legacy Configuration/Data
*   **L-LIMG:** Likely Legacy Image (associated with L-LHTML)
*   **L-LCSS:** Likely Legacy CSS (associated with L-LHTML)
*   **SUS:** Suspicious (needs closer inspection, could be current or legacy MJML, or utility)
*   **ARC:** Already Archived (found in an existing archive folder)

---

**I. `templates/` Directory & Subdirectories:**

*   **`templates/IMPLEMENTATION_GUIDE.md`**: (L-LMD) - Documentation for the old HTML system.
*   **`templates/components/` (and all its subdirectories & `.html` files within):** (HL-LHTML)
    *   Example files found: `templates/components/headers/gradient-banner.html`, `logo-header.html`.
    *   Reason: Matches structure and purpose described in `IMPLEMENTATION_GUIDE.md`.
*   **`templates/layouts/base-template.html`**: (HL-LHTML)
    *   Reason: Explicitly named in `IMPLEMENTATION_GUIDE.md` as the base for the old system.
*   **`templates/campaigns/` (and its subdirectories `promotional/`, `seasonal/` & all `.html` files within):** (HL-LHTML)
    *   Example files found: `sample-product-announcement.html`, `Dragon-Copilot-Mac.html`, `promotional/Dragon-Medical-One-Mac.html`, `seasonal/Black-Friday-DMO.html`.
    *   Reason: Matches structure and purpose described in `IMPLEMENTATION_GUIDE.md`.
*   **`templates/mjml-source/dax-price-redux-former-subscriber-TEMP.mjml`**: (SUS) - MJML file, "TEMP" in name.
*   **`templates/mjml-source/pilot-template.mjml`**: (SUS) - MJML file, status to be confirmed.
*   **`templates/mjml-compiled/dax-price-redux-former-subscriber.html`**: (SUS) - Compiled from `mjml-source/`, status depends on source.
*   **`templates/mjml-compiled/dax-price-redux-former-subscriber-FOR-OUTLOOK.eml`**: (SUS) - Compiled from `mjml-source/`, status depends on source.
*   **`templates/mjml-compiled/pilot-template.html`**: (SUS) - Compiled from `mjml-source/`, status depends on source.
*   **`templates/promotional/expenses.js`**: (L-LJS) - JavaScript file, context unclear, potentially old utility.
*   **`templates/promotional/dmo-5-user-power-mic-promo.html`**: (L-LHTML) - HTML file, likely legacy email.
*   **`templates/starters/EMAIL_TEMPLATE_STARTER.html`**: (L-LHTML) - Name suggests a base for old HTML emails.
*   **`templates/base/base-template.html`**: (L-LHTML) - Another base template, likely legacy HTML.

**II. `production/emails/campaigns/` Directory:**

*   Many `.html` files (e.g., `Dragon Copilot 1 of 3 copy.html`, `Dragon-Copilot-backup-03.15.25.html`, `EHR-ZORIKA-75k.html`, `Black-Friday-DMO-Brevo.html`, `Helium-Dragon-Production.html`): (L-LHTML / SUS)
    *   Reason: Some names suggest copies/backups. Others have platform specifics (Brevo, HubSpot) mentioned in the old guide. Will require `grep_search` / content check to distinguish from current MJML outputs.
*   `.json` files (e.g., `Dragon Copilot 1 of 3.json`): (L-LCONF / SUS) - Potentially data for legacy templates or old configurations.
*   `.md` files:
    *   `_Dragon Copilot 1 of 3.md`: (SUS) - Large MD file, unusual name.
    *   Other `.md` files like `Work Order: ...`: (SUS) - Could be project meta-files or related to old processes.

**III. `docs/` Directory & Subdirectories:**

*   **`docs/legacy/README.md`**: (L-LMD)
*   **`docs/legacy/components/` (and all `.md` files within):** (L-LMD)
    *   Example files: `header.md`, `feature-cards.md`, `buttons.md`.
    *   Reason: Explicitly in `legacy` path, likely docs for old HTML components.
*   **`docs/archive/` (and all `.md` files within):** (ARC / L-LMD)
    *   Example files: `dragon_email_design_system.md`, `email-template-docs.md`, `EMAIL_STYLE_GUIDE.md`.
    *   Reason: Already in an `archive` folder. Content appears to be old documentation.
*   **`docs/components/` (and its subdirectories `structure/`, `content/` etc.):** (SUS / L-LMD)
    *   Reason: Directory structure mirrors legacy `templates/components/`. Subdirectories currently appear empty of files, which is odd. Needs clarification if these were meant for legacy docs or if current MJML docs are (not) here.
*   Potentially other `.md` files in `docs/guides/`, `docs/learning/`, `docs/strategy/`, `docs/reference/`, `docs/content/`, `docs/data/` might be legacy. Will need targeted review if initial high-likelihood items are confirmed.

**IV. `input/` Directory:**

*   `.html` / `.emltpl` files (e.g., `latest-dax-price-redux-2-former-subscriber.html`, `Dragon CoPilot - Brevo.emltpl`, `[copy 3] New email-7.emltpl`, `bee-free-template.html`): (L-LHTML)
    *   Reason: Raw HTML/email files, some with "copy" or from external sources ("bee-free").
*   `.md` files (e.g., `Dax-1.9-Release-Blog-Content.md`): (SUS) - Content for emails/pages, legacy status depends on content's relevance.

**V. `scripts/` Directory & Subdirectories:**

*   **`scripts/build/process-templates.js`**: (L-LJS / SUS) - JS for template processing, could be for old HTML system or old MJML build.

**VI. `build/` (Root) Directory:**

*   **`build/inject-copy.js`**: (L-LJS / SUS) - Utility JS file, usage context needed.

**VII. `output/` Directory:**

*   `.html` files (e.g., `dragon-copilot-email.html`, `Dax-1.9-Relase-blog-post.html`, `hello-world.html`): (L-LHTML / SUS) - Outputs, could be from old system or old/unmanaged MJML outputs.
*   `.md` files (e.g., `wordpress-landing-page-template.md`): (SUS) - Content/docs, status depends on relevance.

**VIII. `assets/email-images/` Directory:**

*   All image files (e.g., `va-logo.png`, `medium-shot-patient-looking-radiography.png`): (L-LIMG / SUS)
    *   Reason: Status depends on whether they are referenced by current MJML templates or only by legacy HTML.

**IX. `styles/` Directory:**

*   **`styles/main.css`**: (L-LCSS / SUS)
    *   Reason: Status depends on usage by current MJML or only legacy HTML.

**X. Root Directory Files:**

*   **`Dragon CoPilot.emltpl`**: (L-LHTML / SUS) - Loose `.emltpl` file, likely a template.

---

This initial inventory is quite extensive. The next step as per Phase 2 is to perform a preliminary categorization. I've already started this with the "Category Key" above.

I will now mark the first two items of Phase 2 in the Work Order as complete.

```markdown
// ... existing code ...
    **Phase 2: Inventory & Initial Assessment (AI Execution)**
    *   [x] Execute planned directory listings and file searches.
    *   [x] Compile an initial inventory list of potentially legacy non-MJML assets.
    *   [ ] Perform a preliminary categorization based on file type and location.

    **Phase 3: Detailed Assessment & Decision Making (Architect Review & Input)**
// ... existing code ...
```

The categorization is also largely complete as part of generating the inventory list. I will mark the final item of Phase 2 as complete.

```markdown
// ... existing code ...
    *   [x] Execute planned directory listings and file searches.
    *   [x] Compile an initial inventory list of potentially legacy non-MJML assets.
    *   [x] Perform a preliminary categorization based on file type and location.

    **Phase 3: Detailed Assessment & Decision Making (Architect Review & Input)**
// ... existing code ...
```

Phase 2 is now complete.

We are ready to move to **Phase 3: Detailed Assessment & Decision Making (Architect Review & Input)**.
The Work Order states:
*   `[ ] Present the inventory list to the MJML Component Architect.`
*   `[ ] For each identified item, the Architect to review and decide:`
    *   `Confirm Legacy Status.`
    *   `Assess Value (preserve, extract data, no value).`
    *   `Assign Decision: Archive, Extract & Archive, Delete (with caution), Update/Replace.`
*   `[ ] Document all decisions for each item.`

I have presented the initial inventory above. Please review it at your convenience.

To make the review process manageable, we can go through it section by section, or you can point out specific items/categories you want to address first.

A few key questions for you that arose during Phase 2:
1.  **Current MJML Component Documentation:** Where is the definitive location for current MJML component documentation? This will help clarify the status of files in `docs/components/` and ensure we don't mislabel current docs as legacy.
2.  **MJML Files in `templates/mjml-source/`:** Are the files `dax-price-redux-former-subscriber-TEMP.mjml` and `pilot-template.mjml` (and their compiled outputs in `templates/mjml-compiled/`) part of the current, active workflow, or are they old/experimental?
3.  **HTML files in `production/emails/campaigns/` and `output/`:** Many HTML files exist here. We need a reliable way to distinguish between:
    *   Legacy raw HTML emails.
    *   Compiled output from the *current, active* MJML templates.
    *   Compiled output from *old/experimental* MJML templates.
    Could you provide insight into how current MJML outputs are named or managed, or if there are specific MJML-fingerprints (e.g., specific comments, CSS classes, meta tags) I can `grep_search` for to identify them as definitively "current MJML"?

I await your guidance on how to proceed with the review and your answers to these clarifying questions. We will then document your decisions for each item.

