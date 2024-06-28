import { Router } from "express";
import { submitUser,getUser, updateStatus } from "../controller/userController.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route("/submituser").post(upload.fields([
    {
        name: "userPhoto",
        maxCount: 1
    }
]), submitUser)


router.route("/getuser").get(getUser)
router.route("/updateStatus/:formId").put(updateStatus)


export default router