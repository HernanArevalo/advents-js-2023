function maxDistance(movements) {
    let distance = 0
    let dots = 0

    for (let i = 0; i < movements.length; i++) {
        let movement = movements[i]

        if (movement == '>') {
            distance += 1
        }else{
            if (movement == '<') {
                distance -= 1
            }
            else{
                dots += 1
            }
        }
        
    }

    if (distance >= 0){
        distance += dots
    }else{
        distance -= dots
    }

    return Math.abs(distance)
  }



const movements = '>>*<'
const result = maxDistance(movements)
console.log('2',result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log('2',result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log('5',result3) // -> 5