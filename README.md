[![npm](https://img.shields.io/npm/l/@y7k/component-button-bar.svg)](https://www.npmjs.com/package/@y7k/component-button-bar) [![npm](https://img.shields.io/npm/v/@y7k/component-button-bar.svg)](https://www.npmjs.com/package/@y7k/component-button-bar)

# Y7K Component: Button Bar

The Button Bar is a group of buttons that belong to each other and only one of them can be selected. If you select a button, it will emit a event to its parent Vue component. 

It is based on [Vue 2](https://vuejs.org), [MaintainableCSS](https://maintainablecss.com/) and the [Y7K Style Plate](https://github.com/y7k/style). Detailed information in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/lists/filterable-list/index-filterable-list).


![Component](img-component.png)


## Installation

##### Install npm package
```bash
npm install @y7k/component-button-bar --save
```

##### Include in your project
```js
import buttonBar from '@y7k/component-button-bar';
```

##### Variant 1: Register components globally:
```js
import buttonBar from '@y7k/component-button-bar';
buttonBar.registerGlobally();
```
 
##### Variant 2: Use components directly:
```js
import { ButtonBar } from '@y7k/component-button-bar';

// Vue component example
export default {

    components: {
        ButtonBar,
    },
}
```

##### Include styles
In your main.scss file
```scss
@import '@y7k/filterable-list/src/scss/buttonBar';

// If you don't set "node_modules" as a webpack include path:
@import '../[path]/../node_modules/@y7k/component-button-bar/src/scss/buttonBar';
```


## Documentation
Please have a look at the usage documentation in the [Y7K Showroom](https://showroom.y7k.tools/showroom/pages/components/ui-elements/button-bar/index-button-bar).
