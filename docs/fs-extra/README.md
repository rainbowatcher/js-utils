[Documentation](../README.md) / @rainbowatcher/fs-extra

# @rainbowatcher/fs-extra

## Functions

### exists()

> **exists**(`inputPath`): `Promise`\<`boolean`\>

Defined in: [is.ts:9](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/fs-extra/src/is.ts#L9)

Checks if a given path exists.

#### Parameters

| Parameter   | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `inputPath` | `string` | The path to check for existence. |

#### Returns

`Promise`\<`boolean`\>

Whether the path exists or not.

---

### isDir()

> **isDir**(`inputPath`): `Promise`\<`boolean`\>

Defined in: [is.ts:24](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/fs-extra/src/is.ts#L24)

Checks if a given path is a directory.

#### Parameters

| Parameter   | Type     | Description        |
| ----------- | -------- | ------------------ |
| `inputPath` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

Whether the path is a directory.

---

### isDirSync()

> **isDirSync**(`inputPath`): `boolean`

Defined in: [is.ts:56](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/fs-extra/src/is.ts#L56)

Checks if a path is a directory.

#### Parameters

| Parameter   | Type     | Description        |
| ----------- | -------- | ------------------ |
| `inputPath` | `string` | The path to check. |

#### Returns

`boolean`

Whether the path is a directory.

#### Example

```ts
const isDir = await isDirSync("./")
// isDir === true
```

---

### isFile()

> **isFile**(`inputPath`): `Promise`\<`boolean`\>

Defined in: [is.ts:38](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/fs-extra/src/is.ts#L38)

Checks if a given path is a file.

#### Parameters

| Parameter   | Type     | Description        |
| ----------- | -------- | ------------------ |
| `inputPath` | `string` | The path to check. |

#### Returns

`Promise`\<`boolean`\>

Whether the path is a file.

---

### isFileSync()

> **isFileSync**(`inputPath`): `boolean`

Defined in: [is.ts:71](https://github.com/rainbowatcher/js-utils/blob/171183ea5be889d9b10be4cf6c406f1643ecac55/packages/fs-extra/src/is.ts#L71)

Checks if a file exists.

#### Parameters

| Parameter   | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `inputPath` | `string` | The absolute path to check. |

#### Returns

`boolean`

Whether the file exists.

#### Example

```ts
const isFile = await isFileSync("./package.json")
// isFile === true
```
