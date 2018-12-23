// Dependencies
import {h, Component} from 'preact';

// Material Components
import Snackbar from '../../../../esm/Snackbar';
import Button from '../../../../esm/Button';

import '../../../../Snackbar/style.css';
import '../../../../Button/style.css';

// Components
import ComponentTable from '../../components/component-table';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

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
            name: 'dismissesOnAction',
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

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="snackbars">mdc-snackbar</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <Button
          raised={true}
          primary={true}
          onClick={() => {
            this.bar.MDComponent.show({
              message: 'Hello Snack!'
            });
          }}>
          Show snack
        </Button>
        <Snackbar
          ref={bar => {
            this.bar = bar;
          }}
        />
      </div>
    );
  }
}
