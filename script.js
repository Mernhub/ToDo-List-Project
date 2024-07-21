const input = document.querySelector('#input');
const tasks = document.querySelector('#tasks');
const button = document.querySelector('#btn');
button.addEventListener('click',(e)=>{
    if (input.value === '') {
        reload()
        alert('Please write something!')
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        tasks.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        reload()
    }
    reload()
    input.value = ''
});
tasks.addEventListener('click',(e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
        reload()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        reload()
    }
    reload()
})
function reload() {
    localStorage.setItem('data',tasks.innerHTML)
}
function data() {
    tasks.innerHTML=localStorage.getItem('data')
}
data()