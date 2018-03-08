import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';

export default class Icon<
  PropsType = {},
  StateType = {}
> extends MaterialComponent<PropsType & JSX.HTMLAttributes, StateType> {}
