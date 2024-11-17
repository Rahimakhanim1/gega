// const sun = document.getElementById('sun')
// const moon = document.getElementById('moon')
// const body = document.getElementsByTagName('body')

// sun.addEventListener('click', () =>{

//         sun.classList.add('hidden')
//         console.log(sun)
//         // document.getElementById('moon').classList.add('hidden')
//         // body.classList.remove('dark')

   
// })

const sunIcon = document.querySelector('#sun')
const moonIcon = document.querySelector('#moon')
const body = document.querySelector('body')

sunIcon.addEventListener('click', () => {
    sunIcon.classList.add('hidden')
    moonIcon.classList.remove('hidden')
    body.classList.remove('dark')

})

moonIcon.addEventListener('click', () =>{
    moonIcon.classList.add('hidden')
    sunIcon.classList.remove('hidden')
    body.classList.add('dark')
} )