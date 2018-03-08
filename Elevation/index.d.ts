import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

declare interface IElevationProps extends JSX.HTMLAttributes {
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

export default class Elevation extends MaterialComponent<IElevationProps, {}> {}
