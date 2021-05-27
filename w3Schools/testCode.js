function addBorder(picture){
    let width = picture[0].length + 2

    return [
        "*".repeat(width),
        ...picture.map(value => `"*${value}*"`),
        "*".repeat(width)
    ]
}