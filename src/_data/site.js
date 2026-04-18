let now = new Date();
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const path = require("path");
let theme = "jace-ty"
module.exports = {
    getFile: function(pathLoc){
        //This gets the path of the file asked.  If you ask for header.njk
        //it looks for ./src/_includes/layouts/header.njk //if found returns this
        //if not found, looks for ./src/_includes/theme/*themename*/header.njk// if found returns this
        //if neither found, console logs file not found
        //assume they mean locally the _includes folder
        let layoutsFolder = "./src/_includes/"
        let themeFolder = "./src/_includes/theme/" + theme + "/"
        let localFilePath = path.resolve(path.join(layoutsFolder, pathLoc))
        let themeFilePath = path.resolve(path.join(themeFolder, pathLoc))
        if(fs.existsSync(localFilePath)){
            return localFilePath.toString();
        } else if (fs.existsSync(themeFilePath)) {
            return themeFilePath.toString();
        } else {
            console.log(`file not found ${pathLoc} in ${localFilePath} or ${themeFilePath}`)
        }
    },
    theme: theme,//expose to other files
    environment: process.env.ELEVENTY_ENV,
    menu: [],
    github: "https://github.com/jacebenson/joke-api",
    baseURL: "https://joke.jace.pro",
    title: "Jokes!",
    description: "A collection of jokes, because we all need a laugh sometimes.",
    subtitle: "A place to find and share jokes.",
    author: "Jace Benson",//used all over
    email: "jacebenson@example.com",//used specificly for rss feed
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false, timeZone: 'America/Chicago'}).replace(',',''),
    lastBuildYear: now.getFullYear(),
}