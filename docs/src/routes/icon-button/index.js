// Dependencies
import {h, Component} from 'preact';

// Material Components
import IconButton from '../../../../esm/IconButton';

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
        props: [
          {
            name: 'disabled',
            description: 'Is the icon disabled'
          },
          {
            name: 'data-toggle-on-content',
            description: 'icon for on state'
          },
          {
            name: 'data-toggle-off-content',
            description: 'icon for off state'
          },
          {
            name: 'data-toggle-on-label',
            description: 'label for on state'
          },
          {
            name: 'data-toggle-off-label',
            description: 'label for off state'
          }
        ]
      }
    ];
  }
  render() {
    const toggleOnIcon = {
      label: 'Remove From Favorites'
    };
    const toggleOffIcon = {
      label: 'Add to Favorites'
    };
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
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <IconButton
          role="button"
          tabindex="0"
          aria-pressed="false"
          aria-label="Add to favorites"
          data-toggle-on-content="favorite"
          data-toggle-off-content="favorite_border">
          favorite_border
        </IconButton>
      </div>
    );
  }
}
