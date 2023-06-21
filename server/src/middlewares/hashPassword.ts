const bcrypt = require('bcrypt');
import CONSTANTS from '../constants'
import ApplicationError from '../Errors/ApplicationError'

const hashPassword = async (req: any, res: any, next: Function) => {
    try {
        req.hashPass = await bcrypt.hash(req.body.password, CONSTANTS.SALT_ROUNDS);
        next()
    } catch (e) {
        next(new ApplicationError('password hash error', 500))
    }
}

export default {
    hashPassword
}