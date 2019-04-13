var Stack = function() {
	this.storage = {};
	this.sizes = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Stack.prototype.push = function (value){
	this.storage[this.sizes] = value;
	this.sizes++;
},

Stack.prototype.pop = function () {
	var popped = this.storage[this.sizes - 1];
	delete this.storage[this.sizes - 1];
	this.sizes --;
	return popped;
},

Stack.prototype.size = function () {
	return Object.keys(this.storage).length;
}