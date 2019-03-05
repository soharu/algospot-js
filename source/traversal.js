function findPostOrderTraversal(preOrder, inOrder) {
  if (preOrder.length === 0) {
    return [];
  }

  const root = preOrder[0];
  const indexOfRootInOrder = inOrder.indexOf(root);
  const leftTreeInOrder = inOrder.slice(0, indexOfRootInOrder);
  const rightTreeInOrder = inOrder.slice(indexOfRootInOrder + 1);
  const leftTreePreOrder = preOrder.slice(1, 1 + leftTreeInOrder.length);
  const rightTreePreOrder = preOrder.slice(1 + leftTreeInOrder.length);

  const postOrder = [];
  postOrder.push(...findPostOrderTraversal(leftTreePreOrder, leftTreeInOrder));
  postOrder.push(...findPostOrderTraversal(rightTreePreOrder, rightTreeInOrder));
  postOrder.push(root);
  return postOrder;
}

function solve(preOrder, inOrder) {
  return findPostOrderTraversal(preOrder, inOrder);
}

if (require.main === module) {
  const inputs = [];
  require('readline')
    .createInterface({
      input: process.stdin
    })
    .on('line', line => {
      inputs.push(line.trim());
    })
    .on('close', () => {
      const lineCount = inputs[0] * 3;
      for (let i = 1; i < lineCount; i += 3) {
        const preOrder = inputs[i + 1].split(' ');
        const inOrder = inputs[i + 2].split(' ');
        console.log(findPostOrderTraversal(preOrder, inOrder).join(' '));
      }
    });
} else {
  exports.solve = solve;
}
