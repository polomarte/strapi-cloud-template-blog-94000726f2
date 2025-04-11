'use strict';

/**
 * suite-configuration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::suite-configuration.suite-configuration');
