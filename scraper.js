var request = require("request");
var cheerio = require("cheerio");

// unicode轉換成中文
function deunicode(s){ 

	var k = s.split(";"); 
	var rs = "";

	for( i = 0; i < k.length - 1; i++){ 

		var m = k[i].replace(/&#/, "0"); 
		rs += String.fromCharCode(m); 
	}

	return rs; 
} 



request('http://movie.ck101.com/movie/39/', function (error, response, body) {

  if (!error && response.statusCode == 200) {

  	var $ = cheerio.load(body);
  	var title_tw = $('main').find('h2').html();
  	var dec = decodeURIComponent(title_tw);

  	// 輸出中文標題
    console.log(deunicode(title_tw));

  }else {

  	console.log("擷取錯誤：" + error);
  }

})