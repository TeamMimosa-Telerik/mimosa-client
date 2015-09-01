import 'jquery';
//import 'bootstrap';

function secondPageCreation() {
    var $documentFragment = $(document.createDocumentFragment());
    var secondPage = $('<div id="secondPageWrapper">'),
    $container = $('<div id="container">'),
        $FirstRow = $('<div class="row">'),
        $header = $('<div class="col-md-6 col-md-offset-3" id="header">Pick a category</div>'),
        $secondRow = $('<div class="row">'),
        $firstCategory = $('<a id="first-category-btn" href="#/question" class="col-md-3 col-md-offset-2">'),
        $kidsAcademy = $('<img src="../img/KidsAcademy.jpg" class="img-responsive img-rounded" id="KidsAcademy" />'),
        $secondCategory = $('<a href="#/question" class="col-md-3 col-md-offset-2">'),
        $schoolAcademy = $('<img src="../img/SchoolAcademy.jpg" class="img-responsive img-rounded" id="SchoolAcademy" />'),
        $thirdRow = $('<div class="row">'),
        $thirdCateogry = $('<a href="#/question" class="col-md-3 col-md-offset-2">'),
        $algoAcademy = $('<img src="../img/AlgoAcademy.jpg" class="img-responsive img-rounded" id="AlgoAcademy" />'),
        $fourthCategory = $('<a href="#/question" class="col-md-3 col-md-offset-2">'),
        $softwareAcademy = $('<img src="../img/SoftwareAcademy.jpg" class="img-responsive img-rounded" id="SoftwareAcademy" />');

    //Appending first row - Pick a category header
    $FirstRow.append($header);

    //Appending second row 
    //Kids academy category
    $firstCategory.append($kidsAcademy);
    $secondRow.append($firstCategory);

    //School academy
    $secondCategory.append($schoolAcademy);
    $secondRow.append($secondCategory);

    //Appending third row
    //Algo academy category 
    $thirdCateogry.append($algoAcademy);
    $thirdRow.append($thirdCateogry);

    //Software academy
    $fourthCategory.append($softwareAcademy);
    $thirdRow.append($fourthCategory);

    //Appending to documentFragment for better performance
    $documentFragment.append($FirstRow);
    $documentFragment.append($secondRow);
    $documentFragment.append($thirdRow);


    $container.append($documentFragment);
    secondPage.append($container);
    return secondPage;
}

// module.exports = solve;
export default {secondPageCreation};