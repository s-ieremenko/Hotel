class Guest {
    protected _fullName: string
    protected _hotel: IHotel = null
    public constructor(fullName: string) {
        this._fullName = fullName
    }
    public get fullName(): string {
        return this._fullName
    }

    public get hotel(): IHotel {
        return this._hotel
    }

    public bookHotel(hotel: IHotel): Promise<string> {
        this._hotel = hotel
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (this._hotel.confirmBooking(this._fullName)) {
                    resolve(`Booking for ${this._fullName} is confirmed`)
                } else {
                    this._hotel = null
                    reject(new Error('Fully booked'))
                }
            }, 4000)
        )
    }

    public leaveHotel(): Promise<string> {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (this._hotel) {
                    this._hotel.checkOut(this._fullName)
                    this._hotel = null
                    resolve(`${this._fullName} is checked out`)
                } else {
                    reject(new Error('Hotel does not exist'))
                }
            }, 2000)
        )
    }
}