const nomors = [nol, satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan]
const lampu = 'blue'

setInterval(() => {
 Array.from(document.querySelectorAll('figure span')).forEach(s => {
  s.style.backgroundColor = '#111'
  s.style.boxShadow = 'none'
 })
 
 const sekarang = new Date()
 const hours = tambahNol(sekarang.getHours()) 
 const minutes = tambahNol(sekarang.getMinutes())
 const seconds = tambahNol(sekarang.getSeconds())

 nomors[[...hours][0]]('.jam', 1)
 nomors[[...hours][1]]('.jam', 2)
 nomors[[...minutes][0]]('.menit', 1)
 nomors[[...minutes][1]]('.menit', 2)
 nomors[[...seconds][0]]('.detik', 1)
 nomors[[...seconds][1]]('.detik', 2)
 $('h3').innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000)

function tambahNol(n){
 return n <= 10 ? `0${n}`: `${n}`
}

function nyala(sumbu, child, span){
 $(`${sumbu} .light:nth-child(${child}) span:nth-child(${span})`).style.backgroundColor = lampu
 $(`${sumbu} .light:nth-child(${child}) span:nth-child(${span})`).style.boxShadow = `0 0 7px ${lampu}`
}

function satu(sumbu, child){
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 4)
}
function dua(sumbu, child){
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 7)
 nyala(sumbu, child, 6)
 nyala(sumbu, child, 5)
}
function tiga(sumbu, child){
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 7)
}
function empat(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 7)
 nyala(sumbu, child, 4)
}
function lima(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 7)
}
function enam(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 6)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 7)
}
function tujuh(sumbu, child){
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 4)
}
function delapan(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 6)
 nyala(sumbu, child, 7)
}
function sembilan(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 7)
}
function nol(sumbu, child){
 nyala(sumbu, child, 1)
 nyala(sumbu, child, 2)
 nyala(sumbu, child, 3)
 nyala(sumbu, child, 4)
 nyala(sumbu, child, 5)
 nyala(sumbu, child, 6)
}

function $(ell){
 return document.querySelector(ell)
}
