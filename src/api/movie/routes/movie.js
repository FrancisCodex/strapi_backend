'use strict';

/**
 * movie router
 */

const { createCoreRouter } = require('@strapi/strapi' ).factories;

module.exports = createCoreRouter('api::movie.movie',  ({ strapi }) =>  ({

    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query("api::movie.movie").findOne({
            where: { slug: id}, populate: true
        });

        const sanitizedResults = await this.sanitizeOutput(results, ctx);
    
        return this.transformResponse(sanitizedResults);
    }
}));

