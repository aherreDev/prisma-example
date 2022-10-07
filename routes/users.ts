import * as express from "express";
import { UsersController } from "../controllers";

const router = express.Router();

const usersController = new UsersController();

/* GET users listing. */
router.get('/', usersController.index);

/* GET user details. */
router.get('/:userId', usersController.show);

/* POST user. */
router.post('/', usersController.create);

/* PUT user. */
router.put('/:userId', usersController.update);

/* DELETE user. */
router.delete('/:userId', usersController.delete);


export default router;
