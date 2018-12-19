// Dependencies
import {h} from 'preact';

// Class
export default ({children}) => {
  let child = children && children[0];
  let orgDocUrl = `https://github.com/material-components/material-components-web/tree/master/packages/${child}`;
  return (
    <div className="mdc-typography--display1">
      Original documentation
      <div className="mdc-typography--body">
        This component encapsulates <span className="strong">{child}</span>
        , you can refer to its documentation <a href={orgDocUrl}>here</a>.
      </div>
    </div>
  );
};
