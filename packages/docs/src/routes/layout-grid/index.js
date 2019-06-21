// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  LayoutGrid,
  LayoutGridCell,
  LayoutGridInner
} from '@preact-material-components/layout-grid';

import '@preact-material-components/layout-grid/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class LayoutGridPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'LayoutGrid',
        props: []
      },
      {
        component: 'LayoutGrid.Inner',
        props: []
      },
      {
        component: 'LayoutGrid.Cell',
        props: [
          {
            name: 'cols',
            description: 'Column width of cell (general).',
            value: '[1..12]'
          },
          {
            name: 'desktopCols',
            description: 'Column width of cell (desktop breakpoint).',
            value: '[1..12]'
          },
          {
            name: 'tabletCols',
            description: 'Column width of cell (tablet breakpoint).',
            value: '[1..8]'
          },
          {
            name: 'phoneCols',
            description: 'Column width of cell (phone breakpoint).',
            value: '[1..4]'
          },
          {
            name: 'order',
            description: 'Allows reordering of items in grid.',
            value: '[1..12]'
          },
          {
            name: 'align',
            description: 'Vertical alignment of cell within row.',
            value: '[top|middle|bottom]'
          }
        ]
      }
    ];
  }

  render() {
    // noinspection HtmlDeprecatedAttribute
    return (
      <div className="page-layout-grid">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-layout-grid</span>. You can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <div className="mdc-typography--body">
          Grid of 12, 1 column wide items
        </div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid of 3, 4 column wide items
        </div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell cols="4">4</LayoutGridCell>
            <LayoutGridCell cols="4">4</LayoutGridCell>
            <LayoutGridCell cols="4">4</LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid of differently sized items
        </div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell cols="4">4</LayoutGridCell>
            <LayoutGridCell cols="3">3</LayoutGridCell>
            <LayoutGridCell cols="1">1</LayoutGridCell>
            <LayoutGridCell cols="2">2</LayoutGridCell>
            <LayoutGridCell cols="2">2</LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid of items with tweaks at different screen sizes
        </div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell cols="6" tabletCols="8">
              6 (8 tablet)
            </LayoutGridCell>
            <LayoutGridCell cols="4" tabletCols="6">
              4 (6 tablet)
            </LayoutGridCell>
            <LayoutGridCell cols="2" phoneCols="4">
              2 (4 phone)
            </LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>

        <div className="mdc-typography--body">
          Grid with different alignments
        </div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell phoneCols="1" tabletCols="2" cols="3">
              default
            </LayoutGridCell>
            <LayoutGridCell
              phoneCols="1"
              tabletCols="2"
              cols="3"
              align="bottom">
              bottom
            </LayoutGridCell>
            <LayoutGridCell cols="3" tabletCols="2" phoneCols="1" align="top">
              top
            </LayoutGridCell>
            <LayoutGridCell
              cols="3"
              tabletCols="2"
              phoneCols="1"
              align="middle">
              middle
            </LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>

        <div className="mdc-typography--body">Grid with reordered items</div>
        <LayoutGrid>
          <LayoutGridInner>
            <LayoutGridCell cols="3" tabletCols="2" phoneCols="1" order="3">
              First cell
            </LayoutGridCell>
            <LayoutGridCell cols="3" tabletCols="2" phoneCols="1" order="1">
              Second cell
            </LayoutGridCell>
            <LayoutGridCell cols="3" tabletCols="2" phoneCols="1" order="4">
              Third cell
            </LayoutGridCell>
            <LayoutGridCell cols="3" tabletCols="2" phoneCols="1" order="2">
              Fourth cell
            </LayoutGridCell>
          </LayoutGridInner>
        </LayoutGrid>
      </div>
    );
  }
}
