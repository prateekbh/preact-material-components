# preact-material-components

[![Greenkeeper badge](https://badges.greenkeeper.io/prateekbh/preact-material-components.svg)](https://greenkeeper.io/)
[![Dependencies badge](https://david-dm.org/prateekbh/preact-material-components.svg)](https://david-dm.org/)
[![build](https://api.travis-ci.org/prateekbh/preact-material-components.svg?branch=master)](https://api.travis-ci.org/prateekbh/preact-material-components.svg?branch=master)

preact components for [material-components-web](https://github.com/material-components/material-components-web)

---

These components bring material components in an a-la-carté fashion.
You can use `n` number of components without taking the weight of any extra code of the components you do not use.

`preact-material-components` is a thin opinion-less wrapper over [material-components-web](https://github.com/material-components/material-components-web/tree/master/packages). Use these for painless integration of these components into your project, without taking the bloat.

Smaller bundles FTW!!!

## Components List

* 👍 button

* 👍 card

* 👍 chips

* 👍 checkbox

* 👍 dialog

* 👍 drawer

* 👍 elevation

* 👍 fab

* 👍 form-field

* 👍 icon-toggle

* 👍 layout-grid

* 👍 line-ripple

* 👍 linear-progress

* 👍 list

* 👍 menu

* 👍 radio

* 👍 select

* 👍 slider

* 👍 snackbar

* 👍 switch

* 👍 tabs

* 👍 textfield

* 👍 theme

* 👍 toolbar

## FAQ

### Error while using preact-material-components with **less**

If you are using less-loader you have to set **strictMath: true** option in your webpack config

```
{
	loader: 'less-loader',
	options: { strictMath: true }
}
```

### Primary and Secondary props not working

To use theming props like primary/secondary, you'll need to include Theme's css

```
import 'preact-material-components/Theme/style.css
```

## Docs and Demos

https://material.preactjs.com/

---

**P.S.:** Let us know if you're using `preact-material-components` we would love to hear your experiences.
