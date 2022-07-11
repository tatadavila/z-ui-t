// @interfaces
import { DataI } from './data.interface'

export interface ViewTypeI {
    data: DataI[]
    boxKey: number
    information: DataI
    setData: React.Dispatch<DataI[]>
}
