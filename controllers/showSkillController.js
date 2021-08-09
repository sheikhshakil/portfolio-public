const {db} = require("../configs/firebase")

exports.showSkillGetController = async (req, res) => {
    const {skill_id} = req.query

    let skillData = await db.collection('skills').doc(skill_id).get().catch(err => {
        console.log("Error on showSkillController to get skill " + err)
    })

    res.render('pages/showSkill.ejs', {title : "See Skill Details", skillData : skillData.data()})
}