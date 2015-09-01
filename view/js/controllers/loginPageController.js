"use strict"
import page1 from '../indexCreation.js';

import events from '/js/controllers/routerController.js';
import toggleNavigation from '../events/toggleNavigation.js';
import logger from '/js/controllers/loggerController.js';
function init() {
    console.log('Init index');
    // .js file for login page

    var $body = $('body');
    $body.empty();
    var index = page1.indexCreation();
    $body.append(index);

    events.eventRouter();
    toggleNavigation.toggleNavigationEvents();
    logger.loggerEvents();

};

export default {init}