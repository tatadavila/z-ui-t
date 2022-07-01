interface ButtonI {
    children: React.ReactNode
    disabled: boolean
}

export const Button: React.FC<ButtonI> = ({ children, disabled=true }) => {
    return <button className="btn__container">{children}</button>
}
