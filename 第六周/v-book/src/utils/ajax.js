import axios from "axios"

export default {
	install : function(Vue,option={}){
		const http = axios.create(option);
		Vue.http = http;
		Vue.prototype.$http = http;
	}
}


