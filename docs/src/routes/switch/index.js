// Dependencies
import {h, Component} from 'preact';

// Material Components
import Switch from '../../../../esm/Switch';

import '../../../../Switch/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';
import defaultSample from './default-sample.txt';
import checkedSample from './checked-sample.txt';
import disabledSample from './disabled-sample.txt';

// Class
export default class SwitchPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Switch',
        props: [
          {
            name: 'disabled',
            description: 'Disables the switch.'
          },
          {
            name: 'checked',
            description: 'Tells if the switch is checked.'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-switch">
        <ComponentTable data={this.propsTable} />

        <CodeBlock header="Sample code">
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-switch</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default </div>
        <Switch />
        <CodeBlock>
          <code class="lang-html">{defaultSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Checked </div>
        <Switch checked />
        <CodeBlock>
          <code class="lang-html">{checkedSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Disabled </div>
        <Switch disabled={true} />
        <CodeBlock>
          <code class="lang-html">{disabledSample}</code>
        </CodeBlock>
      </div>
    );
  }
}
