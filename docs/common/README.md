[Documentation](../README.md) / @rainbowatcher/common

# @rainbowatcher/common

## Namespaces

- [Collections](namespaces/Collections.md)
- [Strings](namespaces/Strings.md)

## Type Aliases

### ArrayLike\<T\>

> **ArrayLike**\<`T`\>: `object`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:36

#### Type Parameters

• **T**

#### Type declaration

#### Index Signature

\[`index`: `number`\]: `T`

##### length

> `readonly` **length**: `number`

---

### AssertionTypeDescription

> **AssertionTypeDescription**: _typeof_ `assertionTypeDescriptions`\[`number`\]

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:10

---

### Class\<T, Arguments\>

> **Class**\<`T`, `Arguments`\>: `Constructor`\<`T`, `Arguments`\> & `object`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:12

Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

#### Type declaration

##### prototype

> **prototype**: `T`

#### Type Parameters

• **T**

• **Arguments** _extends_ `unknown`[] = `any`[]

---

### NodeStream

> **NodeStream**: `object` & `NodeJS.EventEmitter`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:40

#### Type declaration

##### pipe()

###### Type Parameters

• **T** _extends_ `WritableStream`

###### Parameters

###### destination

`T`

###### options?

###### end?

`boolean`

###### Returns

`T`

---

### ObservableLike

> **ObservableLike**: `object`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:27

Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).

#### Type declaration

##### \[observable\]()

###### Returns

