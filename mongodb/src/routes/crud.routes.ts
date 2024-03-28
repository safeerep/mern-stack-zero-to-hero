import { Router } from "express";
import {
    createDoc,
    deleteDoc,
    readDoc,
    updateDoc
} from "../controllers/crudControllers";

export const crudRoutes = () => {
    const router = Router()

    // create - commonly it will be a post request;
    router.post('/create', createDoc)

    // read - commonly it will be a get request
    router.get('/read', readDoc)

    // read - commonly it will be a put/patch request
    router.put('/update', updateDoc)

    // read - commonly it will be a delete request
    router.delete('/delete', deleteDoc)
    
    return router;
}