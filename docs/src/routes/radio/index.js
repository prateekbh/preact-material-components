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
export default class RadioPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Radio",
        props: [
          {
            name: "checked",
            description: "This makes the Radio button checked."
          },
          {
            name: "disabled",
            description: "This makes the Radio button disabled."
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-radio</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Formfield>
          <Radio id="r1" name="opts" />
          <label for="r1">Radio 1</label>
        </Formfield>
        <Formfield>
          <Radio id="r2" name="opts" />
          <label for="r2">Radio 2</label>
        </Formfield>
        <Formfield>
          <Radio id="r3" name="opts" disabled={true} />
          <label for="r3">Disabled Radio </label>
        </Formfield>
      </div>
    );
  }
}
