'use strict';

var AmpersandInputView = require('ampersand-input-view');

var View = AmpersandInputView.extend({
	initialize: function(){		
		AmpersandInputView.prototype.initialize.call(this, arguments);

		this.on('change:inputValue', this.displayValue, this);
	},	
	props: {
		expandedValue: 'string'
	},	
	tests: [

	],	
	derived: {
		value: {
			deps: ['expandedValue'],
			fn: function(){
				return this.expandedValue;
			}
		}
	},
	displayValue: function(){
		console.log(this.inputValue);
		this.trigger('display-date', this);
	}
});

module.exports = {
	create: function(options){
		options.name = 'notional';
		return new View(options);
	}
};