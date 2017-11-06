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
          <Button>Default Flat button without ripple</Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button>Default Flat button without ripple</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised>Default Raised button</Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button raised>Default Raised button</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button unelevated>Default Unelevated button</Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button unelevated>Default Unelevated button</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button stroked>Default Stroked button</Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button stroked>Default Stroked button</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised disabled>
            Disabled Raised button
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button raised disabled>Disabled Raised button</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised ripple>
            Raised button with ripple
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {"<Button raised ripple>Raised button with ripple</Button>"}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised className="mdc-theme--primary-bg">
            Primary Raised button{" "}
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {`
									<Button raised className="mdc-theme--primary-bg">Primary Raised button{" "}</Button>
								`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised className="mdc-theme--secondary-bg">
            Secondary Raised button{" "}
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {`
								<Button raised className="mdc-theme--secondary-bg">Secondary Raised button{" "}</Button>
							`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised dense>
            Dense Raised button{" "}
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {`<Button raised dense>Dense Raised button{" "}</Button>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Button raised compact>
            Compact Raised button{" "}
          </Button>
          <CodeBlock>
            <code class="lang-html">
              {'<Button raised compact>Compact Raised button{" "}</Button>'}
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
