// Dependencies
import {h, Component} from 'preact';

// Material Components
import {IconButton} from '@preact-material/icon-button';

import '@preact-material/icon-button/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

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

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-icon-button</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <IconButton>
          <IconButton.Icon on>favorite</IconButton.Icon>
          <IconButton.Icon>favorite_border</IconButton.Icon>
        </IconButton>
      </div>
    );
  }
}
