# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2024-08-26

### 🚀 Features

- Add type KeysOf ([14cab41](14cab41510076b88d4abab4b149d629831781e71))
- Add fs-extra and maybe and path-extra ([583ab37](583ab37837b0562d4bf50e60ec457dca3ac3c146))

### 🐛 Bug Fixes

- Ci on mac missing packageManager field will use yarn as default ([bc69002](bc690021809e60badfc256873547dc73013d80b8))
- Eslint rule ts/ban-types is deprecated ([1a30032](1a300325054e583031c5236cef5e7e280bc72e14))

### 🚜 Refactor

- Refactor to mono repo ([184b754](184b75459174793af5163880c6568c5bd248311b))

### 🧪 Testing

- Fix import path error ([aefa4ea](aefa4eae2dbeae15bf3fae1a6ec9ec2284739887))
- Fix test path error ([b0ea721](b0ea72171063bbe30a60779b8083fa5196df1ccf))
- Update style to match eslint rules ([b6ee681](b6ee681119b9511ec5b4949158f2c587d48ab085))

### ⚙️ Miscellaneous Tasks

- Remove addition rule in eslint config ([e898900](e898900497096d94925553afe66f99bb25267509))
- Add tsd for type test ([18b080a](18b080a4d3449399ee70c80882753e1866b8a607))
- Only limit major version of node ([2e2860c](2e2860c245e1df19c4df6ace212bf09c0203018d))
- Add mocks for node:fs ([d6f19e3](d6f19e3117ae820413e9f0b844ebd58e5bdddb6b))
- Add test name ([8d38efc](8d38efca5da2eaea15cac8b43c598a81c0e8e2ca))
- Update release script ([a02ba6e](a02ba6ec63519534e63d2599d7e49afa0a87ef9a))
- Release v0.2.0 ([f4df73d](f4df73d7861b26a34af4ca0b94af429ef26b94eb))

## [0.1.1] - 2024-05-19

### 🚀 Features

- Upgrade to eslint v9 ([db24051](db240513bfd085cd2b380319e6f79312b57be442))
- Use git cliff to generate changelog ([cb1597b](cb1597b880cc19dfc5169f51505906477811df86))

### 🐛 Bug Fixes

- Date object should compare the time not it self ([400baf3](400baf35a2be4a75356f5f505a7b787019515a34))

### 🚜 Refactor

- Refactor release script ([8801d12](8801d124b7aec2a18994621246094b44cf48c134))

### ⚙️ Miscellaneous Tasks

- Use --no-frozen-lockfile ([b929d97](b929d976ef32cece26f50c1bd3aae1b68a0886bd))
- Update engine compatibility ([9627734](9627734990499fe7df87240048377b716786676f))
- Add typecheck ([419346a](419346a36c9c4ad24999cd4ad26cc5e426915e68))
- Apply eslint rules ([823e948](823e9489672d7b991ad28ef16c86d6b56511836f))
- Use --no-frozen-lockfile for test job ([0f6fa90](0f6fa90bbfa10a699bae8b7381dd40e3a48b6128))
- Release v0.1.1 ([a356895](a356895cfec437451fe7442ce796ee6df2baa1ac))

## [0.1.0] - 2024-04-18

### 🚀 Features

- Add is functions ([b0e035b](b0e035bbcfdad0e467e6094eb9614b24673c295a))

### 🚜 Refactor

- Add unit tests ([7664c74](7664c746bcc9b3f9ef14228ffda545836f823dba))
- Refactor release ([facc8c6](facc8c6d2125ec962635637a7ef9e94ca6cfe870))

### 🎨 Styling

- Apply brace-style rule ([562f6b9](562f6b9ac3fb9381c258fbc102790fa3d1b8203e))
- Indent with four spaces ([76c71e2](76c71e2d0c5142aab87adcb62ffcf825f7b24ca3))

### ⚙️ Miscellaneous Tasks

- Update changelog ([5a331d0](5a331d0a9a035a3f27d53de173ba1d4714d8e0c2))
- Bump deps ([a270c0e](a270c0e0b712c0a9222482567c626b83c1c89c01))
- Remove node 16 support ([ed0f50b](ed0f50b99e0063c974b61f43b914e6c5ab01ece7))
- Release v0.1.0 ([6ce39d6](6ce39d6284861aabfcb7375549126794d7437383))

## [0.1.0] - 2024-04-18

### 🚀 Features

- Add is functions ([b0e035b](b0e035bbcfdad0e467e6094eb9614b24673c295a))

### 🚜 Refactor

- Add unit tests ([7664c74](7664c746bcc9b3f9ef14228ffda545836f823dba))
- Refactor release ([facc8c6](facc8c6d2125ec962635637a7ef9e94ca6cfe870))

### 🎨 Styling

- Apply brace-style rule ([562f6b9](562f6b9ac3fb9381c258fbc102790fa3d1b8203e))
- Indent with four spaces ([76c71e2](76c71e2d0c5142aab87adcb62ffcf825f7b24ca3))

