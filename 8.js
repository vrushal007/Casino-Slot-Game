window.onload = function() {
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')

    print.onclick = function() {
        let n = parseInt(num.value)
        let start = new Date().getTime()
        for (let i = 1; i <= n; i++) {
            let li = document.createElement('li')
            li.innerHTML = i
            list.appendChild(li)
        }
        let end = new Date().getTime()
        console.log(`${end - start}ms`)
    }
}