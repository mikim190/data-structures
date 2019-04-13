var Queue = function() {
	var someInstance = {
  		storage : {},
  		tail : 0,
  		head : 0,
  	};
  	_.extend(someInstance, queueMethods);
  	return someInstance;	
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
	enqueue : function(value) {
    	this.storage[this.tail] = value;
    	this.tail++;
	},
	dequeue : function() {
    	if(this.tail > this.head){
      		var result = this.storage[this.head];
      		delete this.storage[this.head];
      		this.head++;
      		return result;
    	}
  	},
  	size : function() {
    	return Object.keys(this.storage).length;
  	},	
};


