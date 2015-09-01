function eventRouter(){
    $('#play').click(function () {
        if(Parse.User.current() == null) {
            alert('You must be signed in to continue');
        }
    });

    $('#first-category-btn').click(function(){
       
    });
}

export default {eventRouter};
