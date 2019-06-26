const aaa = [2, 5, 9]
const bbb = [1, 2, 0, 7, 9]
const ccc = [1, 2, 0, 7, 0]
const numProd = intArr => {
	const result = []
	let numZero = intArr.filter(n => n === 0).length
	console.log(numZero)
	
	if (numZero > 1) {
		intArr.forEach(n => {
			result.push(0)
		})
	} else {
		const nonZeroIntArr = intArr.filter(n => n !== 0)
		const baseProd = nonZeroIntArr.reduce((a, c) => a * c)
		let prod
		if (numZero === 1) {
			intArr.forEach(n => {
				if (n === 0) {
					prod = baseProd
				} else {
					prod = 0
				}
				result.push(prod)
			})
		} else {
			intArr.forEach(n => {
				result.push(baseProd / n)
			})
		}
	}
	
	return result
}
console.log(`aaa: ${numProd(aaa)}`)
console.log(`bbb: ${numProd(bbb)}`)
console.log(`ccc: ${numProd(ccc)}`)
