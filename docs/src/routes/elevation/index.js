// Dependencies
import { h, Component } from "preact";

// Material Components
import Elevation from "preact-material-components/Elevation";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class ElevationPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Elevation",
        props: [
          {
            name: "z",
            value: "1 to 25",
            description: "Add z=(1 to 25) to get different elevations."
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-elevation">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-elevation</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Elevation z={0}>Z0</Elevation>
        <Elevation z={1}>Z1</Elevation>
        <Elevation z={2}>Z2</Elevation>
        <Elevation z={3}>Z3</Elevation>
        <Elevation z={4}>Z4</Elevation>
      </div>
    );
  }
}
