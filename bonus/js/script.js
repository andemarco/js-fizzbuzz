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
    document.getElementById('num').innerHTML += '<li>' + 'FizzBuzz' + '<br>' + '</li>';
  } else if (i % 3 == 0){
    console.log('Fizz');
    document.getElementById('num').innerHTML += '<li>' +'Fizz' + '<br>' + '</li>';
  } else if (i % 5 == 0) {
    console.log('Buzz');
    document.getElementById('num').innerHTML += '<li>' +'Buzz' + '<br>' + '</li>';
  } else {
    console.log(i);
    document.getElementById('num').innerHTML += '<li>' +i + '<br>' + '</li>';
  }
  i++
}
