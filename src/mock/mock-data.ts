import {BoostAbility, User} from "../interfaces/interfaces.ts";

export const mockUser: User = {
    oneTapIncome: 350,
    oneHourIncome: 2691,
    name: "User1",
    energyPercent: 96,
    isAutoRenew: true,
    balance: 3501,
    videoUrls: [{
        url: "https://youtu.be/ZlrH4BAj4bU?si=s1WmD6CIdOJMQSeE",
        image: 'https://i.ytimg.com/vi/ZlrH4BAj4bU/hqdefault.jpg'
    }, {
        url: "https://youtu.be/smNt0U4DUco?si=filz91McFhFRbnWz",
        image: 'https://i.ytimg.com/vi/smNt0U4DUco/hqdefault.jpg'
    }]
}

export const mockBoost: BoostAbility[] = [
    {
        title: 'Multitap',
        description: 'Увеличивает количество монет, которое вы можете заработать за 1 тап по экрану',
        imageUrl: '/src/assets/multitap-boost.svg',
        price: 12000,
        level: 12,
    }, {
        title: 'Energy limit',
        description: 'Увеличивает количество энергии',
        imageUrl: '/src/assets/energy-boost.svg',
        price: 12000,
        level: 12,
    }
]