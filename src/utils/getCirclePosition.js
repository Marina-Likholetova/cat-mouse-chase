import { MAX_WIDTH, MAX_HEIGHT, ITEM_SIZE, CIRCLE_RADIUS } from "./constants/constants";
import getAdjustedPosition from "./getAdjustedPosition";

export default function getCirclePosition(coords, i, length) {
    let radian = i * ((2 * Math.PI) / length) - 0.5 * Math.PI;
    let x = coords.x - ITEM_SIZE / 2 + CIRCLE_RADIUS * Math.cos(radian);
    let y = coords.y - ITEM_SIZE / 2 + CIRCLE_RADIUS * Math.sin(radian);


    return ({
        x: getAdjustedPosition(x, MAX_WIDTH, ITEM_SIZE),
        y: getAdjustedPosition(y, MAX_HEIGHT, ITEM_SIZE),
    })
}