import {IGameCard} from "./reducerTypes";

export interface ICardProps {
    card: IGameCard,
}

export interface ISettingsProps {
    setOpenSettings: (v:boolean) => void
}

export interface IGameMenuProps {
    setOpenSettings: (v:boolean) => void
}