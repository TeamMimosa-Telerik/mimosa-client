import json from '../controllers/categoryPageController.js'
function questionManipulation() {
    var i=0;
   // var arrayQuestions = questions.dataHolder()();
    var arrayQuestions = json.getQuestions();
    console.log('JSSOOOOOn');
    console.log(arrayQuestions);
    return arrayQuestions;
}

export default {questionManipulation}