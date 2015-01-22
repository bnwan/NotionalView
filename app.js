'use strict';

var domready = require('domready');
var notionalViewFactory = require('./notionalView');

domready(function(){
	var el = document.getElementById('notional');
	var notionalView = notionalViewFactory.create({
		el: el,
		value: 0		
	});

	notionalView.on('display-date', function(){		
		console.log('date: ', new Date());
	});

	notionalView.render();
});