'use strict';

const Joi = require('joi');
const { Model } = require('@hapipal/schwifty');

module.exports = class Film extends Model {

    static get tableName() {

        return 'film';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            title: Joi.string().min(3).example('The Matrix').description('Title of the film'),
            description: Joi.string().min(3).example('A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.').description('Description of the film'),
            releaseDate: Joi.date().example('1999-03-31').description('Release date of the film'),
            director: Joi.string().min(3).example('The Wachowskis').description('Director of the film'),
            createdAt: Joi.date(),
            updatedAt: Joi.date()
        });
    }

    $beforeInsert(queryContext) {

        this.updatedAt = new Date();
        this.createdAt = this.updatedAt;
    }

    $beforeUpdate(opt, queryContext) {

        this.updatedAt = new Date();
    }

}