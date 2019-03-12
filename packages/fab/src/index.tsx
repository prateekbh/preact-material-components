import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {generateThemeClass} from '@preact-material-components/base';
import {h} from 'preact';

export * from './icon';
export * from './label';

export interface IFabProps {
  ripple?: boolean;
  mini?: boolean;
  exited?: boolean;
  extended?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export interface IFabState {}

export class Fab extends MaterialComponent<IFabProps, IFabState> {
  protected componentName = 'fab';
  protected mdcProps = ['mini', 'exited'];
  protected themeProps = ['primary', 'extended', 'secondary'];

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
