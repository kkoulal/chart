function parseData(createGraph){
Papa.parse("/csv/QuantRes.csv", {
	download: true,
	complete: function(results) {
		// console.log(results.data);
		createGraph(results.data);
	}
});
}

//  function createGraph(Data){
// 	console.log(data.length);
//  }






// Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-ohlcv.json',

function	createGraph(data) {
	
	var ohlc = [];
	var date = [];
	var volume = [];
	var datalen = data.length;

	groupingUnits = [[
		'minute',        // unit name
		[1, 2, 5, 10, 15, 30]       // allowed multiples
	], [
		'hour',
		[1, 2, 3, 4, 6, 8, 12,16 , 18, 20, 30]
	]];
	function toTimestamp(strDate){
		var datum = Date.parse(strDate);
		return datum/1000;
	   }
	//    console.log(toTimestamp(data[1][0]));
	

	 for(var i = 0; i < datalen; i++){
	        ohlc.push([
			data[i][0], // the date
            parseFloat(data[i][1]), // open
            parseFloat(data[i][2]), // high
            parseFloat(data[i][3]), // low
            parseFloat(data[i][4]) // close
        ]);
			console.log(toTimestamp(data[i][0]))
        volume.push([
            data[i][0], // the date
            parseFloat(data[i][5]) // the volume
        ]);
	 }
	//  JSON.stringify(ohlc);
	//  console.log(volume);
	    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 5000
        },

        title: {
            text: 'AAPL Historical'
        },

        yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],

        tooltip: {
            split: true
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL',
            data: ohlc,
            dataGrouping: {
                units: groupingUnits
            }
        }, {
            type: 'column',
            name: 'Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
                units: groupingUnits
            }
        }]
    });
	  
	
}


parseData(createGraph);




