// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// // Per i numeri che sono sia multipli di 3
// // che di 5 stampi FizzBuzz.

var numeri = [1]
i = 2
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
    numeri.push('FizzBuzz')
  } else if (i % 3 == 0){
    console.log('Fizz')
    numeri.push('Fizz')
  } else if (i % 5 == 0) {
    console.log('Buzz')
    numeri.push('Buzz')
  } else {
    console.log(i)
    numeri.push(i)
  }
  i++
}
document.getElementById('num').innerHTML = '<li>' + numeri + '</li>';
