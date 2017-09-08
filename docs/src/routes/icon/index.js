// Dependencies
import { h, Component } from "preact";

// Material Components
import Icon from "preact-material-components/Icon";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import linktag from "./linktag.txt";
import sample from "./sample.txt";

// Class
export default class IconPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Icon",
        props: []
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

        <div className="mdc-typography--display1">Demo </div>
        <div>
          <Icon>menu</Icon>
        </div>
        <div>
          <Icon>favorite_border</Icon>
        </div>

        <div className="mdc-typography--title">Note </div>
        <div className="mdc-typography--caption">
          <div>
            In order to use these you will need to import respective font icons{" "}
          </div>
          <div>
            <CodeBlock>
              <code class="lang-html">{linktag}</code>
            </CodeBlock>
          </div>
        </div>
      </div>
    );
  }
}
