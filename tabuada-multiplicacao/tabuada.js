function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ' '
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // *essa linha o js não faz sentido, mas para outras linguagens elas vão fazer uso (php por exemplo)
            tab.appendChild(item)
            c++
        }
    }
}

// Aqui usamos o elemente "while", segundo o prof, o elemento "for" é mais usado. 