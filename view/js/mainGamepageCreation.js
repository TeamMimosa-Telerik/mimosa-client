import 'jquery';
//import 'bootstrap';


function thirdPage() {

    var thirdPageWrapper = $('<div id="thirdPageWrapper">'),
    //$container = $('<div id="container">'),
        $header = $('<header class="row">'),
        $badgeHolder = $('<div id="badgeContainer" class="col-md-3">'),
        $currentCorrectAnswersContainer = $(' <div id="countsContainer" class="col-md-6">'),
        $playerNameAndPoints = $('<div id="playerAndPoints" class="col-md-3">');

    $badgeHolder.append('<img class="blured" src="../img/badge1.png" />');
    $badgeHolder.append('<img class="blured"src="../img/badge2.png" />');
    $badgeHolder.append('<img class="blured" src="../img/badge3.png" />');
    $badgeHolder.append('<img class="blured" src="../img/badge4.png" />');
    $currentCorrectAnswersContainer.append('<span id="answerText">Answers: </span>');
    $currentCorrectAnswersContainer.append('<span id="currentCorrectAnsweres" class="answeredCount">0</span>');
    $currentCorrectAnswersContainer.append('<span class="answeredCount">/</span>');
    $currentCorrectAnswersContainer.append('<span id="totalAnswersExpected" class="answeredCount">10</span>');
    $playerNameAndPoints.append('<a href="#" id="playerNameContainer">Player</a>');
    $playerNameAndPoints.append('<div id="separator"></div>');
    $playerNameAndPoints.append('<span id="currentPlayerPoints">4000</span>');
    $header.append($badgeHolder);
    $header.append($currentCorrectAnswersContainer);
    $header.append($playerNameAndPoints);
    thirdPageWrapper.append($header);

    var $section = $('<section class="row">'),
        $asideBar = $('<div id="aside" class="col-md-3">'),
        $announcer = $('<div id="announcer">'),
        $categoryContainer = $('<div id="categoryContainer">'),
        $kidsAcad = $('<div class="category">'),
        $schoolAcad = $('<div class="category">'),
        $algoAcad = $('<div class="category">'),
        $softwareAcad = $('<div class="category">');

    $kidsAcad.append('<a href="#">Kids Academy</a>');
    $schoolAcad.append('<a href="#">School Academy</a>');
    $algoAcad.append('<a href="#">Algo Academy</a>');
    $softwareAcad.append('<a href="#">Software Academy</a>');
    $categoryContainer.append($kidsAcad);
    $categoryContainer.append($schoolAcad);
    $categoryContainer.append($algoAcad);
    $categoryContainer.append($softwareAcad);
    $announcer.append('<a href="#/category">Select category</a>');
    $announcer.append('<img id="arrow" src="../img/downArrow.png" />');
    $asideBar.append($announcer);
    $asideBar.append($categoryContainer);

    $section.append('<div id="questionHolder" class="col-md-9">');
    $section.append($asideBar);
    thirdPageWrapper.append($section);


    var $footer = $('<footer class="row">'),
        $innerFooter = $('<div class="col-md-12">');

    $innerFooter.append(' <h2>Property of Telerik Academy. Designed by Team Mimosa</h2>');
    $footer.append($innerFooter);
    return thirdPageWrapper;
}

export default {thirdPage};


