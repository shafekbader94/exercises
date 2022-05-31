class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild ;
        this.rightChild ;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
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


    findNode(value){
        if (!this.value)
         {
           return false
        }
        else if (value > this.value) {
            if(this.rightChild == undefined)
                return false
           return this.rightChild.findNode(value)
        }
        else if(value < this.value ) {
            if(this.leftChild == undefined)
                 return false
            return this.leftChild.findNode(value)
           
        }
        
        else {
            return true
        }
    }


    findCommonParent(child1, child2) {
        return this.findCommonParentForTree(this, child1, child2)
    }


    findCommonParentForTree(root, child1, child2) {
        if(!root) {
            return null
        } else if(root.value === child1 || root.value === child2) {
            return root
        }
        let leftNode = this.findCommonParentForTree(root.leftChild, child1, child2)
        let rightNode = this.findCommonParentForTree(root.rightChild, child1, child2)
        if(leftNode && rightNode) {
            return root
        } 
        else {
            return leftNode ? leftNode : rightNode
        }
    }




    removeNode(node, val) {
        if (!node)
            return null;
        else if (val < node.value) {
            node.leftChild = this.removeNode(node.leftChild, val);
            return node;
        } else if (val > node.value) {
            node.rightChild = this.removeNode(node.rightChild, val);
            return node;
        } else {
            if (!node.leftChild && !node.rightChild) {
                node = null;
                return node;
            } else if (!node.leftChild) {
                node = node.rightChild;
                return node;
            } else if (!node.rightChild) {
                node = node.leftChild;
                return node;
            }
            let minNode = this.findMin(node.leftChild);
            node.value = minNode.value;
            node.leftChild = this.removeNode(node.leftChild, minNode.value);
            return node;
        }
    }
    findMin(node) {
        if (!node.rightChild)
            return node;
        else
            return this.findMin(node.rightChild);
    }





}

//const letters = ["H", "E", "S", "G", "L", "Y", "I"]
//const letters = [5,1,3, 9, 2, 8, 17,6]
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree = new BSNode()

letters.forEach(l => bSTree.insertNode(l))
//console.log(bSTree)
//console.log(bSTree)
/*
console.log(bSTree.findNode(1)) // should print truev
console.log(bSTree.findNode(9))
console.log(bSTree.findNode(0))
console.log(bSTree.findNode(11))
console.log(bSTree.findNode(12))
*/

/*
//Use the following to test
console.log(bSTree.findNode("H")) // should print true
console.log(bSTree.findNode("G")) // should print true
console.log(bSTree.findNode("Z")) // should print false
console.log(bSTree.findNode("F")) // should print false
console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!
*/
/*
console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"
*/

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 