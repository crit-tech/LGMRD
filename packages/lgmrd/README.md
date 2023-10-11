# The Lazy GM's Resource Document

This is the [Lazy GM's Resource Document](https://slyflourish.com/lazy_gm_resource_document.html) as a JavaScript package (both ESM and CommonJS supported).

LGMRD is officially pronounced "Lymm Grid" and [LGMMBRD](https://www.npmjs.com/package/@crit-tech/lgmmbrd) "Lymm Bard".

## Usage

### ESM

```js
import lgmrd from "@crit-tech/lgmrd";

console.log(lgmrd);
```

Or, you may want to import it asynchronously so it's not part of your main bundle:

```js
import("@crit-tech/lgmrd").then((lgmrd) => {
  console.log(lgmrd);
});
```

### CommonJS

```js
const lgmrd = require("@crit-tech/lgmrd");

console.log(lgmrd);
```

## Attribution

This work includes material taken from The Lazy GM's Resource Document by Michael E. Shea of [SlyFlourish.com](https://www.slyflourish.com) and vailable at https://slyflourish.com/lazy_gm_resource_document.html. The Lazy GM's Resource Document is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode.

This work includes material taken from the System Reference Document 5.1 ("SRD 5.1") by Wizards of the Coast LLC and available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode.
