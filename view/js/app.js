 //import pageOne from './indexCreation.js';
 //console.log("dadsa");
 //import pageTwo from './secondPageCreation.js';
 //import pageThird from './mainGamepageCreation.js';

console.log("in app.js");
// import events from '../../controller/routerController.js';
// import toggleNavigation from './events/toggleNavigation.js';
// import logger from '../../controller/loggerController.js';
import gameEvent from './events/mainGamepageEvents.js';

import router from './tools/routerManager.js';

// import handlebarsTemplate from './handlebarsCreator.js';


export function init() {

   console.log("in app.js init()");
   //var $body = $('body');
   //var index = pageOne.indexCreation();
   //$body.append(index);
   //var secondPage = pageTwo.secondPageCreation();
   //$body.append(secondPage);
   //secondPage.hide();
   //var thirdPage = pageThird.thirdPage();
   //$body.append(thirdPage);
   //thirdPage.hide();
    router.routerManager();

    // events.eventRouter();
    // toggleNavigation.toggleNavigationEvents();
    // logger.loggerEvents();
    gameEvent.gameEvents();
    // handlebarsTemplate.handlebarsCreator();

}
 