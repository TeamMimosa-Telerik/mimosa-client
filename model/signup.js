function signUp(user) {
    var promise = new Parse.Promise();

    user.signUp(null)
        .then(function (user) {
            promise.resolve(user);
        }, function (error) {
            promise.reject(error);
        });
    return promise;
}

export default {signUp};