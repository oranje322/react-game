export interface IState {
    cards: CardType[],
    gameCards: IGameCard[],
    flippedCards: Array<IGameCard>,
    pairsFound: number,
    isStarted: boolean,
    isFinished: boolean,
    settings: ISettings
    stat: Array<IStat>,
    count: number,
    muteSound: boolean
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
    gameMode: number,
    date: string
}

export interface ISettings {
    musicVolume: number,
    soundsVolume: number,
    gameMode: number,
    speed: number,
    showCards: boolean,
    keys: IKeys
}

interface IKeys {
    muteKey: string
    autoplayKey: string
    fullscreenKey: string,
    newGameKey: string,
    statsKey: string
}


