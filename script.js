function generate(){
  var quotes = {
    "-Albert Einstein": '"We cannot solve problems with the kind of thinking we employed when we came up with them."',
    "—Mahatma Gandhi": '"Learn as if you will live forever, live like you will die tomorrow."',
    "—Mark Twain": '"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."',
    "—Eleanor Roosevelt": '"When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out."',
    "—Maya Angelou": '"Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
    "—Jim Rohn": '"Motivation is crap. Motivation is easy, and it is fleeting. Motivation is a result of inspiration, but inspiration comes from within. It comes from finding something you love."',
    "—Confucius": '"It does not matter how slowly you go as long as you do not stop."',
    "—Ralph Waldo Emerson": '"The only way to have a friend is to be one."',
    "—Buddha": '"The mind is everything. What you think you become."',
    "—Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."'
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random()*authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;


}
