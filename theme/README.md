# WORKSHOP ADVANCED WORKFLOW - GULP

An advanced Shopify workflow using Gulp. This is a completely blank theme that gives you a blank canvas to start from. Do not think of this as a starter theme, it is simply a workflow that will allow you to do whatever you want with your front end code.

*Meant to be used with [WorkshopCLI](https://github.com/WorkshopCLI/workshop-cli)*

## Setup Env

- Copy example.env into a new file called .env `cp ./example.env ./.envl`
- You'll need to set following:
  - PASSWORD (API password)
  - THEME_ID
  - STORE (ex. store-name.myshopify.com)

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
- `yarn zip`: Creates a Zip file of your theme code in its current state.

## Developing Your Theme

When writing theme code, all code should be contained within the /src folder. Within /src there is a required file structure. Below we will take a look at that structure in detail.

```
src
  - config
  - layout
  - locales
  - scripts
    - index.js
  - sections
  - snippets
  - styles
    - index.scss
  - templates
```

### /src

This is the primary folder that workshop will look at when building your distribution code. Do not add new folders directly in /src. They will not be bundled with the rest of the code. This is because Shopify has a strict file structure and this workflow is built to compile to a Shopify accepted format.

### /src/config

This folder has the exact same restrictions as Shopify's native config folder.

### /src/layout

This folder has the exact same restrictions as Shopify's native layout folder.

### /src/locales

This folder has the exact same restrictions as Shopify's native locales folder.

### /src/scripts

All custom JavaScript should be written in this folder and imported into **index.js** (the primary entry point). During the build process the files within this folder will be transpiled and concatenated into 2 files (theme.js and theme.js.map) which will be added to /dist/assets. Use of import/export (ES Modules) syntax available.

### /src/sections

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

### /src/snippets

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

### /src/styles

More information to come

### /src/templates

This folder has the exact same restrictions as Shopify's native config folder.