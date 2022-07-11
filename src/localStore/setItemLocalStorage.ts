export const setItemLocalStorage = (name: string, data: any[]) => {
    localStorage.setItem(name, JSON.stringify(data))
}
