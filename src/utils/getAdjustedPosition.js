export default function getAdjustedPosition(coord, max, itemsSize) {
    return (coord <= 0)
        ? 0
        : (coord >= max - itemsSize)
            ? max - itemsSize
            : coord   
}