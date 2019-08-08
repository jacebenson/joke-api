
window.getRandomJoke= function() {
  var data = null;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var loadedJoke = JSON.parse(this.responseText);
    $('#text').text(loadedJoke.joke);
    $('#author').text(loadedJoke.punchline);
    $('#tweet-joke').attr('href', 'https://twitter.com/intent/tweet?hastags=dadjoke&related=joke.jace.pro&text=' + loadedJoke.joke);
    $('#new-joke').click(function () {
      window.getRandomJoke();
    });
  }
  });
  xhr.open("GET", "/.netlify/functions/server");
  xhr.send(data);
}
$(function () {
  window.getRandomJoke(); 
})