function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}
function Tree() {
  this.root = null;
}


Tree.prototype.smallestLargestNumber = function (num) {
  var smallest = -1;
  var cNode = this.root;
    while (cNode !== null) {
       
    if (cNode.key < num) {
        
        smallest = cNode.key
        cNode = cNode.right;
    } else {
        cNode = cNode.left;
       
    }
  }
  return smallest;
};



Tree.prototype.insert = function (key) {
  var root = this.root;

  if (!root) {
    this.root = new Node(key);
    return;
  }
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (currentNode.key < key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

var tree = new Tree();
tree.insert(20);
tree.insert(26);
tree.insert(18);

console.log(tree.smallestLargestNumber(21));
console.log(tree);
