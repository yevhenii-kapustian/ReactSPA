export const getImgUrl = image => {
    return new URL(`../assets/${image}`, import.meta.url).href
}