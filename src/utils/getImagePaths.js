function getImagePaths(directory) {
    let images = [];
    directory.keys().map((item) => images.push(item.replace("./", "")));
    return images;
}
const directory = require.context("../assets/icons", false, /\.(png|jpe?g|svg)$/);

const imagePaths = getImagePaths(directory);

export default imagePaths;