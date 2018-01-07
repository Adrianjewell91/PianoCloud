//it would look something like this
// {
//   id: {
//         comment: {}
//         children: [{comment: {}, children: false},
//                    {comment: {}, children: []],
//   id: { comment: {},
//         children: []}
// }

//now how to get the in the right order. I don't know how. I could relegate that to a database?s
//for now just get them rendering and have an add comment at the end (with parent ID of null)s

//strategy one: iterate through objects, check parent_id
//Thank you to nu11ptr on Stack Overflow for this method, comments are my own.
//Basically a topographical sort function.

export const nestComments = (data, key, parentKey) => {
    let treeData = Object.values(data)
    var keys = [];
    //Create a children arrays.
    treeData.map(function(x){
        x.Children = [];
        keys.push(x[key]);
    });
    //create an array of the roots (parent_id === null)
    var roots = treeData.filter(function(x){return keys.indexOf(x[parentKey])==-1});
    //establish the nodes for sorting.
    var nodes = [];
    //push the roots nodes into the variable called 'nodes'.
    roots.map(function(x){nodes.push(x)});
    //do the traversal through the graph while there are still elements in the node.
    while(nodes.length > 0)
    {
        //get a node.
        var node = nodes.pop(); //pop off an element that is in roots.
        //get its children.
        var children = treeData.filter(function(x){return x[parentKey] == node[key]});
        //for each children, push that child in the Children array of the parent.
        children.map(function(x){
            //The below works because node.Children points to the same Children that
            //is in the variable called 'roots'.
            //push the child in the variables called nodes.
            node.Children.push(x);
            nodes.push(x)
        });
    }
    // if (roots.length==1) return roots[0];
    return roots;
}
