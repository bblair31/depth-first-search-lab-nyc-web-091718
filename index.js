function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode]
  let visited = [rootNode]

  while (stack.length > 0) {
    let currentNode = stack.pop()

    if (!currentNode.discovered) {
      currentNode.discovered = true
      let adjacentVertices = findAdjacent(currentNode, vertices, edges)

      adjacentVertices.forEach(node => {
        stack.push(node)
        visited.push(node)
      })
    }
  }
  return visited
}

function findAdjacent(currentNode, vertices, edges) {
  let matchingEdges = edges.filter(edge => edge.includes(currentNode.name))
  let adjacentVertices = []

  let firstEdge = matchingEdges.map(edge => {
    return edge.filter(node => {
      return (node != currentNode.name)
    })[0]
  })

  return firstEdge.map(name => {
    return findNode(name, vertices)
  }).filter(function(node){
  return !node.discovered
})
}

function findNode(nodeName, vertices) {
  return vertices.find(vertex => vertex.name === nodeName)
}
