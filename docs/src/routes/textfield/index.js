// Dependencies
import { h, Component } from "preact";

// Material Components
import Textfield from "preact-material-components/Textfield";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import sample from "./sample.txt";

// Class
export default class TextfieldPage extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.propsTable = [
      {
        component: "Textfield",
        props: [
          {
            name: "fullwidth",
            description: "Makes the textfield full width."
          },
          {
            name: "multiline",
            description: "Toggles between TextArea and TextField."
          },
          {
            name: "type",
            description: "Type of HTML textfield (defaults to 'text')",
            value: "text, password, date, time, etc."
          },
          {
            name: "dense",
            description: "Use a dense font"
          },
          {
            name: "disabled",
            description: "Disables the input"
          },
          {
            name: "helptext",
            description:
              "Include an help text that is useful for providing supplemental information to users, as well for validation messages"
          },
          {
            name: "helptextPersistent",
            description: "Makes the help text always visible"
          },
          {
            name: "helptextValidationMsg",
            description:
              "Provide styles for using the help text as a validation message"
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
          This component encapsulates{" "}
          <span className="strong">mdc-textfield</span>. You can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield">
            {" "}
            here
          </a>.
        </div>
        <div className="mdc-typography--display1">Demo</div>
        <div className="mdc-typography--headline">Default</div>
        <Textfield
          label="Your name"
          onKeyUp={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />{" "}
        Hi - {this.state.name}
        <div className="mdc-typography--headline">Multiline</div>
        <Textfield multiline={true} label="Textarea tag" />
        <div className="mdc-typography--headline">Password</div>
        <Textfield type="password" label="Enter a password" />
        <div className="mdc-typography--headline">With help text</div>
        <Textfield label="Help text" helptext="This is the helptext" />
        <div className="mdc-typography--headline">
          With persistent help text
        </div>
        <Textfield
          label="Persistent help text"
          helptext="This is the helptext"
          helptextPersistent
        />
        <div className="mdc-typography--headline">Dense</div>
        <Textfield label="Dense" dense />
        <div className="mdc-typography--headline">Disabled</div>
        <Textfield label="Disabled" disabled />
        <div className="mdc-typography--headline">Link state</div>
        <Textfield
          label="State"
          value={this.state.value}
          onInput={e => this.setState({ value: e.target.value })}
        />
        State: {this.state.value}
      </div>
    );
  }
}
