

// Instantiate a new graph
var Graph = function () {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) { //addNode(1) -> [1]
  this.vertices.push([node, []]);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === node) {
      var edgeArr = this.vertices[i][1];
      this.vertices.splice(i, 1);
    }
  }
  for (var j = 0; j < edgeArr.length; j++) {
    this.removeEdge(edgeArr[j], node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode || this.vertices[i][0] === toNode) {
      if (this.vertices[i][1].includes(toNode) || this.vertices[i][1].includes(fromNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode) {
      this.vertices[i][1].push(toNode);
    } else if (this.vertices[i][0] === toNode) {
      this.vertices[i][1].push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.vertices.length; i++) {
    if (this.vertices[i][0] === fromNode) {
      for (var j = 0; j < this.vertices[i][1].length; j++) {
        if (this.vertices[i][1][j] === toNode) {
          this.vertices[i][1].splice(j, 1);
        }
      }
    }
    if (this.vertices[i][0] === toNode) {
      for (var j = 0; j < this.vertices[i][1].length; j++) {
        if (this.vertices[i][1][j] === fromNode) {
          this.vertices[i][1].splice(j, 1)
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var i = 0; i < this.vertices.length; i++) {
    cb.apply(this, this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


