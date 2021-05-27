import BinarySearchTree from './index'

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}

function defaultCompare(a, b){
    if(a === b ){
        return Compare.EQUALS;
    }
    return a < b? Compare.LESS_THAN : BIGGER_THAN
}

class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null
    }
    getNodeHeight(node){
        if(node == null){
            return -1
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
    }
    getBalanceFactor(node){
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
    rotationLL(node){
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    rotationRR(node){
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
    }
    rotationLR(node){
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }
    rotationRL(node){
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key){
        this.root = this.insertNode(this.root, key);
    }
    insertNode(node, key){
        if(node == null){
            return new Node(key)
        } else if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) { 
            node.right = this.insertNode(node.right, key);
        } else{
            return node // chave dupliacada
        }
        const BalanceFactor = this.getBalanceFactor(node);
        if(BalanceFactor === BalanceFactor.UNBALANCED_LEFT){
            if(THIS.compareFn(key, node.left.key) === Compare.LESS_THAN){
                node = this.rotationLL(node);
            } else{
                return this.rotationLR(node);
            }
        }
        if(BalanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN){
                node = this.rotationRR(node);
            } else{
                return this.rotationRL(node);
            }
        }
        return node;
    }
}