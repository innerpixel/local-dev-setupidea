import nodemailer from 'nodemailer';
import { createLogger } from './logger.js';

const logger = createLogger('email.utils');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 25,
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});

// Email templates
const emailTemplates = {
  verification: (token) => ({
    subject: 'Verify Your Email Address',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50; text-align: center;">Welcome to CSMCL!</h1>
        <p>Thank you for registering. Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.local-dev.test/verify-email/${token}" 
             style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
            Verify Email Address
          </a>
        </div>
        <p>Or copy and paste this URL into your browser:</p>
        <p style="word-break: break-all; color: #7f8c8d;">
          https://www.local-dev.test/verify-email/${token}
        </p>
        <p style="color: #7f8c8d; font-size: 0.9em;">
          This verification link will expire in 24 hours.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #95a5a6; font-size: 0.8em; text-align: center;">
          If you didn't create an account, you can safely ignore this email.
        </p>
      </div>
    `
  }),
  welcome: (username) => ({
    subject: 'Welcome to CSMCL',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50; text-align: center;">Welcome to CSMCL!</h1>
        <p>Hi ${username},</p>
        <p>Thank you for verifying your email address. Your account is now active and you can start using our services.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.local-dev.test/login" 
             style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
            Log In to Your Account
          </a>
        </div>
        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #95a5a6; font-size: 0.8em; text-align: center;">
          This email was sent to you because you created an account on CSMCL.
        </p>
      </div>
    `
  })
};

export const sendVerificationEmail = async (email, token) => {
  try {
    const template = emailTemplates.verification(token);
    
    const mailOptions = {
      from: 'noreply@local-dev.test',
      to: email,
      subject: template.subject,
      html: template.html
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Verification email sent to ${email}. Message ID: ${info.messageId}`);
    
    return info;
  } catch (error) {
    logger.error('Failed to send verification email:', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (email, username) => {
  try {
    const template = emailTemplates.welcome(username);
    
    const mailOptions = {
      from: 'noreply@local-dev.test',
      to: email,
      subject: template.subject,
      html: template.html
    };

    const info = await transporter.sendMail(mailOptions);
    logger.info(`Welcome email sent to ${email}. Message ID: ${info.messageId}`);
    
    return info;
  } catch (error) {
    logger.error('Failed to send welcome email:', error);
    throw error;
  }
};
