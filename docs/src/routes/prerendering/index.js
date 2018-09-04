// Dependencies
import {h, Component} from 'preact';

// Material Components
import Typography from '../../../../Typography';

// Components
import CodeBlock from '../../components/code-block';
import renderToStringSample from './render-to-string.txt';
import renderToStringPLSample from './render-to-string-prerender-loader.txt';

// Samples

// Class
export default class PrerenderingPage extends Component {
  render() {
    return (
      <div>
        <div className="mdc-typography--body">
          <Typography headline4 tag={'div'}>
            How to do Prerendering?
          </Typography>
          <br />
          <Typography headline5 tag={'div'}>
            Using <span className="code-snippet">preact-cli</span>
          </Typography>
          <Typography body tag={'p'}>
            <Typography subtitle2 tag={'div'}>
              This is the preferred way
            </Typography>
            Using this with <span className="code-snippet">preact-cli</span>{' '}
            works out of the box, refer to{' '}
            <a
              href={'https://github.com/developit/preact-cli#pre-rendering'}
              target={'_blank'}>
              their guide
            </a>.
          </Typography>
          <Typography headline5 tag={'div'}>
            Using other tools
          </Typography>
          To prerender this you should use{' '}
          <span className="code-snippet">render-to-string</span>:
          <CodeBlock>
            <code class="lang-js">{renderToStringSample}</code>
          </CodeBlock>
          and add it to your body.
          <br />
          If you are using something like{' '}
          <span className="code-snippet">prerender-loader</span>
          you can simply do something like this:
          <CodeBlock>
            <code class="lang-js">{renderToStringPLSample}</code>
          </CodeBlock>
        </div>
      </div>
    );
  }
}
