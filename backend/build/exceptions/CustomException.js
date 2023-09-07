import { StatusCodes } from 'http-status-codes';
export class NotFoundException extends Error {
    name;
    statusCode;
    constructor(message) {
        super(message);
        this.name = 'NotFoundError',
            this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export class BadRequestException extends Error {
    name;
    statusCode;
    constructor(message) {
        super(message);
        this.name = 'BadRequestError',
            this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
export class UnauthenticatedException extends Error {
    name;
    statusCode;
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError',
            this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
export class UnauthorizedException extends Error {
    name;
    statusCode;
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError',
            this.statusCode = StatusCodes.FORBIDDEN;
    }
}
