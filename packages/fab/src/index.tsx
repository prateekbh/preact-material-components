import {MaterialComponent} from '@preact-material/base/lib/MaterialComponent';
import {generateThemeClass} from '@preact-material/base';
import {h} from 'preact';

export interface IFabProps {
  ripple?: boolean;
  mini?: boolean;
  exited?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface IFabState {}

export class Fab extends MaterialComponent<IFabProps, IFabState> {
  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];
  protected themeProps = ['primary', 'secondary'];

  protected materialDom(props) {
    const classNames: string[] = [];
    this.themeProps.forEach(themeProp => {
      if (themeProp in props && props[themeProp] !== false) {
        classNames.push(generateThemeClass(themeProp));
      }
    });

    return (
      <button
        ref={this.setControlRef}
        {...props}
        className={classNames.join(' ')}>
        {props.children}
      </button>
    );
  }
}
