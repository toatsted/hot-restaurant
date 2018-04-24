const path = require("path");

module.exports = function(app, tables, waitlist){
	app.get("/api/tables", (req, res) => {
		return res.json(tables);
	})

	app.get("/api/waitlist", (req, res) => {
		return res.json(waitlist);
	})

	app.post("/api/tables", function(req, res) {
	    let newTable = req.body;

	    if(tables.length < 6)
		    tables.push(newTable);
	    else
	  	    waitlist.push(newTable)

	    res.json(newTable);
	});
}