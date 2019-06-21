import {h, Component} from 'preact';

import {Typography} from '@preact-material-components/typography';
import CodeBlock from '../../components/code-block';

import './style.scss';

import tree from './tree.txt';
import evInterface from './ev-interface.txt';

export default class DesignPage extends Component {
  render() {
    return (
      <div>
        <Typography headline4 tag="div">
          Design considerations
        </Typography>
        <br />
        <Typography headline5 tag="div">
          Directory layout
        </Typography>
        <br />
        The directory layout of the individual packages is as follows:
        <CodeBlock>
          <code class="lang-hash">{tree}</code>
        </CodeBlock>
        <br />
        <Typography headline5 tag="div">
          Event handlers
        </Typography>
        <br />
        All Event handlers should conform to this definition:
        <CodeBlock>
          <code class="lang-typescript">{evInterface}</code>
        </CodeBlock>
      </div>
    );
  }
}
