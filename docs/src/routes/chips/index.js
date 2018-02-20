// Dependencies
import { h, Component } from "preact";

// Material Components
import Chips from "preact-material-components/Chips";

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
        component: "Chips",
        props: [
          {
            component: "Chip",
            props: []
          },
          {
            component: "Icon",
            props: [
              {
                name: "leading",
                description: "Optional. Indicates a leading icon in the chip"
              },
              {
                name: "trailing",
                description: "Optional. Indicates a trailing icon in the chip"
              }
            ]
          },
          {
            component: "Text",
            props: []
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-chips">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-chips</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div>
          <Chips>
            <Chips.Chip>
              <Chips.Text>Chip One</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Two</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Three</Chips.Text>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Text>Chip Four</Chips.Text>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">
              {`<Chips>
  <Chips.Chip>
    <Chips.Text>Chip One</Chips.Text>
  </Chips.Chip>
  <Chips.Chip>
    <Chips.Text>Chip Two</Chips.Text>
  </Chips.Chip>
  <Chips.Chip>
    <Chips.Text>Chip Three</Chips.Text>
  </Chips.Chip>
  <Chips.Chip>
    <Chips.Text>Chip Four</Chips.Text>
  </Chips.Chip>
</Chips>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Chips>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                face
              </Chips.Icon>
              <Chips.Text>Jane Smith</Chips.Text>
              <Chips.Icon className="material-icons" trailing>
                more_vert
              </Chips.Icon>
            </Chips.Chip>
            <Chips.Chip>
              <Chips.Icon className="material-icons" leading>
                face
              </Chips.Icon>
              <Chips.Text>John Doe</Chips.Text>
              <Chips.Icon className="material-icons" trailing>
                more_vert
              </Chips.Icon>
            </Chips.Chip>
          </Chips>
          <CodeBlock>
            <code class="lang-html">
              {`<Chips>
  <Chips.Chip>
    <Chips.Icon className="material-icons" leading>face</Chips.Icon>
    <Chips.Text>Jane Smith</Chips.Text>
    <Chips.Icon className="material-icons" trailing>more_vert</Chips.Icon>
  </Chips.Chip>
  <Chips.Chip>
  <Chips.Icon className="material-icons" leading>face</Chips.Icon>
    <Chips.Text>John Doe</Chips.Text>
    <Chips.Icon className="material-icons" trailing>more_vert</Chips.Icon>
  </Chips.Chip>
</Chips>`}
            </code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
