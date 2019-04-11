# Joke API

## Deploy your own version to Netlify
[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jacebenson/joke-api)

```sh
curl https://wizardly-wing-66188a.netlify.com/.netlify/functions/server
```

## Public Endpoints:

### Grab a random joke!
[https://wizardly-wing-66188a.netlify.com/.netlify/functions/server](https://wizardly-wing-66188a.netlify.com/.netlify/functions/server)

## How these jokes were collected

Full disclosure: I collected jokes from these sources initially;

  * [15Dkatz/offical_joke_api](https://github.com/15Dkatz/official_joke_api)
  * [mikemcbride/dad-jokes](https://github.com/mikemcbride/dad-jokes)
  * [ChrisMcKenzie/dadjokes](https://github.com/ChrisMcKenzie/dadjokes)
  * [Icanhazdadjoke](https://icanhazdadjoke.com)
  * [The Oatmeal DJTAF](https://theoatmeal.com/djtaf/)

## Make a contribution!

Submit a Pull Request, with your joke added to the jokes.js file. Make sure the joke is in this format:

## Adding a normal joke

```javascript
{
  "joke": "your joke's setup line",
  "punchline": "your joke's punchline"
}
```

### Adding a oneline pun
```javascript
{
  "joke": "your joke's setup line",
  "punchline": null
}
```


### Run Locally
* Clone the repo
* Follow steps here, https://www.netlify.com/docs/functions/#tools-for-building-javascript-functions
