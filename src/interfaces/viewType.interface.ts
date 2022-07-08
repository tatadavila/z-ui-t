// @interfaces
import { DataI } from './data.interface'

export interface ViewTypeI {
    data: DataI
    key: number
    setData: React.Dispatch<DataI[]>
}
