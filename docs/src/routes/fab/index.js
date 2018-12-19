// Dependencies
import {h, Component} from 'preact';

// Material Components
import Fab from '../../../../esm/Fab';

import '../../../../Fab/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import OrgDoc from '../../components/original-documentation';

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

        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <OrgDoc>mdc-fab</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <Fab>
          <Fab.Icon>favorite_border</Fab.Icon>
        </Fab>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab><Fab.Icon>favorite_border</Fab.Icon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab ripple={true}>
          <Fab.Icon>favorite_border</Fab.Icon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab ripple={true}><Fab.Icon>favorite_border</Fab.Icon></Fab>`}
            </code>
          </CodeBlock>
        </div>

        <Fab mini={true}>
          <Fab.Icon>favorite_border</Fab.Icon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab mini={true}><Fab.Icon>favorite_border</Fab.Icon></Fab>`}
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
          <Fab.Icon>directions_run</Fab.Icon>
        </Fab>

        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Fab exited><Fab.Icon>directions_run</Fab.Icon></Fab>`}
            </code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
