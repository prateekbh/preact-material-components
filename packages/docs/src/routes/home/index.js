// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Typography} from '@preact-material-components/typography';

import '@preact-material-components/typography/sass';

// Components
import CodeBlock from '../../components/code-block';

// Samples
import invidualComponentSample from './invidual-component-sample.txt';
import jsSample from './js-sample.txt';
import cssSample from './css-sample.txt';

// Class
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="mdc-typography--body">
          <div>
            <a href="https://github.com/prateekbh/preact-material-components">
              preact-material-components
            </a>{' '}
            is a thin opinionless wrapper around{' '}
            <a href="https://github.com/material-components/material-components-web">
              material-components-web
            </a>
            . Use these components to add material components to your web app,
            without worrying about the extra code of components which you are
            not using.
          </div>
          <br />
          <Typography headline4>How to use</Typography>
          <br />
          <br />
          <Typography headline5>There are three distributions:</Typography>
          <br />
          <Typography subtitle="1">⚠ Out dated ⚠</Typography>
          <ul>
            <li>
              <Typography headline6>Default Build</Typography>
              <div>Location:</div> Package Root/
              <span className="code-snippet">
                {'preact-material-components/<Component>'}
              </span>
              <div>Who?</div>
              <ul>
                <li>
                  Libraries: ✖ (Users should decide about transpilation
                  themselves)
                </li>
                <li>Applications: ✔</li>
              </ul>
              <div>Support:</div>
              <div>
                This supports all browsers supported by mwc, JavaScript and
                TypeScript
              </div>
            </li>
            <br />
            <li>
              <Typography headline6>ES Module Build</Typography>
              <div>
                Location:
              </div> <span className="code-snippet">esm</span> directory/
              <span className="code-snippet">
                {'preact-material-components/esm/<Component>'}
              </span>
              <div>Who?</div>
              <ul>
                <li>Libraries: ✔</li>
                <li>Applications: ✔</li>
              </ul>
              <div>Support:</div>
              <div>
                This supports most recent browsers, JavaScript and TypeScript
              </div>
            </li>
            <br />
            <li>
              <Typography headline6>TypeScript Source</Typography>
              <div>Location:</div> <span className="code-snippet">ts</span>{' '}
              directory/
              <span className="code-snippet">
                {'preact-material-components/ts/<Component>'}
              </span>
              <div>Who?</div>
              <ul>
                <li>
                  Libraries: (✔) (Not recommended, keep in mind that your
                  library will only support TypeScript)
                </li>
                <li>Applications: ✔</li>
              </ul>
              <div>Support:</div>
              <div>
                Browser support depends on transpilation/TypeScript
                configuration and only TypeScript is supported.
              </div>
            </li>
          </ul>
          <br />
          <Typography headline5>Installation and Usage:</Typography>
          <div>
            All the components of preact-material-components are built to work
            independently. So there are couple of ways to use them.
          </div>
          <div>
            <CodeBlock>
              <code class="lang-shell">
                npm i -D preact-material-components
              </code>
            </CodeBlock>
          </div>
          <div>
            <Typography headline6>Using the JS of the component</Typography>
            <div>
              You can also use the components individually, as none of the tree
              shaking currently removes unused classes.
              <CodeBlock>
                <code class="lang-js">{jsSample}</code>
              </CodeBlock>
              Although you can import all the components together, you should
              not. Importing this way will bring unnecessary code of other
              components into your final bundle. This might hit your metrics
              like time to interactivity, load times, etc. DO NOT BLOAT YOUR
              BUNDLE.
              <CodeBlock>
                <code class="lang-js">{invidualComponentSample}</code>
              </CodeBlock>
            </div>
          </div>
          <div>
            <Typography headline6>Using the CSS of the component</Typography>
            <div>
              If you are using only a couple of components from the entire
              package, try importing individual CSS, for the same reason: TO
              AVOID BLOATING YOUR CSS BUNDLE.
              <CodeBlock>
                <code class="lang-js">{cssSample}</code>
              </CodeBlock>
              However this approach might work against you if you use a lot of
              components. In that case, prefer adding the entire stylesheet at
              once, as it is more optimized for such cases.
              <CodeBlock>
                <code class="lang-js">
                  import 'preact-material-components/style.css';
                </code>
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
