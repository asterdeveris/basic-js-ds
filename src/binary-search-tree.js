const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return {
          data,
          left: null,
          right: null,
        };
      }

      if (node.data === data) {
        return;
      }

      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);

    function hasNode(node, data) {
      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return node.left ? hasNode(node.left, data) : false;
      } else {
        return node.right ? hasNode(node.right, data) : false;
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return node.left ? findNode(node.left, data) : null;
      } else {
        return node.right ? findNode(node.right, data) : null;
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    let min = this.rootNode.left;

    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    let max = this.rootNode.right;

    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree,
};
