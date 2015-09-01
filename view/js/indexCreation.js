import 'jquery';
// import '../lib/bootstrap/dist/js/bootstrap.js'

console.log("in indexCreation.js");
function indexCreation() {
        console.log("in indexCreation()");
       var $wrapper = $('<div id="wrapper" class="site-wrapper"></div>'),
        $innerWrapper = $(' <div class="site-wrapper-inner"></div>'),
        $coverContainer = $('<div class="cover-container"></div>'),
        $mastHead = $(' <div class="masthead clearfix"></div>'),
        $innerCover = $('<div class="inner cover"></div>'),
        $mastFoot = $('<div class="mastfoot"></div>'),
        $innerDiv = $('<div class="inner">'),
        $hThree = $('<h3 class="masthead-brand">')
            .append($('<img src="../img/TeamMimosaHardWorkingNinja.jpg" id="masterNinja" alt="Hardworking ninja!" class="img-circle img-responsive"/>')),
        $nav = $('<nav></nav>'),
        $ul = $('<ul class="nav masthead-nav"></ul>'),
        $logInLi = $('<li id="login"></li>'),
        $signUpLi = $('<li id="signup"></li>'),
        $userNameLi = $('<li id="user-name"></li>'),
        $signOutLi = $('<li id="signout"></li>'),
        $logInContent = $('<div id="login-content"></div>'),
        $logInForm = $('<form id="login-form"></form>'),
        $signUpContent = $('<div id="signup-content"></div>'),
        $signUpForm = $('<form action=""></form>'),
        $coverHeading = $('<h1 class="cover-heading">Who wants to become a Telerik <span id="ninjaSpan">NINJA</span></h1>');
    //mastFoot
    $mastFoot.append($('<div class="inner"> <p id="teamName">Team Mimosa&trade;</p> </div>'));

    //mastFoor END

    //innerCover
    $innerCover.append($coverHeading)
        .append($('<p class="lead">Code&nbsp;&nbsp;Play&nbsp;&nbsp;Conquer</p>'))
        .append($('<p class="lead"> <a href="#/category" id="play"class="btn btn-lg btn-default">Play</a> </p>'));
    //innerCover END

    // mastHead

    $signOutLi.append($('<a id="signout-trigger">Sign out</a>'));

    $signUpForm.append($('<fieldset id="inputs-signup"> <input id="email" type="email" name="Email" placeholder="Your email address" required> <input id="password-signup" type="password" name="Password" placeholder="Password" required> <input id="confirm-password-signup" type="password" name="ConfirmPassword" placeholder="Confirm Password" required> <input id="username-signup" name="Username" placeholder="Choose Username" required> </fieldset>'))
        .append($('<fieldset id="actions-signup"> <input type="button" id="submit-signup" value="Sign up"> </fieldset>'));
    $signUpContent.append($signUpForm);
    $signUpLi.append($('<a id="signup-trigger">Sign up <span>&#x25BC;</span></a>'))
        .append($signUpContent);

    $logInForm.append($('<fieldset id="inputs-login"> <input id="username-login" name="Username" placeholder="Username" required> <input id="password-login" type="password" name="Password" placeholder="Password" required> </fieldset>'))
        .append($('<fieldset id="actions-login"> <input type="button" id="submit-login" value="Log in"> </fieldset>'));
    $logInContent.append($logInForm);
    $logInLi.append($(' <a id="login-trigger">Log in <span>&#x25BC;</span></a>'))
        .append($logInContent);

    $ul.append($logInLi).append($signUpLi).append($userNameLi).append($signOutLi);
    $nav.append($ul);
    $innerDiv.append($hThree).append($nav);
    $mastHead.append($innerDiv);
    //mastHead END

    $coverContainer.append($mastHead).append($innerCover).append($mastFoot);
    $innerWrapper.append($coverContainer);
    $wrapper.append($innerWrapper);
    return $wrapper;
    
}

export default {indexCreation};
// module.exports = solve;