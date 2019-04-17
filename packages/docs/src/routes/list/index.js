// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  List,
  ListItem,
  ListDivider,
  ListItemGraphic,
  ListGroupHeader,
  ListItemLink,
  ListGroup,
  ListItemMeta,
  ListTextSecondary,
  ListTextPrimary,
  ListText
} from '@preact-material-components/list';

import '@preact-material-components/list/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class ListPage extends Component {
  state = {
    currrentIndex: null
  };
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'List',
        props: [
          {
            name: 'dense',
            description: 'Makes the list with lesser padding.'
          },
          {
            name: 'two-line',
            description: 'Makes container for two line list item.'
          },
          {
            name: 'avatar-list',
            description: 'Makes the list capable of containing an avatar.'
          }
        ]
      },
      {
        component: 'ListItem',
        props: []
      },
      {
        component: 'ListLinkItem',
        props: []
      },
      {
        component: 'ListItemGraphic',
        props: []
      },
      {
        component: 'ListItemMeta',
        props: []
      },
      {
        component: 'ListTextContainer',
        props: []
      },
      {
        component: 'ListPrimaryText',
        props: []
      },
      {
        component: 'ListSecondaryText',
        props: []
      }
    ];
  }
  render() {
    return (
      <div className="page-list">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">mdc-list</span>,
          you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-list">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <List>
          <ListItem>Item1</ListItem>
          <ListItem>Item2</ListItem>
          <ListDivider />
          <ListItem>Item3</ListItem>
          <ListItem>Item4</ListItem>
          <ListItem>Item5</ListItem>
        </List>
        <div className="mdc-typography--title">Action items </div>
        <List>
          <ListItemLink ripple={true} href="#/component/list">
            Item1
          </ListItemLink>
          <ListItemLink ripple={true} href="#/component/list">
            Item2
          </ListItemLink>
          <ListItemLink ripple={true} href="#/component/list">
            Item3
          </ListItemLink>
          <ListItemLink ripple={true} href="#/component/list">
            Item4
          </ListItemLink>
          <ListItemLink ripple={true} href="#/component/list">
            Item5
          </ListItemLink>
        </List>
        <div className="mdc-typography--title">Two line </div>
        <List
          two-line={true}
          onAction={(e, {index}) => {
            this.setState({
              currrentIndex: index
            });
          }}>
          <ListItem>
            <ListText>
              <ListTextPrimary>Heading 1</ListTextPrimary>
              <ListTextSecondary>Lorem ipsum dolor sit amet.</ListTextSecondary>
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              <ListTextPrimary>Heading 2</ListTextPrimary>
              <ListTextSecondary>Lorem ipsum dolor sit amet.</ListTextSecondary>
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              <ListTextPrimary>Heading 3</ListTextPrimary>
              <ListTextSecondary>Lorem ipsum dolor sit amet.</ListTextSecondary>
            </ListText>
          </ListItem>
        </List>
        <div>Selected index: {this.state.currrentIndex}</div>
        <div className="mdc-typography--title">Avatar </div>
        <List two-line={true}>
          <ListGroup>
            <ListGroupHeader>Work</ListGroupHeader>
            <ListItem>
              <ListItemGraphic>folder</ListItemGraphic>
              <ListText>
                <ListTextPrimary>Photos</ListTextPrimary>
                <ListTextSecondary>Jan 9, 2014</ListTextSecondary>
              </ListText>
              <ListItemMeta>info</ListItemMeta>
            </ListItem>
            <ListItem>
              <ListItemGraphic>folder</ListItemGraphic>
              <ListText>
                <ListTextPrimary>Work</ListTextPrimary>
                <ListTextSecondary>Jan 28, 2014</ListTextSecondary>
              </ListText>
              <ListItemMeta>info</ListItemMeta>
            </ListItem>
          </ListGroup>
          <ListDivider />
          <ListGroup>
            <ListGroupHeader>Vacation</ListGroupHeader>
            <ListItem>
              <ListItemGraphic>folder</ListItemGraphic>
              <ListText>
                <ListTextPrimary>Hawai</ListTextPrimary>
                <ListTextSecondary>Feb 9, 2014</ListTextSecondary>
              </ListText>
              <ListItemMeta>info</ListItemMeta>
            </ListItem>
            <ListItem>
              <ListItemGraphic>folder</ListItemGraphic>
              <ListText>
                <ListTextPrimary>India</ListTextPrimary>
                <ListTextSecondary>Mar 28, 2014</ListTextSecondary>
              </ListText>
              <ListItemMeta>info</ListItemMeta>
            </ListItem>
          </ListGroup>
        </List>
      </div>
    );
  }
}
