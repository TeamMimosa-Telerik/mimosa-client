function dataHolder(){
    var currentQuestion;
    // setJSONObject();
    return function setJSONObject() {

        //$currentQuestion = JSON.parse(providedJSONElement);

        return currentQuestion = {
            question0: {
                questionText: 'How high is mount Musala?',
                optionOne: ' 2150 m',
                optionTwo: '2714 m',
                optionThree: '2925 m',
                optionFour: '4144 m',
                answer: 3,
                pointsOnGuessing:50
            },
            question1: {
                questionText: 'Which is the correct C# syntax?',
                optionOne: ' var a = 4',
                optionTwo: 'int a = 4',
                optionThree: 'int a = 4.5f',
                optionFour: 'var p = function(){return a=5;}',
                answer: 2,
                pointsOnGuessing: 100
            },
            question2: {
                questionText: 'What is the correct place to link the CSS files?',
                optionOne: 'In the header',
                optionTwo: 'In the body',
                optionThree: 'Both',
                optionFour: 'Fuck CSS,I do not use it',
                answer: 1,
                pointsOnGuessing: 150
            },
            question3: {
                questionText: 'Why is it important to know Quallity coding?',
                optionOne: 'Make the code readable',
                optionTwo: 'Make the code easy to refactor',
                optionThree: 'Both',
                optionFour: 'It is quite useless actually',
                answer: 3,
                pointsOnGuessing: 200
            }
        };
    };
}

export default {dataHolder}