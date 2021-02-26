export interface IState {
    cards: CardType[],
    gameCards: IGameCard[],
    flippedCards: Array<IGameCard>,
    pairsFound: number,
    isStarted: boolean,
    isFinished: boolean,
    settings: ISettings
    stat: Array<IStat>,
    count: number
}

export type CardType = string

export interface IGameCard {
    id: number,
    imageUrl: string,
    isFlipped: boolean,
    pairFound: boolean
}

export interface IStat {
    attempt: number,
    steps: number,
    gameMode: number
}

export interface ISettings {
    musicVolume: number,
    soundsVolume: number,
    gameMode: number,
    speed: number,
    showCards: boolean,
}


