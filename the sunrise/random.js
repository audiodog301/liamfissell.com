const which = Math.floor(Math.random() * 5) // random intenger 0 to 4
const div = document.getElementsByClassName('tbd')[0]

if (which == 0) {
    div.className = 'poem'
    div.innerHTML = '<img src=\'tension-1.jpg\'>'
}

if (which == 1) {
    div.className = 'poem'
    div.innerHTML = '<img src=\'tension-2.jpg\'>'
}

if (which == 2) {
    div.className = 'poem'
    div.innerHTML = '<img src=\'breeze.jpg\'>'
}

if (which == 3) {
    div.className = 'poem'
    div.innerHTML = '<img src=\'deserve.jpg\'>'
}

if (which == 4) {
   div.className = 'notpoem'
}

document.addEventListener('click', () => {location.reload()})

function remind() {
    let reminder = document.createElement('div')
    reminder.className = 'remind'
    reminder.innerHTML = 'have you tried clicking somewhere?'
    document.getElementsByTagName('body')[0].appendChild(reminder)
    setTimeout(updateRemind, 5000)
}

function updateRemind() {
    document.getElementsByClassName('remind')[0].insertAdjacentHTML('beforeend', '<br>have you tried clicking somewhere?')
    setTimeout(updateRemind, 5000)
}

setTimeout(remind, 20000)