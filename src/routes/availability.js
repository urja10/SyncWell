const express = require("express");
const controller = require("../controllers/availability");

const router = express.Router();

router.put("/:user_id/dates", (req, res) => {
	const resp = controller.setAvailabilityByDates(req.params.user_id, req.body);
	if (!resp) {
		res.status(400).send({
			error: "Something went wrong."
		});
	}
	res.send({
		user_id: req.params.user_id,
		data: req.body
	});
});

module.exports = router;