// Dependencies
import {h, Component} from 'preact';

// Material Components
import Card from '../../../../Card';

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
        props: []
      },
      {
        component: 'Card.Actions',
        props: [
          {
            name: 'full-bleed',
            description: 'This makes the action button end to end'
          }
        ]
      },
      {
        component: 'Card.ActionButton',
        props: []
      },
      {
        component: 'Card.Media',
        props: [
          {
            name: 'square',
            description: 'Makes Media aspect ratio 1:1'
          },
          {
            name: '16-9',
            description: 'Makes Media aspect ratio 16:9'
          }
        ]
      },
      {
        component: 'Card.CardMediaContent',
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
          This component encapsulates <span className="strong">mdc-card</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card">
            {' '}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo</div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Hi</h2>
            <div class=" mdc-typography--caption">Let me subtitle</div>
          </div>
          <Card.Media className="card-media" />
          <Card.Actions>
            <Card.ActionButton>OKAY</Card.ActionButton>
          </Card.Actions>
        </Card>

        <div className="mdc-typography--display1">Demo</div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Hi</h2>
            <div class=" mdc-typography--caption">Let me subtitle</div>
          </div>
          <Card.Media className="card-media" />
          <Card.Actions full-bleed>
            <Card.ActionButton>OKAY</Card.ActionButton>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}
