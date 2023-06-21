export const handlerErrors = (err: any, req: any, res: any, next: any) => {
    console.log(err.message,err.code)
}