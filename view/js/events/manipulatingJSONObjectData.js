import questions from './settingJSONObject.js';

function questionManipulation() {
    var i=0;
    var arrayQuestions = questions.dataHolder()();

    return arrayQuestions;
}

export default {questionManipulation}