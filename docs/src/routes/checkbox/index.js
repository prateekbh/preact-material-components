// Dependencies
import {h, Component} from 'preact';

// Material Components
import Checkbox from '../../../../esm/Checkbox';
import Formfield from '../../../../esm/FormField';

import '../../../../Checkbox/style.css';
import '../../../../FormField/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';
import basicExample from './basic-example.txt';
import indeterminateExample from './indeterminate-example.txt';
import controlledExample from './controlled-example.txt';

// Class
export default class CheckboxPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Checkbox',
        props: [
          {
            name: 'disabled',
            description: 'This makes the checkbox disabled'
          },
          {
            name: 'checked',
            description: 'This makes the checkbox checked'
          },
          {
            name: 'indeterminate',
            description: 'This makes the checkbox indeterminate'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-checkbox">
        <ComponentTable data={this.propsTable} />

        <CodeBlock header="Sample code">
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-checkbox</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>

        <div className="mdc-typography--title">Basic Checkbox </div>
        <Formfield>
          <Checkbox id="basic-checkbox" />
          <label for="basic-checkbox">Basic checkbox</label>
        </Formfield>
        <CodeBlock>
          <code class="lang-html">{basicExample}</code>
        </CodeBlock>

        <div className="mdc-typography--title">Indeterminate Checkbox </div>
        <Formfield>
          <Checkbox id="inderminate-checkbox" indeterminate={true} />
          <label for="inderminate-checkbox">Indeterminate checkbox</label>
        </Formfield>
        <CodeBlock>
          <code class="lang-html">{indeterminateExample}</code>
        </CodeBlock>

        <div className="mdc-typography--title">Checked </div>
        <Formfield>
          <Checkbox id="controlled-checkbox" checked={true} />
          <label for="controlled-checkbox">Controlled checkbox</label>
        </Formfield>
        <CodeBlock>
          <code class="lang-html">{controlledExample}</code>
        </CodeBlock>
      </div>
    );
  }
}
