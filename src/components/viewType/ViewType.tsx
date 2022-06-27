// @assets
import data from '~/assets/data.json'

export const viewType = (PassedComponent: React.FunctionComponent) => {
    const WrappedComponent = ({ ...props }) => {
      return (
        <PassedComponent {...props} />
      )
    }
    return WrappedComponent
}
