
function component () {
  const elem = document.createElement('div');

  elem.innerHTML = "Hello"

  return elem
}

document.body.appendChild(component())
