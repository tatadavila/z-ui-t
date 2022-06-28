// @assets
import data from 'src/assets/data.json'

export const viewType = (PassedComponent: React.ComponentType): React.FC => {
    const WrappedComponent = ({ ...props }) => {
        return <PassedComponent {...props} />
    }
    return WrappedComponent
}
