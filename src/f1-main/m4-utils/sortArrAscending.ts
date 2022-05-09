export const sortArr = <T>(sort: 'increase'|'decrease',arr: Array<T>, key1: string, key2: string) => {
    return arr.sort((a: any, b: any) => {
        if (a[key1][key2] < b[key1][key2]) return -1;
        if (a[key1][key2] > b[key1][key2]) return 1;
        return 0;
    })
}