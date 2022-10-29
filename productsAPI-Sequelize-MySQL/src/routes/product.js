const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productsController");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:cod").get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;