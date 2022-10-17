const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {

    this.head = addNewNode(this.head, data);

    function addNewNode(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNewNode(node.right, data);
      }

      return node;

    }


  }

  has(data) {

    let node = this.head;
    return hasData(node, data);

    function hasData(node, data) {

      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      if (data < node.data) {
        node = node.left;
        return hasData(node, data)
      } else if (data > node.data) {
        node = node.right;
        return hasData(node, data)
      }


    }
  }

  find(data) {

    let node = this.head;
    return findData(node, data);

    function findData(node, data) {

      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node = node.left;
        return findData(node, data)
      } else if (data > node.data) {
        node = node.right;
        return findData(node, data)
      }
    }
  }

  min() {

    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data
  }

  remove(data) {

    this.head = removeNode(this.head, data);

    function removeNode(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let maxLeftNode = node.left;
        while (maxLeftNode.right) {
          maxLeftNode = maxLeftNode.right;
        }

        node.data = maxLeftNode.data;
        node.left = removeNode(node.left, maxLeftNode.data)
        return node;
      }
    }




    return
  }
}

module.exports = {
  BinarySearchTree
};