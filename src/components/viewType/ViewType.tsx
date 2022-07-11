// @assets
import { data } from '~/assets/data.json'

// @components
import { Box } from '~/components'

// @localStore
import { setItemLocalStorage } from '~/localStore'

// @interfaces
import { DataI } from '~/interfaces'

// @vendors
import { FC, useState, useEffect } from 'react'

export const ViewType: FC = () => {
    const [celebrityData, setCelebrityData] = useState<DataI[]>(data)
    useEffect(() => {
        const items = { ...localStorage }
        if (Object.keys(items).length === 0) {
            setItemLocalStorage('celebrities', data)
        }
    }, [])
    return (
        <div className="vt__container">
            {celebrityData.map((element, index: number) => (
                <Box
                    boxKey={index}
                    data={celebrityData}
                    information={element}
                    key={index}
                    setData={setCelebrityData}
                />
            ))}
        </div>
    )
}
