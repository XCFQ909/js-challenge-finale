const quotes = [
    {
        quote: "To go wrong in one's own way is better than to go right in someone else's.",
        author: "Dostoevsky",
    },
    {
        quote: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
        author: "Dostoevsky"
    },
    {
        quote: "Play it fuckin' loud!",
        author: "Bob Dylan"
    },
    {
        quote: "You don't need a weatherman to know which way the wind blows.",
        author: "Bob Dylan"
    },
    {
        quote: "Don't Try. If you're going to try, go all the way.",
        author: "Charles Bukowski"
    },
    {
        quote: "I've been through more cold turkeys than there are freezers.",
        author: "Keith Richards"
    },
    {
        quote: "I'm a deeply closeted gay man. I'm not coming out though.",
        author: "Norm Macdonald"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = `- ${randomQuote.author}`;