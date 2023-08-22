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

export class BadRequestException extends Error {

    name:string;
    statusCode: number;

    constructor(message: string){
        super(message);
        this.name = 'BadRequestError',
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export class UnauthenticatedException extends Error {

    name:string;
    statusCode: number;

    constructor(message: string){
        super(message);
        this.name = 'UnauthorizedError',
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

export class UnauthorizedError extends Error{
    name:string;
    statusCode: number;

    constructor(message: string){
        super(message);
        this.name = 'UnauthorizedError',
        this.statusCode = StatusCodes.FORBIDDEN;
    }

}