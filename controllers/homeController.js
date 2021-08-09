const { db } = require("../configs/firebase");

exports.homeController = async (req, res) => {
  let skills = [];

  //get skills data
  let querySnapshot = await db
    .collection("skills")
    .get()
    .catch((err) => {
      console.log("Error in getting Skills collection" + err);
      return;
    });

  querySnapshot.forEach((snapshot) => {
    skills.push(snapshot.data());
  });

  //get cv url
  let cv = await db
    .collection("documents")
    .doc("cv")
    .get()
    .catch((err) => {
      console.log("Error in getting cv url" + err);
      return;
    });

  res.render("pages/home.ejs", {title: "Portfolio of Shakil", skills, cv: cv.data() });
};
