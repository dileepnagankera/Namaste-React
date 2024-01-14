/**<div id="parent">
  <div id="child">
    <h1>Im h1 tah</h1>
    <h2>Im h1 tah</h2>
  </div>
  <div id="child2">
    <h1> im h2 tag</h1>
    <h2> im h2 tag</h2>
  </div>
</div>;



ReactElement(object)=>HTML(Browser UnderStands)

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
]);


console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
