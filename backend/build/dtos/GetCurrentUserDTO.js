export class CurrentUserDTO {
    userId;
    name;
    lastName;
    email;
    location;
    role;
    constructor(user, id) {
        this.userId = id;
        this.name = user.name;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
        this.location = user.location;
    }
}
