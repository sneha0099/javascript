const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName = new String('hitesh-hc-com')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

console.log(gameName.substring(0,4))

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
console.log(gameName.slice(-8 , 4))

newString = "     sneha     "
console.log(newString)
console.log(newString.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))