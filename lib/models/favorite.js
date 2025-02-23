'use strict';

const Joi = require('joi');
const {Model} = require('@hapipal/schwifty');

module.exports = class Favorite extends Model {

    static get tableName() {

        return 'favorite';
    }

    static get timestamps() {
        return false;
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            user_id: Joi.number().integer().greater(0),
            film_id: Joi.number().integer().greater(0),
        });
    }
}