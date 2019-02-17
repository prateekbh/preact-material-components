// Dependencies
import {h, Component} from 'preact';

// Material Components
import Radio from '../../../../esm/Radio';
import FormField from '../../../../esm/FormField';

import '../../../../Radio/style.css';
import '../../../../FormField/style.css';

// Components
import ComponentTable from '../../components/component-table';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

// Samples
import sample from './sample.txt';

// Class
export default class FormFieldPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'FormField',
        props: []
      }
    ];
  }

  render() {
    return (
      <div>
        <ComponentTable data={this.propsTable} />

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="input-controls/form-fields">mdc-form-field</OrgDoc>

        <div className="mdc-typography--display1">Demo</div>
        <FormField>
          <Radio id="r1" name="opts" />
          <label for="r1">Radio 1</label>
        </FormField>
      </div>
    );
  }
}
