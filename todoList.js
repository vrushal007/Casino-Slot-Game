window.onload = function() {
    let newtask = document.getElementById('newtask')
    let todolist = document.getElementById('todolist')
    let add = document.getElementById('add')

    add.onclick = function() {

        let li = document.createElement('li')

        //Add remove button
        let remove = document.createElement('button')
        remove.innerText = 'Remove'
        remove.onclick = function(event) {
            // todolist.removeChild(li)
            event.target.parentElement.remove()
        }

        //Change the order of the list
        let up = document.createElement('button')
        up.innerText = 'Up'
        up.onclick = function(event) {
            let li = event.target.parentElement
            let prev = li.previousElementSibling
            todolist.insertBefore(li, prev)
        }

        //Add task text
        let textSpan = document.createElement('span')
        textSpan.innerText = newtask.value


        li.appendChild(remove)
        li.appendChild(up)
        li.appendChild(textSpan)
        todolist.appendChild(li)
    }
}