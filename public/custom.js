function getRandomJoke() {

  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    return JSON.parse(this.responseText);
  }
  });

  xhr.open("GET", "/.netlify/functions/server");

  xhr.send(data);
}
$(function () {
  var loadedJoke = getRandomJoke();
  $('#text').text(loadedJoke.text);
  $('#author').text(loadedJoke.author);
  $('#tweet-joke').attr('href', 'https://twitter.com/intent/tweet?hastags=dadjoke&related=joke.jace.pro&text=' + loadedJoke.text);
  $('#new-joke').click(function () {
    var newJoke = getRandomQuote();
    $('#text').text(newJoke.text);
    $('#author').text(newJoke.author);
    $('#tweet-joke').attr('href', 'https://twitter.com/intent/tweet?hastags=dadjoke&related=joke.jace.pro&text=' + newJoke.text);
  });
})