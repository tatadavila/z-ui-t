// @interface
import { ButtonI } from './button.interface'

export const Button: React.FC<ButtonI> = ({
    boxKey,
    children,
    disabled = true,
    onClickHandler,
}) => {
    return (
        <button
            className={`btn__container ${disabled ? 'btn__disabled' : ''}`}
            onClick={() => onClickHandler(boxKey)}
        >
            {children}
        </button>
    )
}
