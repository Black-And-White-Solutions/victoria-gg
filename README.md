# Setting Up

## Install tools.

Even if not mandatory, is recommended to have installed in your preferred editor the next tools:
- [Prettier](https://prettier.io/docs/en/editors.html)
- [StyleLint](https://stylelint.io/user-guide/integrations/editor)
- [ESLint](https://eslint.org/docs/user-guide/integrations)

## Installing dependencies

To install the project dependencies, just run the following command:

```bash
$ npm install
```

## Hooks

Actually the repository has the next commits running on it.
### Client-side
- Pre-commit hook
  ```bash
    npx prettier --write
    npx stylelint --fix --syntax \"ccs-in-js\"
    npx eslint --fix
  ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
