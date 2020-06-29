# blossom-ui-lib
A standardised collection of React Components for use in all Blossom/Modular user interfaces

## Installation
Using npm:
```bash
$ npm install @modularnetwork/blossom-ui
```

Using yarn:
```bash
$ yarn add @modularnetwork/blossom-ui
```

## How to use
### Theming
```js
import { ThemeProvider } from 'styled-components';
import theme from '@modularnetwork/blossom-ui/lib/theme';

render(
  <ThemeProvider theme={theme}>
    // ...
  </ThemeProvider>
);
```

### Components
```js
import { Button } from '@modularnetwork/blossom-ui';
// OR
import Button from '@modularnetwork/blossom-ui/lib/Button';

render(
  <Button>Submit</Button>
);
```

### Icons
```js
import IconClose from '@modularnetwork/blossom-ui/lib/icons/Close';

render(
  <IconClose/>
);
```

## Publishing
We follow the [SEMVER](https://semver.org/) for patching the library and NPM private orgs to host this lib.

After your changes and with a solid version to publish:
* Make sure that you are in `development`.
* Commit all your changes.
* Checkout to `master` and merge `development` in.
* Bump the version number in `package.json`.
* Run `npm publish`
