//This is the main part which changes the quotes.

$(document).ready(function() {
    getQuote();
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var randomQuote, randomNum, randomAuthor;
    function getQuote() {
        /* This is the noobish version, Here Predefined text gets printed.
        var quotes = ["Hello World", "Hello Manu", "Hello there!"];
        var author = ["-author 1" , "-author 2","-author 3"];
        
        randomNum = Math.floor((Math.random()*quotes.length));
        randomQuote = quotes[randomNum];
        randomAuthor = author[randomNum];
        
        $('.quote').text(randomQuote);
        $('.author').text(randomAuthor);
        */
    //API CALL  
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    //getJSON used to get the json version of the data and display it into the text box
    $.getJSON(url, function(data) {
     $(".quote").html("<i class= 'fa fa-quote-left'> </i>" + " " +data.quoteText+ "'"); 
     $(".author").html("-" + data.quoteAuthor);
    
    });
    /*
          var color = Math.floor(Math.random() * colors.length);
      $("body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".btn").animate({
        backgroundColor: colors[color]
      }, 1000);
    */    
    
};

 $('#tweet').on("click", function() {
   //Opens a new window- Here twitter post window gets opened up
    var tweetQuote= $(".quote").text() + " by -" + $(".author").text();

    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
    
    
});
    
$('#newQuote').on("click", function() {
    
    getQuote();
});
    

});