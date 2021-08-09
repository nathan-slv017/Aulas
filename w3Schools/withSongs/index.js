function foo(){
    return Promise.resolve(1).then(() => undefined)
}