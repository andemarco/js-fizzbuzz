// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// // Per i numeri che sono sia multipli di 3
// // che di 5 stampi FizzBuzz.

i = 1
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    document.getElementById('num').innerHTML += 'FizzBuzz' + '<br>'
  } else if (i % 3 == 0){
    console.log('Fizz');
    document.getElementById('num').innerHTML += 'Fizz' + '<br>'
  } else if (i % 5 == 0) {
    console.log('Buzz');
    document.getElementById('num').innerHTML += 'Buzz' + '<br>'
  } else {
    console.log(i);
    document.getElementById('num').innerHTML += i + '<br>'
  }
  i++
}
