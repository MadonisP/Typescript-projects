import DocumentDefinition from 'mongoose'
import UserModel, { UserDocument } from '../models/User-Model'

export async function createUser(input) {
    try {
        return await UserModel.create(input)
    } catch (e: any) {
        throw new Error(e.message)
    }
}