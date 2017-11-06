console.log("The bot is ready and waiting ...");

var Twit = require('twit');
var config = require('./config');
var rita = require('./lib/rita-full.js');

var T = new Twit(config);

//var query = { 
//    q: '#dataviz', count: 10
//    }



//function gotData(err, data, response) { 
//    console.log(data);
//}

//T.get('search/tweets', query, gotData);


// GET TRENDING HASHTAGS
var trending = { 
    id: 23424942
    
    }

var url; 
var hashtag;

T.get('trends/place', trending, function (err, data, reponse) { 
    
    var r = Math.floor(Math.random() * 50);
    
    hashtag = data[0].trends[1].name; 
    url = data[0].trends[1].url;
    
    console.log(hashtag + " - " + url);
    
    getTweet(url, hashtag);
    
});


// GET RANDOM POST

function getTweet(url, hashtag) {
    
    url = url.replace("http://twitter.com/search?q=", "");
    console.log(url);

    var query = { 
        q: '#dataviz', count: 10
        }
    
    }


//var post = "The lazy journalist's one-stop shop for news quotes they can use rather than phoning a source. #QuotesYouCanUse";
//
//T.post('statuses/update', { status: post }, gotData);


// woeid (south africa)	23424942
