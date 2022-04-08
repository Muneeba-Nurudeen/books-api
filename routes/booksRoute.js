const {Router} = require("express")
const {getBooks} = require("../controllers/booksController")



const router = Router();

router.route("/books").get(getBooks)


module.exports = router