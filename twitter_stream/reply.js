// twitterモジュールを読み込み
var twitter = require('twitter');
var growl = require('growl');

// アプリ登録時に取得したkeyを入れてOAuth認証し、初期化
var client = new twitter({
	consumer_key: 'Ogb7IL23J94Is03iL9KNIa4gF',
		consumer_secret: 'pxCH60qwlbd8IwOGegHgIpAPrRTo0T0XuiEmDKFKTb69gKeM36',
		access_token_key: '3454275200-4EM8e8ihEp0AOUnngecWk6GmoAsOtmG9xOW8UXO',
		access_token_secret: 'z0tnRUR0s3PYsvVmrLRHIUmWnM27VrKCFvl4mKechGxc3'
});

// Public APIのstatuses/filterで取得したタイムラインを、自分のアカウント名を含む文字列でフィルターする
client.stream( 'statuses/filter', { track : '@zomqyqzvto' }, function( stream ) {
	// フィルターされたデータのストリームを受け取り、ツイートのテキストを表示する
	stream.on( 'data', function( data ) {
		var text = data.text; // ツイートのテキスト
		var textCleaned = text.replace( /@zomqyqzvto/g, "" ); // アカウント名は不要
		//console.log( textCleaned );
		growl(textCleaned);
	});
});
