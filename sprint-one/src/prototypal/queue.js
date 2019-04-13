var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.storage = {};
	someInstance.head = 0;
	someInstance.tail = 0;
	return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function (value){
	this.storage[this.tail] = value;
	this.tail++;
},

queueMethods.dequeue = function (){
	var popped = this.storage[this.head];
	delete this.storage[this.head];
	this.head ++;
	return popped;
},

queueMethods.size = function (){
	return Object.keys(this.storage).length;
}
