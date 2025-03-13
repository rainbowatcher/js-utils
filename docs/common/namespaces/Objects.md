[Documentation](../../README.md) / [@rainbowatcher/common](../README.md) / Objects

# Objects

## Type Aliases

### Composer()\<L, R\>

> **Composer**\<`L`, `R`\>: (`leftValue`, `rightValue`, `key`, `left`, `right`) => `unknown`

Defined in: [object.ts:111](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L111)

#### Type Parameters

| Type Parameter | Default type |
| -------------- | ------------ |
| `L`            | `any`        |
| `R`            | `any`        |

#### Parameters

| Parameter    | Type             |
| ------------ | ---------------- |
| `leftValue`  | `L`\[keyof `L`\] |
| `rightValue` | `R`\[keyof `R`\] |
| `key`        | `PropertyKey`    |
| `left`       | `L`              |
| `right`      | `R`              |

#### Returns

`unknown`

---

### DeepCopyOptions

> **DeepCopyOptions**: `object`

Defined in: [object.ts:5](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L5)

#### Type declaration

| Name                          | Type                                          | Description                                                                | Defined in                                                                                                                                |
| ----------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="cycle"></a> `cycle`?   | `boolean`                                     | -                                                                          | [object.ts:6](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L6)   |
| <a id="filter"></a> `filter`? | [`FilterFunction`](Objects.md#filterfunction) | if the return value is true, the attribute will be removed from the object | [object.ts:11](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L11) |

---

### FilterFunction()

> **FilterFunction**: (`key`, `value`) => `boolean`

Defined in: [object.ts:3](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L3)

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |
| `value`   | `any`    |

#### Returns

`boolean`

## Functions

### deepCopy()

> **deepCopy**\<`T`, `U`\>(`input`, `opts`?): `U`

Defined in: [object.ts:21](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L21)

Creates a deep copy of the input object, applying a filter function to exclude specific properties.

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |
| `U`            |

#### Parameters

| Parameter | Type                                            | Description                        |
| --------- | ----------------------------------------------- | ---------------------------------- |
| `input`   | `T`                                             | the input object to be deep copied |
| `opts`?   | [`DeepCopyOptions`](Objects.md#deepcopyoptions) | options to control copy behaviors  |

#### Returns

`U`

the deep copied object with excluded properties

#### See

DeepCopyOptions

---

### deepEqual()

> **deepEqual**(`first`, `second`, `keys`?): `boolean`

Defined in: [object.ts:62](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L62)

Check if two objects are deeply equal.

#### Parameters

| Parameter | Type       | Description                              |
| --------- | ---------- | ---------------------------------------- |
| `first`   | `unknown`  | the first object to compare              |
| `second`  | `unknown`  | the second object to compare             |
| `keys`?   | `string`[] | keys of the object properties to compare |

#### Returns

`boolean`

true if the objects are deeply equal, false otherwise

---

### isObject()

> **isObject**(`value`?): `value is Record<string, unknown>`

Defined in: [object.ts:154](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L154)

#### Parameters

| Parameter | Type      |
| --------- | --------- |
| `value`?  | `unknown` |

#### Returns

`value is Record<string, unknown>`

---

### mergeWith()

#### Call Signature

> **mergeWith**\<`L`, `R`\>(`left`, `right`, `composer`?): `L`

Defined in: [object.ts:122](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L122)

Merges two plain objects, using the right object's value if defined,
and allowing custom merge behavior with a composer function.

##### Type Parameters

| Type Parameter                                 |
| ---------------------------------------------- |
| `L` _extends_ `Record`\<`PropertyKey`, `any`\> |
| `R` _extends_ `undefined`                      |

##### Parameters

| Parameter   | Type                                             | Description                                           |
| ----------- | ------------------------------------------------ | ----------------------------------------------------- |
| `left`      | `L`                                              | The left object to merge into.                        |
| `right`     | `R`                                              | The right object to merge from.                       |
| `composer`? | [`Composer`](Objects.md#composerl-r)\<`L`, `R`\> | An optional function to customize the merge behavior. |

##### Returns

`L`

A new object with the merged properties.

#### Call Signature

> **mergeWith**\<`L`, `R`\>(`left`, `right`, `composer`?): `R`

Defined in: [object.ts:123](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L123)

Merges two plain objects, using the right object's value if defined,
and allowing custom merge behavior with a composer function.

##### Type Parameters

| Type Parameter                                 |
| ---------------------------------------------- |
| `L` _extends_ `undefined`                      |
| `R` _extends_ `Record`\<`PropertyKey`, `any`\> |

##### Parameters

| Parameter   | Type                                             | Description                                           |
| ----------- | ------------------------------------------------ | ----------------------------------------------------- |
| `left`      | `L`                                              | The left object to merge into.                        |
| `right`     | `R`                                              | The right object to merge from.                       |
| `composer`? | [`Composer`](Objects.md#composerl-r)\<`L`, `R`\> | An optional function to customize the merge behavior. |

##### Returns

`R`

A new object with the merged properties.

#### Call Signature

> **mergeWith**\<`L`, `R`\>(`left`, `right`, `composer`?): `L` & `R`

Defined in: [object.ts:124](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/common/src/object.ts#L124)

Merges two plain objects, using the right object's value if defined,
and allowing custom merge behavior with a composer function.

##### Type Parameters

| Type Parameter                                 |
| ---------------------------------------------- |
| `L` _extends_ `Record`\<`PropertyKey`, `any`\> |
| `R` _extends_ `Record`\<`PropertyKey`, `any`\> |

##### Parameters

| Parameter   | Type                                             | Description                                           |
| ----------- | ------------------------------------------------ | ----------------------------------------------------- |
| `left`      | `L`                                              | The left object to merge into.                        |
| `right`     | `R`                                              | The right object to merge from.                       |
| `composer`? | [`Composer`](Objects.md#composerl-r)\<`L`, `R`\> | An optional function to customize the merge behavior. |

##### Returns

`L` & `R`

A new object with the merged properties.
