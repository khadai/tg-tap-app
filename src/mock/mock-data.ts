import {User} from "../interfaces/interfaces.ts";

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