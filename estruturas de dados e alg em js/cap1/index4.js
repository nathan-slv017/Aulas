function testTruthly(val){
    return val ? console.log("truthly") : console.log("falsy");
}
testTruthly(new Boolean());
testTruthly(new String('')) // Object sempre é true
testTruthly()