var edges, nodes, combinedData;
  
function loadEdges(data){
    edges = Papa.parse(data, {
        delimiter: ",",
        header: true,
        dynamicTyping: true
    }).data;
    //console.log(edges);
}
 
function loadNodes(data){
    nodes = Papa.parse(data, {
        delimiter: ",",
        header: true,
        dynamicTyping: true
    }).data;
    
    //console.log(nodes);
    combineCSV(edges, nodes);
}

function combineCSV(edges, nodes){
    combinedData = { "nodes": nodes,
                     "edges": edges
                    };
    //console.log(JSON.stringify(combinedData));
    loadGraph(combinedData);
}
