export default function buttonGroupToggle(buttonGroup) {
  buttonGroup.forEach(button => {
    button.addEventListener('click', () => {
      removeClassActive(buttonGroup)
      button.classList.toggle('active')
    })
  })

  function removeClassActive(group = []) {
    group.forEach(item => {
      item.classList.remove('active')
    })
  }
}