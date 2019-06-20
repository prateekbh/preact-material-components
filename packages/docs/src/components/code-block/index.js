// Dependencies
import {h} from 'preact';
import cx from 'classnames';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';

const LANGUAGES = {javascript, typescript, json, xml, scss};
Object.keys(LANGUAGES).forEach(key =>
  hljs.registerLanguage(key, LANGUAGES[key])
);

// Class
export default ({children, ...props}) => {
  const segments = [];
  for (const child of children) {
    if (child.nodeName === 'code') {
      const text = child.children.join('\n');
      const klasses = child.attributes.class || '';
      const langs = klasses
        .split(' ')
        .filter(klass => klass.match(/^lang-[a-z]+$/))
        .map(klass => klass.slice(5));

      const highlighted = hljs.highlightAuto(text, langs.length ? langs : null);
      const hLang = highlighted.language;

      segments.push(
        <code
          className={`hljs lang-${hLang}`}
          dangerouslySetInnerHTML={{__html: highlighted.value}}
        />
      );
    } else {
      segments.push(child);
    }
  }
  return <pre class={cx('highlight', props.class)}>{segments}</pre>;
};
