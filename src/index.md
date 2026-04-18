---
layout: "/layouts/home.njk"
title: "Jokes"
---

A collection of {{ jokes.all.length }} dad jokes, programming jokes, and puns. Because we all need a laugh sometimes.

Use the button below to get a random joke, or browse them all.

## Submit a Joke

Have a joke to share? We'd love to add it!

**[Submit via GitHub Issue](../../issues/new?template=submit_joke.yml)** — The easiest way! Just fill out the form and a maintainer will review it.

Or submit a [Pull Request](https://github.com/jacebenson/joke-api/pulls) with your joke added to `src/_data/jokes.js`.

## API

Want to use these jokes in your own project? Grab them via the API:

- **Random joke:** `/api/random`
- **Specific joke:** `/api/{id}`
- **All jokes:** `/api/jokes`

Example:
```bash
curl https://jokes.jace.pro/api/random
```

## Stats

- **Total jokes:** {{ jokes.all.length }}
