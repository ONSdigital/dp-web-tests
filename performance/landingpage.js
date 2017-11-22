import { check , sleep } from "k6";
import http from "k6/http";

var routerURL = `${__ENV.ROUTER_URL}`;

export let options = {
	stages: [
		{ duration: "30s", target: 20},
		{ duration: "1m30s", target: 10},
		{ duration: "20s", target: 0},
	]
};

export default function() {
	if (routerURL === "") {
		routerURL = "http://localhost:20000";
	}

	let res = http.get(routerURL + "/filters/3fa709a9-5157-4af8-aee1-7e4b45260d02/dimensions");
	check(res, {
		"status was 200": (r) => r.status == 200
	});
	sleep(1);
}




