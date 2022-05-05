import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c78f3c7b9ab0ef",
    pass: "cd4a7ff978f3d4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {

  await transport.sendMail({
      from: 'Feedget Team <hello@feedget.com>',
      to: 'Douglas Vinicio <douglas.vinicio@hotmail.com>',
      subject,
      html:body
  });
  };
}