import {CardType} from "../types/reducerTypes";

export const shuffleArray = (array:CardType[]):CardType[] => {
    return [...array].sort(() => Math.random() - 0.5);
};