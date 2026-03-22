export const welcomeEmailTemplate = (name, clientURL) => {
    return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Welcome to Messenger</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f6f8;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      }

      .header {
        background: linear-gradient(90deg,#36d1dc,#5b86e5);
        padding: 30px;
        text-align: center;
        color: white;
        font-size: 24px;
        font-weight: bold;
      }

      .content {
        padding: 30px;
        color: #444;
        line-height: 1.6;
      }

      .username {
        color: #4a6cf7;
        font-weight: bold;
        font-size: 18px;
      }

      .steps {
        background: #f1f3f6;
        border-radius: 8px;
        padding: 20px;
        margin: 25px 0;
      }

      .steps ul {
        padding-left: 18px;
      }

      .steps li {
        margin-bottom: 8px;
      }

      .button-container {
        text-align: center;
        margin-top: 30px;
      }

      .button {
        display: inline-block;
        padding: 12px 26px;
        border-radius: 30px;
        background: linear-gradient(90deg,#36d1dc,#5b86e5);
        color: white;
        text-decoration: none;
        font-weight: bold;
      }

      .footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #888;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <div class="header">
        Welcome to Messenger!
      </div>

      <div class="content">

        <p>Hello <span class="username">${name}</span>,</p>

        <p>
          We're excited to have you join our messaging platform!
          Messenger connects you with friends, family, and colleagues in real-time,
          no matter where they are.
        </p>

        <div class="steps">
          <strong>Get started in just a few steps:</strong>
          <ul>
            <li>Set up your profile picture</li>
            <li>Find and add your contacts</li>
            <li>Start a conversation</li>
            <li>Share photos, videos, and more</li>
          </ul>
        </div>

        <div class="button-container">
          <a href="${clientURL}" class="button">Open Messenger</a>
        </div>

        <p style="margin-top:30px;">
          If you need any help or have questions, we're always here to assist you.
        </p>

      </div>

      <div class="footer">
        © ${new Date().getFullYear()} Messenger App
      </div>

    </div>
  </body>
  </html>
  `;
};