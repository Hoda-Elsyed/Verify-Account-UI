//   const input1 = document.getElementById('3').focus()
  const inputs = document.querySelectorAll('input')
  inputs[0].focus()

      inputs.forEach((input, idx)=>{
          input.addEventListener('keydown', (e)=>{
              if(e.key >= 0 && e.key <= 9 && idx < inputs.length-1 && e.target.value =='' ){
                  setTimeout(()=>{inputs[idx+1].focus(), 10})
                  
                }
                else if(e.key == 'Backspace' && idx > 0){
                    inputs[idx].value = ''
                inputs[idx-1].focus()
            }
        })
    
    })  
  