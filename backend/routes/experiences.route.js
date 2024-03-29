import {Router} from "express"
import db from "../db/connection.js"
import { ObjectId } from "mongodb";

const router = Router()
const EXPERIENCES_COLLECTION = db.collection('experiences')

// Endpoint for getting a list of experiences
router.get('/', async (req, res) => {
    let results = await EXPERIENCES_COLLECTION.find({}).toArray();
    res.send(results).status(200);
});

//Endpoint for deleting all experiences
router.delete('/', async(req, res) => {
    let result = await EXPERIENCES_COLLECTION.deleteMany({});
    res.send(result).status(202);
});

// Endpoint for adding a single project
router.post('/', async(req, res) => {
    try {
        let newExperience = {
            type: req.body.type,
            title: req.body.title,
            duration: req.body.duration,
            description: req.body.description,
            organisation: req.body.organisation,
            location: req.body.location
        }
        let result = await EXPERIENCES_COLLECTION.insertOne(newExperience);
        res.send(result).status(202);
    } catch (error) {
        console.error(error)
    }
});

// Endpoint for getting a single experience by id
router.get('/:id', async (req, res) => {
    let query = {_id: new ObjectId(req.params.id)}
    let result = await EXPERIENCES_COLLECTION.findOne(query)

    !result ? res.send("Not found!").status(404) : res.send(result).status(200);
});

// Endpoint for updating an experience
router.patch('/:id', async(req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id)}
    let update = {
        $set: { 
                type: req.body.type,
                title: req.body.title,
                duration: req.body.duration,
                description: req.body.description,
                organisation: req.body.organisation,
                location: req.body.location
        }
    }
    let result = await EXPERIENCES_COLLECTION.updateOne(query, update);
    res.send(result).status(200);
    } catch (error) {
        console.error(error);
    }
    }
);

// Endpoint for deleting an experience by id
router.delete('/:id', async(req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id)}
        let result = await EXPERIENCES_COLLECTION.deleteOne(query);
        res.send(result).status(202);
    } catch (error) {
        console.error(error);
    }
});

export default router;