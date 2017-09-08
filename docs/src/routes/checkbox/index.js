// Dependencies
import { h, Component } from "preact";

// Material Components
import Checkbox from "preact-material-components/Checkbox";
import Button from "preact-material-components/Button";
import Formfield from "preact-material-components/Formfield";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class CheckboxPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Checkbox",
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-checkbox">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-checkbox</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Formfield>
          <Checkbox
            id="basic-checkbox-label"
            ref={cb => {
              this.cb = cb;
            }}
          />
          <label for="basic-checkbox" id="basic-checkbox-label">
            This is my checkbox
          </label>
        </Formfield>
        <Button
          raised={true}
          onClick={() => {
            this.cb.MDComponent.indeterminate = true;
          }}
        >
          Make indeterminate
        </Button>
      </div>
    );
  }
}
