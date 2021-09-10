export interface ChatRoom {
    //alias for child room, owned by parent rooms
    id: number,
    serverId: number,
    name: string,
    image: string, //src string
}
