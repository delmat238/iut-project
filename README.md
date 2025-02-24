# 🚀 Installation & Lancement

## 1️⃣ Prérequis

Node.js (v18+ recommandé)
MySQL
Nodemailer pour l’envoi des emails
Un compte sur Ethereal pour tester les emails

## 2️⃣ Cloner le projet

    git clone https://github.com/delmat238/iut-project

## 3️⃣ Installer les dépendances

bash
Copier
Modifier
npm install

## 4️⃣ Configurer les variables d’environnement

rendez-vous dans le fichier `server/manifest.js` et renseignez les variables suivantes :

### Base de données MySQL

grace au conteneur docker que vous pouvez lancer avec la commande suivante :

    docker run -d --name hapi-mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=hapi -e MYSQL_DATABASE=user mysql:8.0 --default-authentication-plugin=mysql_native_password

- DB_HOST=localhost
- DB_USER=user
- DB_PASSWORD=hapi
- DB_DATABASE=user

# Serveur

## 6️⃣ Lancer le serveur

Pour installer les dépendances : 

    npm install

Pour lancer le serveur en mode développement : 

    nodemon server 

nodemon permet de relancer automatiquement le serveur dès qu’un fichier est modifié.

L’API tournera sur http://localhost:3000 🚀

#📜  Endpoints API

- POST /users Inscription (avec envoi d'email de bienvenue)
- POST /users/login Connexion et récupération d'un token
- POST /films Admin uniquement - Ajouter un film
- GET /films Voir la liste des films
- PATCH /films/{id} Admin uniquement - Modifier un film (avec notification aux favoris)
- DELETE /films/{id} Admin uniquement - Supprimer un film
- POST /favorites/{film_id} Ajouter un film aux favoris
- DELETE /favorites/{film_id} Supprimer un film des favoris


# 🛠 Technologies utilisées
Node.js + Hapi.js (Framework API)
Knex.js (ORM SQL)
MySQL (Base de données)
Nodemailer (Envoi d’emails)
