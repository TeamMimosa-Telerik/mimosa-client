function eventRouter(){
    $('#play').click(function () {
        if(Parse.User.current() == null) {
            alert('You must be signed in to continue');
        }else{
        	window.location.assign(document.URL+"#/category");
        }
    });

    $('#first-category-btn').click(function(){
       
    });
}

export default {eventRouter};
