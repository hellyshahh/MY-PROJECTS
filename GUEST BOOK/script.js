let button = document.querySelector('button')
let name = document.querySelector('#inputname')
let email = document.querySelector('#inputemail')
let phone = document.querySelector('#inputphone')
let age = document.querySelector('#inputage')
let form = document.querySelector('form')
let checkbox = document.querySelector('#checkbox')
let room = document.querySelector('#room')
let guestArray = []

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        room.removeAttribute("disabled")
    } else {
        room.setAttribute("disabled", true)
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    a = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        age: age.value,
        room: room.value
    }

    guestArray.push(a)

    let container = document.querySelector('.container')
    let newDiv = document.createElement('div')
    container.appendChild(newDiv)

    newDiv.innerHTML = `
        <h3>NAME: ${a.name}</h3>
        <p>AGE: ${a.age}</p>
        <p>PHONENO: ${a.phone}</p>
        <p>EMAIL: ${a.email}</p>
        <p>ROOM-NO: ${a.room}</p>
    `

    if (checkbox.checked) {
        newDiv.classList.add('cards')

        let checkoutBtn = document.createElement("button")
        checkoutBtn.innerText = "Check OUT"

        newDiv.appendChild(checkoutBtn)

        checkoutBtn.addEventListener("click", () => {
            newDiv.classList.remove("cards")
            newDiv.classList.add("cards_unchecked")
            checkoutBtn.remove()
        })
    } else {
        newDiv.classList.add('cards_unchecked')
    }
})