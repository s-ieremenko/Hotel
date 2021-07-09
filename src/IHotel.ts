interface IHotel {
    readonly name: string
    readonly city: string
    stars: number
    allRooms: IRoom[]
    freeRooms: IRoom[]
    confirmBooking(guestName: string): boolean
    checkOut(guestName: string): void
}
