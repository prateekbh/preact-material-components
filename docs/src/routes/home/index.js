// Dependencies
import { h, Component } from "preact";

// Material Components
import Radio from "preact-material-components/Radio";
import Formfield from "preact-material-components/Formfield";

// Components
import ComponentTable from "../../components/component-table";
import CodeBlock from "../../components/code-block";

// Samples
import invidualComponentSample from "./invidual-component-sample.txt";
import jsSample from "./js-sample.txt";
import cssSample from "./css-sample.txt";

// Class
export default class FormFieldPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: "Formfield",
        props: []
      }
    ];
  }

  render() {
    return (
      <div>
        <div className="mdc-typography--body">
          <div>
            <a href="https://github.com/prateekbh/preact-material-components">
              <span className="grey">preact-material-components</span>
            </a>{" "}
            is a thin opinionless wrapper around{" "}
            <a href="https://github.com/material-components/material-components-web">
              material-components-web
            </a>. Use these components to add material components to your web
            app, without worrying about the extra code of components which you
            are not using.
          </div>
          <div className="mdc-typography--display1">How to use</div>
          <div>
            All the components of{" "}
            <span className="grey">preact-material-components</span> are built
            to work independently. So there are couple of ways to use them.
          </div>
          <div>
            <CodeBlock>
              <code class="lang-js">npm i -D preact-material-components</code>
            </CodeBlock>
          </div>
          <div>
            <div className="mdc-typography--title">
              Using the JS of the component
            </div>
            <div>
              If you are using an ES6 codebase, consider using the components
              individually, as none of the tree shaking currently removes unused
              classes.
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
            <div className="mdc-typography--title">
              Using the CSS of the component
            </div>
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
