import ApplicationError from './ApplicationError'

export default class TokenError extends ApplicationError {
    constructor(message: string) {
        super(message || 'token error', 401 )
    }
}