var btn = document.getElementById("btn");

var quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  ];

// -1 to avoid dublication  
var lastIndex = -1;  

function showquote(){

  // avoid dublication
  do {
  var index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex); 

  document.getElementById("quote").innerHTML = quotes[index].quote;
  document.getElementById("author").innerHTML = quotes[index].author;

  lastIndex = index; 
}



