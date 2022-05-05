import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c78f3c7b9ab0ef",
      pass: "cd4a7ff978f3d4"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Feedget Team <hello@feedget.com>',
        to: 'Douglas Vinicio <douglas.vinicio@hotmail.com>',
        subject: 'New Feedback from Feedget Application',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p><strong>Type of feedback:</strong> ${type}</p>`,            
            `<p><strong>Comment/Description:</strong> ${comment}</p>`,
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
    console.log('Success! HTTP server running!')
});


