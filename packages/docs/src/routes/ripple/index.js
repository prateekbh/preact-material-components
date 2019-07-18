// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Ripple} from '@preact-material-components/ripple';

import '@preact-material-components/ripple/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class RipplePage extends Component {
  constructor() {
    super();
    this.state = {
      fabShowing: true
    };
    this.propsTable = [
      {
        component: 'Ripple',
        props: [
          {
            name: 'enabled',
            description: 'Whether the ripple is enabled'
          },
          {
            name: 'tag',
            description:
              'The component to attach the ripple to. Pass the props for it to ripple',
            type: 'Component class/function'
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div className="page-ripple">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-ripple</span>
          , you can refer to its documentation{' '}
          <a href="https://material.io/develop/web/components/ripples/">here</a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Ripple class="demo-ripple">I ripple</Ripple>
        <div>
          <CodeBlock>
            <code class="lang-html">{`<Ripple>I ripple</Ripple>`}</code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
