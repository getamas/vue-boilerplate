# Vue Starter

> Architecture and dev environment for new Vue SPA projects using [Vue CLI](https://github.com/vuejs/vue-cli).

## Getting started

```bash
# 1. Clone the repository.
git clone git@github.com:getamas/vue-starter.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies, make sure you are using the correct node version.
npm install

# 4. Launch dev server, compiles and hot reloads for development.
npm run serve
```

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)

Then update the following files to suit your application:

- `src/app/app.config.json` (provides metadata about your app)

## Generators

This project includes generators to speed up common development tasks. Commands include:

```bash
# Generate a new component with adjacent unit test
npm run new component

# Generate a new view component with adjacent unit test
npm run new view

# Generate a new layout component with adjacent unit test
npm run new layout

# Generate a new Vuex module with adjacent unit test
npm run new module
```

Update existing or create new generators in the `generators` folder, with help from the [Hygen docs](http://www.hygen.io/).
