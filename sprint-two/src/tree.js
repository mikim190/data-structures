var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  //subtrees are stored in array
  //functional-shared
  newTree.addChild = treeMethods.addChild; 
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	//create new tree by invoking fn with value
	var tree = new Tree(value);
	//push new tree into container children
	this.children.push(tree)
};

treeMethods.contains = function(target) {
	//create variable to hold result,
	var result = false;
	//use IIFE, create inner fn (closure) to recuresively check and compare value to input target
	(function isContain (child) {
		//if tree has same value as target, return true
		if (child.value === target) {
			result = true;
		//if tree's value not match input target
		} else {
			//iterate over each child in tree's container (children)
			for (var i = 0; i < child.children.length; i++) {
			//invoke inner fn with each child in tree
			isContain(child.children[i])
			}
		}
		
	}) (this) //invoke inner fn with "this" refers to obj newTree
	//if nothing pass above condition, return false
	return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



