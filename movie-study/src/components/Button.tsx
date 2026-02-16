type ButtonProps = {
    icon: string,
    handleClick: () => void
}

export function Button({icon, handleClick}:ButtonProps) {
    return (
        <button
        onClick={handleClick}
        >
            <img src={icon} alt="logo-image" />
        </button>
    )
}