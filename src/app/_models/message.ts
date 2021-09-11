export interface Message {
    id: number,
    userId: number,
    serverId: number, //the room id is enough since the room will be able to identify the server it lives in
    roomId: number,
    content: string     //chat room
}
