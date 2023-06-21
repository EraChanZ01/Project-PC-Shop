class ApplicationError extends Error {
    code: number
    constructor(message: string, status: number) {
        super(message || 'Something went wrong. Please try again');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.code = status || 500;
    }
}

export default ApplicationError;