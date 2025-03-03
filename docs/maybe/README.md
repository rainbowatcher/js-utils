[Documentation](../README.md) / @rainbowatcher/maybe

# @rainbowatcher/maybe

## Type Aliases

### KeysOf\<T, KeyType\>

> **KeysOf**\<`T`, `KeyType`\>: keyof `{ [K in keyof T as T[K] extends KeyType ? K : never]: T[K] }`

Defined in: [index.ts:32](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L32)

#### Type Parameters

• **T**

• **KeyType** = `string`

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

Defined in: [index.ts:6](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L6)

#### Type Parameters

• **T**

---

### MaybeArray\<T\>

> **MaybeArray**\<`T`\>: `T` \| `T`[]

Defined in: [index.ts:1](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L1)

#### Type Parameters

• **T**

---

### MaybeBoolean\<T\>

> **MaybeBoolean**\<`T`\>: `boolean` \| `T`

Defined in: [index.ts:10](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L10)

#### Type Parameters

• **T**

---

### MaybeNull\<T\>

> **MaybeNull**\<`T`\>: `null` \| `T`

Defined in: [index.ts:8](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L8)

#### Type Parameters

• **T**

---

### MaybeNumber\<T\>

> **MaybeNumber**\<`T`\>: `number` \| `T`

Defined in: [index.ts:14](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L14)

#### Type Parameters

• **T**

---

### MaybeObject\<T\>

> **MaybeObject**\<`T`\>: `Record`\<`string`, `unknown`\> \| `T`

Defined in: [index.ts:16](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L16)

#### Type Parameters

• **T**

---

### MaybePromise\<T\>

> **MaybePromise**\<`T`\>: `Promise`\<`T`\> \| `T`

Defined in: [index.ts:18](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L18)

#### Type Parameters

• **T**

---

### MaybeString\<T\>

> **MaybeString**\<`T`\>: `string` \| `T`

Defined in: [index.ts:12](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L12)

#### Type Parameters

• **T**

---

### MaybeUndefined\<T\>

> **MaybeUndefined**\<`T`\>: `T` \| `undefined`

Defined in: [index.ts:3](https://github.com/rainbowatcher/js-utils/blob/68384686cd8847044b7e3911b28a2c08c926d445/packages/maybe/src/index.ts#L3)

#### Type Parameters

• **T**
