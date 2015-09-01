function Router(url, callback){
	this.url = url;
	this.callback = callback();
}

export default {Router}