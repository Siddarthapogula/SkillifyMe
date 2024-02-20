const express = require("express");
const zod = require("zod");
const { Folio, User } = require("../db");
const router = express.Router();

const folioBody =zod.object({
    name : zod.string(),
    proficientSkill : zod.string(),
    studies : zod.object({
        higherEducation : zod.string(),
        secondaryEducation : zod.string(),
        primaryEducation : zod.string()
    }),
    techStack : zod.array(zod.string()),
    projects : zod.array(zod.object({
        projectName : zod.string(),
        projectLink : zod.string(),
        projectDescription : zod.string(),
        projectTechStack : zod.array(zod.string()),
    })),
    jobExperience : zod.array(zod.object({
        jobRole : zod.string(),
        jobDuration : zod.string(),
        jobDescription : zod.string(),
        techStackUsed : zod.array(zod.string()),
    })),
    services : zod.array(zod.string()),
    achievements : zod.array(zod.string()),
    resumeDrive : zod.string(zod.string()),
    description : zod.string(zod.string()),
    links : zod.object({
        linkedin : zod.string(),
        github : zod.string(),
        instagram : zod.string(),
        twitter : zod.string()
    }),
    contactDetails : zod.object({
        phoneNo : zod.string(),
        email : zod.string().email()
    })
})

router.post("/create", async (req, res)=>{
    const newFolioData = req.body;
    const {success} = folioBody.safeParse(req.body);
    const userId = req.headers.userid;
    if(!success){
        return res.status(411).json({
            msg : "please enter required fields"
        })
    }
    const specificFolioId = Math.round(Math.random()*10000);
    const folio = await Folio.findOneAndUpdate({userId : userId},
        { 
            $inc : {folioCount : 1},
            $push: {
                folios: {
                    folioId: specificFolioId,
                    data: newFolioData
                }
            }
        }
    );
    return res.status(200).json({
        msg : "congratulations you created portfolio successfully"
    })
})

router.put("/update", (req, res)=>{
    res.send("hey from folio update");
})
router.post("/delete", (req, res)=>{
    res.send("hey from folio delete");
})

module.exports = router;