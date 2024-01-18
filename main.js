function ExpressionGenerator(inp = 9876543210, summ = 200) {
    const lenDigit = inp.toString().length
    let queueStatus = [{exp: '', 
                        res: 0, 
                        idx: 0}]
    let quantityCurrExp = 0
    
                        
    console.log('Hey! \nSee what combinations you can get: \n')
    
    while (queueStatus.length > 0) {
        const { exp, res, idx } = queueStatus.shift();
        
        //checking for correctness of the total / adding new elements to the stack
        if (idx === lenDigit) {
          if (res === summ) {
            console.log(`${exp} = ${res}`)
            quantityCurrExp = quantityCurrExp + 1
          }
        } else if (idx < lenDigit) {
            const currDig = Number(inp.toString()[idx])
            
            if (idx === 0) {
              queueStatus.push({
                exp: `${currDig}`,
                res: currDig,
                idx: idx+1
              })
            } else {
              
              //adding combination with element _+currDig_ to the stack
              queueStatus.push({
                  exp: `${exp}+${currDig}`,
                  res: eval(`${exp}+${currDig}`),
                  idx: idx+1
              }),
              
              //adding combination with element _-currDig_ to the stack
              queueStatus.push({
                  exp: `${exp}-${currDig}`,
                  res: eval(`${exp}-${currDig}`),
                  idx: idx+1
              })
              
              //adding combination with element _currDig_ to the stack
              if (idx > 0) {
                  const prevDig = Number(inp.toString()[idx - 1])
                  const fullNum = prevDig*10 + currDig
                  
                  queueStatus.push({
                  exp: `${exp}${currDig}`,
                  res: eval(`${exp}${currDig}`),
                  idx: idx+1
                  })
              }
            }  
        }
    }
    
    if (quantityCurrExp === 0) {
      console.log('Oops, I can`t found correct expression for this summ :(')
    } else {
      console.log('\nBye!') 
    }
}

ExpressionGenerator()
