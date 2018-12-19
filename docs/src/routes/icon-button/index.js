// Dependencies
import {h, Component} from 'preact';

// Material Components
import IconButton from '../../../../esm/IconButton';
import '../../../../IconButton/style.css';
import '../../../../Icon/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

// Samples
import sample from './sample.txt';

// Class
export default class IconButtonPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'IconButton',
        props: []
      },
      {
        component: 'Icon',
        props: [
          {
            name: 'on',
            description:
              'Determine if this button is the on state or off state button.'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <CodeBlock header="Sample code">
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-icon-button</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <IconButton>
          <IconButton.Icon on>favorite</IconButton.Icon>
          <IconButton.Icon>favorite_border</IconButton.Icon>
        </IconButton>
      </div>
    );
  }
}
