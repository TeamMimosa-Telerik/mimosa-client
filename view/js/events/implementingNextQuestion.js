import manipulator from './manipulatingJSONObjectData.js';
import Handlebars from '../../lib/handlebars/handlebars.js';
// import questions from './settingJSONObject.js';


function questionChanger() {
    sessionStorage.setItem('points',0);
    var $points = 0;
    var $countOfUnlockedBadges = 0;

    var arrayQuestions = manipulator.questionManipulation();

    console.log("ARRAY QUESTIONS");
    console.log(arrayQuestions);
  
    var properties = [];
    for (var prop in arrayQuestions) {
        properties.push(prop);
    }

    console.log("PROPERTIES QUESTIONS");
    console.log(properties);

    var $element = 0;
    $('#totalAnswersExpected').text(properties.length);

   
    var $content = $('#questionHolder');

    function makeTemplate(){
         var $htmlTaker = '<div id="questionHeader">' +
            '<h2>{{questionText}}</h2>' +
            '</div>' +
            '<div id="questioBody">' +
            '<div id="1" class="percental"><span>{{optionOne}}</span></div>' +
            '<div id="2" class="percental"><span>{{optionTwo}}</span></div>' +
            '<br />' +
            '<div id="3" class="percental"><span>{{optionThree}}</span></div>' +
            '<div id="4" class="percental"><span>{{optionFour}}</span></div>' +

            '</div>';
        var $workingHTML = Handlebars.compile($htmlTaker);
        return $workingHTML;
    }

    var $workingHTML = makeTemplate();

    function implementNextQuestion(objectToImplement) {
       
        $content.html($workingHTML(''));
        $content.html($workingHTML(objectToImplement));
        console.log("CONTENT");
        console.log($content.html());
    }

    implementNextQuestion(arrayQuestions[properties[$element]]);

    $('#questionHolder').on('click','.percental', function () {

       
        var $this = $(this);
        var $id = $this.attr('id');
                       
        if ($id.toString() == arrayQuestions[properties[$element]].answer.toString()) {
            $points += arrayQuestions[properties[$element]].pointsOnGuessing;
            sessionStorage.setItem('points',$points);
            $('#currentPlayerPoints').html($points);
            $element += 1;

            //WHAT IS THIS
            $('#currentCorrectAnsweres').text($element);

            if ($element < properties.length) {
                implementNextQuestion(arrayQuestions[properties[$element]]);

            // implementNextQuestion(arrayQuestions[properties[$element]]);
            // if (properties[$element] < arrayQuestions.length) {

            // if ($element < properties.length){
                
            //     console.log("EEEEEEEEEEEEEE")
            //     // $('#questionText').text(arrayQuestions[properties[$element]].questionText);
            //     // $('#1').find('span').text(arrayQuestions[properties[$element]].optionOne);
            //     // $('#2').find('span').text(arrayQuestions[properties[$element]].optionTwo);
            //     // $('#3').find('span').text(arrayQuestions[properties[$element]].optionThree);
            //     // $('#4').find('span').text(arrayQuestions[properties[$element]].optionFour);

            // }
            }  else {
                //UNLOCK BADGE
                if ($countOfUnlockedBadges < 4) {

                    $countOfUnlockedBadges += 1;

                    alert('Congratulations! You have unlocked a badge!');

                   // Facebook with URL : https://mimosa.herokuapp.com/
                    window.fbAsyncInit = function() {
                        FB.init({
                            appId      : '1625525167728351',
                            xfbml      : true,
                            version    : 'v2.4'
                        });
                        FB.ui({
                            method: 'share_open_graph',
                            action_type: 'og.likes',
                            action_properties: JSON.stringify({
                                object:'https://developers.facebook.com/docs/',
                            })
                        }, function(response){
                            // Debug response (optional)
                            console.log(response);
                        });
                    };

                    (function(d, s, id){
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) {return;}
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                    //Facebook END

                   // $('#questionHolder').html('<h1>Something to pop up');
                    var looper;
                    for (looper = 1; looper <= $countOfUnlockedBadges; looper += 1) {
                        $('#badge' + looper).removeClass('blured');

                    }
                }
        }
        // else {
        //             //UNLOCK BADGE
        //     if ($countOfUnlockedBadges < 4) {

        //         $countOfUnlockedBadges += 1;

        //         alert('Congratulations! You have unlocked a badge!');

        //         $('#questionHolder').html('<h1>Something interesting to pop up');
        //         var looper;
        //         for (looper = 1; looper <= $countOfUnlockedBadges; looper += 1) {
        //             $('#badge' + looper).removeClass('blured');

        //         }
        //     }
            //else if all badges have already been unlock...dont do anything
        }
    });
}

export default {questionChanger};