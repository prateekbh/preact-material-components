// Dependencies
import {h, Component} from 'preact';

// Material Components
import Card from '../../../../esm/Card';

import '../../../../Card/style.css';
import '../../../../Button/style.css';

// Components
import ComponentTable from '../../components/component-table';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

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
        component: 'Card.Actions',
        props: [
          {
            name: 'full-bleed',
            description: 'This makes the action button end to end.'
          }
        ]
      },
      {
        component: 'Card.ActionButton',
        props: []
      },
      {
        component: 'Card.ActionIcon',
        props: []
      },
      {
        component: 'Card.ActionButtons',
        props: []
      },
      {
        component: 'Card.ActionIcons',
        props: []
      },
      {
        component: 'Card.Media',
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
        component: 'Card.CardMediaContent',
        props: []
      }
    ];
  }

  render() {
    return (
      <div className="page-card">
        <ComponentTable data={this.propsTable} />

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="cards">mdc-card</OrgDoc>

        <div className="mdc-typography--display1">Card with action button</div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <Card.Media className="card-media" />
          <Card.Actions>
            <Card.ActionButtons>
              <Card.ActionButton>OK</Card.ActionButton>
            </Card.ActionButtons>
            <Card.ActionIcons>
              <Card.ActionIcon>share</Card.ActionIcon>
            </Card.ActionIcons>
          </Card.Actions>
        </Card>

        <div className="mdc-typography--display1">
          Card with full-bleed action area
        </div>
        <Card>
          <div class="card-header">
            <h2 class=" mdc-typography--title">Title</h2>
            <div class=" mdc-typography--caption">Caption</div>
          </div>
          <Card.Media className="card-media" />
          <Card.Actions full-bleed>
            <Card.ActionButton>Full-bleed button</Card.ActionButton>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}
