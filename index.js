// Your code here
class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray
  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter(){
    return this.sidesArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.countSides == 3) {
      let validArray = []
      for (let i = 0; i < 3; i++){
        let newArray = this.sidesArray.map(x => x)
        newArray[i] = 0
        let twoSides = newArray.reduce((previousValue, currentValue) => previousValue + currentValue)
        validArray[i] = (twoSides > this.sidesArray[i]) ? true:false
      }
      return (validArray.includes(false)) ? false : true
    }
  }
}

class Square extends Polygon {
   get isValid() {
     let validFormula = x => x == this.sidesArray[0]
     return this.sidesArray.every(validFormula)
   }

   get area() {
     let sideLength = this.sidesArray[0]
     return (this.isValid) ? (sideLength*sideLength) : 0
   }

}
