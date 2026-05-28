const titulos=['Desarrollador frontend', 'QA tester', 'Desarrollador web']
const titulo=document.querySelector('#titulo')
let indiceTitulo=0

function mostrarSkill() {
   titulo.innerHTML= titulos[indiceTitulo]
   titulo.style.color='white'
   titulo.style.opacity='1'
setTimeout(fadeOut, 4000)
}

function fadeOut() {
    titulo.style.color = '#60a5fa'
    titulo.style.opacity='0'
    
    indiceTitulo++
    if(indiceTitulo >=titulos.length){ 
        indiceTitulo=0
        
    }
    setTimeout(mostrarSkill, 2000)
}
mostrarSkill()

  


