'use strict';

const {Service} = require('@hapipal/schmervice');
const Boom = require('@hapi/boom');
const Jwt = require('@hapi/jwt');

module.exports = class FilmService extends Service {
    create(film) {
        const {Film} = this.server.models();
        return Film.query().insertAndFetch(film);
    }

    update(id, film) {
        const {Film} = this.server.models();
        return Film.query().findById(id).patch(film);
    }

    delete(id) {
        const {Film} = this.server.models();
        return Film.query().deleteById(id);
    }
}