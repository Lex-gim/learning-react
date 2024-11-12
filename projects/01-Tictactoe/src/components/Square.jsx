export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected == true? 'is-selected':''}`

    const handleClick = () => {
        updateBoard(index);
    }

    return (
        <div onClick={handleClick} className={className}>
        {children}
        </div>
    )
}
