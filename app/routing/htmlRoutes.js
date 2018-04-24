const path = require("path");

module.exports = function(app){
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"))
	});

	app.get("/tables", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/tables.html"))
	});

	app.get("/reserve", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/reserve.html"))
	});

	app.use((req, res) => {
		res.redirect("/");
	})

}
