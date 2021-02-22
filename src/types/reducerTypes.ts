export interface IState {
    cards: CardType[],
    gameCards: IGameCard[],
    isStarted: boolean,
    isFinished: boolean,
    currentTry: number,
    lastTry: number,
    bestTry: number,
    allTry: Array<any>
}

export type CardType = string

export interface IGameCard {
    id: number,
    imageUrl: string,
    isFlipped: boolean
}
