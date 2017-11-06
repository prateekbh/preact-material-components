// Dependencies
import { h, Component } from "preact";

// Material Components
import Dialog from "preact-material-components/Dialog";
import Button from "preact-material-components/Button";
import List from "preact-material-components/List";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";
import EventsTable from "../../components/events-table";

// Styles
import "./style";

// Samples
import sample from "./sample.txt";

// Class
export default class DialogPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Dialog",
        props: []
      },
      {
        component: "Dialog.Header",
        props: []
      },
      {
        component: "Dialog.Body",
        props: [
          {
            name: "scrollable",
            description: "Adds vertical scroll for content."
          }
        ]
      },
      {
        component: "Dialog.Footer",
        props: []
      },
      {
        component: "Dialog.FooterButton",
        props: [
          {
            name: "accept",
            description: "Makes the button, default button."
          },
          {
            name: "cancel",
            description: "Makes the button, cancel button."
          }
        ]
      }
    ];
    this.eventsTable = [
      {
        name: "onAccept",
        description: "Fired when the dialog's accept button is clicked."
      },
      {
        name: "onCancel",
        description: "Fired when the dialog's cancel button is clicked."
      }
    ];
  }
  render() {
    return (
      <div className="page-dialog">
        <ComponentTable data={this.propsTable} />
        <EventsTable data={this.eventsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates <span className="strong">
            mdc-dialog
          </span>, you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog">
            {" "}
            here
          </a>.
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.normalDlg.MDComponent.show();
          }}
        >
          Show Dialog
        </Button>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.scrollingDlg.MDComponent.show();
          }}
        >
          Show Scrollable Dialog
        </Button>
        <Dialog
          ref={normalDlg => {
            this.normalDlg = normalDlg;
          }}
        >
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
          }}
        >
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
