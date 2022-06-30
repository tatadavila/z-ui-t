interface ButtonI {
    children: React.ReactNode
}

export const Button: React.FC<ButtonI> = ({ children }) => {
    return <button className="btn__container">{children}</button>
}
