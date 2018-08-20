# Changelog

## 1.5.1

- Update to mdc 0.38.0
- New build system with different builds:
  - Package root: Transpiled to support all browsers supported by mwc
  - `esm` directory: For use with newer browsers or in libraries. Can be transpiled.
  - `ts` directory: Source and can be used directly by TypeScript applications. Written in TypeScript.

## 1.4.5

- Fixed typings for `Typography`.

## 1.4.3

- Update to mdc 0.35.0.
- Addded Typography component.
- Changed stroked prop to outlined in Button.
- Changed stroked prop to outlined in Card.
- Added entry chips.
- Fixed TopAppBar docs.
- Fixed Tabs docs.

## 1.4.2

- Update to mdc 0.34.1.
- Select has now moved to native `select` control.
- Textfield has top level `value` method

## 1.4.1

- Bug fixes to chip module.
- Individual components moved to es5.

## 1.4.0

- Updated to mdc 0.33.0.
- Added Image List.
- Added TopAppBar.
- Removes Button's compact prop.

## 1.3.9 & 1.3.8

- Bug fixes

## 1.3.7

- Fix className bug in SSR.
- Added CardActionIcons.
- Added Puppeteer visual diff tests.

## 1.3.6

- Updated to mdc 0.31.0
- New Component: `Chips, Line Ripple`.
- Cards Layout components have been removed e.g. `Primary, SupportingText, Action, Title, SubTitle, HorizontalBlock, MediaItem`.
- Tabs now support `activeTabIndex` as a top level prop.
- Fab now supports `Primary/secondary` as theming props.

## 1.3.5

- Updated to mdc 0.29.0.
- All types of drawers now share same DrawerHeader, DrawerContent.

```
<Drawer.TemporaryDrawer>
  <Drawer.DrawerHeader>Hello Header</Drawer.DrawerHeader>
  <Drawer.DrawerContent>
    <Drawer.DrawerItem>Item1</Drawer.DrawerItem>
    <Drawer.DrawerItem selected={true}>Item2</Drawer.DrawerItem>
  </Drawer.DrawerContent>
</Drawer.TemporaryDrawer>
```

- ListItemIcon has renamed props, `start-detail` => `graphic` and `end-detail` => `meta`.
- Button has `primary`/ `secondary` props for setting the theme color.

---

**P.S.** For all styling props be sure to add mdc.theme.css/ mdc.theme.min.css
