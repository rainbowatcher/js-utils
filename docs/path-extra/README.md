[Documentation](../README.md) / @rainbowatcher/path-extra

# @rainbowatcher/path-extra

## Functions

### normalize()

> **normalize**(`inputPath`): `string`

Defined in: [normalize.ts:19](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/path-extra/src/normalize.ts#L19)

Normalizes a given file path to a consistent format.

#### Parameters

| Parameter   | Type     | Description               |
| ----------- | -------- | ------------------------- |
| `inputPath` | `string` | the path to be normalized |

#### Returns

`string`

the normalized path

#### Example

```js
normalize("C:\\current\\working\\directory")
// "C:/current/working/directory"
normalize("/current\\working//directory")
// "/current/working/directory"
```

ref: <https://github.com/lint-staged/lint-staged/blob/master/lib/normalizePath.js>

---

### toAbsolute()

> **toAbsolute**(`inputPath`, `cwd`): `string`

Defined in: [to_absolute.ts:12](https://github.com/rainbowatcher/js-utils/blob/863115a1625327043cdd04e9106ea4a32f58a369/packages/path-extra/src/to_absolute.ts#L12)

Returns the absolute path of the given input path.

#### Parameters

| Parameter   | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| `inputPath` | `string` | the path to be converted to absolute |
| `cwd`       | `string` | the current working directory        |

#### Returns

`string`

the absolute path
