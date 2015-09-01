import scoreObj from './score.js'

function signOut() {
    var promise = new Parse.Promise();

    ////var username = Parse.User.current().get('username');
    //var score = sessionStorage.getItem('points');
    //var pointsObject = scoreObj.createGameScoreObject();
    //console.log(username);
    //console.log(score);
    //pointsObject.init(username,score);
    Parse.User.logOut()
        .then(function (user) {
            promise.resolve(user);
        }, function (error) {
            promise.reject(error);
        });
    return promise;

    ////Parse.User.logOut().then(function () {
    //    pointsObject.save().then(function()
    //    {
    //        alert('The score is saved');
    //    });
    //    sessionStorage.clear();
    //    $('#signout').hide();
    //    $('#login').show();
    //    $('#signup').show();
    //    $('#user-name').hide();
    //    if ($('#signup-trigger').hasClass('active')) {
    //        $('#signup-trigger').find('span').html('&#x25BC;');
    //        $('#signup-trigger').next('#signup-content').slideToggle();
    //        $('#signup-trigger').toggleClass('active');
    //    }
    //    if ($('#login-trigger').hasClass('active')) {
    //        $('#login-trigger').next('#login-content').slideToggle();
    //        $('#login-trigger').find('span').html('&#x25BC;');
    //        $('#login-trigger').toggleClass('active');

    //    }
    //});

}

export default {signOut};