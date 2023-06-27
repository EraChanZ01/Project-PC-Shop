export const handlerErrors = (err: any, req: any, res: any, next: any) => {
    res.status(err.code).send(err.code)
}