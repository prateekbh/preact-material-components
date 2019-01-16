// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Card} from '@preact-material-components/card';
import {CardActions} from '@preact-material-components/card/lib/actions';
import {CardMedia} from '@preact-material-components/card/lib/media';
import {CardActionButton} from '@preact-material-components/card/lib/action';

import '@preact-material-components/card/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Style
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class CardPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Card',
        props: [
          {
            name: 'outlined',
            description: 'This makes the card outlined.'
          }
        ]
      },
      {
        component: 'CardActions',
        props: [
          {
            name: 'full-bleed',
            description: 'This makes the action button end to end.'
          }
        ]
      },
      {
        component: 'CardActionButton',
        props: []
      },
      {
        component: 'CardMedia',
        props: [
          {
            name: 'square',
            description: 'Makes Media aspect ratio 1:1.'
          },
          {
            name: 'sixteenByNine',
            description: 'Makes Media aspect ratio 16:9.'
          }
        ]
      },
      {
        component: 'CardCardMediaContent',
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-card">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code</div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-card</span>.
          You can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Card with action button</div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <CardMedia className="card-media" />
          <CardActions>
            <CardActionButton>OK</CardActionButton>
          </CardActions>
        </Card>

        <div className="mdc-typography--display1">
          Card with full-bleed action area
        </div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <CardMedia className="card-media" />
          <CardActions full-bleed>
            <CardActionButton>Full-bleed button</CardActionButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}
