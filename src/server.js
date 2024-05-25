const express = require("express");
const routes = require("./routes");
const port = 3001;

const app = express();
app.use(express.urlencoded());

app.use('/api/v1', routes);

app.listen(port, () => {
	console.log(`API Server is running on ${port}`);
});