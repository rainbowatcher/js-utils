[Documentation](../README.md) / @rainbowatcher/maybe

# @rainbowatcher/maybe

## Type Aliases

### KeysOf\<T, KeyType\>

> **KeysOf**\<`T`, `KeyType`\>: keyof `{ [K in keyof T as T[K] extends KeyType ? K : never]: T[K] }`

Defined in: [index.ts:32](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L32)

#### Type Parameters

| Type Parameter | Default type |
| -------------- | ------------ |
| `T`            | -            |
| `KeyType`      | `string`     |

#### Example

```ts
type A = {
    age: number
    name: string
}

type B = KeysOf<A> // "name"
type C = KeysOf<A, number> // "age"
```

---

### Maybe\<T\>

> **Maybe**\<`T`\>: `null` \| `T` \| `undefined`

Defined in: [index.ts:6](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L6)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeArray\<T\>

> **MaybeArray**\<`T`\>: `T` \| `T`[]

Defined in: [index.ts:1](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L1)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeBoolean\<T\>

> **MaybeBoolean**\<`T`\>: `boolean` \| `T`

Defined in: [index.ts:10](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L10)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeNull\<T\>

> **MaybeNull**\<`T`\>: `null` \| `T`

Defined in: [index.ts:8](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L8)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeNumber\<T\>

> **MaybeNumber**\<`T`\>: `number` \| `T`

Defined in: [index.ts:14](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L14)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeObject\<T\>

> **MaybeObject**\<`T`\>: `Record`\<`string`, `unknown`\> \| `T`

Defined in: [index.ts:16](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L16)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybePromise\<T\>

> **MaybePromise**\<`T`\>: `Promise`\<`T`\> \| `T`

Defined in: [index.ts:18](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L18)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeString\<T\>

> **MaybeString**\<`T`\>: `string` \| `T`

Defined in: [index.ts:12](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L12)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

---

### MaybeUndefined\<T\>

> **MaybeUndefined**\<`T`\>: `T` \| `undefined`

Defined in: [index.ts:3](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/maybe/src/index.ts#L3)

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |
