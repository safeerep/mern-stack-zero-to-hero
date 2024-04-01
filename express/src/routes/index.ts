import { Router, Request, Response, NextFunction } from "express";
import { errorHandler } from "../middlewares/error.handling.middleware";

const router = Router()

// we can have router middlewares by using router.use();

router.get('/', (req: Request, res: Response) => {
    res.send({ message: "yes, successfully you have created first route with express js, welcome!"})
})

// just creating an error to see the working of error-handling middleware;
router.get('/error', ( req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Its the error we created')
    // err.stack = 
    next(err)
})

export default router;