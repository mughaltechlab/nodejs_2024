function genRandNum() {
    return (Math.floor(Math.random() * 100) + 1);
}

function celsiusToFarenheit(celsius) {
    return (celsius * 9) /5 + 32;
}

module.exports = {
    genRandNum,
    celsiusToFarenheit,
}
// module.exports = genRandNum
// module.exports = celsiusToFarenheit