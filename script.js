
const [input, btn] = document.querySelectorAll('.input, .btn')

function setMessage(state) {
  const message = document.querySelector('.message')
  if (state) {
    message.dataset.state = state
  } else {
    delete message.dataset.state
  }
}

function isValid(phoneNumber) {
  return /^\+380\d{9}$/.test(phoneNumber)
}


input.oninput = () => {
  if (input.value) {
    if (isValid(input.value)) {
      btn.disabled = false
      setMessage()
    } else {
      setMessage("error")
      btn.disabled = true
    }
  } else {
    setMessage()
  }
}

btn.onclick = () => {
  if (input.value === '') {
    return
  } 
  setMessage("success")
  input.value = ''
}
