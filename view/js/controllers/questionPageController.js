"use strict"
import page3 from '../mainGamepageCreation.js';
// import handlebarsTemplate from '../handlebarsCreator.js';

import implementator from '../events/implementingNextQuestion.js';

function init() {

    // .js file for question page

    console.log("EXOOOOOOOOOOOOOOOOO");
    var $body = $('body');
    $body.empty();
    var thirdPage = page3.thirdPage();
    $body.append(thirdPage);
    // handlebarsTemplate.handlebarsCreator();

    //settings.dataHolder();

    //nextQuestionImplementation.questionChanger();
    console.log('init');
    implementator.questionChanger();


};

export default {init}

