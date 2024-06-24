import {BoostAbility, LeaderBoard, LeaderBoardUser, User} from "../interfaces/interfaces.ts";

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

// Mock data for LeaderBoardUser
export const leaderBoardUsersMock: LeaderBoardUser[] = [
    { id: 'user1', position: 1, username: 'Alice', refAmount: 1500 },
    { id: 'user2', position: 2, username: 'Bob', refAmount: 1450 },
    { id: 'user3', position: 3, username: 'Charlie', refAmount: 1400 },
    { id: 'user4', position: 4, username: 'Dave', refAmount: 1350 },
    { id: 'user5', position: 5, username: 'Eve', refAmount: 1300 },
    { id: 'user6', position: 6, username: 'Frank', refAmount: 1250 },
    { id: 'user7', position: 7, username: 'Grace', refAmount: 1200 },
    { id: 'user8', position: 8, username: 'Hank', refAmount: 1150 },
    { id: 'user9', position: 9, username: 'Ivy', refAmount: 1100 },
    { id: 'user10', position: 10, username: 'Jack', refAmount: 1050 },
    { id: 'user11', position: 11, username: 'Kathy', refAmount: 1000 },
    { id: 'user12', position: 12, username: 'Leo', refAmount: 950 },
    { id: 'user13', position: 13, username: 'Mona', refAmount: 900 },
    { id: 'user14', position: 14, username: 'Nina', refAmount: 850 },
    { id: 'user15', position: 15, username: 'Oscar', refAmount: 800 },
    { id: 'user16', position: 16, username: 'Paul', refAmount: 750 },
    { id: 'user17', position: 17, username: 'Quinn', refAmount: 700 },
    { id: 'user18', position: 18, username: 'Rachel', refAmount: 650 },
    { id: 'user19', position: 19, username: 'Sam', refAmount: 600 },
    { id: 'user20', position: 20, username: 'Tina', refAmount: 550 },
    { id: 'user21', position: 21, username: 'Uma', refAmount: 500 },
    { id: 'user22', position: 22, username: 'Vince', refAmount: 450 },
    { id: 'user23', position: 23, username: 'Wendy', refAmount: 400 },
    { id: 'user24', position: 24, username: 'Xander', refAmount: 350 },
    { id: 'user25', position: 25, username: 'Yara', refAmount: 300 },
    { id: 'user26', position: 26, username: 'Zane', refAmount: 250 },
    { id: 'user27', position: 27, username: 'Amy', refAmount: 200 },
    { id: 'user28', position: 28, username: 'Bill', refAmount: 150 },
    { id: 'user29', position: 29, username: 'Cathy', refAmount: 100 },
    { id: 'user30', position: 30, username: 'Doug', refAmount: 50 }
];


// Mock data for LeaderBoard
export const leaderBoardMock: LeaderBoard = {
    users: leaderBoardUsersMock,
    me: {
        id: 'user3',
        position: 3,
        username: 'Charlie',
        refAmount: 130,
    },
    adImgUrl: '/src/assets/Любовь-к-автомобилям-шапка4 2.png',
};

