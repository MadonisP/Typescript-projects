import { Request, Response } from "express";
import { CreateUserInput } from "../schema/User-Schema";
import { createUser } from '../service/User-Service'
import logger from '../utils/logger'
import { omit } from 'lodash'

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
    try {
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"));
    } catch (e: any) {
        logger.error(e)
        return res.status(409).send(e.massage)
    }
}