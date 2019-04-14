

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);







  // for (var i = 0; i < this._storage.length; i++) {
  //   if (_.storage[index] === undefined) {
  //     this._storage.set(index, [k, v]);
  //   } else {
  //     for (var j = 0; j < this._storage[index][i]; j++) {
  //       if (this._storage[index][i][0] === k) {
  //         this._storage[index][i][0] = v;
  //       }
  //     }
  //   }
  // }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index);








};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);



};



/*
 * Complexity: What is the time complexity of the above functions?
 */


