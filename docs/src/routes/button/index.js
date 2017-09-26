// Dependencies
import { h, Component } from "preact";
import jsxToString from "jsx-to-string";

// Material Components
import Button from "preact-material-components/Button";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import style from "./style";

// Samples
import sample from "./sample.txt";

// Demo Elements
const flatButton = <Button>Default Flat button without ripple</Button>;
const defaultRaisedButton = <Button raised>Default Raised button</Button>;
const unelevatedBtn = <Button unelevated>Default Unelevated button</Button>;
const strokedBtn = <Button stroked>Default Stroked button</Button>;
const disabledBtn = (
  <Button raised disabled>
    Disabled Raised button
  </Button>
);
const rippleBtn = (
  <Button raised ripple>
    Raised button with ripple
  </Button>
);
const primaryBtn = (
  <Button raised className="mdc-theme--primary-bg">
    Primary Raised button{" "}
  </Button>
);
const secondaryBtn = (
  <Button raised className="mdc-theme--secondary-bg">
    Secondary Raised button{" "}
  </Button>
);
const denseBtn = (
  <Button raised dense>
    Dense Raised button{" "}
  </Button>
);
const compactBtn = (
  <Button raised compact>
    Compact Raised button{" "}
  </Button>
);

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
            name: "disabled",
            description: "Disables the button"
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
        <div>
          {flatButton}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(flatButton).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {defaultRaisedButton}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(defaultRaisedButton).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {unelevatedBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(unelevatedBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {strokedBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(strokedBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {disabledBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(disabledBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {rippleBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(rippleBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {primaryBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(primaryBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {secondaryBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(secondaryBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {denseBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(denseBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

        <div>
          {compactBtn}
          <CodeBlock>
            <code class="lang-html">
              {jsxToString(compactBtn).replace("\n ", "")}
            </code>
          </CodeBlock>
        </div>

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
