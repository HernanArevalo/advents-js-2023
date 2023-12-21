function cyberReindeer(road, time) {
    let movements = Array(time).fill(road)
    const firstMovement = movements[0].split('')

    // * tiempos
    for (let s = 1; s < time; s++) {
      
      let pMovement = movements[s-1].split('')
      let nMovement = movements[s-1].split('')
      
      // * Abrir puertas
      if (s == 5) {
        
        for (let idx=0; idx < pMovement.length; idx++) {
          if(pMovement[idx] == '|'){
            nMovement[idx] = '*'
          }
        }
      }
      // * movimiento anterior 
      for (let idx=0; idx < pMovement.length; idx++) {

        if (pMovement[idx] == 'S') {
          if (pMovement[idx+1] == '.' || pMovement[idx+1] == '*') {
            
            if (firstMovement[idx] == 'S' || firstMovement[idx] == '.') {
              nMovement[idx] = '.'
            }
            else{
              if (movements[0].split('')[idx] == '|') {
                nMovement[idx] = '*'
              }
            }
  
            nMovement[idx+1] = 'S'
            
          }
        }
        if ((pMovement[idx] == 'S') && (pMovement[idx+1] == '|') && (s == 5)) {
          nMovement[idx] = '.'
          nMovement[idx+1] = 'S'
        }

      }
      
      movements[s] = nMovement.join('')
    }
    
  return movements
}


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)