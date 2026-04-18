# Joke Collection

A simple 11ty site for collecting and sharing jokes.

## Run Locally

```sh
npm install
npm run dev
```

## Public Endpoints

### Get a joke by ID
`/api/522`

## How These Jokes Were Collected

Full disclosure: I collected jokes from these sources initially:

  * [15Dkatz/offical_joke_api](https://github.com/15Dkatz/official_joke_api)
  * [mikemcbride/dad-jokes](https://github.com/mikemcbride/dad-jokes)
  * [ChrisMcKenzie/dadjokes](https://github.com/ChrisMcKenzie/dadjokes)
  * [Icanhazdadjoke](https://icanhazdadjoke.com)
  * [The Oatmeal DJTAF](https://theoatmeal.com/djtaf/)

## Make a Contribution!

### Option 1: Submit via GitHub Issue (Easiest)

1. [Open a new issue](../../issues/new?template=submit_joke.yml)
2. Fill out the joke submission form
3. A maintainer will review and add your joke automatically

### Option 2: Submit a Pull Request

Add your joke directly to `src/_data/jokes.js`:

**Two-part joke:**
```javascript
{
  "joke": "your joke's setup line",
  "punchline": "your joke's punchline"
}
```

**One-liner:**
```javascript
{
  "joke": "your one-liner joke",
  "punchline": null
}
```
