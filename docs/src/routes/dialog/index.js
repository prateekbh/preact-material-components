// Dependencies
import {h, Component} from 'preact';

// Material Components
import Dialog from '../../../../esm/Dialog';
import Button from '../../../../esm/Button';
import List from '../../../../esm/List';

import '../../../../Dialog/style.css';
import '../../../../Button/style.css';
import '../../../../List/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import SampleCodeBlock from '../../components/sample-code-block';
import EventsTable from '../../components/events-table';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';
import defaultSample from './default-sample.txt';
import scrollableSample from './scrollable-sample.txt';

// Class
export default class DialogPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Dialog',
        props: []
      },
      {
        component: 'Dialog.Header',
        props: []
      },
      {
        component: 'Dialog.Body',
        props: [
          {
            name: 'scrollable',
            description: 'Adds vertical scroll for content.'
          }
        ]
      },
      {
        component: 'Dialog.Footer',
        props: []
      },
      {
        component: 'Dialog.FooterButton',
        props: [
          {
            name: 'accept',
            description: 'Makes the button, default button.'
          },
          {
            name: 'cancel',
            description: 'Makes the button, cancel button.'
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: 'onAccept',
        description: "Fired when the dialog's accept button is clicked."
      },
      {
        name: 'onCancel',
        description: "Fired when the dialog's cancel button is clicked."
      }
    ];
  }
  render() {
    return (
      <div className="page-dialog">
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="dialogs">mdc-dialog</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default Dialog</div>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.normalDlg.MDComponent.show();
          }}>
          Show Dialog
        </Button>
        <CodeBlock>
          <code class="lang-html">{defaultSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Scrollable Dialog</div>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.scrollingDlg.MDComponent.show();
          }}>
          Show Scrollable Dialog
        </Button>
        <CodeBlock>
          <code class="lang-html">{scrollableSample}</code>
        </CodeBlock>
        <Dialog
          ref={normalDlg => {
            this.normalDlg = normalDlg;
          }}>
          <Dialog.Header>Use Google's location service?</Dialog.Header>
          <Dialog.Body>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
        <Dialog
          ref={scrollingDlg => {
            this.scrollingDlg = scrollingDlg;
          }}>
          <Dialog.Header>Scroll for me ;)</Dialog.Header>
          <Dialog.Body scrollable={true}>
            <List>
              <List.Item>Item 1</List.Item>
              <List.Item>Item 2</List.Item>
              <List.Item>Item 3</List.Item>
              <List.Item>Item 4</List.Item>
              <List.Item>Item 5</List.Item>
            </List>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
            <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
