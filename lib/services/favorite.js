'use strict';

const {Service} = require("@hapipal/schmervice");


module.exports = class FavoriteService extends Service {

    getUserFavorites(userId) {
        const {Favorite} = this.server.models();

        return Favorite.query()
            .where('user_id', userId);
    }

    async addFavorite(userId, filmId) {
        const {Favorite} = this.server.models();

        const existingFavorite = await Favorite.query()
            .where({user_id: userId, film_id: filmId})
            .first();

        if (existingFavorite) {
            return {message: 'Film déjà dans les favoris'};
        }

        return Favorite.query().insert({user_id: userId, film_id: filmId});
    }

    async removeFavorite(userId, filmId) {
        const {Favorite} = this.server.models();

        const existingFavorite = await Favorite.query()
            .where({user_id: userId, film_id: filmId})
            .first();

        if (!existingFavorite) {
            return {message: 'Film non trouvé dans les favoris'};
        }

        return Favorite.query()
            .where({user_id: userId, film_id: filmId})
            .del();
    }
}