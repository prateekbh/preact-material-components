// Dependencies
import {h, Component} from 'preact';

// Material Components
import Elevation from '../../../../esm/Elevation';

import '../../../../Elevation/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class ElevationPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Elevation',
        props: [
          {
            name: 'z',
            value: '0 to 24',
            description: 'Add z=(0 to 24) to get different elevations.'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-elevation">
        <ComponentTable data={this.propsTable} />

        <CodeBlock header="Sample code">
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc link="elevation">mdc-elevation</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <Elevation z={0}>Z0</Elevation>
        <Elevation z={1}>Z1</Elevation>
        <Elevation z={2}>Z2</Elevation>
        <Elevation z={3}>Z3</Elevation>
        <Elevation z={4}>Z4</Elevation>
      </div>
    );
  }
}
