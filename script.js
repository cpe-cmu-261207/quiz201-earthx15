const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
var c=0
const search = document.querySelector('#search')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')
const co = document.querySelector('#text')
// define more constants and variables here

btn_toggle.onclick = () => {
  if(c===0){
    var t=630610719+length.value
    author.innerHTML = t
    c++
  }else{
    author.innerHTML = '630610719 KONTHAKARN FUKAM'
    c=0
  }
}

search.onclick = () => {
  
}
reset.onclick = () => {
  text.innerHTML = co.innerHTML
  length.value=5
  color.value="#FF0000"
}






// more codes for Search and Reset buttons here
