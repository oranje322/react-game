export const numberPairs = (mode: number) => {
    let pairCount;
    if(mode === 0) {
        pairCount = 6
    } else if (mode === 1) {
        pairCount = 12
    } else  {
        pairCount = 18
    }
    return pairCount;
}
