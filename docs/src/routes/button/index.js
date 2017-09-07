// Dependencies
import { h, Component } from "preact";

// Material Components
import Button from "preact-material-components/Button";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import style from "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class ButtonPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Button",
        props: [
          {
            name: "ripple",
            description: "Adds riple effect to the button"
          },
          {
            name: "primary",
            description: "Adds primary colors to the button"
          },
          {
            name: "accent",
            description: "Adds accent colors to the button"
          },
          {
            name: "dense",
            description: "Adds dense padding to the button"
          },
          {
            name: "compact",
            description: "Adds compact padding to the button"
          },
          {
            name: "raised",
            description: "Adds raised effect to the button"
          },
          {
            name: "unelevated",
            description: "Adds unelevated effect to the button"
          },
          {
            name: "stroked",
            description: "Adds stroked effect to the button"
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-buttons">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">
            mdc-button
          </span>, you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Flats </div>
        <Button>Flat button without ripple</Button>
        <Button ripple>Flat button with ripple</Button>
        <Button accent>Accented Flat button</Button>
        <Button dense>Dense Flat button </Button>
        <Button compact>Compact Flat button </Button>
        <Button primary>Primary Flat button </Button>

        <div className="mdc-typography--title">Raised </div>
        <Button raised>Raised button without ripple</Button>
        <Button raised ripple>
          Raised button with ripple
        </Button>
        <Button raised accent>
          Accented Raised button
        </Button>
        <Button raised dense>
          Dense Raised button{" "}
        </Button>
        <Button raised compact>
          Compact Raised button{" "}
        </Button>
        <Button raised primary>
          Primary Raised button{" "}
        </Button>

        <div className="mdc-typography--title">Unelevated </div>
        <Button unelevated>Unelevated button without ripple</Button>
        <Button unelevated ripple>
          Unelevated button with ripple
        </Button>
        <Button unelevated accent>
          Accented Unelevated button
        </Button>
        <Button unelevated dense>
          Dense Unelevated button{" "}
        </Button>
        <Button unelevated compact>
          Compact Unelevated button{" "}
        </Button>
        <Button unelevated primary>
          Primary Unelevated button{" "}
        </Button>

        <div className="mdc-typography--title">Stroked </div>
        <Button stroked>Stroked button without ripple</Button>
        <Button stroked ripple>
          Stroked button with ripple
        </Button>
        <Button stroked accent>
          Accented Stroked button
        </Button>
        <Button stroked dense>
          Dense Stroked button{" "}
        </Button>
        <Button stroked compact>
          Compact Stroked button{" "}
        </Button>
        <Button stroked primary>
          Primary Stroked button{" "}
        </Button>

        <div className="mdc-typography--title">Disabled </div>
        <Button disabled>Disabled button without ripple</Button>
        <Button disabled ripple>
          Disabled button with ripple
        </Button>
        <Button disabled accent>
          Accented Disabled button
        </Button>
        <Button disabled dense>
          Dense Disabled button{" "}
        </Button>
        <Button disabled compact>
          Compact Disabled button{" "}
        </Button>
        <Button disabled primary>
          Primary Disabled button{" "}
        </Button>

        <div className="mdc-typography--title">Note</div>
        <div className="mdc-typography--caption">
          <div>
            Adding an <code>href</code> to the <code>Button</code> automatically
            makes in an <code>&lt;a&gt;</code>.
          </div>
        </div>
      </div>
    );
  }
}
