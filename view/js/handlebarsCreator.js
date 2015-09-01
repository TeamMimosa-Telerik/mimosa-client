 import Handlebars from 'handlebars';

var template = '<div id="questionHeader">'+
        '<h2>{{questionText}}</h2>'+
    '</div>'+
    '<div id="questioBody">'+
       	'<div id="1" class="percental"><span>{{optionOne}}</span></div>'+
        '<div id="2" class="percental"><span>{{optionTwo}}</span></div>'+
        '<br />'+
        '<div id="3" class="percental"><span>{{optionThree}}</span></div>'+
        '<div id="4" class="percental"><span>{{optionFour}}</span></div>'+

    '</div>';
    
 function handlebarsCreator(){


 var currentQuestion = {
            questionText: 'How many engineers are needed to fix a lightbulb?',
            optionOne: ' The police ',
            optionTwo: '2',
            optionThree: '3',
            optionFour: '1dfvvgdf4'
        };

        var workingHTML = Handlebars.compile(template);

        document.getElementById('questionHolder').innerHTML = workingHTML(currentQuestion);
}

export default {handlebarsCreator};