// Dependencies
import { h, Component } from "preact";

// Material Components
import LayoutGrid from "preact-material-components/LayoutGrid";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class LayoutGridPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "LayoutGrid",
        props: []
      },
      {
        component: "LayoutGrid.Inner",
        props: []
      },
      {
        component: "LayoutGrid.Cell",
        props: [
          {
            name: "cols",
            description: "Column width of cell (general).",
            value: "[1..12]"
          },
          {
            name: "desktopCols",
            description: "Column width of cell (desktop breakpoint).",
            value: "[1..12]"
          },
          {
            name: "tabletCols",
            description: "Column width of cell (tablet breakpoint).",
            value: "[1..12]"
          },
          {
            name: "phoneCols",
            description: "Column width of cell (phone breakpoint).",
            value: "[1..12]"
          },
          {
            name: "order",
            description: "Allows reordering of items in grid.",
            value: "[1..12]"
          },
          {
            name: "align",
            description: "Vertical alignment of cell within row.",
            value: "[top|middle|bottom]"
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-layout-grid">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-layout-grid</span>. You can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <div className="mdc-typography--body">Grid of 1 column wide items</div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">1</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <div className="mdc-typography--body">Grid of 4 column wide items</div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="4">4</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="4">4</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="4">4</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid of differently sized items
        </div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="6">6</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="4">4</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2">2</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid of items with tweaks at different screen sizes
        </div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="6" tabletCols="8">
              6 (8 tablet)
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="4" tabletCols="6">
              4 (6 tablet)
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="2" phoneCols="4">
              2 (4 phone)
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid with different alignments
        </div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3">default</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" align="bottom">
              bottom
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" align="top">
              top
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" align="middle">
              middle
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>

        <div className="mdc-typography--body">Grid with reordered items</div>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3" order="3">
              First cell
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" order="1">
              Second cell
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" order="4">
              Third cell
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3" order="2">
              Fourth cell
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
