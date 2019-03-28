// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from '@preact-material-components/dialog';
import {Button} from '@preact-material-components/button';
import {Typography} from '@preact-material-components/typography';
import {List} from '@preact-material-components/list';
import {ListItem} from '@preact-material-components/list/lib/item';

import '@preact-material-components/dialog/sass';
import '@preact-material-components/button/sass';
import '@preact-material-components/list/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import EventsTable from '../../components/events-table';

// Styles
import './style';

// Samples
import sample from './sample.txt';
import defaultSample from './default-sample.txt';
import scrollableSample from './scrollable-sample.txt';

// Class
export default class DialogPage extends Component {
  state = {
    normalDlgAction: 'N/A',
    scrollingDlgAction: 'N/A'
  };

  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Dialog',
        props: []
      },
      {
        component: 'DialogHeader',
        props: []
      },
      {
        component: 'DialogBody',
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
        component: 'DialogFooterButton',
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
  onNormalDialogClose = (e, {action}) => {
    this.setState({
      normalDlgAction: action
    });
  };
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
          This component encapsulates <span className="strong">mdc-dialog</span>
          , you can refer to its documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div className="mdc-typography--title">Default Dialog</div>
        <Typography tag="div" subtitle1>
          Dialog close action: {this.state.normalDlgAction}
        </Typography>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.normalDlg.MDComponent.open();
          }}>
          Open Dialog
        </Button>
        <CodeBlock>
          <code class="lang-html">{defaultSample}</code>
        </CodeBlock>
        <div className="mdc-typography--title">Scrollable Dialog</div>
        <Button
          primary={true}
          raised={true}
          onClick={() => {
            this.scrollingDlg.MDComponent.open();
          }}>
          Open Scrollable Dialog
        </Button>
        <CodeBlock>
          <code class="lang-html">{scrollableSample}</code>
        </CodeBlock>
        <Dialog
          ref={normalDlg => {
            this.normalDlg = normalDlg;
          }}
          onClose={this.onNormalDialogClose}>
          <DialogTitle>Use Google's location service?</DialogTitle>
          <DialogContent>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContent>
          <DialogActions>
            <DialogButton cancel>Decline</DialogButton>
            <DialogButton accept>Accept</DialogButton>
          </DialogActions>
        </Dialog>
        <Dialog
          ref={scrollingDlg => {
            this.scrollingDlg = scrollingDlg;
          }}>
          <DialogTitle>Use Google's location service?</DialogTitle>
          <DialogContent>
            <List>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
              <ListItem>Item 4</ListItem>
              <ListItem>Item 5</ListItem>
              <ListItem>Item 6</ListItem>
              <ListItem>Item 7</ListItem>
              <ListItem>Item 8</ListItem>
              <ListItem>Item 9</ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <DialogButton cancel>Decline</DialogButton>
            <DialogButton accept>Accept</DialogButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
