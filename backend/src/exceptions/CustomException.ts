import {StatusCodes} from 'http-status-codes';

export class NotFoundException extends Error {

    name:string;
    statusCode: number;

    constructor(message: string){
        super(message);
        this.name = 'NotFoundError',
        this.statusCode = StatusCodes.NOT_FOUND;
    }

}