// @assets
import { data as mockedData } from '~/assets/data.json'

// @interfaces
import { ViewTypeI } from '~/interfaces'

// @utils
import { deleteSpaces } from '~/utils'

export const ViewType: any = (
    PassedComponent: React.ComponentType<ViewTypeI>,
) => {
    const WrappedComponent: React.FC = () => {
        return (
            <div className="vt__scrolling-container">
                {mockedData.map(element => (
                    <PassedComponent
                        data={element}
                        key={deleteSpaces(element.name)}
                    />
                ))}
            </div>
        )
    }
    return WrappedComponent
}
