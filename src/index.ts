const hotel: IHotel = new Hotel('Ibis', 'London', 4, [new Room(23, 1), new Room(20, 2), new Room(22, 3)])
const guest: Guest = new Guest('Vasya Petrov')
const guest1: Guest = new Guest('Dima Ivanov')
const guest2: Guest = new Guest('Oleg Popov')
const guest3: Guest = new Guest('Petya Sidorov')

const vip: Vip = new Vip(false, 'Oleg Vinnik')
const vip1: Vip = new Vip(true, 'Stepan Bandera')

guest.bookHotel(hotel)
    .then(response => {
        console.log(response)
        return guest.leaveHotel()
    })
    .then(response => {
        console.log(response)
        return guest.bookHotel(hotel)
    })
    .then(response => {
        console.log(response)
        return guest.leaveHotel()
    })
    .then(response => console.log(response))
    .catch(error => console.warn(error))


// guest.leaveHotel()