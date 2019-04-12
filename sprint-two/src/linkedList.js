var LinkedList = function() {
  var list = {};
  list.head = null; //this points to first data, starting point
  list.tail = null; //this points to the last data, ending point 
  //when invoke addToTail fn with a value
  list.addToTail = function(value) {
    //invoke fn Node to create new Node
    var node = new Node(value);
    //if our list is empty
    if (this.head === null && this.tail === null) {
      //assign head points to new node
      this.head = node;
      //assign tail also points to new node
      this.tail = node;
    //else (if our list has node(s))
    } else {
      //link and assign new node to head-node's 
      //(reference of head to refers to new node) 
      this.head.next = node;
      //tail points to new node
      this.tail = node;
    }
  };

//
  list.removeHead = function() {
    //create var to hold node that is is going to be removed
    var removedNode;
    //case 1 : when list is empty
    if (this.head === null && this.tail === null) {
      //return 0 or undefined
      return 0;
      //case 2: when list contains 1 node (when head points to node that has value null at key-<next>)
    } else if (this.head.next === null) {
      //assigns that var to the node that head points to
      removedNode = this.head.value;
      //delete that node
      delete this.head;
      //assigns head & tail back to null
      this.head = null;
      this.tail = null;
      //return removedNode
      return removedNode;
      //case 3: when list contains more than 1 node
    } else {
      //create var to store removed value
      var removedValue;
      //assign var to node that head points to (node that is going to be deleted)
      removedNode = this.head;
      //assigns head points to next node, which is the value of removedNode at key-<next>
      this.head = this.head.next;
      //assigns value that need to be delete to var removedValue
      removedValue = removedNode.value;
      //delete that node
      delete removedNode;
          //return removedNode
      return removedValue;
    }    
  }; 

  list.contains = function(target) {
    //case 1: when list has no node
    //if head and tail point to null
    if (this.head === null && this.tail === null) {
      //return 0 
      return 0;
    //case 2: when list has node(s)
    } else {
    //create inner fn to recursively go thru each value of node and compare to target
     return (function isTrue (node) {
      //if node contains target, return true
        if (node.value === target) {
          return true; 
      //if reach to tail-node, list not contain target, return false
        } else if (node.next === null) {
          return false;
      //if value of node not match, and node is not the last one
        } else {
        //invoke inner fn with next node
         return isTrue(node.next)
        }
      }) (this.head) //IIFE inner fn with node from head
    }    
  };

  return list;
    
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 
