import { Router } from 'express';
import {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} from '../../controllers/thoughtController.js';

const thoughtRouter = Router();

// api/thoughts
thoughtRouter.route('/')
    .get(getAllThoughts)
    .post(createThought);

// api/thoughts/:id
thoughtRouter.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

export default thoughtRouter;