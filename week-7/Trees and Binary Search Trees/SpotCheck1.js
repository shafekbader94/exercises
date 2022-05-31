class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode
        }
    }
}

//initial setup
/*let tree = new Node(3)
tree.insertLeft(1)
tree.insertRight(5)

//adding a new node to the tree
tree.insertLeft(2)
*/
const H = new Node("H")
H.insertLeft("E")
H.insertRight("S")

let E = H.leftChild
E.insertRight("G")

let S= H.rightChild
S.insertLeft("L")
S.insertRight("Y")

let L = S.leftChild
L.insertLeft("I")

//left and right inserts
console.log(H)
//prints:
/*
Node {
  value: 'H',
  leftChild: Node {
     value: 'E',
     leftChild: null,
     rightChild: Node { value: 'G', leftChild: null, rightChild: null } 
   },
  rightChild: Node {
     value: 'S',
     leftChild: Node { value: 'L', leftChild: [Node], rightChild: null },
     rightChild: Node { value: 'Y', leftChild: null, rightChild: null } 
  } 
}*/