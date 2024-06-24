export interface User {
    oneTapIncome: number;
    oneHourIncome: number;
    name: string;
    energyPercent: number;
    isAutoRenew: boolean;
    balance: number;
    videoUrls: Video[]
}

export interface Video {
    url: string;
    image: string;
}

export interface BoostAbility {
    imageUrl: string;
    title: string;
    price: number;
    level: number;
    description: string;
}

export interface LeaderBoard {
    users: LeaderBoardUser[],
    me: LeaderBoardUser,
    adImgUrl: string
}

export interface LeaderBoardUser {
    id: string;
    position: number;
    username: string;
    refAmount: number
}

export interface Task {
    id: string;
    imgUrl: string;
    title: string;
    award: number;
    link: string
}