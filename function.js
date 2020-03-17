// Code By Webdevtrick ( https://webdevtrick.com )
const tabs = document.querySelectorAll('.tab')
const Tcontents = document.querySelectorAll('.Tcontent')
const darkModeSwitch = document.querySelector('#DarkModeSW')
  
const activateTab = tabnum => {
    
    tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    
    Tcontents.forEach( Tcontent => {
        Tcontent.classList.remove('active')
    })
  
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#Tcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  
}
 
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})
 
darkModeSwitch.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('darkmode')
    localStorage.setItem('jstabs-darkmode', JSON.stringify(!darkmode))
})
 
let darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'))
const opentab =  JSON.parse(localStorage.getItem('jstabs-opentab')) || '3'
 
if (darkmode === null) {
    darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches 
}
if (darkmode) {
    document.querySelector('body').classList.add('darkmode')
    document.querySelector('#DarkModeSW').checked = 'checked'
}
activateTab(opentab)