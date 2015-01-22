'use strict';

var AmpersandInputView = require('ampersand-input-view');

var View = AmpersandInputView.extend({
	autoRender: true,
	initialize: function(){		
		AmpersandInputView.prototype.initialize.call(this, arguments);

		this.on('change:inputValue', this.expandValue, this);
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
	expandValue: function(){
		this.expandedValue = Number(this.inputValue).toFixed(2)
	}
});

module.exports = {
	create: function(options){
		options.name = 'notional';
		return new View(options);
	}
};