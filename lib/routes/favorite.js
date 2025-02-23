'use strict';

const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/favorites',
        options: {
            tags: ['api'],
            auth: {
                scope: ['user']
            }
        },
        handler: async (request, h) => {
            const {favoriteService} = request.services();
            const userId = request.auth.credentials.id;

            const favorites = await favoriteService.getUserFavorites(userId);
            return h.response(favorites).code(200);
        }
    },

    {
        method: 'POST',
        path: '/favorites/{film_id}',
        options: {
            tags: ['api'],
            auth: {
                scope: ['user']
            },
            validate: {
                params: Joi.object({
                    film_id: Joi.number().integer().required().description('ID du film à ajouter aux favoris')
                }),
            },
            handler: async (request, h) => {
                const {favoriteService} = request.services();
                const userId = request.auth.credentials.id;
                const filmId = request.params.film_id;

                return await favoriteService.addFavorite(userId, filmId);
            }
        }
    },

    {
        method: 'DELETE',
        path: '/favorites/{film_id}',
        options: {
            tags: ['api'],
            auth: {
                scope: ['user']
            },
            validate: {
                params: Joi.object({
                    film_id: Joi.number().integer().required().description('ID du film à supprimer')
                })
            }
        },
        handler: async (request, h) => {
            const {favoriteService} = request.services();
            const userId = request.auth.credentials.id;
            const {film_id} = request.params;

            return await favoriteService.removeFavorite(userId, film_id);
        }
    }
];
