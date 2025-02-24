'use strict';

const nodemailer = require("nodemailer");
const {Service} = require('@hapipal/schmervice');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'javonte42@ethereal.email',
        pass: '2Hye5YRJ2b4cnYdgrR'
    }
})


module.exports = class MailService extends Service {


    async newFilmMail(film) {
        const {User} = this.server.models();
        const users = await User.query(); // Attendre la réponse

        for (const user of users) {
            console.log("user", user);
            await transporter.sendMail({
                from: 'caterina.oconner@ethereal.email',
                to: user.email,
                subject: 'Nouveau film ajouté !',
                text: `"${film.title}" vient d'être ajouté. Découvrez-le dès maintenant !`
            });
        }
    }

    async filmUpdatedMail(film) {
        const {Favorite, User} = this.server.models();

        const favorites = await Favorite.query().select("user_id");
        const users = await User.query();
        const userIdsFav = favorites.map(fav => fav.user_id)

        for (const user of users) {
            if (userIdsFav.includes(user.id)) {
                const info = await transporter.sendMail({
                    from: 'caterina.oconner@ethereal.email',
                    to: user.email,
                    subject: 'Film modifié !',
                    text: `"${film.title}" vient d'être mis à jour. Découvrez-le dès maintenant !`
                });
            }
        }
    }

    async sendMail(mail, firstname, lastname) {

        const info = await transporter.sendMail({
            from: 'caterina.oconner@ethereal.email', // sender address
            to: mail,
            subject: "Hello ✔",
            text: "Bonjour, " + firstname + " " + lastname, // plain text body
        })
    }
}