[`ObservableLike`](README.md#observablelike)

##### subscribe()

###### Parameters

###### observer

(`value`) => `void`

###### Returns

`void`

---

### Predicate()

> **Predicate**: (`value`) => `boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:45

#### Parameters

##### value

`unknown`

#### Returns

`boolean`

---

### Primitive

> **Primitive**: `null` \| `undefined` \| `string` \| `number` \| `boolean` \| `symbol` \| `bigint`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:4

Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

---

### TypedArray

> **TypedArray**: `Int8Array` \| `Uint8Array` \| `Uint8ClampedArray` \| `Int16Array` \| `Uint16Array` \| `Int32Array` \| `Uint32Array` \| `Float32Array` \| `Float64Array` \| `BigInt64Array` \| `BigUint64Array`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/types.d.ts:18

Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.

---

### TypeName

> **TypeName**: `ObjectTypeName` \| `PrimitiveTypeName`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:8

## Variables

### assert

> `const` **assert**: `Assert`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:292

## Functions

### assertAll()

> **assertAll**(`predicate`, ...`values`): `void`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:293

#### Parameters

##### predicate

[`Predicate`](README.md#predicate)

##### values

...`unknown`[]

#### Returns

`void`

---

### assertAny()

> **assertAny**(`predicate`, ...`values`): `void`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:294

#### Parameters

##### predicate

[`Predicate`](README.md#predicate) | [`Predicate`](README.md#predicate)[]

##### values

...`unknown`[]

#### Returns

`void`

---

### assertArray()

> **assertArray**\<`T`\>(`value`, `assertion`?, `message`?): `asserts value is T[]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:295

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### assertion?

(`element`, `message`?) => `asserts element is T`

##### message?

`string`

#### Returns

`asserts value is T[]`

---

### assertArrayBuffer()

> **assertArrayBuffer**(`value`, `message`?): `asserts value is ArrayBuffer`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:296

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is ArrayBuffer`

---

### assertArrayLike()

> **assertArrayLike**\<`T`\>(`value`, `message`?): `asserts value is ArrayLike<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:297

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is ArrayLike<T>`

---

### assertAsyncFunction()

> **assertAsyncFunction**(`value`, `message`?): `asserts value is Function`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:298

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Function`

---

### assertAsyncGenerator()

> **assertAsyncGenerator**(`value`, `message`?): `asserts value is AsyncGenerator<unknown, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:299

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is AsyncGenerator<unknown, any, any>`

---

### assertAsyncGeneratorFunction()

> **assertAsyncGeneratorFunction**(`value`, `message`?): `asserts value is AsyncGeneratorFunction`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:300

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is AsyncGeneratorFunction`

---

### assertAsyncIterable()

> **assertAsyncIterable**\<`T`\>(`value`, `message`?): `asserts value is AsyncIterable<T, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:301

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is AsyncIterable<T, any, any>`

---

### assertBigint()

> **assertBigint**(`value`, `message`?): `asserts value is bigint`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:302

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is bigint`

---

### assertBigInt64Array()

> **assertBigInt64Array**(`value`, `message`?): `asserts value is BigInt64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:303

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is BigInt64Array<ArrayBufferLike>`

---

### assertBigUint64Array()

> **assertBigUint64Array**(`value`, `message`?): `asserts value is BigUint64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:304

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is BigUint64Array<ArrayBufferLike>`

---

### assertBlob()

> **assertBlob**(`value`, `message`?): `asserts value is Blob`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:305

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Blob`

---

### assertBoolean()

> **assertBoolean**(`value`, `message`?): `asserts value is boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:306

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is boolean`

---

### assertBoundFunction()

> **assertBoundFunction**(`value`, `message`?): `asserts value is Function`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:307

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Function`

---

### assertBuffer()

> **assertBuffer**(`value`, `message`?): `asserts value is Buffer<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:311

Note: [Prefer using `Uint8Array` instead of `Buffer`.](https://sindresorhus.com/blog/goodbye-nodejs-buffer)

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Buffer<ArrayBufferLike>`

---

### assertClass()

> **assertClass**\<`T`\>(`value`, `message`?): `asserts value is Class<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:312

#### Type Parameters

• **T**

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Class<T>`

---

### assertDataView()

> **assertDataView**(`value`, `message`?): `asserts value is DataView<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:313

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is DataView<ArrayBufferLike>`

---

### assertDate()

> **assertDate**(`value`, `message`?): `asserts value is Date`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:314

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Date`

---

### assertDirectInstanceOf()

> **assertDirectInstanceOf**\<`T`\>(`instance`, `class_`, `message`?): `asserts instance is T`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:315

#### Type Parameters

• **T**

#### Parameters

##### instance

`unknown`

##### class\_

[`Class`](README.md#classt-arguments)\<`T`\>

##### message?

`string`

#### Returns

`asserts instance is T`

---

### assertEmptyArray()

> **assertEmptyArray**(`value`, `message`?): `asserts value is never[]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:316

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is never[]`

---

### assertEmptyMap()

> **assertEmptyMap**(`value`, `message`?): `asserts value is Map<never, never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:317

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Map<never, never>`

---

### assertEmptyObject()

> **assertEmptyObject**\<`Key`\>(`value`, `message`?): `asserts value is Record<Key, never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:318

#### Type Parameters

• **Key** _extends_ `string` \| `number` \| `symbol` = `string`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Record<Key, never>`

---

### assertEmptySet()

> **assertEmptySet**(`value`, `message`?): `asserts value is Set<never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:319

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Set<never>`

---

### assertEmptyString()

> **assertEmptyString**(`value`, `message`?): `asserts value is ""`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:320

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is ""`

---

### assertEmptyStringOrWhitespace()

> **assertEmptyStringOrWhitespace**(`value`, `message`?): asserts value is "" \| " "

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:321

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

asserts value is "" \| " "

---

### assertEnumCase()

> **assertEnumCase**\<`T`\>(`value`, `targetEnum`, `message`?): `asserts value is T[keyof T]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:322

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### targetEnum

`T`

##### message?

`string`

#### Returns

`asserts value is T[keyof T]`

---

### assertError()

> **assertError**(`value`, `message`?): `asserts value is Error`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:323

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Error`

---

### assertEvenInteger()

> **assertEvenInteger**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:324

#### Parameters

##### value

`number`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertFalsy()

> **assertFalsy**(`value`, `message`?): `asserts value is Falsy`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:325

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Falsy`

---

### assertFloat32Array()

> **assertFloat32Array**(`value`, `message`?): `asserts value is Float32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:326

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Float32Array<ArrayBufferLike>`

---

### assertFloat64Array()

> **assertFloat64Array**(`value`, `message`?): `asserts value is Float64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:327

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Float64Array<ArrayBufferLike>`

---

### assertFormData()

> **assertFormData**(`value`, `message`?): `asserts value is FormData`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:328

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is FormData`

---

### assertFunction()

> **assertFunction**(`value`, `message`?): `asserts value is Function`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:329

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Function`

---

### assertGenerator()

> **assertGenerator**(`value`, `message`?): `asserts value is Generator<unknown, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:330

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Generator<unknown, any, any>`

---

### assertGeneratorFunction()

> **assertGeneratorFunction**(`value`, `message`?): `asserts value is GeneratorFunction`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:331

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is GeneratorFunction`

---

### assertHtmlElement()

> **assertHtmlElement**(`value`, `message`?): `asserts value is HTMLElement`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:332

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is HTMLElement`

---

### assertInfinite()

> **assertInfinite**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:333

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertInRange()

> **assertInRange**(`value`, `range`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:334

#### Parameters

##### value

`number`

##### range

`number` | \[`number`, `number`\]

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertInt16Array()

> **assertInt16Array**(`value`, `message`?): `asserts value is Int16Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:335

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Int16Array<ArrayBufferLike>`

---

### assertInt32Array()

> **assertInt32Array**(`value`, `message`?): `asserts value is Int32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:336

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Int32Array<ArrayBufferLike>`

---

### assertInt8Array()

> **assertInt8Array**(`value`, `message`?): `asserts value is Int8Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:337

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Int8Array<ArrayBufferLike>`

---

### assertInteger()

> **assertInteger**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:338

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertIterable()

> **assertIterable**\<`T`\>(`value`, `message`?): `asserts value is Iterable<T, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:339

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Iterable<T, any, any>`

---

### assertMap()

> **assertMap**\<`Key`, `Value`\>(`value`, `message`?): `asserts value is Map<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:340

#### Type Parameters

• **Key** = `unknown`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Map<Key, Value>`

---

### assertNan()

> **assertNan**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:341

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertNativePromise()

> **assertNativePromise**\<`T`\>(`value`, `message`?): `asserts value is Promise<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:342

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Promise<T>`

---

### assertNegativeNumber()

> **assertNegativeNumber**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:343

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertNodeStream()

> **assertNodeStream**(`value`, `message`?): `asserts value is NodeStream`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:344

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is NodeStream`

---

### assertNonEmptyArray()

> **assertNonEmptyArray**\<`T`, `Item`\>(`value`, `message`?): `asserts value is [Item, ...Item[]]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:345

#### Type Parameters

• **T** = `unknown`

• **Item** = `unknown`

#### Parameters

##### value

`T` | `Item`[]

##### message?

`string`

#### Returns

`asserts value is [Item, ...Item[]]`

---

### assertNonEmptyMap()

> **assertNonEmptyMap**\<`Key`, `Value`\>(`value`, `message`?): `asserts value is Map<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:346

#### Type Parameters

• **Key** = `unknown`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Map<Key, Value>`

---

### assertNonEmptyObject()

> **assertNonEmptyObject**\<`Key`, `Value`\>(`value`, `message`?): `asserts value is Record<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:347

#### Type Parameters

• **Key** _extends_ `string` \| `number` \| `symbol` = `string`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Record<Key, Value>`

---

### assertNonEmptySet()

> **assertNonEmptySet**\<`T`\>(`value`, `message`?): `asserts value is Set<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:348

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Set<T>`

---

### assertNonEmptyString()

> **assertNonEmptyString**(`value`, `message`?): `asserts value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:349

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is string`

---

### assertNonEmptyStringAndNotWhitespace()

> **assertNonEmptyStringAndNotWhitespace**(`value`, `message`?): `asserts value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:350

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is string`

---

### assertNull()

> **assertNull**(`value`, `message`?): `asserts value is null`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:351

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is null`

---

### assertNullOrUndefined()

> **assertNullOrUndefined**(`value`, `message`?): asserts value is undefined \| null

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:352

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

asserts value is undefined \| null

---

### assertNumber()

> **assertNumber**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:353

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertNumericString()

> **assertNumericString**(`value`, `message`?): `` asserts value is `${number}` ``

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:354

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`` asserts value is `${number}` ``

---

### assertObject()

> **assertObject**(`value`, `message`?): `asserts value is object`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:355

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is object`

---

### assertObservable()

> **assertObservable**(`value`, `message`?): `asserts value is ObservableLike`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:356

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is ObservableLike`

---

### assertOddInteger()

> **assertOddInteger**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:357

#### Parameters

##### value

`number`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertPlainObject()

> **assertPlainObject**\<`Value`\>(`value`, `message`?): `asserts value is Record<PropertyKey, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:358

#### Type Parameters

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Record<PropertyKey, Value>`

---

### assertPositiveNumber()

> **assertPositiveNumber**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:359

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertPrimitive()

> **assertPrimitive**(`value`, `message`?): `asserts value is Primitive`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:360

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Primitive`

---

### assertPromise()

> **assertPromise**\<`T`\>(`value`, `message`?): `asserts value is Promise<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:361

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Promise<T>`

---

### assertPropertyKey()

> **assertPropertyKey**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:362

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertRegExp()

> **assertRegExp**(`value`, `message`?): `asserts value is RegExp`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:363

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is RegExp`

---

### assertSafeInteger()

> **assertSafeInteger**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:364

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertSet()

> **assertSet**\<`T`\>(`value`, `message`?): `asserts value is Set<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:365

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Set<T>`

---

### assertSharedArrayBuffer()

> **assertSharedArrayBuffer**(`value`, `message`?): `asserts value is SharedArrayBuffer`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:366

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is SharedArrayBuffer`

---

### assertString()

> **assertString**(`value`, `message`?): `asserts value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:367

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is string`

---

### assertSymbol()

> **assertSymbol**(`value`, `message`?): `asserts value is symbol`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:368

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is symbol`

---

### assertTruthy()

> **assertTruthy**\<`T`\>(`value`, `message`?): `asserts value is T`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:369

#### Type Parameters

• **T**

#### Parameters

##### value

`Falsy` | `T`

##### message?

`string`

#### Returns

`asserts value is T`

---

### assertTupleLike()

> **assertTupleLike**\<`T`\>(`value`, `guards`, `message`?): `asserts value is ResolveTypesOfTypeGuardsTuple<T, []>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:370

#### Type Parameters

• **T** _extends_ `TypeGuard`\<`unknown`\>[]

#### Parameters

##### value

`unknown`

##### guards

\[`...T[]`\]

##### message?

`string`

#### Returns

`asserts value is ResolveTypesOfTypeGuardsTuple<T, []>`

---

### assertTypedArray()

> **assertTypedArray**(`value`, `message`?): `asserts value is TypedArray`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:371

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is TypedArray`

---

### assertUint16Array()

> **assertUint16Array**(`value`, `message`?): `asserts value is Uint16Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:372

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Uint16Array<ArrayBufferLike>`

---

### assertUint32Array()

> **assertUint32Array**(`value`, `message`?): `asserts value is Uint32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:373

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Uint32Array<ArrayBufferLike>`

---

### assertUint8Array()

> **assertUint8Array**(`value`, `message`?): `asserts value is Uint8Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:374

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Uint8Array<ArrayBufferLike>`

---

### assertUint8ClampedArray()

> **assertUint8ClampedArray**(`value`, `message`?): `asserts value is Uint8ClampedArray<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:375

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Uint8ClampedArray<ArrayBufferLike>`

---

### assertUndefined()

> **assertUndefined**(`value`, `message`?): `asserts value is undefined`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:376

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is undefined`

---

### assertUrlInstance()

> **assertUrlInstance**(`value`, `message`?): `asserts value is URL`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:377

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is URL`

---

### assertUrlSearchParams()

> **assertUrlSearchParams**(`value`, `message`?): `asserts value is URLSearchParams`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:378

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is URLSearchParams`

---

### assertUrlString()

> **assertUrlString**(`value`, `message`?): `asserts value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:379

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is string`

---

### assertValidDate()

> **assertValidDate**(`value`, `message`?): `asserts value is Date`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:380

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is Date`

---

### assertValidLength()

> **assertValidLength**(`value`, `message`?): `asserts value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:381

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is number`

---

### assertWeakMap()

> **assertWeakMap**\<`Key`, `Value`\>(`value`, `message`?): `asserts value is WeakMap<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:382

#### Type Parameters

• **Key** _extends_ `object` = `object`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is WeakMap<Key, Value>`

---

### assertWeakRef()

> **assertWeakRef**\<`T`\>(`value`, `message`?): `asserts value is WeakRef<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:383

#### Type Parameters

• **T** _extends_ `object` = `object`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is WeakRef<T>`

---

### assertWeakSet()

> **assertWeakSet**\<`T`\>(`value`, `message`?): `asserts value is WeakSet<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:384

#### Type Parameters

• **T** _extends_ `object` = `object`

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is WeakSet<T>`

---

### assertWhitespaceString()

> **assertWhitespaceString**(`value`, `message`?): `asserts value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:385

#### Parameters

##### value

`unknown`

##### message?

`string`

#### Returns

`asserts value is string`

---

### isAll()

> **isAll**(`predicate`, ...`values`): `boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:105

#### Parameters

##### predicate

[`Predicate`](README.md#predicate)

##### values

...`unknown`[]

#### Returns

`boolean`

---

### isAny()

> **isAny**(`predicate`, ...`values`): `boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:106

#### Parameters

##### predicate

[`Predicate`](README.md#predicate) | [`Predicate`](README.md#predicate)[]

##### values

...`unknown`[]

#### Returns

`boolean`

---

### isArray()

> **isArray**\<`T`\>(`value`, `assertion`?): `value is T[]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:107

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### assertion?

(`value`) => `value is T`

#### Returns

`value is T[]`

---

### isArrayBuffer()

> **isArrayBuffer**(`value`): `value is ArrayBuffer`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:108

#### Parameters

##### value

`unknown`

#### Returns

`value is ArrayBuffer`

---

### isArrayLike()

> **isArrayLike**\<`T`\>(`value`): `value is ArrayLike<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:109

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is ArrayLike<T>`

---

### isAsyncFunction()

> **isAsyncFunction**\<`T`\>(`value`): `value is (arguments_: any[]) => Promise<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:110

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is (arguments_: any[]) => Promise<T>`

---

### isAsyncGenerator()

> **isAsyncGenerator**(`value`): `value is AsyncGenerator<unknown, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:111

#### Parameters

##### value

`unknown`

#### Returns

`value is AsyncGenerator<unknown, any, any>`

---

### isAsyncGeneratorFunction()

> **isAsyncGeneratorFunction**(`value`): `value is (arguments_: any[]) => Promise<unknown>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:112

#### Parameters

##### value

`unknown`

#### Returns

`value is (arguments_: any[]) => Promise<unknown>`

---

### isAsyncIterable()

> **isAsyncIterable**\<`T`\>(`value`): `value is AsyncIterable<T, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:113

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is AsyncIterable<T, any, any>`

---

### isBigint()

> **isBigint**(`value`): `value is bigint`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:114

#### Parameters

##### value

`unknown`

#### Returns

`value is bigint`

---

### isBigInt64Array()

> **isBigInt64Array**(`value`): `value is BigInt64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:115

#### Parameters

##### value

`unknown`

#### Returns

`value is BigInt64Array<ArrayBufferLike>`

---

### isBigUint64Array()

> **isBigUint64Array**(`value`): `value is BigUint64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:116

#### Parameters

##### value

`unknown`

#### Returns

`value is BigUint64Array<ArrayBufferLike>`

---

### isBlob()

> **isBlob**(`value`): `value is Blob`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:117

#### Parameters

##### value

`unknown`

#### Returns

`value is Blob`

---

### isBoolean()

> **isBoolean**(`value`): `value is boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:118

#### Parameters

##### value

`unknown`

#### Returns

`value is boolean`

---

### isBoundFunction()

> **isBoundFunction**(`value`): `value is Function`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:119

#### Parameters

##### value

`unknown`

#### Returns

`value is Function`

---

### isBuffer()

> **isBuffer**(`value`): `value is Buffer<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:123

Note: [Prefer using `Uint8Array` instead of `Buffer`.](https://sindresorhus.com/blog/goodbye-nodejs-buffer)

#### Parameters

##### value

`unknown`

#### Returns

`value is Buffer<ArrayBufferLike>`

---

### isClass()

> **isClass**\<`T`\>(`value`): `value is Class<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:124

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Class<T>`

---

### isDataView()

> **isDataView**(`value`): `value is DataView<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:125

#### Parameters

##### value

`unknown`

#### Returns

`value is DataView<ArrayBufferLike>`

---

### isDate()

> **isDate**(`value`): `value is Date`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:126

#### Parameters

##### value

`unknown`

#### Returns

`value is Date`

---

### isDirectInstanceOf()

> **isDirectInstanceOf**\<`T`\>(`instance`, `class_`): `instance is T`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:127

#### Type Parameters

• **T**

#### Parameters

##### instance

`unknown`

##### class\_

[`Class`](README.md#classt-arguments)\<`T`\>

#### Returns

`instance is T`

---

### isEmptyArray()

> **isEmptyArray**(`value`): `value is never[]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:128

#### Parameters

##### value

`unknown`

#### Returns

`value is never[]`

---

### isEmptyMap()

> **isEmptyMap**(`value`): `value is Map<never, never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:129

#### Parameters

##### value

`unknown`

#### Returns

`value is Map<never, never>`

---

### isEmptyObject()

> **isEmptyObject**\<`Key`\>(`value`): `value is Record<Key, never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:130

#### Type Parameters

• **Key** _extends_ `string` \| `number` \| `symbol` = `string`

#### Parameters

##### value

`unknown`

#### Returns

`value is Record<Key, never>`

---

### isEmptySet()

> **isEmptySet**(`value`): `value is Set<never>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:131

#### Parameters

##### value

`unknown`

#### Returns

`value is Set<never>`

---

### isEmptyString()

> **isEmptyString**(`value`): `value is ""`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:132

#### Parameters

##### value

`unknown`

#### Returns

`value is ""`

---

### isEmptyStringOrWhitespace()

> **isEmptyStringOrWhitespace**(`value`): value is "" \| " "

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:133

#### Parameters

##### value

`unknown`

#### Returns

value is "" \| " "

---

### isEnumCase()

> **isEnumCase**\<`T`\>(`value`, `targetEnum`): `value is T[keyof T]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:134

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

##### targetEnum

`T`

#### Returns

`value is T[keyof T]`

---

### isError()

> **isError**(`value`): `value is Error`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:135

#### Parameters

##### value

`unknown`

#### Returns

`value is Error`

---

### isEvenInteger()

> **isEvenInteger**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:136

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isFalsy()

> **isFalsy**(`value`): `value is Falsy`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:137

#### Parameters

##### value

`unknown`

#### Returns

`value is Falsy`

---

### isFloat32Array()

> **isFloat32Array**(`value`): `value is Float32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:138

#### Parameters

##### value

`unknown`

#### Returns

`value is Float32Array<ArrayBufferLike>`

---

### isFloat64Array()

> **isFloat64Array**(`value`): `value is Float64Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:139

#### Parameters

##### value

`unknown`

#### Returns

`value is Float64Array<ArrayBufferLike>`

---

### isFormData()

> **isFormData**(`value`): `value is FormData`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:140

#### Parameters

##### value

`unknown`

#### Returns

`value is FormData`

---

### isFunction()

> **isFunction**(`value`): `value is Function`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:141

#### Parameters

##### value

`unknown`

#### Returns

`value is Function`

---

### isGenerator()

> **isGenerator**(`value`): `value is Generator<unknown, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:142

#### Parameters

##### value

`unknown`

#### Returns

`value is Generator<unknown, any, any>`

---

### isGeneratorFunction()

> **isGeneratorFunction**(`value`): `value is GeneratorFunction`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:143

#### Parameters

##### value

`unknown`

#### Returns

`value is GeneratorFunction`

---

### isHtmlElement()

> **isHtmlElement**(`value`): `value is HTMLElement`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:144

#### Parameters

##### value

`unknown`

#### Returns

`value is HTMLElement`

---

### isInfinite()

> **isInfinite**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:145

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isInRange()

> **isInRange**(`value`, `range`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:146

#### Parameters

##### value

`number`

##### range

`number` | \[`number`, `number`\]

#### Returns

`value is number`

---

### isInt16Array()

> **isInt16Array**(`value`): `value is Int16Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:147

#### Parameters

##### value

`unknown`

#### Returns

`value is Int16Array<ArrayBufferLike>`

---

### isInt32Array()

> **isInt32Array**(`value`): `value is Int32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:148

#### Parameters

##### value

`unknown`

#### Returns

`value is Int32Array<ArrayBufferLike>`

---

### isInt8Array()

> **isInt8Array**(`value`): `value is Int8Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:149

#### Parameters

##### value

`unknown`

#### Returns

`value is Int8Array<ArrayBufferLike>`

---

### isInteger()

> **isInteger**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:150

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isIterable()

> **isIterable**\<`T`\>(`value`): `value is Iterable<T, any, any>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:151

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Iterable<T, any, any>`

---

### isMap()

> **isMap**\<`Key`, `Value`\>(`value`): `value is Map<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:152

#### Type Parameters

• **Key** = `unknown`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Map<Key, Value>`

---

### isNan()

> **isNan**(`value`): `boolean`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:153

#### Parameters

##### value

`unknown`

#### Returns

`boolean`

---

### isNativePromise()

> **isNativePromise**\<`T`\>(`value`): `value is Promise<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:154

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Promise<T>`

---

### isNegativeNumber()

> **isNegativeNumber**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:155

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isNodeStream()

> **isNodeStream**(`value`): `value is NodeStream`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:156

#### Parameters

##### value

`unknown`

#### Returns

`value is NodeStream`

---

### isNonEmptyArray()

> **isNonEmptyArray**\<`T`, `Item`\>(`value`): `value is [Item, ...Item[]]`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:157

#### Type Parameters

• **T** = `unknown`

• **Item** = `unknown`

#### Parameters

##### value

`T` | `Item`[]

#### Returns

`value is [Item, ...Item[]]`

---

### isNonEmptyMap()

> **isNonEmptyMap**\<`Key`, `Value`\>(`value`): `value is Map<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:158

#### Type Parameters

• **Key** = `unknown`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Map<Key, Value>`

---

### isNonEmptyObject()

> **isNonEmptyObject**\<`Key`, `Value`\>(`value`): `value is Record<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:159

#### Type Parameters

• **Key** _extends_ `string` \| `number` \| `symbol` = `string`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Record<Key, Value>`

---

### isNonEmptySet()

> **isNonEmptySet**\<`T`\>(`value`): `value is Set<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:160

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Set<T>`

---

### isNonEmptyString()

> **isNonEmptyString**(`value`): `value is NonEmptyString`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:161

#### Parameters

##### value

`unknown`

#### Returns

`value is NonEmptyString`

---

### isNonEmptyStringAndNotWhitespace()

> **isNonEmptyStringAndNotWhitespace**(`value`): `value is NonEmptyString`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:162

#### Parameters

##### value

`unknown`

#### Returns

`value is NonEmptyString`

---

### isNull()

> **isNull**(`value`): `value is null`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:163

#### Parameters

##### value

`unknown`

#### Returns

`value is null`

---

### isNullOrUndefined()

> **isNullOrUndefined**(`value`): value is undefined \| null

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:164

#### Parameters

##### value

`unknown`

#### Returns

value is undefined \| null

---

### isNumber()

> **isNumber**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:165

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isNumericString()

> **isNumericString**(`value`): `` value is `${number}` ``

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:166

#### Parameters

##### value

`unknown`

#### Returns

`` value is `${number}` ``

---

### isObject()

> **isObject**(`value`): `value is object`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:167

#### Parameters

##### value

`unknown`

#### Returns

`value is object`

---

### isObservable()

> **isObservable**(`value`): `value is ObservableLike`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:168

#### Parameters

##### value

`unknown`

#### Returns

`value is ObservableLike`

---

### isOddInteger()

> **isOddInteger**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:169

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isPlainObject()

> **isPlainObject**\<`Value`\>(`value`): `value is Record<PropertyKey, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:170

#### Type Parameters

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Record<PropertyKey, Value>`

---

### isPositiveNumber()

> **isPositiveNumber**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:171

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isPrimitive()

> **isPrimitive**(`value`): `value is Primitive`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:172

#### Parameters

##### value

`unknown`

#### Returns

`value is Primitive`

---

### isPromise()

> **isPromise**\<`T`\>(`value`): `value is Promise<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:173

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Promise<T>`

---

### isPropertyKey()

> **isPropertyKey**(`value`): `value is PropertyKey`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:174

#### Parameters

##### value

`unknown`

#### Returns

`value is PropertyKey`

---

### isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:175

#### Parameters

##### value

`unknown`

#### Returns

`value is RegExp`

---

### isSafeInteger()

> **isSafeInteger**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:176

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isSet()

> **isSet**\<`T`\>(`value`): `value is Set<T>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:177

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is Set<T>`

---

### isSharedArrayBuffer()

> **isSharedArrayBuffer**(`value`): `value is SharedArrayBuffer`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:178

#### Parameters

##### value

`unknown`

#### Returns

`value is SharedArrayBuffer`

---

### isString()

> **isString**(`value`): `value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:179

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

---

### isSymbol()

> **isSymbol**(`value`): `value is symbol`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:180

#### Parameters

##### value

`unknown`

#### Returns

`value is symbol`

---

### isTruthy()

> **isTruthy**\<`T`\>(`value`): `value is T`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:181

#### Type Parameters

• **T**

#### Parameters

##### value

`Falsy` | `T`

#### Returns

`value is T`

---

### isTupleLike()

> **isTupleLike**\<`T`\>(`value`, `guards`): `value is ResolveTypesOfTypeGuardsTuple<T, []>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:184

#### Type Parameters

• **T** _extends_ `TypeGuard`\<`unknown`\>[]

#### Parameters

##### value

`unknown`

##### guards

\[`...T[]`\]

#### Returns

`value is ResolveTypesOfTypeGuardsTuple<T, []>`

---

### isTypedArray()

> **isTypedArray**(`value`): `value is TypedArray`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:185

#### Parameters

##### value

`unknown`

#### Returns

`value is TypedArray`

---

### isUint16Array()

> **isUint16Array**(`value`): `value is Uint16Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:186

#### Parameters

##### value

`unknown`

#### Returns

`value is Uint16Array<ArrayBufferLike>`

---

### isUint32Array()

> **isUint32Array**(`value`): `value is Uint32Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:187

#### Parameters

##### value

`unknown`

#### Returns

`value is Uint32Array<ArrayBufferLike>`

---

### isUint8Array()

> **isUint8Array**(`value`): `value is Uint8Array<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:188

#### Parameters

##### value

`unknown`

#### Returns

`value is Uint8Array<ArrayBufferLike>`

---

### isUint8ClampedArray()

> **isUint8ClampedArray**(`value`): `value is Uint8ClampedArray<ArrayBufferLike>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:189

#### Parameters

##### value

`unknown`

#### Returns

`value is Uint8ClampedArray<ArrayBufferLike>`

---

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:190

#### Parameters

##### value

`unknown`

#### Returns

`value is undefined`

---

### isUrlInstance()

> **isUrlInstance**(`value`): `value is URL`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:191

#### Parameters

##### value

`unknown`

#### Returns

`value is URL`

---

### isUrlSearchParams()

> **isUrlSearchParams**(`value`): `value is URLSearchParams`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:192

#### Parameters

##### value

`unknown`

#### Returns

`value is URLSearchParams`

---

### isUrlString()

> **isUrlString**(`value`): `value is string`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:193

#### Parameters

##### value

`unknown`

#### Returns

`value is string`

---

### isValidDate()

> **isValidDate**(`value`): `value is Date`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:194

#### Parameters

##### value

`unknown`

#### Returns

`value is Date`

---

### isValidLength()

> **isValidLength**(`value`): `value is number`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:195

#### Parameters

##### value

`unknown`

#### Returns

`value is number`

---

### isWeakMap()

> **isWeakMap**\<`Key`, `Value`\>(`value`): `value is WeakMap<Key, Value>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:196

#### Type Parameters

• **Key** _extends_ `object` = `object`

• **Value** = `unknown`

#### Parameters

##### value

`unknown`

#### Returns

`value is WeakMap<Key, Value>`

---

### isWeakRef()

> **isWeakRef**(`value`): `value is WeakRef<object>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:197

#### Parameters

##### value

`unknown`

#### Returns

`value is WeakRef<object>`

---

### isWeakSet()

> **isWeakSet**(`value`): `value is WeakSet<object>`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:198

#### Parameters

##### value

`unknown`

#### Returns

`value is WeakSet<object>`

---

### isWhitespaceString()

> **isWhitespaceString**(`value`): `value is " "`

Defined in: node_modules/.pnpm/@sindresorhus+is@7.0.1/node_modules/@sindresorhus/is/distribution/index.d.ts:199

#### Parameters

##### value

`unknown`

#### Returns

`value is " "`
