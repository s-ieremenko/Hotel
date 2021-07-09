class Room implements IRoom {
    protected _area: number
    protected _roomNumber: number
    protected _guestName: string | null = null
    public constructor(area: number, roomNumber: number) {
        this._area = area
        this._roomNumber = roomNumber
    }
    public get area(): number {
        return this._area
    }
    public get roomNumber(): number {
        return this._roomNumber
    }
    public get guestName(): string {
        return this._guestName
    }
    public set guestName(guestName: string) {
        this._guestName = guestName
    }
}