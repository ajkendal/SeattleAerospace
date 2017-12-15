# Seattle Aerospace
## Network Graph for Seattle's Aerospace Industry 

### Design Steps

1. Review the Data
    * One Excel File with Two Sheets, Nodes and Edges.
    * No (x,y) positions given.
    * Some Nodes Do not have edges.
    
2. Search for the best Graphing API using JavaScript to work with dataset
    * [D3](https://d3js.org/)
    * [Alchemy.js](http://graphalchemist.github.io/Alchemy/#/)
    * [Google Charts](https://developers.google.com/chart/)
    
3. Convert .xlsx -> .csv

4. Setup index.html

5. Convert .csv -> JSON via Papa Parse

6. Call the loadGraph function with the Data

7. Style and Update
    * Some functions in Alchemy.js needed to be updated

8. Clean and Test

### Upgrading the Application

* The web application can be further updated with a cleaner interface as well as maintaining [Alchemy.js](http://graphalchemist.github.io/Alchemy/#/) with the fix for zoomControls [Issue #568](https://github.com/GraphAlchemist/Alchemy/issues/568). 

* A new feature should also be added for users when selection of a certain Edge the given nodes associated properties will be returned to the user, instead of just the Id's.

* Information on the Colors associated with descriptors.

* Nodes provided had two descriptors, in order for this to appear on the graph [Alchemy.js](http://graphalchemist.github.io/Alchemy/#/) had to be rewritten to style nodes for more than one property. The code below is a temporary solution for nodes with two descriptors. They functions will need to be updated to detect which nodeKeyType the user is trying to override, and assign it the correct style property.

```javascript
nodeTypeKey = _.keys(conf.nodeTypes);

for (var x = 0; x < nodeTypeKey.length; x++){
  nodeType = node.getProperties()[nodeTypeKey[x]];
  if (conf.nodeStyle[nodeType] === void 0) {
    nodeType = "all";
  }
  typedStyle = _.assign(_.cloneDeep(defaultStyle), conf.nodeStyle[nodeType]);
  style = _.merge(typedStyle, conf.nodeStyle[nodeType][node._state]);
  if (x === 0)
      stroke = toFunc(style.borderColor);
  else
      fill = toFunc(style.color);
}
```
 
### Tech-Stack
* [Alchemy.js](http://graphalchemist.github.io/Alchemy/#/)
* [Papa Parse](http://papaparse.com)
* Microsoft Excel
* [GitHub](https://github.com/ajkendal/SeattleAerospace)
* HTML
* CSS
* JavaScript
* Ajax
* jQuery

### Developers
* Amanda J. Kendal-Brown