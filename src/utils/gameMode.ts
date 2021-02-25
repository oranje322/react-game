export const gameMode = (mode: number) => {
    let pairCount;
    if(mode === 0) {
        pairCount = 2
    } else if (mode === 1) {
        pairCount = 12
    } else  {
        pairCount = 18
    }
    return pairCount;
}
