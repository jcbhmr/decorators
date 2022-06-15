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

---

## Todo

- [ ] Make these todos into issues
- [ ] Add `mutable()` (depends on `new MutableRef()`)
- [ ] Add `typeCheck()`
- [ ] Add `matchesSchema()` using JS-object [JSON Schema](https://json-schema.org/)
