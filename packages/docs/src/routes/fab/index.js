// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Fab, FabIcon, FabLabel} from '@preact-material-components/fab';

import '@preact-material-components/fab/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class FabPage extends Component {
  constructor() {
    super();
    this.state = {
      fabShowing: true
    };
    this.propsTable = [
      {
        component: 'Fab',
        props: [
          {
            name: 'ripple',
            description: 'Adds riple effect to the fab.'
          },
          {
            name: 'exited',
            description: 'Adds exited animated effect to fab.'
          },
          {
            name: 'extended',
            description: 'Adds extended space for label.'
          },
          {
            name: 'mini',
            description: 'Shrinks the size of the fab.'
          },
          {
            name: 'primary',
            description: 'Adds primary color to button'
          },
          {
            name: 'secondary',
            description: 'Adds secondary color to button'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-fab">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-fab</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Fab>
          <FabIcon>favorite_border</FabIcon>
        </Fab>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab><FabIcon>favorite_border</FabIcon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab ripple={true}>
          <FabIcon>favorite_border</FabIcon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab ripple={true}><FabIcon>favorite_border</FabIcon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab mini={true}>
          <FabIcon>favorite_border</FabIcon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab mini={true}><FabIcon>favorite_border</FabIcon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab
          exited={!this.state.fabShowing}
          onClick={() => {
            this.setState({
              fabShowing: false
            });
          }}>
          <FabIcon>directions_run</FabIcon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab exited><FabIcon>directions_run</FabIcon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab extended>
          <FabLabel>Run</FabLabel>
          <FabIcon>directions_run</FabIcon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab extended><FabIcon>directions_run</FabIcon></Fab>`}
            </code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
