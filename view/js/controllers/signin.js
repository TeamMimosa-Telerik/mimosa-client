function signIn(username, password) {
    var user = new Parse.User();
    var promise = new Parse.Promise();

    Parse.User.logIn(username, password)
        .then(function (user) {
            return Parse.User.become(Parse.Session.sessionToken);
        }).then(function (user) {
            promise.resolve(user);
        }, function (error) {
            promise.reject(error);
        });
    return promise;

}

export default {signIn};


