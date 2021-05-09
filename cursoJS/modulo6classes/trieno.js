const testFunc = () => {
  let resultArray = []
  let testObj = {}
  let testArray = []

  const rn = () => {
    return ~~(Math.random() * 1000)
  }

  for (let i = 0; i < 6; i++) {
    testObj = { id: rn() }
    testArray.push(testObj)
    testObj = {}
  }

  for (let i = 0; i < 6; i++) {
    resultArray.push(testArray)
  }

  console.log(resultArray)
  return resultArray
}
testFunc()