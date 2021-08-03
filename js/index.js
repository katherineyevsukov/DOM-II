//enlarging and shifting title upon mouseover'

const welcome = document.querySelector('h2')

let titleShift = (event) => {
  
    event.target.classList.toggle("title-shift")
}
welcome.addEventListener('mouseover', titleShift)
welcome.addEventListener('mouseout', titleShift)

//changing top image upon click

const busImg = document.querySelector('.intro img')

const imgChanger = function(event){
    console.log(event.target.src)
 if (event.target.src == "file:///Users/katherineyevsukov/Desktop/Web46LambdaProjects/DOM-II/img/fun-bus.jpg"){
    event.target.setAttribute("src", "img/destination.jpg")
}else{
    event.target.setAttribute("src", "img/fun-bus.jpg")
}}

busImg.addEventListener('click', imgChanger)
// busImg.addEventListener('dblclick', imgChanger)


//adding modal 
const buttonParent = document.querySelector('.text-content h2')
const newButton = document.createElement('button')
newButton.textContent = 'Go!'
buttonParent.appendChild(newButton)
newButton.style.margin = '10%'



const modalBox = document.createElement('div')
modalBox.style.width = '75%'
modalBox.style.height = '50vh'
modalBox.style.background = 'rgba(135,206,235,0.8)'
modalBox.style.display = 'none'
modalBox.style.justifyContent = 'center'
modalBox.style.alignItems = 'center'
modalBox.style.position ='absolute'

const form = document.createElement('form')
const inputOne = document.createElement('input')
const inputTwo = document.createElement('input')
const formButton = document.createElement('button')
formButton.textContent = 'Submit'


modalBox.appendChild(form)
form.appendChild(inputOne)
form.appendChild(inputTwo)
form.appendChild(formButton)
form.style.display = 'flex'
form.style.flexDirection = 'column'

//focus + blur events for form

const addPink = ( e => {
    e.target.style.backgroundColor = 'lightpink'
})
const removePink = ( e => {
    e.target.style.backgroundColor = 'white'
})
inputOne.addEventListener('focus', addPink)
inputTwo.addEventListener('focus', addPink)
inputOne.addEventListener('blur', removePink)
inputTwo.addEventListener('blur',removePink)

const parent = document.querySelector('.content-section');
console.log(parent)
parent.prepend(modalBox);

newButton.addEventListener('dblclick', e => {
    modalBox.style.display = 'flex'
})

// escape button causes modal to close

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27 ){
        modalBox.style.display = 'none'
    }
})

//welcome alert when page loads

window.addEventListener('load', (e) => {
    alert('Welcome to the Fun Bus Page!')
})

// nav bar changes color when mouse enters or leaves

const navBar = document.querySelectorAll('nav a')

const navBarArray = Array.from(navBar)
console.log(navBarArray)

const nav = document.querySelector('nav')

nav.addEventListener('mouseenter', (e) => {
    navBarArray.forEach(nav => nav.style.color ='red')
})

nav.addEventListener('mouseleave', (e) => {
    navBarArray.forEach(nav => nav.style.color = 'black')
})

//changing background color on double click

let background = document.querySelector('body')
background.addEventListener('dblclick', (e) => {
    background.style.backgroundColor = 'hotpink'
})

//PROPAGATION to prevent background from changing color on button click

newButton.addEventListener('dblclick', e => {
    e.stopPropagation()
})

//PREVENTDEFAULT avoiding refresh of page upon form submission

formButton.addEventListener('click', (e) =>
    e.preventDefault()
)