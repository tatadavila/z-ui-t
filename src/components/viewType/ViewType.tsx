// @assets
import { data as mockedData } from '~/assets/data.json'

// @interfaces
import { ViewTypeI } from '~/interfaces'

export const ViewType: any = (
    PassedComponent: React.ComponentType<ViewTypeI>,
) => {
    const WrappedComponent = () => {
        return (
            <>
                {mockedData.map(element => (
                    <PassedComponent data={element} key={element.name} />
                ))}
            </>
        )
    }
    return WrappedComponent
}
