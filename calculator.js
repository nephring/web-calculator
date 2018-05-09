const screen = document.getElementById('screen')

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['addition', 'subtraction', 'multiplication', 'division']

numbers.map((value) => {
  let element = document.getElementById(value)
  element.addEventListener('click', () => {
    screen.innerText.length < 16 ? screen.innerText += element.id : ''
  })
})

operators.map((value) => {
  let element = document.getElementById(value)
  element.addEventListener('click', () => {
    const operators = {
      'addition': '+',
      'subtraction': '-',
      'multiplication': '*',
      'division': '/'
    }
    if (screen.innerText.length > 0) {
      if (!screen.innerText.includes('+')) {
        screen.innerText += operators[value]
      }
    }
  })
})

document.getElementById('squareRoot')
  .addEventListener('click', () => {
    if (screen.innerText.length > 0) {
      screen.innerText = Math.sqrt(parseFloat(screen.innerText))
    }
  })

// document.getElementById('addition')
//   .addEventListener('click', () => {
//     if (screen.innerText.length > 0) {
//       if (!screen.innerText.includes('+')) {
//         screen.innerText += '+'
//       }
//     }
//   })

document.getElementById('screenCleaner')
  .addEventListener('click', () => {
    screen.innerText = ''
  })

document.getElementById('numberBackspace')
  .addEventListener('click', () => {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
  })

document.getElementById('comma')
  .addEventListener('click', () => {
    if (screen.innerText.length > 0) {
      if (!screen.innerText.includes('.')) {
        screen.innerText += '.'
      }
    }
  })


document.getElementById('assignment')
  .addEventListener('click', () => {
    screen.innerText = eval(screen.innerText)
  })