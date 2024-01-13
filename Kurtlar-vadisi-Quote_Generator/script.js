// let apiQuotes=[];
//show new quote 
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');

function newQuote(){
//pick a random quote 
const quote=localQuotes[Math.floor(Math.random()*localQuotes.length )];
//check if author place is blank and replace
if(!quote.author)
{
    authorText.textContent='Unknown';
}else{
    authorText.textContent=quote.author;
}
//check the quote lenght to style
if(quote.text.length>120){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');

}
quoteText.textContent=quote.text;

}

//get quotes from API
// async function getQuotes(){
//    const apiURL='https://type.fit/api/quotes'; 
//    try{
//     const response=await fetch(apiURL);
//     apiQuotes=await response.json();
//     newQuote();
//    }catch(error){
//     //catch error here
//    }

// }

//tweet quote
function tweetQuote() {
const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl,'_blank');
}

//event listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

//on load 
// getQuotes();
newQuote();