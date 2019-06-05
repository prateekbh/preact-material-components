// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Typography} from '@preact-material-components/typography';

import '@preact-material-components/typography/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

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
            name: 'headline1',
            description: 'Adds `headline1` typography style.'
          },
          {
            name: 'headline2',
            description: 'Adds `headline2` typography style.'
          },
          {
            name: 'headline3',
            description: 'Adds `headline3` typography style.'
          },
          {
            name: 'headline4',
            description: 'Adds `headline4` typography style.'
          },
          {
            name: 'headline5',
            description: 'Adds `headline5` typography style.'
          },
          {
            name: 'headline6',
            description: 'Adds `headline6` typography style.'
          },
          {
            name: 'subtitle1',
            description: 'Adds `subtitle1` typography style.'
          },
          {
            name: 'subtitle2',
            description: 'Adds `subtitle2` typography style.'
          },
          {
            name: 'title',
            description: 'Adds `title` typography style.'
          },
          {
            name: 'body1',
            description: 'Adds `body1` typography style.'
          },
          {
            name: 'body2',
            description: 'Adds `body2` typography style.'
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

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-typography</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>
        <div>
          <Typography headline="1">Headline 1</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="1">Headline 1</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline="2">Headline 2</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="2">Headline 2</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline="3">Headline 3</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="3">Headline 3</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline="4">Headline 4</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="4">Headline 4</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline="5">Headline 5</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="5">Headline 5</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography headline="6">Headline 6</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography headline="6">Headline 6</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography subtitle="1">Subtitle 1</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography subtitle="1">Subtitle 1</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography subtitle="2">Subtitle 2</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography subtitle="2">Subtitle 2</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography title>Title</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography title>Title</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography body="1">Body 1</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography body="1">Body 1</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography body="2">Body 2</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography body="2">Body 2</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography button>Button</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography button>Button</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography caption>Caption</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography caption>Caption</Typography>`}
            </code>
          </CodeBlock>
        </div>

        <div>
          <Typography overline>Overline</Typography>
        </div>
        <div>
          <CodeBlock>
            <code class="lang-html">
              {`<Typography overline>Overline</Typography>`}
            </code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
