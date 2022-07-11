// @components
import { useState } from 'react'
import ArrowDropdown from '../icons/arrowDropdown/ArrowDropdown'

// @interfaces
import { SelectI } from './select.interface'

export const Select: React.FC<SelectI> = ({ type }) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="select__container">
            <div className="select__dropdown" onClick={() => setOpen(!open)}>
                <span>{type}</span>
                <ArrowDropdown />
            </div>
            <div className={`select__dropdown-list ${!open ? 'hidden' : ''}`}>
                <button className="select__button">List</button>
                <button className="select__button">Grid</button>
            </div>
        </div>
    )
}
