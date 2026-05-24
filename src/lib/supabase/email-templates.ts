type EmailTemplate = {
  subject: string;
  html: string;
};

const base = (content: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Clauze</title>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;color:#0a0a16;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;border:1px solid rgba(0,0,0,0.08);border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 28px 18px;background:#ffffff;">
                <div style="font-weight:800;letter-spacing:-0.02em;font-size:22px;line-height:1;color:#0a0a16;">
                  Clau<span style="color:#7b6ef6;">z</span>e
                </div>
                <div style="margin-top:10px;height:1px;background:linear-gradient(90deg,transparent,rgba(123,110,246,0.30),transparent);"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 28px;">
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background:#f8f8fa;border-top:1px solid rgba(0,0,0,0.08);">
                <div style="font-size:12px;line-height:1.6;color:#6b6890;">
                  © 2025 Clauze. All rights reserved.
                </div>
                <div style="font-size:12px;line-height:1.6;color:#6b6890;margin-top:6px;">
                  Clauze is not a law firm and does not provide legal advice.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const button = (label: string, href: string) => `
  <a href="${href}" style="display:inline-block;background:#7b6ef6;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;line-height:50px;height:50px;padding:0 22px;border-radius:10px;">
    ${label}
  </a>`;

export const emailTemplates: Record<
  "accountCreated" | "verifyEmail" | "passwordReset" | "verificationCode",
  EmailTemplate
> = {
  accountCreated: {
    subject: "Account created | Welcome to Clauze",
    html: base(`
      <h1 style="margin:0 0 10px;font-size:28px;line-height:1.15;letter-spacing:-0.02em;">Your account is ready.</h1>
      <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#3d3a60;">
        You can start scanning contracts and keep a private history of your results.
      </p>
      <div style="margin:22px 0 18px;">
        ${button("Start your first scan →", "{{ .SiteURL }}/upload")}
      </div>
      <p style="margin:0;font-size:13px;line-height:1.8;color:#6b6890;">
        If you did not create this account, you can ignore this message.
      </p>
    `),
  },
  verifyEmail: {
    subject: "Verify your email to analyze your contracts",
    html: base(`
      <h1 style="margin:0 0 10px;font-size:28px;line-height:1.15;letter-spacing:-0.02em;">Verify your email.</h1>
      <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#3d3a60;">
        Confirm your email to finish setting up your account and unlock saved scans.
      </p>
      <div style="margin:22px 0 18px;">
        ${button("Verify email →", "{{ .ConfirmationURL }}")}
      </div>
      <p style="margin:0;font-size:13px;line-height:1.8;color:#6b6890;">
        This link expires automatically. If it does not work, request a new verification email.
      </p>
    `),
  },
  passwordReset: {
    subject: "Reset your Clauze password",
    html: base(`
      <h1 style="margin:0 0 10px;font-size:28px;line-height:1.15;letter-spacing:-0.02em;">Reset your password.</h1>
      <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#3d3a60;">
        Use the link below to set a new password. If you did not request this, you can ignore this email.
      </p>
      <div style="margin:22px 0 18px;">
        ${button("Set a new password →", "{{ .RecoveryURL }}")}
      </div>
      <p style="margin:0;font-size:13px;line-height:1.8;color:#6b6890;">
        For security, this link expires automatically.
      </p>
    `),
  },
  verificationCode: {
    subject: "Your Clauze verification code",
    html: base(`
      <h1 style="margin:0 0 10px;font-size:28px;line-height:1.15;letter-spacing:-0.02em;">Your verification code</h1>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.8;color:#3d3a60;">
        Enter this code to continue:
      </p>
      <div style="margin:16px 0 20px;padding:16px 18px;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#ffffff;">
        <div style="font-size:32px;letter-spacing:0.18em;font-weight:800;color:#0a0a16;">
          {{ .Token }}
        </div>
      </div>
      <p style="margin:0;font-size:13px;line-height:1.8;color:#6b6890;">
        If you did not request this code, you can ignore this email.
      </p>
    `),
  },
};
