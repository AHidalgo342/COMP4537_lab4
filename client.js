class RequestHandler {
	static POSTRequest() {
		const data =
			"INSERT INTO Patients (name, dateOfBirth) VALUES ('Sara Brown', '1901-01-01', 'John Smith', '1941-01-01', 'Tamera Dotson', '1999-01-01', 'Shawn Gilbert', '2002-01-01');";

		const xhr = new XMLHttpRequest();
		xhr.open(
			"POST",
			"https://comp4537-labs-production.up.railway.app/COMP4537/lab4/api/v1/sql/",
		);
		xhr.send("data=" + encodeURIComponent(data));
		xhr.onload = () => {
			let response = xhr.responseText;
			document.getElementById("request_result").innerText = response;
		};
	}
	static GETRequest(query) {
		const xhttp = new XMLHttpRequest();

		xhttp.open(
			"GET",
			"https://comp4537-labs-production.up.railway.app/COMP4537/lab4/api/v1/sql/?query=" +
				encodeURIComponent(query),
			true,
		);
		xhttp.send();
		xhttp.onreadystatechange = () => {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("query_results").value =
					this.responseText;
			}
		};
	}
}
