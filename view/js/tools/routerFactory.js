function RouterFactory(){

	// url, callback, default
	var routes = [];

	console.log("in router RouterFactory");
	RouterFactory.prototype.addRoute = function(route){
		routes.push(route);
	};

	RouterFactory.prototype.init = function(){

		console.log("init route RouterFactory");


		$(window).on("hashchange",function(){

			 var url = location.hash.slice(1) || '/';
			 routes.forEach(function(route){
			 	if(route.url === url){

			 		if(url != '/login' && Parse.User.current() == null) {
			            alert('You must be signed in to continue');
			        }else{
			        	route.callback();
			        }
			 		
			 	}
			 });
		});

		// trigger default route's callback
		routes.forEach(function(route){
			if(route.default === true){
				route.callback();
			}
		});
	};

}

export default {RouterFactory}