// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  Card,
  Actions,
  ActionButton,
  ActionIcons,
  ActionIcon,
  Media
} from '@preact-material-components/card';

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
        component: 'PrimaryAction',
        props: []
      },
      {
        component: 'Actions',
        props: [
          {
            name: 'full-bleed',
            description: 'This makes the action button end to end.'
          }
        ]
      },
      {
        component: 'ActionIcons',
        props: []
      },
      {
        component: 'ActionButton',
        props: []
      },
      {
        component: 'ActionIcon',
        props: []
      },
      {
        component: 'Media',
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
        component: 'MediaContent',
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
          <Media className="card-media" />
          <Actions>
            <ActionButton>OK</ActionButton>
            <ActionIcons>
              <ActionIcon>favorite</ActionIcon>
              <ActionIcon>share</ActionIcon>
            </ActionIcons>
          </Actions>
        </Card>

        <div className="mdc-typography--display1">
          Card with full-bleed action area
        </div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <Media className="card-media" />
          <Actions full-bleed>
            <ActionButton>Full-bleed button</ActionButton>
          </Actions>
        </Card>
      </div>
    );
  }
}
