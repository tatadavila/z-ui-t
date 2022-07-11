export const getItemLocalStorage = (name: string): any => {
    const stringArray: string = localStorage.getItem(name) || ''
    return JSON.parse(stringArray)
}
