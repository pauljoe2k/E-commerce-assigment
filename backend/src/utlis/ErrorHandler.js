export default class errorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        Error.captureStackTrace(this);
        this.statusCode=statusCode;
    }
}
