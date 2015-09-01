"use strict"
import page2 from '../secondPageCreation.js';
//import categoryEvents from '../events/categoryEvents.js';

var questions;

function init() {
    // .js file for category page
    var $body = $('body');
    $body.empty();
    var secondPage = page2.secondPageCreation();
    $body.append(secondPage);

    $('#first-category-btn').click(function () {

        $.getJSON("https://api-mimosa.herokuapp.com/kidsAcademyQuestions", function(result) {
          console.log("RESULLT");
          console.log(result);
          questions = result;
          window.location.assign("#/question");
        });
    });

    $('#second-category-btn').click(function () {

        $.getJSON("https://api-mimosa.herokuapp.com/schoolAcademyQuestions", function(result) {
        	questions = result;
          window.location.assign("#/question");
        });

    });

    $('#third-category-btn').click(function () {
        $.getJSON("https://api-mimosa.herokuapp.com/algoAcademyQuestions", function(result) {
        	questions = result;
          window.location.assign("#/question");
        });
    });

    $('#fourth-category-btn').click(function () {
        $.getJSON("https://api-mimosa.herokuapp.com/softAcademyQuestions", function(result) {
        	questions = result;
          window.location.assign("#/question");
        });

    });

};

function getQuestions() {
	 // questions = categoryEvents.getQuestions();
  //   console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
  //   console.log(questions);
    return questions;
}
export default {init, getQuestions};