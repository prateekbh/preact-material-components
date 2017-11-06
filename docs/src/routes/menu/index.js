// Dependencies
import { h, Component } from "preact";

// Material Components
import Menu from "preact-material-components/Menu";
import Button from "preact-material-components/Button";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import sample from "./sample.txt";

// Class
export default class MenuPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Menu",
        props: [
          {
            name: "Open",
            description: "Auto opens the menu."
          }
        ]
      },
      {
        component: "Item",
        props: []
      },
      {
        component: "MenuAnchor",
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-menu">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-menu</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Menu.Anchor>
          <Button
            onClick={e => {
              this.menu.MDComponent.open = !this.menu.MDComponent.open;
            }}
          >
            Click for menu
          </Button>
          <Menu
            ref={menu => {
              this.menu = menu;
            }}
          >
            <Menu.Item>Hello1</Menu.Item>
            <Menu.Item>Hello2</Menu.Item>
            <Menu.Item>Hello3</Menu.Item>
          </Menu>
        </Menu.Anchor>

        <div className="mdc-typography--display1">Note </div>
        <div className="mdc-typography--body">
          <div>
            If you are using this component individually, DO NOT FORGET to
            import
            <i> 'preact-material-components/List/style.css'</i>
          </div>
        </div>
      </div>
    );
  }
}
