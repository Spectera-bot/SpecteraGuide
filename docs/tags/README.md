# Tags
This is the official documentation for [@spectera/tag-parser](https://npmjs.com/package/@spectera/tag-parser).

## Introduction
The tag parser was made to get the best out of slash command tags, which is a fairly new concept compared to message tags.
This parser was initially made for [Tagger](https://github.com/SpecteraLabs/Tagger) and can be used by anyone
:::tip
Tagger was made to replace Spectera's vulnurable tag system.
:::

## Installation
:::: code-group
::: code-group-item npm
```zsh
npm install @spectera/tag-parser
```
:::
::: code-group-item yarn
```zsh
yarn add @spectera/tag-parser
```
:::
::: code-group-item pnpm
```zsh
pnpm add @spectera/tag-parser
```
:::
::::
:::tip
@spectera/tag-parser is framework agnostic, which means you can use it with any js framework you want.
:::

## Getting Started
:::: code-group
::: code-group-item JavaScript
```js
const { TagParser } = require('@spectera/tag-parser');

const tagparser = new TagParser();
```
:::
::: code-group-item ESM
```js
import { TagParser } from '@spectera/tag-parser';

const tagparser = new TagParser();
```
:::
:::	code-group-item TypeScript
```ts
import { TagParser } from '@spectera/tag-parser';

const tagparser = new TagParser();
```
:::
::::