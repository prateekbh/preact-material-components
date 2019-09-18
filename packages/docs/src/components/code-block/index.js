// Dependencies
import {h} from 'preact';
import cx from 'classnames';
import hljs from 'highlight.js/lib/highlight';
import {Component} from 'preact';

// Languages
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import comment from './comment';

const LANGUAGES = {javascript, typescript, json, xml, scss, comment};
Object.keys(LANGUAGES).forEach(key =>
  hljs.registerLanguage(key, LANGUAGES[key])
);

export default class CodeBlock extends Component {
  render({children, ...props}) {
    const segments = [];

    if (children.type === 'code') {
      const text = children.props.children; //.join('\n');
      const klasses = children.props ? children.props.class || '' : '';
      const langs = klasses
        .split(' ')
        .filter(klass => klass.match(/^lang-[a-z]+$/))
        .map(klass => klass.slice(5));

      const highlighted = hljs.highlightAuto(text, langs.length ? langs : null);
      const hLang = highlighted.language;
      console.log({hLang});
      segments.push(
        <code
          className={`hljs lang-${hLang}`}
          dangerouslySetInnerHTML={{__html: highlighted.value}}
        />
      );
    } else {
      segments.push(child);
    }

    return <pre class={cx('highlight', props.class)}>{segments}</pre>;
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.children !== nextProps.children;
  }
}
