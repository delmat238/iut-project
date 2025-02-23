'use strict';

const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/film',
        options:{
            tags: ['api'],
            auth: {
                scope: ['admin']
            },
            validate: {
                payload: Joi.object({
                    title: Joi.string().required().min(3).example('The Matrix').description('Title of the film'),
                    description: Joi.string().required().min(3).example('A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.').description('Description of the film'),
                    releaseDate: Joi.date().required().example('1999-03-31').description('Release date of the film'),
                    director: Joi.string().required().min(3).example('The Wachowskis').description('Director of the film')
                })
            }
        },
        handler: async (request, h) => {

            const {filmService} = request.services();

            return await filmService.create(request.payload);
        }
    },
    {
        method: 'PATCH',
        path: '/film/{id}',
        options:{
            tags: ['api'],
            auth: {
                scope: ['admin']
            },
            validate: {
                params: Joi.object({
                    id: Joi.number().integer().required().min(1)
                }),
                payload: Joi.object({
                    title: Joi.string().min(3).example('The Matrix').description('Title of the film'),
                    description: Joi.string().min(3).example('A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.').description('Description of the film'),
                    releaseDate: Joi.date().example('1999-03-31').description('Release date of the film'),
                    director: Joi.string().min(3).example('The Wachowskis').description('Director of the film')
                })
            }
        },
        handler: async (request, h) => {

            const {filmService} = request.services();

            return await filmService.update(request.params.id, request.payload);
        }

    }
]

