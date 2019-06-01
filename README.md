# Advanced Bootstrap Blocks

This plugin allows you to build flexible, no-mess Bootstrap 4 layouts inside the Gutenberg editor. 

The following components are currently supported: 

 * Container
 * Row
 * Column

Bootstrap styles are included in the Gutenberg editor but need to be included in your theme (at least the bootstrap grid) for these blocks to appear correctly on your public-facing website. 

After enabling this plugin, a `Reusable Blocks` menu item will be available in Wordpress admin menu.

This plugin was developed and tested using [Understrap](https://understrap.com/). Please issues, feature-, and pull-requests through [https://gitlab.com/helpful.dev/advanced-bootstrap-blocks](https://gitlab.com/helpful.dev/advanced-bootstrap-blocks).

---

## Plugin Development

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.