import MaterialComponent from '../MaterialComponent';
import {VNode} from 'preact';
import {MDCFoundation, MDCComponent} from '../MaterialComponentsWeb';

declare interface ILinearProgressProps extends JSX.HTMLAttributes {
  indeterminate?: boolean;
  reversed?: boolean;
  progress?: number;
}
export default class LinearProgress extends MaterialComponent<
  ILinearProgressProps,
  {}
> {
  MDComponent: MDCLinearProgress;
}

declare class MDCLinearProgressFoundation extends MDCFoundation<
  MDCLinearProgress
> {
  setDeterminate(isDeterminate: boolean): void;
  setProgress(value: number): void;
  setBuffer(value: number): void;
  setReverse(isReversed: boolean): void;
  open(): void;
  close(): void;
}
declare class MDCLinearProgress extends MDCComponent<
  MDCLinearProgressFoundation
> {
  determinate: boolean;
  progress: number;
  buffer: number;
  reverse: boolean;
  open(): void;
  close(): void;
}
