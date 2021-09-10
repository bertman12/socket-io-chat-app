export interface Message {
    id?: number,
    userId: number,
    // serverId: number, the room id is enough since it will be able to identify the server it lives in
    roomId: number,
    content: string     //chat room
}
