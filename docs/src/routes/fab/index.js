// Dependencies
import { h, Component } from "preact";

// Material Components
import Fab from "preact-material-components/Fab";
import Icon from "preact-material-components/Icon";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class FabPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Fab",
        props: [
          {
            name: "ripple",
            description: "Adds riple effect to the fab."
          },
          {
            name: "plain",
            description: "Adds plain colors to the fab."
          },
          {
            name: "mini",
            description: "Shrinks the size of the fab."
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-fab">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-fab</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Defaults </div>
        <Fab>
          <Icon>favorite_border</Icon>
        </Fab>
        <Fab ripple={true}>
          <Icon>favorite_border</Icon>
        </Fab>
        <Fab mini={true}>
          <Icon>favorite_border</Icon>
        </Fab>
        <div className="mdc-typography--title">Plain </div>
        <Fab plain={true}>
          <Icon>favorite_border</Icon>
        </Fab>
        <Fab plain={true} ripple={true}>
          <Icon>favorite_border</Icon>
        </Fab>
        <Fab plain={true} mini={true}>
          <Icon>favorite_border</Icon>
        </Fab>
      </div>
    );
  }
}
