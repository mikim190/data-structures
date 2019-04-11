class Queue {
	constructor () {
		this.storage = {};
		this.head = 0;
		this.tail = 0;
	}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	enqueue (value){
  		this.storage[this.tail] = value;
  		this.tail ++;
  	}

  	dequeue (){
  		if(this.tail > this.head) {
  			var popped =this.storage[this.head];
  			delete this.storage[this.head];
  			this.head++;
  			return popped;
  		}
  	}

  	size (){
  		return Object.keys(this.storage).length;
  	}

}
