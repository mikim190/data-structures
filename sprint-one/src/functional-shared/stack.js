var Stack = function() {
	var someInstance = {
		storage : {},
		sizes : 0,
	};
	_.extend(someInstance, stackMethods);
	return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
	push : function (value) {
		this.storage[this.sizes] = value;
		this.sizes ++;
	},

	pop : function () {
		var popped = this.storage[this.sizes - 1];
		delete this.storage[this.sizes - 1];
		this.sizes --;
		return popped;
	},

	size : function () {
		return Object.keys(this.storage).length;
	}

};


