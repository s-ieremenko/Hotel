class Hotel implements IHotel {
    protected _name: string
    protected _city: string
    protected _stars: number
    protected _allRooms: Array<IRoom>
    protected _freeRooms: Array<IRoom>
    public constructor(name: string, city: string, stars: number, rooms: Array<IRoom>) {
        this._name = name
        this._city = city
        this._stars = stars
        this._allRooms = rooms
        this._freeRooms = [...rooms]
    }

    public get name(): string {
        return this._name
    }
    public get city(): string {
        return this._city
    }
    public get stars(): number {
        return this._stars
    }
    public get allRooms(): Array<IRoom> {
        return this._allRooms
    }
    public get freeRooms(): Array<IRoom> {
        return this._freeRooms
    }

    public confirmBooking(guestName: string): boolean {
        if (this._freeRooms.length) {
            const index: number = Math.floor(Math.random() * this._freeRooms.length)
            const randomRoom: IRoom = this._freeRooms[index]
            randomRoom.guestName = guestName
            this._freeRooms.splice(index, 1)
            return true
        }
        return false
    }

    public checkOut(guestName: string): void {
        const foundRoom: IRoom = this._allRooms.find(room => room.guestName === guestName)
        foundRoom.guestName = null
        this._freeRooms.push(foundRoom)
    }
}