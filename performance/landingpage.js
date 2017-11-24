import { check , sleep } from "k6";
import http from "k6/http";

var routerURL = `${__ENV.HOST_NAME}`;

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

	let res = http.get(routerURL + "datasets/95c4669b-3ae9-4ba7-b690-87e890a1c67c/editions/2016/versions/1");
	check(res, {
		"status was 200": (r) => r.status == 200
	});
	sleep(1);
}




