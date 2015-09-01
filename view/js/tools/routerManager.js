import QP from '../controllers/questionPageController.js';
import LP from '../controllers/loginPageController.js';
import CP from '../controllers/categoryPageController.js';

import Factory from './routerFactory.js';
import Device from './router.js'


function routerManager() {
    //app.init();

    var routerFactory = new Factory.RouterFactory();
    console.log('first init');

    routerFactory.addRoute({
        url: "/question",
        callback: QP.init,

    });

    routerFactory.addRoute({
        url: "/category",
        callback: CP.init
    });

    routerFactory.addRoute({
        url: "/login",
        callback: LP.init,
        default:true
    });

    routerFactory.init();
    // queries
}

export default {routerManager};