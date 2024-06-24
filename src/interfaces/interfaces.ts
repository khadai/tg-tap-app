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