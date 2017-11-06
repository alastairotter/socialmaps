// console.log("The bot is ready and waiting ...");

var Twit = require('twit');
var config = require('./config');
//var rita = require('./lib/rita-full.js');

var T = new Twit(config);


//-26.1220741,28.0390835
//-26.2900291,28.0406713
//-26.1569788,28.0724716
//-26.2299905,28.0721283
//-26.2324543,28.006897
//-26.1591359,27.9945374
//-26.202578,28.039341
         


var query1 = { 
    q: ' ',
    geocode: '-26.1220741,28.0390835,5km',
    count: 10,
    result_type: 'recent'
    }


var query2 = { 
    q: ' ',
    geocode: '-26.2900291,28.0406713,5km',
    count: 10,
    result_type: 'recent'
    }

var query3 = { 
    q: ' ',
    geocode: '-26.1569788,28.0724716,5km',
    count: 10,
    result_type: 'recent'
    }

var query4 = { 
    q: ' ',
    geocode: '-26.2299905,28.0721283,5km',
    count: 10,
    result_type: 'recent'
    }

var query5 = { 
    q: ' ',
    geocode: '-26.2324543,28.006897,5km',
    count: 10,
    result_type: 'recent'
    }

var query6 = { 
    q: ' ',
    geocode: '26.1591359,27.9945374,5km',
    count: 10,
    result_type: 'recent'
    }

var query7 = { 
    q: ' ',
    geocode: '-26.202578,28.039341,5km',
    count: 10,
    result_type: 'recent'
    }

//    geocode: '-26.1715045,27.9698123,5km', // JHB


var results = ''; 
var curResult = '';

function gotData(err, data, response) { 
    
    

    var count = data.search_metadata.count; 
    console.log(count);
    
    
    for(var x = 0; x < count; x++) { 
        
        console.log(x);
        
//        console.log(data.statuses[x].geo);
        
        if(data.statuses[x]) {
        if(data.statuses[x].geo) {
            if(data.statuses[x].geo.coordinates) { 
            
            curResult = data.statuses[x].created_at + ", " + data.statuses[x].id_str + ", " + data.statuses[x].geo.coordinates + "\n";
            curResult = curResult.replace("+0000 ", "");
            curResult = curResult.slice(4);
            results += curResult;
            
            }
        }
        }
    }
    
   
    
    
//    console.log(data.statuses[5].created_at);
//    console.log(data.statuses[5].id_str);
//    console.log(data.statuses[5].geo.coordinates);
//    
//    console.log(data.statuses[5]);
    
    // DATE TIME
    var currentdate = new Date(); 
    
    var day = ("0" + currentdate.getDate()).slice(-2); 
    
    var month = currentdate.getMonth()+1;
    month = "0" + month;
    month = month.slice(-2);
    
    var hour = currentdate.getHours();
    hour = "0" + hour;
    hour = hour.slice(-2);
    
    var minute = currentdate.getMinutes();
    minute = "0" + minute;
    minute = minute.slice(-2);
    
    var second = currentdate.getSeconds();
    second = "0" + second;
    second = second.slice(-2);
    
    
    
    var datetime = currentdate.getFullYear() + "-"
                + month + "-"
//                + (currentdate.getMonth()+1)  + "-" 
//                + currentdate.getDate() + " @ "  
                + day + " @ "
//                + currentdate.getHours() + ":" 
                + hour + ":"
//                + currentdate.getMinutes() + ":" 
                + minute + ":"
//                + currentdate.getSeconds()
                + second 
                + "\n";
    
    
    fs = require('fs');
    
    
    fs.appendFile(config.baseDir + "log.txt", datetime, function (err) {
        if(err)
            return console.log(err);
    })
    
    var text = results;
    fs.appendFile(config.baseDir + 'tweets.txt', text, function (err) {
    if (err) 
        return console.log(err);

    });
    
    
}

// T.get('users/show', query,  gotData)  ; 
T.get('search/tweets', query1, gotData);

T.get('search/tweets', query2, gotData);

T.get('search/tweets', query3, gotData);

T.get('search/tweets', query4, gotData);

T.get('search/tweets', query5, gotData);

T.get('search/tweets', query6, gotData);

T.get('search/tweets', query7, gotData);
//T.get('users/show.json', query, gotData);

// var CronJob = require('cron').CronJob;
// var job = new CronJob('0 * * * *', function() {
//     
//     T.get('users/show', query,  gotData)  ; 
// 
// }, true, 'Africa/Johannesburg');




//T.get('search/tweets', query, gotData);


// GET TRENDING HASHTAGS
//var trending = { 
//    id: 23424942
//    
//    }

//var url; 
//var hashtag;
//
//T.get('trends/place', trending, function (err, data, reponse) { 
//    
//    var r = Math.floor(Math.random() * 50);
//    
//    hashtag = data[0].trends[1].name; 
//    url = data[0].trends[1].url;
//    
//    console.log(hashtag + " - " + url);
//    
//    getTweet(url, hashtag);
//    
//});


// GET RANDOM POST

//function getTweet(url, hashtag) {
//    
//    url = url.replace("http://twitter.com/search?q=", "");
//    console.log(url);
//
//    var query = { 
//        q: '#dataviz', count: 10
//        }
//    
//    }


//var post = "The lazy journalist's one-stop shop for news quotes they can use rather than phoning a source. #QuotesYouCanUse";
//
//T.post('statuses/update', { status: post }, gotData);


// woeid (south africa)	23424942
