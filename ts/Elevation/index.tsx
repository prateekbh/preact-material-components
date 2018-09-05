import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';

export interface IElevationProps {
  z?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 24;
}

export interface IElevationState {}

const generatedProps: string[] = [];
for (let elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
  generatedProps.push('z' + elevationIndex);
}

export class Elevation extends MaterialComponent<
  IElevationProps,
  IElevationState
> {
  protected componentName = 'elevation';
  protected mdcProps = generatedProps;

  protected materialDom(props) {
    let className;
    if (props.z) {
      className = 'mdc-elevation--z' + props.z;
    }
    return (
      <p className={className} {...props} ref={this.setControlRef}>
        {props.children}
      </p>
    );
  }
}

export default Elevation;
