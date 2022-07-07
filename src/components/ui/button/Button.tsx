// @interface
import { ButtonI } from './button.interface'

export const Button: React.FC<ButtonI> = ({
    children,
    disabled = true,
    onClickHandler,
}) => {
    return (
        <button
            className={`btn__container ${disabled ? 'btn__disabled' : ''}`}
            onClick={onClickHandler()}
        >
            {children}
        </button>
    )
}
