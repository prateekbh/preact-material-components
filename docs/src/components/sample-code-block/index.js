// Dependencies
import {h} from 'preact';

import CodeBlock from '../../components/code-block';
import sample from '../../routes/card/sample.txt';

// Class
export default ({children}) => {
  return (
    <div>
      <div className="mdc-typography--display1">Sample code</div>
      <CodeBlock>
        <code class="lang-js">{children}</code>
      </CodeBlock>
    </div>
  );
};
