var totalScore = 0

function clicou(entrada, paragrafo) {
    let count = 0
    let acrescimo = document.getElementById(entrada).value
    document.getElementById(paragrafo).innerText += acrescimo
}

function terminou() {
    let Quiz = document.querySelector('.quiz')
    Quiz.classList.remove('show')
    Quiz.classList.add('hide')

    let Results = document.querySelector('.resultados')
    Results.classList.remove('hide')
    Results.classList.add('show')
    
    document.querySelector('.res-quiz').innerText += totalScore + '%'
}

validate1 = () => {
    let acrescimo = document.getElementById('inputTexto1').value.toLowerCase().replace('é', 'e').replace('.', '').replace(/\"/g, "")
    
    if (acrescimo === 'tanto bate ate que fura') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate2 = () => {
    let acrescimo = document.getElementById('inputTexto2').value.toLowerCase().replace('ó', 'o').replace('á', 'a').replace('à', 'a').replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'negocios a parte') {
        totalScore += 10
    }
    console.log(acrescimo)
       console.log(totalScore)
}

validate3 = () => {
    let acrescimo = document.getElementById('inputTexto3').value.toLowerCase().replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'todo mundo tem um pouco') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate4 = () => {
    let acrescimo = document.getElementById('inputTexto4').value.toLowerCase().replace('é', 'e').replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'que lhe direi quem es' || acrescimo==='e te direi quem es' || acrescimo==='e eu lhe direi quem es' || acrescimo==='e eu te direi quem es' || acrescimo==='que direi quem es' || acrescimo==='e direi quem es') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate5 = () => {
    let acrescimo = document.getElementById('inputTexto5').value.toLowerCase().replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'do que dois voando' || 'do que 2 voando') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate6 = () => {
    let acrescimo = document.getElementById('inputTexto6').value.toLowerCase().replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'a galinha enche o papo') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate7 = () => {
    let acrescimo = document.getElementById('inputTexto7').value.toLowerCase().replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'quem cedo madruga') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate8 = () => {
    let acrescimo = document.getElementById('inputTexto8').value.toLowerCase().replace('ã', 'a').replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'nao movem moinho' || 'nao move moinho') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate9 = () => {
    let acrescimo = document.getElementById('inputTexto9').value.toLowerCase().replace('ã', 'a').replace('ç', 'c').replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'inimiga da perfeicao') {
        totalScore += 10
    }
    console.log(acrescimo)
    console.log(totalScore)
}

validate10 = () => {
    let acrescimo = document.getElementById('inputTexto10').value.toLowerCase().replace('.', '').replace(/\"/g, "")
    console.log(acrescimo)
    
    if (acrescimo === 'do lado mais fraco') {
        totalScore += 10
        returnScore(totalScore)
    }
    console.log(acrescimo)
    console.log(totalScore)
}