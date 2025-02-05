'use strict';

const nodemailer = require("nodemailer");
const {Service} = require('@hapipal/schmervice');
module.exports = class MailService extends Service {

    async sendMail(mail, firstname, lastname) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'caterina.oconner@ethereal.email',
                pass: '6azPYaAbyX1JKd1Vse'
            }
        })

        const info = await transporter.sendMail({
            from: 'caterina.oconner@ethereal.email', // sender address
            to: mail, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Bonjour, " + firstname + " " + lastname, // plain text body
        })

    }
}