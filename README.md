# eslint-config-ns-ts

[![npm version](https://badge.fury.io/js/eslint-config-ns-ts.svg)](https://badge.fury.io/js/eslint-config-ns-ts)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns-ts.svg)](https://github.com/natterstefan/eslint-config-ns-ts/blob/master/LICENCE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Lint your typescript projects with ease, based on the popular [javascript
code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and
enhanced with typescript specific rules. This config extends my other config
[eslint-config-ns][1].

## Features

- based on my [javascript code style eslint-config-ns][1]
  and the [typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json)
  settings
- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html)
  and [jest](https://jestjs.io/) support

## Installation

The default export contains default Airbnb ESLint rules, and some additional
rules (see [assumptions](#assumptions)). It requires some peerDependencies as
well.

Install the package with

```sh
npm install eslint-config-ns-ts --save-dev

# or
yarn add eslint-config-ns-ts -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-ns-ts@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-ns-ts

# or
yarn add eslint-config-ns-ts -D --peer
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns-ts"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-ns-ts"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-ns-ts',
}
```

## Assumptions

This ESLint configuration comes with the same fundamental assumptions, as
[eslint-config-ns](https://github.com/natterstefan/eslint-config-ns#assumptions).

## Versioning

This package DOES NOT use [SemVer](https://semver.org/) for versioning. Though
you can think about SemVer when reading the version, except the major and minor
version follows the one of `eslint-config-ns`. For the versions available, see
the tags on [this repository](https://github.com/natterstefan/eslint-config-ns/releases).

## LICENCE

[MIT](LICENCE)

## Maintainers

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/natterstefan">
          <img width="150" height="150" src="https://github.com/natterstefan.png?v=3&s=150">
          </br>
          Stefan Natter
        </a>
        <div>
          <a href="https://twitter.com/natterstefan">
            <img src="https://img.shields.io/twitter/follow/natterstefan.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

[1]: https://github.com/natterstefan/eslint-config-ns
