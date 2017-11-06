// Dependencies
import { h, Component } from "preact";

// Material Components
import Radio from "preact-material-components/Radio";
import Formfield from "preact-material-components/Formfield";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import sample from "./sample.txt";

// Class
export default class FormFieldPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Formfield",
        props: []
      }
    ];
  }

  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-form-field</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-form-field">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <Formfield>
          <Radio id="r1" name="opts" />
          <label for="r1">Radio 1</label>
        </Formfield>
      </div>
    );
  }
}
