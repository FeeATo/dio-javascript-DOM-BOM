function changeMode(){
    changeClasses()
    changeTexts()
}

function changeClasses(){
    button.classList.toggle('class-lightMode')
    h1.classList.toggle(darkModeClass)
    main.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeTexts(){
    const lightM = "Light Mode"
    const darkM = "Dark Mode"
    if(main.classList.contains(darkModeClass)){
        button.innerText = lightM
        h1.innerText = darkM + " ON"
        return;
    } 
    
    button.innerText = darkM
    h1.innerText = lightM + " ON"
    
}

const darkModeClass='class-darkMode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementsByTagName('h1')[0]
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', changeMode)

