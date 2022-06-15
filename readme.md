# Decorators Collection
Collection of decorator functions for everyday use

```js
import decorate from "npm:@jcbhmr/decorators/decorate"
import mutable from "npm:@jcbhmr/decorators/mutable"
import typeCheck from "npm:@jcbhmr/decorators/type-check"

const state = decorate(
    mutable(),
    typeCheck({
        players: Set,
        board: Board,
    }),
)({
    players: new Set(),
    board: new Board(),
    // ...
})
```
