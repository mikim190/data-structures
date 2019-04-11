class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.sizes = 0;
  }

  push (value){
  	this.storage[this.sizes] = value;
  	this.sizes ++;
  }

  pop (){
  	var popped = this.storage[this.sizes - 1];
  	delete this.storage[this.sizes - 1];
  	this.sizes --;
  	return popped;
  }

  size (){
  	return Object.keys(this.storage).length;
  }

}