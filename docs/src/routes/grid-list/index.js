// Dependencies
import { h, Component } from "preact";

// Material Components
import GridList from "preact-material-components/GridList";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import sample from "./sample.txt";

// Class
export default class GridListPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "GridList",
        props: [
          {
            name: "tile-gutter-1",
            description: "use 1px gutter (default is 4px)"
          },
          {
            name: "header-caption",
            description: "position <GridList.SecondaryTile> at top"
          },
          {
            name: "twoline-caption",
            description:
              "add spacing to <GridList.SecondaryTile> for <GridList.SupportTextTile>"
          },
          {
            name: "with-icon-align",
            value: "start, end",
            description:
              "position <GridList.IconTile> at beginning or end of <GridList.SecondaryTile>"
          },
          {
            name: "tile-aspect",
            value: "1x1, 16x9, 2x3, 3x2, 4x3, 3x4",
            description: "aspect ratio for <GridList.PrimaryTile>"
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{" "}
          <span className="strong">mdc-grid-list</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-grid-list">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <GridList
          header-caption={true}
          with-icon-align="end"
          twoline-caption={true}
          tile-gutter-1={true}
          tile-aspect-ratio="16x9"
        >
          <GridList.Tiles>
            <GridList.Tile>
              <GridList.PrimaryTile>
                <GridList.PrimaryContentTile src="../../../images/GridListTileSample.png" />
              </GridList.PrimaryTile>
              <GridList.SecondaryTile>
                <GridList.IconTile onClick={() => console.log("Edit Tile")}>
                  edit
                </GridList.IconTile>
                <GridList.TitleTile>Tile One</GridList.TitleTile>
                <GridList.SupportTextTile>
                  subheading one
                </GridList.SupportTextTile>
              </GridList.SecondaryTile>
            </GridList.Tile>
            <GridList.Tile>
              <GridList.PrimaryTile>
                <GridList.PrimaryContentTile src="../../../images/GridListTileSample.png" />
              </GridList.PrimaryTile>
              <GridList.SecondaryTile>
                <GridList.IconTile onClick={() => console.log("Edit Tile")}>
                  edit
                </GridList.IconTile>
                <GridList.TitleTile>Tile Two</GridList.TitleTile>
                <GridList.SupportTextTile>
                  subheading two
                </GridList.SupportTextTile>
              </GridList.SecondaryTile>
            </GridList.Tile>
          </GridList.Tiles>
        </GridList>
      </div>
    );
  }
}
