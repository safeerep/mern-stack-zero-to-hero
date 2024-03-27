import { Router } from "express";
import { crudRoutes } from "./crud.routes";

export default () => {
    const router = Router()
    router.use('/crud', crudRoutes())
    return router;
}