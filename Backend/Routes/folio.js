const express = require("express");
const zod = require("zod");
const { Folio, User } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");


const folioBody =zod.object({
    achievements : zod.string(),
    contactDetails : zod.object({
        phoneNo : zod.string(),
        email : zod.string().email()
    }),
    description : zod.string(),
    jobExperience : zod.array(zod.object({
        companyName : zod.string(),
        jobRole : zod.string(),
        jobDuration : zod.string(),
        jobDescription : zod.string(),
        stillWorking  : zod.boolean(),
        techStackUsed : zod.array(zod.string()),
    })),
    links : zod.object({
        linkedin : zod.string(),
        github : zod.string(),
        instagram : zod.string(),
        twitter : zod.string()
    }),
    name : zod.string(),
    proficientSkill : zod.string(),
    projects : zod.array(zod.object({
        projectName : zod.string(), 
        projectLink : zod.string(),
        projectDescription : zod.string(),
        projectTechStack :  zod.array(zod.string()),
    })),
    resumeDrive : zod.string(),
    services : zod.string(),
    studies : zod.object({
        higherEducation : zod.string(),
        secondaryEducation : zod.string(),
        primaryEducation : zod.string()
    }),
    techStack : zod.array(zod.string()),
})

router.post("/create", async (req, res) => {
    const newFolioData = req.body;
    const token = req.headers.authorization;

    const {userId} =  jwt.verify(token, jwtSecret);
    try {
        folioBody.parse(newFolioData);
    } catch (error) {
        return res.status(411).json({
            msg: "Please enter required fields",
            errors: error.errors, // Send the validation errors for debugging
        });
    }


    const specificFolioId = Math.round(Math.random() * 10000);

    await Folio.findOneAndUpdate(
        { userId: userId },
        {
            $inc: { folioCount: 1 },
            $push: {
                folios: {
                    folioId: specificFolioId,
                    data: newFolioData,
                },
            },
        }
    );

    return res.status(200).json({
        msg: "Congratulations, you created a portfolio successfully",
    });
});


router.post("/delete", async (req, res) => {
    const folioId = req.headers.folioid;

    try {
        const updatedDocument = await Folio.findOneAndUpdate(
            { "folios.folioId": folioId },
            {
                $inc : {folioCount : -1},
                $pull: {
                    folios: {
                        folioId: folioId,
                    },
                },
            },
            { new: true }
        );

        if (!updatedDocument) {
            return res.status(404).json({ message: "Folio not found" });
        }

        return res.status(200).json({
            message: "Folio deleted successfully",
            updatedFolios: updatedDocument.folios,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;