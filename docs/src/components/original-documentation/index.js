// Dependencies
import {h} from 'preact';

// Class
export default ({children, ...props}) => {
  let orgDocUrl = `https://material.io/develop/web/components/${props.link}`;

  return (
    <div>
      <div className="mdc-typography--display1">Original documentation</div>
      <div className="mdc-typography--body">
        This component encapsulates <span className="strong">{children}</span>,
        you can refer to its documentation <a href={orgDocUrl}>here</a>.
      </div>
    </div>
  );
};
