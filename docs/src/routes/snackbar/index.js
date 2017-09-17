// Dependencies
import { h, Component } from "preact";

// Material Components
import Snackbar from "preact-material-components/Snackbar";
import Button from "preact-material-components/Button";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class SnackbarPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Snackbar",
        props: [
          {
            name: "dismissesOnAction",
            description:
              "tells whether or not snackbar auto dismisses upon clicking the action button"
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-snackbar">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-snackbar</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Button
          raised={true}
          primary={true}
          onClick={() => {
            this.bar.MDComponent.show({
              message: "Hello Snack!"
            });
          }}
        >
          Show snack
        </Button>
        <Snackbar
          ref={bar => {
            this.bar = bar;
          }}
        />
      </div>
    );
  }
}
