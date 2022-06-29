// @assets
import { data as mockedData } from '~/assets/data.json'

// @interfaces
import { ViewTypeI } from '~/interfaces'

export const ViewType: any = (
    PassedComponent: React.ComponentType<ViewTypeI>,
) => {
    const WrappedComponent = () => {
        return (
            <div className='vt__scrolling-container'>
                {mockedData.map(element => (
                    <PassedComponent data={element} key={element.name} />
                ))}
            </div>
        )
    }
    return WrappedComponent
}
