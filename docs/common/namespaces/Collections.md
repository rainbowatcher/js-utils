[Documentation](../../README.md) / [@rainbowatcher/common](../README.md) / Collections

# Collections

## Functions

### isEmpty()

> **isEmpty**\<`T`\>(`arrayLike`): `boolean`

Defined in: [collections.ts:6](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/common/src/collections.ts#L6)

check array like object is empty

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters

| Parameter   | Type                              | Description                                    |
| ----------- | --------------------------------- | ---------------------------------------------- |
| `arrayLike` | `undefined` \| `ArrayLike`\<`T`\> | the array like object that has length property |

#### Returns

`boolean`

true if length equals 0, true if object is undefined

---

### isNotEmpty()

> **isNotEmpty**\<`T`\>(`arrayLike`): `boolean`

Defined in: [collections.ts:15](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/common/src/collections.ts#L15)

check array like object is not empty

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters

| Parameter   | Type                              | Description                                    |
| ----------- | --------------------------------- | ---------------------------------------------- |
| `arrayLike` | `undefined` \| `ArrayLike`\<`T`\> | the array like object that has length property |

#### Returns

`boolean`

true if length great than 0, false if object is undefined
