export interface Room {
    //alias for child room, owned by parent rooms
    id?: number,
    worldId: number,
    name: string,
    image: string, //src string
}