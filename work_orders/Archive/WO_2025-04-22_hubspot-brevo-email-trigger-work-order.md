# Work Order: HubSpot Workflow to Trigger Brevo Transactional Email

**Date:** {{ CURRENT_DATE }}
**Prepared For:** Client/Team needing on-demand email sends from HubSpot via Brevo.
**Prepared By:** AI Assistant

## 1. Goal

To configure a HubSpot workflow that automatically sends a specific, pre-designed transactional email template from Brevo to a HubSpot contact when a designated dropdown property on that contact's record is updated to a specific value. This allows users to trigger standardized, well-formatted emails directly from HubSpot CRM actions without needing to manually compose them or worry about rendering issues in Outlook/Gmail.

## 2. Prerequisites

*   **HubSpot Account:** Access to HubSpot Marketing Hub or Sales Hub Professional/Enterprise (or other tier that includes Workflows and Webhook actions). Appropriate user permissions to create/edit workflows.
*   **Brevo (Sendinblue) Account:** Active Brevo account with access to Transactional Email features and API Keys.
*   **Brevo Transactional Email Template:** The desired email template must be created, designed (using Brevo's editor or imported email-safe HTML), and **activated** within Brevo -> Transactional -> Templates.
*   **Brevo API Key:** A Brevo v3 API key.
*   **HubSpot Contact Property:** A dropdown select contact property in HubSpot that will be used to trigger the workflow. The specific value(s) that should trigger the email must be known.
*   **HubSpot Personalization Tokens:** Knowledge of the HubSpot contact properties needed for personalization (e.g., `contact.email`, `contact.firstname`, `contact.company`).

## 3. Procedure

### Step 3.1: Brevo Configuration

1.  **Confirm/Create Template:**
    *   Log in to your Brevo account.
    *   Navigate to **Transactional -> Templates**.
    *   Either create a new template using the editor or import compliant HTML, or locate your existing desired template.
    *   **Important:** Ensure the template is **Active**.
    *   **Identify Placeholders:** Note the exact syntax of any personalization placeholders used within the template (e.g., `%FIRSTNAME%`, `{{ contact.COMPANY }}`). These will be needed for the `params` section in the HubSpot webhook.
2.  **Get Template ID:**
    *   On the Templates page in Brevo, find your activated template.
    *   Note the **ID** number listed next to the template name. This numeric ID is required for the API call.
3.  **Get Brevo API Key:**
    *   Navigate to your account menu (usually top-right).
    *   Go to **SMTP & API**.
    *   Under the **API Keys** tab, either copy your existing v3 key or generate a new one.
    *   **Security:** Treat this API key like a password. Store it securely and do not share it publicly.

### Step 3.2: HubSpot Workflow Configuration

1.  **Create Workflow:**
    *   Log in to HubSpot.
    *   Navigate to **Automation -> Workflows**.
    *   Click **Create workflow -> From scratch**.
    *   Select **Contact-based**. Choose **Blank workflow**.
2.  **Set Enrollment Trigger:**
    *   Click **Set up triggers**.
    *   Select **Contact properties**.
    *   Search for and select your designated **dropdown property**.
    *   Choose the condition **is equal to any of** and select the specific dropdown value(s) that should trigger this email send.
    *   Configure re-enrollment criteria as needed (e.g., decide if a contact can trigger this multiple times if the property changes back and forth).
    *   Click **Apply filter** and **Save**.
3.  **Add Webhook Action:**
    *   Click the **+** icon to add an action below the trigger.
    *   Scroll down or search for the **Trigger a webhook** action under "External communication".
4.  **Configure Webhook:**
    *   **Method:** Select `POST`.
    *   **Webhook URL:** Enter Brevo's v3 API endpoint:
        ```
        https://api.brevo.com/v3/smtp/email
        ```
    *   **Authentication type:** Choose **API key**.
    *   **API key name:** Enter `api-key` (exactly like this, case-sensitive).
    *   **API key location:** Select **Request header**.
    *   **API key:** Click "Secrets" and create a new secret named something like `BREVO_API_KEY`. Paste your Brevo v3 API key value here. Select the newly created secret. *Alternatively, if Secrets management isn't available/desired, paste the key directly, but using Secrets is more secure.*
    *   **Request Body:** Select **Customize request body**.
    *   Paste the following JSON structure into the text area. **Crucially, replace `YOUR_TEMPLATE_ID` with the actual numeric ID from Brevo (Step 3.1.2) and adjust the `params` keys and HubSpot tokens to match your template's requirements.**

        ```json
        {
          "to": [
            {
              "email": "{{ contact.email }}",
              "name": "{{ contact.firstname }} {{ contact.lastname }}"
            }
          ],
          "templateId": YOUR_TEMPLATE_ID,
          "params": {
            "FIRSTNAME": "{{ contact.firstname }}",
            "COMPANYNAME": "{{ contact.company }}"
            // Add other key-value pairs here corresponding to
            // placeholders in your Brevo template.
            // Example: "ORDER_NUMBER": "{{ contact.last_order_id }}"
          }
        }
        ```
        *   **Explanation:**
            *   `"to"`: Specifies the recipient. HubSpot replaces `{{ contact.email }}` etc., with the triggering contact's details.
            *   `"templateId"`: Tells Brevo *which* template to send. **Use the actual number.**
            *   `"params"`: Provides the data to fill in your Brevo template's placeholders. The *keys* (`"FIRSTNAME"`, `"COMPANYNAME"`) **must match** what Brevo expects for your specific template placeholders (e.g., for `%FIRSTNAME%` use key `"FIRSTNAME"`). The *values* use HubSpot tokens `{{...}}` to pull data from the contact record.
    *   **Add Header:** Below the Request body section, click **Add header**.
        *   **Header:** `Content-Type`
        *   **Value:** `application/json`
    *   Click **Save**.

### Step 3.3: Testing and Activation

1.  **Review and Publish:**
    *   Review the workflow setup (trigger, action, webhook configuration).
    *   Click **Review and publish**.
    *   Choose enrollment settings (e.g., enroll existing contacts who meet criteria or only new ones).
    *   Click **Turn on**.
2.  **Test with Contact:**
    *   Go to a test contact record in HubSpot (use one where you can check the email inbox).
    *   Manually update the trigger dropdown property to the value specified in your workflow trigger.
3.  **Verify Execution:**
    *   Wait a minute or two.
    *   Go back to your HubSpot workflow and check the **History** tab. Look for your test contact and verify the "Trigger a webhook" action shows as executed successfully. If there are errors, check the webhook details for response codes from Brevo.
    *   Log in to Brevo and navigate to **Transactional -> Logs**. Check if an email send was logged for your test contact's email address using the correct template. Look for success or failure messages.
    *   Check the inbox for the test contact's email address. Verify the email arrived and looks correct, with personalization applied.

## 4. Important Notes

*   **Parameter Matching:** The most common point of failure (after API keys) is mismatching the `"params"` keys in the HubSpot JSON with the placeholder syntax expected by the Brevo template. Double-check Brevo's documentation or template editor for the correct parameter names (e.g., `params.FIRSTNAME` for `{{ params.FIRSTNAME }}` or `FIRSTNAME` for `%FIRSTNAME%`).
*   **API Key Security:** Keep your Brevo API key secure. Use HubSpot Secrets if possible. If you regenerate the key, you **must** update it in the HubSpot webhook configuration.
*   **Error Handling:** Monitor the HubSpot workflow history and Brevo logs, especially initially, to catch any configuration errors (e.g., invalid JSON, incorrect template ID, bad API key, missing required parameters).
*   **Rate Limits:** Be aware of any API rate limits imposed by Brevo or HubSpot, although for typical on-demand sends, this is rarely an issue.

---

This detailed procedure should provide a clear path to implementing the desired automated email trigger.


[REDACTED_SENDINBLUE_API_KEY]

