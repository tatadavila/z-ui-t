// @component
import { ViewType } from '~/components'

export const PreviousRulingLayout: React.FC = () => {
    return (
        <section className="prl__container">
            <div className="prl__header">
                <p className="prl__header-title">Previous Rulings</p>
            </div>
            <section className="prl__boxes">
                <ViewType />
            </section>
        </section>
    )
}