### ⚙️ Miscellaneous Tasks

- Update changelog ([5a331d0](5a331d0a9a035a3f27d53de173ba1d4714d8e0c2))
- Bump deps ([a270c0e](a270c0e0b712c0a9222482567c626b83c1c89c01))
- Remove node 16 support ([ed0f50b](ed0f50b99e0063c974b61f43b914e6c5ab01ece7))
- Release v0.1.0 ([6ce39d6](6ce39d6284861aabfcb7375549126794d7437383))

## [0.0.8] - 2023-07-27

### 🚀 Features

- Add isDeepEquals function ([8bc89bf](8bc89bff5065ccb7c0360347a571a9360725df70))

### ⚙️ Miscellaneous Tasks

- *(release)* V0.0.8 ([0fa16bf](0fa16bf5ac9d916d6ae71ef73f7699ff0dccb32a))

## [0.0.7] - 2023-07-18

### 🚀 Features

- Use @rainbowatcher/eslint-config-ts ([7115b14](7115b145243e94aa4ced9dda8a569b83eb5a0744))

### ⚙️ Miscellaneous Tasks

- *(release)* V0.0.7 ([3e617de](3e617de142f27e0f76bceac9db2dbc892249bd5b))

## [0.0.6] - 2023-05-30

### 🐛 Bug Fixes

- Repair renovate schedule expression ([6b09c79](6b09c7995e6fd9631281ef27df7a1bd8018e562d))
- Renovate does not support minute granularity ([0985e87](0985e87e880fac5c6ca3e2bcb0e68f7e17725c74))
- Move isString to str.test.ts because of wrong place ([07adba7](07adba7e29ba5e0fa7b1e3df4fa40bdf6b0d11c4))

### 🎨 Styling

- Apply top level function rule ([43c4584](43c45840feba1298bbf838cf9f97300147f004d5))

### ⚙️ Miscellaneous Tasks

- Use renovate config from rainbowatcher/renovate-config ([4c85466](4c854662a7c7c7cfc553e5f1eaf2b42930a73a2d))
- *(release)* V0.0.6 ([6494908](649490893b65e869037fcc685cb52e587bca19ab))

## [0.0.5] - 2023-03-06

### 🚀 Features

- Add validater ([d38fcc1](d38fcc119f7daf98e3258dacbf3d7aa7955d4f3d))

### 🚜 Refactor

- Move isString to str.ts and add docs ([25f0752](25f0752768269ccbc411b896ef4b4d93f94384e7))

### 📚 Documentation

- Update docs ([e3f909a](e3f909a7469b4c76f77808cbf130580535e31701))
- Update readme ([9a17743](9a177434297ee5c39b63d8057d6cbf28f21097ec))

### ⚙️ Miscellaneous Tasks

- Change schedule in renovate ([8714552](8714552299e7c9066fc79e331ca51bb705d3dd02))
- *(release)* V0.0.5 ([b80f6dd](b80f6dd07a6bee922f676daaea800042a3c7abac))

## [0.0.4] - 2023-03-01

### 🚀 Features

- Add deps & config precommit ([7f3baf2](7f3baf2046c32e776e293fd9696448359d45d1ef))
- Add isAsyncFunction ([7ceb6b1](7ceb6b1acadb381d2dac583fafa86c7f5f4a1c56))
- *(build)* Add commitlint ([c129d2d](c129d2d6471f6fe4f5bcbdb363851eb324133b5b))
- Add isString ([16c31ed](16c31ed9e7a271ad602f87f5516be593fbded871))
- Add Strings.toUpperCase ([aa68ab8](aa68ab82efe6397b36c1ffc2962d530e87b20437))

### ⚙️ Miscellaneous Tasks

- Add readme ([8788a48](8788a48b2ff72646e49ce385a2ca133e9df4079e))
- *(release)* V0.0.4 ([19cac94](19cac9441ab9a20f663f439cee692b0b9dd1ede6))

## [0.0.3] - 2023-02-14

### 🚀 Features

- Add git hooks ([5a9ea38](5a9ea387b372d87b0d6a0e18efa79e1333b445b0))

### 🐛 Bug Fixes

- *(ci)* Fix ci broken ([3ea94de](3ea94de007dd9da3107d2e12773ed075d5bc3492))
- *(ci)* Fix node env version missing ([107ca7a](107ca7ac4f4fbfd9a4a4b74b22e2bb8af77b4c1f))

### ⚙️ Miscellaneous Tasks

- *(release)* V0.0.3 ([f8f3adf](f8f3adfe2af3045b848f2fac78a7b7267dea91a5))

## [0.0.2] - 2023-02-14

### ⚙️ Miscellaneous Tasks

- *(release)* V0.0.2 ([98cad30](98cad30b071db9dad7353ae7db5ef43afd88d4d2))

<!-- generated by git-cliff -->
