var port = process.env.PORT || 1337
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var path = require('path');
var moment = require('moment');
var fs = require('fs');
const csv = require('csv-parser');
let test = []


app.get('/chart',(req, res) =>{

    // // Papa.parse("/csv/QuantRes.csv", {
    // //     download: true,
    // //     complete: function(results) {
    // //          console.log(results.data);
    // //         createGraph(results.data);
    // //     }
    // // });
    // fs.createReadStream('public/csv/QuantRes.csv')
    //     .pipe(csv())
    //      .on('data', (row) => {
    //           test.push(row.Date)
    //          console.log(test);
    // })
    
    // .on('end', () => {
    //     // console.log(row[0]);
    //      console.log('CSV file successfully processed');
    // });
    
    // // var i = 0;
    // // while(i++ < test.length)
    // // {
    // //     console.log(test[i].Date);

    // // }
    // // var ohlc = [];
    // //  for(i = 0; i < datalen; i++){
	// //  	ohlc.push([
	// //  		data[i][0] = moment.unix(data[i][0]).format("YYYY-MM-DD HH:mm:ss")
	// //  	]);
	// //  }
    res.render('chart');
})

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, function() {
	console.log("Server is running on port: " + port)
})