# Google Sheets newsletter setup

## 1. Create the sheet

Create a Google Sheet and add these headers in row 1:

`Timestamp | Email`

Copy the spreadsheet ID from the URL. It is the part between `/d/` and `/edit`.

## 2. Add the Apps Script

Open **Extensions → Apps Script**, remove the starter code, and paste this:

```javascript
const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const email = String(body.email || '').trim().toLowerCase();

    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return jsonResponse({ ok: false, error: 'Invalid email' });
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    const emails = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1)
      .getValues()
      .flat()
      .map((value) => String(value).trim().toLowerCase());

    const isNewSubscriber = !emails.includes(email);

    if (isNewSubscriber) {
      sheet.appendRow([new Date(), email]);

      MailApp.sendEmail({
        to: email,
        subject: 'You are subscribed to Abbey\'s updates',
        body: 'Thanks for subscribing! You will receive project updates, practical technology tips, and new service announcements from Abbey.',
        htmlBody: '<p>Thanks for subscribing!</p><p>You will receive project updates, practical technology tips, and new service announcements from Abbey.</p><p>You can reply to this email if you would like to discuss a project.</p>'
      });
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Replace `PASTE_YOUR_SPREADSHEET_ID_HERE` with your spreadsheet ID.

## 3. Deploy it

In Apps Script, choose **Deploy → New deployment**:

- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Click **Deploy**, authorize the script, and copy the Web app URL ending in `/exec`.

## 4. Connect the website

Add this line to your local `.env.local` file:

```text
REACT_APP_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the development server after changing `.env.local`. For deployment, add the same variable to your hosting provider’s environment variables and redeploy.
