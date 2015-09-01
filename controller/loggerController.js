import sign from '../model/signin.js';
import signO from '../model/signout.js';
import signU from '../model/signup.js';
import scoreObj from '../model/score.js'
function loggerEvents() {

    var currentUser = Parse.User.current();
    $('#signout').hide();
    if (currentUser) {
        $('#signout').show();
        $('#login').hide();
        $('#signup').hide();
        $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
    }
    else {
        $('#signout').hide();
    }

    $('#submit-login').click(function () {
        // if(username!=undefined && password!=undefined) {
        // console.log(signIn);
        var username = $('#username-login').val();
        var password = $('#password-login').val();
        sign.signIn(username, password)
            .then(function (user) {
                sessionStorage.setItem('points', 0);
                alert('The user is set');
                $('#signout').show();
                console.log($('#signout'));
                $('#login').hide();
                $('#signup').hide();
                $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();

            }, function (error) {
                console.log(error.message);
                alert(error.message);
            });
        //console.log('Username '+user.get('username'));


        // }
    });

    $('#submit-signup').click(function () {

        var username = $('#username-signup').val();
        var password = $('#password-signup').val();
        var email = $('#email').val();
        var user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        signU.signUp(user).then(function (user) {
            alert('Thanks for your sign up');
            $('#signout').show();
            $('#login').hide();
            $('#signup').hide();
            $('#user-name').html('Welcome ' + Parse.User.current().get('username')).show();
        }, function (error) {
            alert("Error: " + error.code + " " + error.message);
        });

    });
    $('#signout').click(function () {
        var username = Parse.User.current().get('username');
        var score = sessionStorage.getItem('points');
        var pointsObject = scoreObj.createGameScoreObject();
        console.log(username);
        console.log(score);
        pointsObject.init(username, score);
        signO.signOut().then(function () {

            pointsObject.save().then(function () {
                alert('The score is saved');
            });
            sessionStorage.clear();
            $('#signout').hide();
            $('#login').show();
            $('#signup').show();
            $('#user-name').hide();
            if ($('#signup-trigger').hasClass('active')) {
                $('#signup-trigger').find('span').html('&#x25BC;');
                $('#signup-trigger').next('#signup-content').slideToggle();
                $('#signup-trigger').toggleClass('active');
            }
            if ($('#login-trigger').hasClass('active')) {
                $('#login-trigger').next('#login-content').slideToggle();
                $('#login-trigger').find('span').html('&#x25BC;');
                $('#login-trigger').toggleClass('active');
            }
        }, function () {
            alert("Error: " + error.code + " " + error.message);
        })

    });

}

export default {loggerEvents};

