// Dependencies
import {h, Component} from 'preact';

// Material Components
import List from '../../../../List';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class ListPage extends Component {
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
          }
        ]
      },
      {
        component: 'List.Item',
        props: []
      },
      {
        component: 'List.LinkItem',
        props: []
      },
      {
        component: 'List.ItemGraphic',
        props: []
      },
      {
        component: 'List.ItemMeta',
        props: []
      },
      {
        component: 'List.TextContainer',
        props: []
      },
      {
        component: 'List.PrimaryText',
        props: []
      },
      {
        component: 'List.SecondaryText',
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
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Normal </div>
        <List>
          <List.Item>Item1</List.Item>
          <List.Item>Item2</List.Item>
          <List.Divider />
          <List.Item>Item3</List.Item>
          <List.Item>Item4</List.Item>
          <List.Item>Item5</List.Item>
        </List>
        <div className="mdc-typography--title">Action items </div>
        <List>
          <List.LinkItem ripple={true} href="#/component/list">
            Item1
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#/component/list">
            Item2
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#/component/list">
            Item3
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#/component/list">
            Item4
          </List.LinkItem>
          <List.LinkItem ripple={true} href="#/component/list">
            Item5
          </List.LinkItem>
        </List>
        <div className="mdc-typography--title">Two line </div>
        <List two-line={true}>
          <List.Item>
            <List.TextContainer>
              <List.PrimaryText>Heading 1</List.PrimaryText>
              <List.SecondaryText>
                Lorem ipsum dolor sit amet.
              </List.SecondaryText>
            </List.TextContainer>
          </List.Item>
          <List.Item>
            <List.TextContainer>
              <List.PrimaryText>Heading 2</List.PrimaryText>
              <List.SecondaryText>
                Lorem ipsum dolor sit amet.
              </List.SecondaryText>
            </List.TextContainer>
          </List.Item>
          <List.Item>
            <List.TextContainer>
              <List.PrimaryText>Heading 3</List.PrimaryText>
              <List.SecondaryText>
                Lorem ipsum dolor sit amet.
              </List.SecondaryText>
            </List.TextContainer>
          </List.Item>
        </List>
        <div className="mdc-typography--title">Avatar </div>
        <List two-line={true}>
          <List.Group>
            <List.GroupHeader>Work</List.GroupHeader>
            <List.Item>
              <List.ItemGraphic>folder</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Photos</List.PrimaryText>
                <List.SecondaryText>Jan 9, 2014</List.SecondaryText>
              </List.TextContainer>
              <List.ItemMeta>info</List.ItemMeta>
            </List.Item>
            <List.Item>
              <List.ItemGraphic>folder</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Work</List.PrimaryText>
                <List.SecondaryText>Jan 28, 2014</List.SecondaryText>
              </List.TextContainer>
              <List.ItemMeta>info</List.ItemMeta>
            </List.Item>
          </List.Group>
          <List.Divider />
          <List.Group>
            <List.GroupHeader>Vacation</List.GroupHeader>
            <List.Item>
              <List.ItemGraphic>folder</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>Hawai</List.PrimaryText>
                <List.SecondaryText>Feb 9, 2014</List.SecondaryText>
              </List.TextContainer>
              <List.ItemMeta>info</List.ItemMeta>
            </List.Item>
            <List.Item>
              <List.ItemGraphic>folder</List.ItemGraphic>
              <List.TextContainer>
                <List.PrimaryText>India</List.PrimaryText>
                <List.SecondaryText>Mar 28, 2014</List.SecondaryText>
              </List.TextContainer>
              <List.ItemMeta>info</List.ItemMeta>
            </List.Item>
          </List.Group>
        </List>
      </div>
    );
  }
}
