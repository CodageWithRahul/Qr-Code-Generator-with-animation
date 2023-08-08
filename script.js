let input = document.getElementById('input')
let text = document.getElementById('head')
let pera = document.getElementById('pera')
let pera2 = document.getElementById('pera2')

let img = document.getElementById('qrimg')
let btn = document.getElementsByClassName('btn2')
let box = document.getElementById('box2');
let down = document.getElementById('down');
let bttn = document.getElementById('bttn');
let reload = document.querySelector("#btn-re");
let conte = document.querySelector(".conte");
let btn2 = document.querySelector(".btn2");
var im;
console.log(reload)
function qr() {
  if (input.value.length > 0 && input.checkValidity()) {
    box.classList.add("a")
    im = img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value
    pera.innerHTML = 'Scan This QR Code'
    pera2.innerHTML = im
    down.onclick = down.href = im
    bttn.classList.remove('opa')
    reload.classList.remove('opa1')
    conte.classList.remove('opa2')
    console.log(reload)
    // document.getElementById("bttn").classList.remove("opa");
    console.log(bttn)
    text.innerHTML = ''
    btn2.classList.add('displa')
    // btn2.onclick = down.href = im
  }
  else {
    text.innerHTML = 'Please enter valid link OR add https://'

  }




}
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    qr()
  }

})

let aa = "https://www.google.com/"
function dow() {
  down.href = aa
};
function relod() {
  reload = window.location.reload()
}
console.log(im)
