// Dependencies
import {h, Component} from 'preact';

// Material Components
import {
  Snackbar,
  SnackbarLabel,
  SnackbarActions,
  SnackbarAction
} from '@preact-material-components/snackbar';
import {Button} from '@preact-material-components/button';

import '@preact-material-components/snackbar/sass';
import '@preact-material-components/button/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class SnackbarPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Snackbar',
        props: [
          {
            name: 'stacked',
            description:
              'tells whether or not snackbar auto dismisses upon clicking the action button'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-snackbar">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-snackbar</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <Button
          raised={true}
          primary={true}
          onClick={() => {
            this.bar.MDComponent.open();
          }}
          className={'show-snack'}>
          Show snack
        </Button>
        <Snackbar
          ref={bar => {
            this.bar = bar;
          }}
          onOpened={(e, detail) => {
            console.log(e, detail);
          }}>
          <SnackbarLabel>This is a pmc snackbar!</SnackbarLabel>
          <SnackbarActions>
            <SnackbarAction>Close</SnackbarAction>
          </SnackbarActions>
        </Snackbar>
      </div>
    );
  }
}
