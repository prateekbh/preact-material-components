export * from './MaterialComponent';

export function generateThemeClass(prop: string) {
  return `mdc-theme--${prop}-bg`;
}
