"use strict"
 import page2 from '../secondPageCreation.js';

function init(){
		// .js file for category page
	var $body = $('body');
	$body.empty();
	var secondPage = page2.secondPageCreation();
	$body.append(secondPage);


};

export default {init};