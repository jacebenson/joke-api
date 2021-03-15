const jokes = require("../src/_data/jokes.js");
const site = require("../src/_data/site.js");
exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    if (event.queryStringParameters.jokeById && !isNaN(event.queryStringParameters.jokeById)) {
        var joke = jokes.all[event.queryStringParameters.jokeById];
        joke.source = `${site.baseURL}/${event.queryStringParameters.jokeById}`
        joke.id = event.queryStringParameters.jokeById
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: `${JSON.stringify(joke, '', '  ')}`,
        }
    } else if (event.queryStringParameters.random) {
        var min = 0;
        var max = jokes.all.length - 1;
        console.log(min, max)
        var x = (Math.floor(Math.random() * (max - min + 1) + min)) - 1;
        var joke = jokes.all[x];
        console.log(joke);
        joke.source = `${site.baseURL}/${x}`
        joke.id = x;
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: `${JSON.stringify(joke, '', '  ')}`,
        }
    } else {
        return {
            statusCode: 400,
            body: `This endpoint only expects a get @ /jokes?jokeById=1 or @ /jokes?random=true`,
        }
    }
}