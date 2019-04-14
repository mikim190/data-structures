var BinarySearchTree = function (value) {
  var nodeTree = {
    value: value,
    left: null,
    right: null
  };
  _.extend(nodeTree, treeMethod);
  return nodeTree;
};

var treeMethod = {
  insert: function (value) {
    var subTree = BinarySearchTree(value);
    return (function findTreeLocation(loc) {
      if (subTree.value < loc.value) {
        if (loc.left === null) {
          loc.left = subTree;
          return;
        }
        if (loc.left !== null) {
          return findTreeLocation(loc.left)
        }
      }
      if (subTree.value > loc.value) {
        if (loc.right === null) {
          loc.right = subTree;
          return;
        }
        if (loc.right !== null) {
          return findTreeLocation(loc.right)
        }
      }
    })(this)

  },

  contains: function (value) {
    return (function hasTree(loc) {
      if (loc === null) {
        return false;
      }
      if (value === loc.value) {
        return true;
      } else if (value < loc.value) {
        return hasTree(loc.left);
      } else if (value > loc.value) {
        return hasTree(loc.right);
      } else {
        return false;
      }
    })(this)
  },

  depthFirstLog: function (cb) {
    cb(this.value)

    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


