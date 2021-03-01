import {IGameCard} from "./reducerTypes";

export interface ICardProps {
	card: IGameCard,
}

export interface ISettingsProps {
	setOpenSettings: (v: boolean) => void
}

export interface IGameMenuProps {
	setOpenSettings: (v: boolean) => void
	setOpenStats: (v: boolean) => void
}

export interface IStatsProps {
	setOpenStats: (v: boolean) => void
}