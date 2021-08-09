const router = require("express").Router();
const { homeController } = require("../controllers/homeController.js");
const {
  showSkillGetController,
} = require("../controllers/showSkillController");

const path = require("path");

router.get("/showSkill", showSkillGetController);



//------------------------------------------------------

router.get("/app-ads.txt", (req, res) => {
  const root = path.resolve("./");
  const filePath = path.join(root, "app-ads.txt");
  res.sendFile(filePath);
});

router.get("/devshakil-privacy-policy", (req, res) => {
  res.render("pages/privacy-policy.ejs");
});

router.get("/", homeController);

module.exports = router;
