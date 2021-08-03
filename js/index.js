//enlarging and shifting title upon mouseover'

const welcome = document.querySelector('h2')

let titleShift = (event) => {
    // event.target.style.textAlign = 'center'
    // event.target.style.fontSize = '6rem'
    // event.target.style.fontWeight = 'bold'
    event.target.classList.toggle("title-shift")
}
welcome.addEventListener('mouseover', titleShift)
welcome.addEventListener('mouseout', titleShift)


const busImg = document.querySelector('.intro img')

const imgChanger = function(event){
    console.log('test')
 if (event.target.src == "../img/fun-bus.jpg"){
     event.target.setAttribute("src", "../img/destination.jpg")
 } else  {
   event.target.setAttribute("src", "../img/fun-bus.jpg")
 }
}
busImg.addEventListener('click', imgChanger)
busImg.addEventListener('dblclick', imgChanger)

