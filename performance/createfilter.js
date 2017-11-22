import { check , sleep } from "k6";
import http from "k6/http";

var routerURL = `${__ENV.ROUTER_URL}`;

export let options = {
	stages: [
		{ duration: "30s", target: 20},
		{ duration: "1m30s", target: 10},
		{ duration: "20s", target: 1},
    ],
    maxRedirects: 10,
};

export default function() {
	if (routerURL === "") {
		routerURL = "http://localhost:20000";
	}

    let res = http.post(routerURL + "/datasets/95c4669b-3ae9-4ba7-b690-87e890a1c67c/editions/2016/versions/1/filter", { redirects : 1 });
    check(res, {
		"status was 200": (r) => r.status == 200,
		"h1 is correct": (r) => r.html("h1").text() == "Filter options",
	});
    sleep(1);
}