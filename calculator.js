const stage = document.getElementById('stage')
const screen = document.getElementById('result')

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['addition', 'subtraction', 'multiplication', 'division']

const state = {
  screen: {
    isPending: true,
  },
  operator: {
    isPending: true
  }
}

function replaceAt(string, index, replacement) {
  return string.substring(0, index) + replacement
}


numbers.map((value) => {
  let element = document.getElementById(value)
  element.addEventListener('click', () => {
    if (state.screen.isPending) {
      screen.innerText = ''
      state.screen.isPending = false
    }
    if (screen.innerText.length <= 21) {
      screen.innerText += element.id
      state.operator.isPending = true
    }
  })
})

operators.map((operator) => {
  const element = document.getElementById(operator)
  element.addEventListener('click', () => {
    const operators = {
      'addition': '+',
      'subtraction': '-',
      'multiplication': '*',
      'division': '/'
    }

    if (state.operator.isPending) {
      stage.innerText += screen.innerText + operators[operator]
      state.operator.isPending = false
    }

    stage.innerText = replaceAt(stage.innerText, stage.innerText.length - 1, operators[operator])
    state.screen.isPending = true
  })
})

document.getElementById('recentEntryCleaner')
  .addEventListener('click', () => {
    screen.innerText = '0'
    state.screen.isPending = true
    state.operator.isPending = true
  })

document.getElementById('screenCleaner')
  .addEventListener('click', () => {
    screen.innerText = '0'
    stage.innerText = ''
    state.screen.isPending = true
    state.operator.isPending = true
  })

document.getElementById('numberBackspace')
  .addEventListener('click', () => {
    screen.innerText.length > 1
      ? screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
      : screen.innerText = '0'
    state.screen.isPending = true
    state.operator.isPending = true
  })

document.getElementById('comma')
  .addEventListener('click', () => {
    const screenHasValue = screen.innerText.length > 0
    const screenHasComma = screen.innerText.includes('.')

    if (screenHasValue && !screenHasComma) {
      screen.innerText += '.'
      state.screen.isPending = false
    }
  })

document.getElementById('assignment')
  .addEventListener('click', () => {
    if (stage.innerText.length > 0) {
      screen.innerText = eval(stage.innerText + screen.innerText)
      stage.innerText = ''
    }

    state.screen.isPending = true
    state.operator.isPending = true
  })