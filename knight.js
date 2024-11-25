class Node {
  constructor(prev, location) {
    this.prevNode = prev;
    this.location = location;
  }
}

function knightMoves(start, end) {
  const allowedMoves = [
    [2, 1],
    [1, 2],
    [2, -1],
    [1, -2],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
  ];

  let startNode = new Node(null, start);

  let queue = [startNode];
  let finalNode = '';
  let breakLoop = false;
  while ( queue != undefined && breakLoop == false ) {
    let currentNode = queue.shift();
    allowedMoves.forEach((el) => {
      let newMove = [
        currentNode.location[0] + el[0],
        currentNode.location[1] + el[1],
      ];
      if (newMove[0] >= 0 && newMove[0] <= 7) {
        if (newMove[1] >= 0 && newMove[1] <= 7) {
          let newNode = new Node(currentNode, newMove);
          queue.push(newNode);
          if (newNode.location[0] == end[0] && newNode.location[1] == end[1]) {
            finalNode = newNode;
            breakLoop = true;
          }
        }
      }
    });
  }

  let traverse = finalNode;
  let path = []
  while(traverse != null){
    path.push(traverse.location)
    traverse = traverse.prevNode

  }
  console.log(`you made it in ${path.length} moves. Here is the path:`)
  path.reverse().forEach((value)=>{
    console.log(value)
  })
}

console.log(knightMoves([0,0],[7,7]));
