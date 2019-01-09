// Dependencies
import {h, Component} from 'preact';

// Material Components
import Typography from '../../../../esm/Typography';

import '../../../../Typography/style.css';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';
import SampleCodeBlock from '../../components/sample-code-block';
import OrgDoc from '../../components/original-documentation';

// Styles
import './style';

// Samples
import sample from './sample.txt';

// Class
export default class TypographyPage extends Component {
  constructor() {
    super();
    this.state = {
      fabShowing: true
    };
    this.propsTable = [
      {
        component: 'Typography',
        props: [
          {
            name: 'headline6',
            description: 'Adds `headline6` typography style.'
          },
          {
            name: 'headline5',
            description: 'Adds `headline5` typography style.'
          },
          {
            name: 'headline4',
            description: 'Adds `headline4` typography style.'
          },
          {
            name: 'headline3',
            description: 'Adds `headline3` typography style.'
          },
          {
            name: 'headline2',
            description: 'Adds `headline2` typography style.'
          },
          {
            name: 'headline1',
            description: 'Adds `headline1` typography style.'
          },
          {
            name: 'subtitle2',
            description: 'Adds `subtitle2` typography style.'
          },
          {
            name: 'subtitle1',
            description: 'Adds `subtitle1` typography style.'
          },
          {
            name: 'body2',
            description: 'Adds `body2` typography style.'
          },
          {
            name: 'body1',
            description: 'Adds `body1` typography style.'
          },
          {
            name: 'button',
            description: 'Adds `button` typography style.'
          },
          {
            name: 'caption',
            description: 'Adds `caption` typography style.'
          },
          {
            name: 'overline',
            description: 'Adds `overline` typography style.'
          }
        ]
      }
    ];
  }
  render() {
    return (
      <div className="page-fab">
        <ComponentTable data={this.propsTable} />

        <SampleCodeBlock>{sample}</SampleCodeBlock>

        <OrgDoc link="typography">mdc-typography</OrgDoc>

        <div className="mdc-typography--display1">Demo </div>
        <div>
          <Typography headline1>Headline 1</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline1>Headline 1</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline2>Headline 2</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline2>Headline 2</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline3>Headline 3</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline3>Headline 3</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline4>Headline 4</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline4>Headline 4</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline5>Headline 5</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline5>Headline 5</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline6>Headline 6</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline6>Headline 6</Typography>`}
            </code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
