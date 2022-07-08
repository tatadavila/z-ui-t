// @assets
import { data } from '~/assets/data.json'

// @components
import { Box } from '~/components'

// @localStore
import { setItemLocalStorage } from '~/localStore'

// @interfaces
import { DataI } from '~/interfaces'

// @utils
import { deleteSpaces } from '~/utils'

// @vendors
import { FC, useState, useEffect } from 'react'

export const ViewType: FC = () => {
    const [celebrityData, setCelebrityData] = useState<DataI[]>(data)
    useEffect(() => {
        const items = { ...localStorage }
        if (Object.keys(items).length === 0) {
            setItemLocalStorage('celebrities', data)
        } else {
            console.log('Entered else')
        }
    }, [])

    return (
        <div className="vt__scrolling-container">
            {celebrityData.map((element, key) => (
                <Box data={element} key={key} setData={setCelebrityData} />
            ))}
        </div>
    )
}
