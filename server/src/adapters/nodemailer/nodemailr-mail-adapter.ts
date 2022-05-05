import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "967249e0429e26",
      pass: "ccc7ede47ddb28"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body }: SendMailData) {
         await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com',
         to: 'ErickDutra <ericksond10@gmail.com>',
         subject: subject,
         html: body,
    });
    };
}