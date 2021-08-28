export interface User {
    id?: number,
    username: string,       //profile, message header, navbar
    email: string,          //profile
    bio: string,            //profile
    avatarImage: string,    //profile, message header, navbar; src string
    role: number,           //authorization
    location: number,       //current room   (child of parent room)
    world: number,          //current server (parent room)
//  friends: number[]. Will be implemented as a table utilizing foreign key for association
//  messages: number[]. Will be implemented as a table utilizing foreign key for association
}
