export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly profilePicture?: string;  // Made this optional
    readonly role?: string; // Optional, in case you want to set roles during creation
    // any other fields you want at registration time
}
