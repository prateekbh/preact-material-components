// Dependencies
import { h, Component } from "preact";

// Material Components
import Switch from "preact-material-components/Switch";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class SwitchPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Switch",
        props: [
          {
            name: "disabled",
            description: "Disables the switch."
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-switch">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">
            mdc-switch
          </span>, you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default </div>
        <Switch />
        <div className="mdc-typography--title">Disabled </div>
        <Switch disabled={true} />
      </div>
    );
  }
}
