# WORKSHOP ADVANCED WORKFLOW - GULP

An advanced Shopify workflow using Gulp. This is a completely blank theme that gives you a blank canvas to start from. Do not think of this as a starter theme, it is simply a workflow that will allow you to do whatever you want with your front end code.

*Meant to be used with [WorkshopCLI](https://github.com/WorkshopCLI/workshop-cli)*

## Setup Config

- Copy setup.config.yml into a new file called config.yml `cp setup.config.yml config.yml`
- You'll need to set following:
  - password (API password)
  - theme_id
  - store (ex. store-name.myshopify.com)

  More information can be found here: https://shopify.github.io/themekit/commands/#configure

  *This file is for your personal environment variables. Do not share with anyone and do not add to git repository.*

## Create New Theme on Storefront

- New themes need to be uploaded to Shopify via a zip file.
- Run `yarn` to install dependencies
- Run `yarn build` to do your first build (this will give you the /dist folder which is required for the next step)
- Run `yarn zip` to create a folder called workshop-advanced-theme.zip.
- This command can be run with an extra argument for a custom name `yarn zip hello` will create hello.zip.
- Then under themes within the Shopify admin click the Upload theme button and select the zip file you just created

## Development Commands

- `yarn build`: Builds your files from the /src directory
- `yarn clean`: Remove everything from /dist folder
- `yarn deploy`: Builds files from /src directory then deploys them
- `yarn images`: Builds /src/images folder only
- `yarn start`: Builds all /src files, deploys them, opens store front end and watches files for changes
- `yarn static`: Builds /src/static files
- `yarn svg`: Builds /src/svg files
- `yarn watch`: Starts watching for file changes in /src
- `yarn zip`: Creates a Zip file of your theme code in its current state.

## Developing Your Theme

When writing theme code, all code should be contained within the /src folder. Within /src there is a required file structure. Below we will take a look at that structure in detail.

```
src
  -images
  -liquid
    - config
    - layout
    - locales
    - sections
    - snippets
    - templates
  - scripts
    - index.js
    - checkout.js
  - static
  - styles
    - index.scss
    - checkout.scss
  - svg
```

### /src

This is the primary folder that workshop will look at when building your distribution code. Do not add new folders directly in /src. They will not be bundled with the rest of the code. This is because Shopify has a strict file structure and this workflow is built to compile to a Shopify accepted format.

### /src/images

Store all images here and they will be built to /dist/assets. This folder does not currently support subfolders

### /src/liquid

This is where standard Shopify files go. This includes locales and config folder, but excludes assets folder. Assets will be handled elsewhere.

### /src/liquid/config

This folder has the exact same restrictions as Shopify's native config folder.

### /src/liquid/layout

This folder has the exact same restrictions as Shopify's native layout folder.

### /src/liquid/locales

This folder has the exact same restrictions as Shopify's native locales folder.


### /src/liquid/sections

Unlike Shopify's native sections folder, this folder allows the use of sub-folders. This will allow you to better organize your code as it grows. A word of caution: make sure ALL files have unique names (whether they're in folders or not). On build, your subfolders will be "flattened" meaning the folders will be removed when being transferred to /dist. So files with the same name will be overridden. It is advised that files within subfolders be prefixed with the subfolder name to help with naming. See the following example:

```
- src
  - sections
    - hello.liquid
    - goodbye.liquid
    - header
      - header-hello.liquid
      - header-foo.liquid
```

### /src/liquid/snippets

Unlike Shopify's native snippets folder, this folder allows the use of sub-folders. This will allow you to better organize your code as it grows. A word of caution: make sure ALL files have unique names (whether they're in folders or not). On build, your subfolders will be "flattened" meaning the folders will be removed when being transferred to /dist. So files with the same name will be overridden. It is advised that files within subfolders be prefixed with the subfolder name to help with naming. See the following example:

```
- src
  - snippets
    - hello.liquid
    - goodbye.liquid
    - header
      - header-hello.liquid
      - header-foo.liquid
```

### /src/liquid/templates

This folder has the exact same restrictions as Shopify's native config folder.

### /src/scripts

All custom JavaScript should be written in this folder. For theme code, import into `theme.js`. For checkout code (if working in a Shopify Plus store), import into `checkout.js`. Use of import/export (ES Modules) syntax is available. During the "scripts" task there will be 4 files generated and added to /dist/assets: `theme.js`, `theme.js.map`, `checkout.js` and `checkout.js.map`.

### /src/styles

All custom CSS should be written in this folder. This workflow uses SCSS as it's CSS preprocessor. For theme code, import into `theme.scss` and for checkout code (if working in Shopify Plus store) import into `checkout.scss`. During "styles"" task there will be 2 files generated: `theme.css` and `checkout.css`.

### /src/svg

Add SVGs to this file if you plan to use them in your liquid. When the "svg" task runs it will convert the files from this folder into liquid files, prepend "svg-" to the beginning of the name and build them to /dist/snippets. For SVGs that will not be used in liquid, add them to /src/images.

## Custom Configuration

The workflow can be customized by editing build.config.js.

### shopifyPlus

{Boolean} - Default: false - Determines if workflow should build for Shopify Plus storefronts. Basically this determines if checkout.liquid, checkout.scss and checkout.js should go through the build process

### babel

{Boolean} - Default: true - Determins if workflow should transpile code with Babel.
