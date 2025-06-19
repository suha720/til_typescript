# NVM 의 설치 및 이해

- Node Version Manager
- Node.js 버전을 자유롭게 관리
- 각 프로젝트 및 회사마다 Node.js 버전 차이
- Node.js 는 로컬 PC 에서 js 를 실행 및 개발 가능하도록 지원

## 1. 참조 사이트

- https://jang8584.tistory.com/295
- https://fabric0de.tistory.com/43

## 2. 설치

- https://github.com/coreybutler/nvm-windows/releases

## 3. NVM 사용 명령어

- 버전 확인

```bash
nvm version
nvm -v
```

- node 목록 확인하기

```bash
nvm ls
```

- node 전체 버전 확인하기

```bash
nvm list available
```

- NVM 을 이용해서 특정 버전 Node 설치

```bash
nvm install 18.18.2
```

- NVM 으로 사용 버전 변경

```bash
nvm use 18.18.2
```

- NVM 으로 node 특정 버전 삭제하기ㅏ

```bash
nvm uninstall 18.18.2
nvm ls
```

- Git 관리
  1. README.MD
  2. git init
  3. Git 연결, remote
  4. git remote -v : 제대로 연결되었는지 확인하기

# TypeScript 의 이해

## 1. 참조 사이트

- https://www.typescriptlang.org/
- https://www.typescriptlang.org/play

## 2. TypeScript 란?

- `javaScript 에 데이터에 종류(Data Type)을 정의하는 언어`
- TypeScript 파일은 js 가 아니라서 웹브라우저 및 Node.js 에서 실행안됨.
- TypeScript 로 작성하면 자동으로 js 파일로 번역되어진다.
- 그 결과로 만들어진 js 를 실행한다.

## 3. TypeScript 특징

- 코딩 중에 오류를 발견하기 쉽다. (디버깅이 수월하다.)
- js 는 코딩 중에 오류를 발견하기 어렵다. (심각한 문제 발생함)

## 4. TypeScript 프로젝트 셋팅

- Node 를 설치하고 나면 자동으로 `npm` 이 설치됩니다.
- npm : Node Package Manger (라이브러리 - 소스묶음)
- https://www.npmjs.com/
- 라이브러리 설치 및 제거, 업데이트 : npm, yarn, pnpm
- npm 버전 확인하기

```bash
npm -v
```

### 4.1. 반드시 한번 셋팅한다.

- TypeScript 개발 셋팅(-g 는 PC)

```bash
npm i -g typescript (= npm install -g typescript)
tsc -v
```

### 4.2. 나의 프로젝트에 TypeScript 로 설정하기

- npm 초기화 하겠다.

```bash
npm init
```

## 5. TypeScript 테스트

- src 폴더 생성 : source 라는 의미
- src/index.ts 파일 생성

````ts
console.log(`Hello`);
const num: number = 1;
```bash
tsc src/index.ts
````

```bash
node src/index.js
```

## 6. 실행의 과정

- tsc 명령어 : TypeScript Compile
- `tsc 경로/파일명` ===> `node 경로/파일명.js`
- 위의 2과정을 하나로 실행가능하도록 지원하는 npm

```bash
npm i -g tsx
tsx -v
tsx src/index.ts
```

## 7. TypeScript 컴파일러에 옵션 설정하기

- ts 생성 > 컴파일러 실행 > js 생성
- 대표적 js 생성시 옵션들 (https://www.typescriptlang.org/tsconfig/)
- `tsconfig.json` : TypeScript 컴파일 환경 설정 파일 생성
- tsconfig.json 자동생성하기

```bash
tsc --init
```

```json
// 최신버전 아님
{
  "compilerOptions": {
    /* 이 파일에 대해 더 자세히 알아보려면 https://aka.ms/tsconfig 를 방문하세요 */

    /* 프로젝트 */
    // "incremental": true /* 프로젝트의 증분 컴파일을 위해 .tsbuildinfo 파일을 저장합니다. */,
    // "composite": true /* 프로젝트 참조와 함께 TypeScript 프로젝트를 사용할 수 있게 하는 제약 조건을 활성화합니다.
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* 증분 컴파일 파일 .tsbuildinfo의 경로를 지정합니다. */,
    // "disableSourceOfProjectReferenceRedirect": true,  /* 복합 프로젝트를 참조할 때 선언 파일 대신 소스 파일을 선호하는 것을 비활성화합니다. */
    // "disableSolutionSearching": true,                 /* 편집할 때 다중 프로젝트 참조 검사에서 프로젝트를 제외합니다. */
    // "disableReferencedProjectLoad": true,             /* TypeScript가 자동으로 로드하는 프로젝트 수를 줄입니다. */

    /* 언어와 환경 */
    "target": "es2016" /* 생성된 JavaScript의 JavaScript 언어 버전을 설정하고 호환되는 라이브러리 선언을 포함합니다. */,
    // "lib": [],                                        /* 대상 런타임 환경을 설명하는 번들 라이브러리 선언 파일 세트를 지정합니다. */
    // "jsx": "preserve",                                /* 생성될 JSX 코드를 지정합니다. */
    // "experimentalDecorators": true,                   /* 레거시 실험적 데코레이터에 대한 실험적 지원을 활성화합니다. */
    // "emitDecoratorMetadata": true,                    /* 소스 파일에서 데코레이터가 적용된 선언에 대한 디자인-타입 메타데이터를 생성합니다. */
    // "jsxFactory": "",                                 /* React JSX 생성을 대상으로 할 때 사용되는 JSX 팩토리 함수를 지정합니다(예: 'React.createElement' 또는 'h'). */
    // "jsxFragmentFactory": "",                         /* React JSX 생성을 대상으로 할 때 조각에 사용되는 JSX Fragment 참조를 지정합니다(예: 'React.Fragment' 또는 'Fragment'). */
    // "jsxImportSource": "",                            /* 'jsx: react-jsx*' 사용 시 JSX 팩토리 함수를 가져오는데 사용되는 모듈 지정자를 지정합니다. */
    // "reactNamespace": "",                             /* 'createElement'를 호출하는 객체를 지정합니다. 'react' JSX 생성을 대상으로 할 때만 적용됩니다. */
    // "noLib": true,                                    /* 기본 lib.d.ts를 포함한 모든 라이브러리 파일의 포함을 비활성화합니다. */
    // "useDefineForClassFields": true,                  /* ECMAScript 표준을 준수하는 클래스 필드를 생성합니다. */
    // "moduleDetection": "auto",                        /* 모듈 형식 JS 파일을 감지하는 방법을 제어합니다. */

    /* 모듈 */
    "module": "commonjs" /* 생성되는 모듈 코드를 지정합니다. */,
    // "rootDir": "./",                                  /* 소스 파일 내의 루트 폴더를 지정합니다. */
    // "moduleResolution": "node10",                     /* TypeScript가 지정된 모듈 지정자로부터 파일을 찾는 방법을 지정합니다. */
    // "baseUrl": "./",                                  /* 비상대적 모듈 이름을 해석하기 위한 기본 디렉토리를 지정합니다. */
    // "paths": {},                                      /* 추가 조회 위치로 가져오기를 다시 매핑하는 항목 집합을 지정합니다. */
    // "rootDirs": [],                                   /* 모듈을 해석할 때 여러 폴더를 하나로 취급할 수 있게 합니다. */
    // "typeRoots": [],                                  /* './node_modules/@types'처럼 작동하는 여러 폴더를 지정합니다. */
    // "types": [],                                      /* 소스 파일에서 참조되지 않고도 포함될 타입 패키지 이름을 지정합니다. */
    // "allowUmdGlobalAccess": true,                     /* 모듈에서 UMD 전역에 접근할 수 있게 합니다. */
    // "moduleSuffixes": [],                             /* 모듈을 해석할 때 검색할 파일 이름 접미사 목록입니다. */
    // "allowImportingTsExtensions": true,               /* TypeScript 파일 확장자로 가져오기를 허용합니다. '--moduleResolution bundler'와 '--noEmit' 또는 '--emitDeclarationOnly' 중 하나가 설정되어야 합니다. */
    // "rewriteRelativeImportExtensions": true,          /* 출력 파일에서 상대 가져오기 경로의 '.ts', '.tsx', '.mts', '.cts' 파일 확장자를 JavaScript 등가물로 다시 작성합니다. */
    // "resolvePackageJsonExports": true,                /* 패키지 가져오기를 해석할 때 package.json 'exports' 필드를 사용합니다. */
    // "resolvePackageJsonImports": true,                /* 가져오기를 해석할 때 package.json 'imports' 필드를 사용합니다. */
    // "customConditions": [],                           /* 가져오기를 해석할 때 리졸버별 기본값 외에 설정할 조건입니다. */
    // "noUncheckedSideEffectImports": true,             /* 부작용이 있는 가져오기를 확인합니다. */
    // "resolveJsonModule": true,                        /* .json 파일 가져오기를 활성화합니다. */
    // "allowArbitraryExtensions": true,                 /* 선언 파일이 있는 경우 모든 확장자를 가진 파일의 가져오기를 활성화합니다. */
    // "noResolve": true,                                /* TypeScript가 프로젝트에 추가해야 하는 파일 수를 확장하는 'import', 'require' 또는 '<reference>'를 허용하지 않습니다. */

    /* JavaScript 지원 */
    // "allowJs": true,                                  /* JavaScript 파일을 프로그램의 일부로 허용합니다. 'checkJS' 옵션을 사용하여 이러한 파일에서 오류를 가져옵니다. */
    // "checkJs": true,                                  /* 타입 검사된 JavaScript 파일에서 오류 보고를 활성화합니다. */
    // "maxNodeModuleJsDepth": 1,                        /* 'node_modules'에서 JavaScript 파일을 검사하는데 사용되는 최대 폴더 깊이를 지정합니다. 'allowJs'와 함께만 적용됩니다. */

    /* 생성 */
    // "declaration": true,                              /* 프로젝트의 TypeScript 및 JavaScript 파일에서 .d.ts 파일을 생성합니다. */
    // "declarationMap": true,                           /* d.ts 파일에 대한 소스맵을 생성합니다. */
    // "emitDeclarationOnly": true,                      /* JavaScript 파일이 아닌 d.ts 파일만 출력합니다. */
    // "sourceMap": true,                                /* 생성된 JavaScript 파일에 대한 소스맵 파일을 생성합니다. */
    // "inlineSourceMap": true,                          /* 생성된 JavaScript 안에 소스맵 파일을 포함합니다. */
    // "noEmit": true,                                   /* 컴파일에서 파일 생성을 비활성화합니다. */
    // "outFile": "./",                                  /* 모든 출력을 하나의 JavaScript 파일로 번들링하는 파일을 지정합니다. 'declaration'이 true인 경우 모든 .d.ts 출력도 번들링하는 파일을 지정합니다. */
    // "outDir": "./",                                   /* 모든 생성된 파일의 출력 폴더를 지정합니다. */
    // "removeComments": true,                           /* 주석 생성을 비활성화합니다. */
    // "importHelpers": true,                            /* 파일별로 포함하는 대신 tslib에서 헬퍼 함수를 프로젝트당 한 번만 가져올 수 있게 합니다. */
    // "downlevelIteration": true,                       /* 반복에 대해 더 호환되지만 자세하고 성능이 낮은 JavaScript를 생성합니다. */
    // "sourceRoot": "",                                 /* 디버거가 참조 소스 코드를 찾을 루트 경로를 지정합니다. */
    // "mapRoot": "",                                    /* 디버거가 생성된 위치 대신 맵 파일을 찾아야 하는 위치를 지정합니다. */
    // "inlineSources": true,                            /* 생성된 JavaScript 내의 소스맵에 소스 코드를 포함합니다. */
    // "emitBOM": true,                                  /* 출력 파일 시작 부분에 UTF-8 바이트 순서 표시(BOM)를 생성합니다. */
    // "newLine": "crlf",                                /* 파일을 생성할 때 사용할 개행 문자를 설정합니다. */
    // "stripInternal": true,                            /* JSDoc 주석에 '@internal'이 있는 선언의 생성을 비활성화합니다. */
    // "noEmitHelpers": true,                            /* 컴파일된 출력에서 '__extends'와 같은 사용자 정의 헬퍼 함수 생성을 비활성화합니다. */
    // "noEmitOnError": true,                            /* 타입 검사 오류가 보고되면 파일 생성을 비활성화합니다. */
    // "preserveConstEnums": true,                       /* 생성된 코드에서 'const enum' 선언 삭제를 비활성화합니다. */
    // "declarationDir": "./",                           /* 생성된 선언 파일의 출력 디렉토리를 지정합니다. */

    /* 상호운용성 제약 */
    // "isolatedModules": true,                          /* 각 파일을 다른 가져오기에 의존하지 않고 안전하게 트랜스파일할 수 있도록 보장합니다. */
    // "verbatimModuleSyntax": true,                     /* 타입 전용으로 표시되지 않은 가져오기나 내보내기를 변환하거나 생략하지 않고 'module' 설정에 기반한 출력 파일 형식으로 작성되도록 합니다. */
    // "isolatedDeclarations": true,                     /* 다른 도구가 선언 파일을 쉽게 생성할 수 있도록 내보내기에 충분한 주석을 요구합니다. */
    // "allowSyntheticDefaultImports": true,             /* 모듈에 기본 내보내기가 없을 때 'import x from y'를 허용합니다. */
    "esModuleInterop": true /* CommonJS 모듈 가져오기를 쉽게 지원하기 위한 추가 JavaScript를 생성합니다. 타입 호환성을 위해 'allowSyntheticDefaultImports'를 활성화합니다. */,
    // "preserveSymlinks": true,                         /* 심링크를 실제 경로로 해석하는 것을 비활성화합니다. node의 동일한 플래그와 상관관계가 있습니다. */
    "forceConsistentCasingInFileNames": true /* 가져오기에서 대소문자가 올바른지 확인합니다. */,

    /* 타입 검사 */
    "strict": true /* 모든 엄격한 타입 검사 옵션을 활성화합니다. */,
    // "noImplicitAny": true,                            /* 암시적 'any' 타입이 있는 표현식과 선언에 대한 오류 보고를 활성화합니다. */
    // "strictNullChecks": true,                         /* 타입 검사 시 'null'과 'undefined'를 고려합니다. */
    // "strictFunctionTypes": true,                      /* 함수를 할당할 때 매개변수와 반환 값이 하위 타입 호환되는지 확인합니다. */
    // "strictBindCallApply": true,                      /* 'bind', 'call', 'apply' 메서드의 인수가 원본 함수와 일치하는지 확인합니다. */
    // "strictPropertyInitialization": true,             /* 선언되었지만 생성자에서 설정되지 않은 클래스 속성을 확인합니다. */
    // "strictBuiltinIteratorReturn": true,              /* 내장 반복자는 'any' 대신 'undefined'의 'TReturn' 타입으로 인스턴스화됩니다. */
    // "noImplicitThis": true,                           /* 'this'가 'any' 타입을 가질 때 오류 보고를 활성화합니다. */
    // "useUnknownInCatchVariables": true,               /* catch 절 변수를 기본적으로 'any' 대신 'unknown'으로 설정합니다. */
    // "alwaysStrict": true,                             /* 항상 'use strict'가 생성되도록 보장합니다. */
    // "noUnusedLocals": true,                           /* 읽히지 않은 지역 변수가 있을 때 오류 보고를 활성화합니다. */
    // "noUnusedParameters": true,                       /* 함수 매개변수가 읽히지 않을 때 오류를 발생시킵니다. */
    // "exactOptionalPropertyTypes": true,               /* 선택적 속성 타입을 작성된 그대로 해석하며 'undefined'를 추가하지 않습니다. */
    // "noImplicitReturns": true,                        /* 함수에서 명시적으로 반환하지 않는 코드 경로에 대한 오류 보고를 활성화합니다. */
    // "noFallthroughCasesInSwitch": true,               /* switch 문에서 폴스루 케이스에 대한 오류 보고를 활성화합니다. */
    // "noUncheckedIndexedAccess": true,                 /* 인덱스를 사용하여 접근할 때 타입에 'undefined'를 추가합니다. */
    // "noImplicitOverride": true,                       /* 파생 클래스의 재정의 멤버가 override 수정자로 표시되어야 함을 보장합니다. */
    // "noPropertyAccessFromIndexSignature": true,       /* 인덱스 타입으로 선언된 키에 대해 인덱스 접근자 사용을 강제합니다. */
    // "allowUnusedLabels": true,                        /* 사용되지 않은 레이블에 대한 오류 보고를 비활성화합니다. */
    // "allowUnreachableCode": true,                     /* 도달할 수 없는 코드에 대한 오류 보고를 비활성화합니다. */

    /* 완전성 */
    // "skipDefaultLibCheck": true,                      /* TypeScript와 함께 포함된 .d.ts 파일의 타입 검사를 건너뜁니다. */
    "skipLibCheck": true /* 모든 .d.ts 파일의 타입 검사를 건너뜁니다. */
  }
}
```

### 7.1. include 옵션

- 여러 개의 ts 파일을 한번에 js 파일로 만들기

```json
{
  "include": ["src/**/*"]
}
```

### 7.2. target 옵션

- js 가 만들어진 버전 지정
- ECMAScript 5 버전으로 js 생성

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "es5"
  }
}
```

- 최신 ECMAScript 버전으로 생성

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext"
  }
}
```

### 7.3. module 옵션

- 파일 간의 겹침 방지 (파일 기반의 Scope 관리)
- commonjs 방식(Node.js 의 Default 방식)
- src/hello.ts 생성

```ts
// hello.ts
export const hello = () => {
  console.log("안녕");
};
```

```ts
// index.ts
import { hello } from "./hello";
hello();
```

```json
// "module": "commonjs"
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs"
  }
}
```

```ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
(0, hello_1.hello)();
```

- module 을 ESNEXT 로 설정

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext"
  }
}
```

```js
import { hello } from "./hello";
hello();
```

### 7.5. outDir 옵션

- js 파일이 특정 폴더에 보관되길 지정

```json
// 보통 dist 폴더에 js 파일 저장함
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist"
  }
}
```

### 7.6. strict 옵션

- 얼마나 엄격하게 문법 체크를 할 것인가?
- 데이터 타입의 종류도 체크할 것인가?

```json
// strict 이 false 면 ts의 장점을 다 버리는 거임
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist",
    "strict": true
  }
}
```

- msg 타입 오류 체크됨

```ts
// 오류 발생
export const hello = (msg) => {
  console.log(msg);
};
// 오류 X
export const hello = (msg: string | number) => {
  console.log(msg);
};
```

### 7.7. moduleDetection 옵션

- `ts 파일간 중복 선언 에러` 제어
- TypeScript 는 기본적으로 전역 모듈로 인식함.

```json
// 각 파일에 변수명이 같아도 OK
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force"
  }
}
```

## 8. tsconfing.json 정리

- React 프로젝트, Next 프로젝트, Express 프로젝트, Nest 프로젝트 등
- 모두 TypeScript 로 작성 권장됨.
- tsconfig.json 이 상당히 중요합니다.

# Primitive 타입

- 기본적인 데이터 종류
- 변수명 : DataType = 값

## 1. number 타입

```ts
const num_1 = 1;
const num_2: number = 2;
const num_3: number = 22.2;
const num_4: number = -100;
const num_5: number = Infinity;
const num_6: number = -Infinity;
const num_7: number = NaN;
```

## 2. string 타입

```ts
const str_1 = "안녕";
const str_2: string = "안녕";
let str_3: string = "밥밥밥";
const str_4: string = `백틱`;
```

## 3. boolean 타입
- 프로그래밍에서 false 처럼 사용되는 값(falshy 한 값)
- 아래의 경우는 falshy 하다고 판단하여 false 로 인정
```txt
false
""         비어있는 문자열은 if문 등에 사용 할때 false 로 판단
0          숫자 0은 if문 등애 사용 할때 false 로 판단
null       if문 등애 사용 할때 false 로 판단
undefined  if문 등애 사용 할때 false 로 판단
NaN        if문 등애 사용 할때 false 로 판단

```

```ts
const bool_1 = false;
const bool_2: boolean = false;
let bool_3: boolean = false;
```

## 4. null 타입

- 프로그래머가 변수에 `값이 비었음`을 표현

```ts
const null_1 = null;
let null_2: null = null;
```

## 5. undefined 타입

- 프로그램이 초기값으로 세팅함
- 값이 없다. 즉, 정의가 안되어 있다.

```ts
let user: undefined = undefined;
```

## 6. 만약 강제로 null 을 넣는다면

```ts
// strictNullChecks: false 안하면 타입 에러 발생
let count: number = null;
```

- 그러나 null 은 어디든 대입 가능해야 함

```json
{
  "include": ["src/**/*"],
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "outDir": "./dist",
    "strict": true,
    "moduleDetection": "force",
    "strictNullChecks": false // 여기서 허용함
  }
}
```

## 7. 오로지 하나의 값만 보관하는 법.

- const 를 활용 추천

```ts
// 그냥 const 쓰지
let a: 1 = 1;
let b: "안녕" = "안녕";
let c: true = true;
```

## 8. 정말 `중복되지 않은 유일한 값`

```ts
const sy = Symbol("age");
const syS: Symbol = Symbol("age");
```

## 9. 기본형 데이터 종류 정리 (JS 에도 존재)

- 총 7가지 존재함.

```ts
const strVar: string = "string";
const numVar: number = 0;
const boolVar: boolean = true;
const symVar: symbol = Symbol("age");
const nullVar: null = null;
const undeVar: undefined = undefined;
const bigIntVar: BigInt = BigInt(99999999);
```

## 10. 오로지 Typescript 에만 존재하는 데이터타입

### 10.1. any 타입

- any 는 아무 값이나 대입할 수 있다.
- 치트키 라고 생각해 보자.
- any 는 타입체크를 포기하겠다. (ts 장점 다버림)
- 과하게 사용하지말고 적절하게 사용 권장

```ts
let anyVar: any = 100;
anyVar = "ㅎㅇ";
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = Symbol("age");
anyVar = BigInt(99999999999999);
let testNum: Numver = anyVar;

// 타입스크립트 실제 값의 종류를 따지는 것이 아니다.
// 데이터를 할당할때(대입할때) 데이트 종류만 비교한다.
let testNum: number = anyVar;
```

- `any 타입은 어떤 다른 타입에도 값을 담을 수 있다`
- `any 타입은 어떤 다른 타입에도 값을 할당 수 있다`
- `any 타입은 어떤 다른 타입에도 값을 대입할 수 있다`

### 10.2. unknown 타입

- 데이터 종류를 모르겠다. (마치 any 처럼)
- 값으로 전달은 못함. (any 와는 다르게)

```ts
let unknownVar: unknown = 100;
unknownVar = "ㅎㅇ";
unknownVar = true;
unknownVar = null;
unknownVar = undefined;
unknownVar = Symbol("age");
unknownVar = BigInt(99999999999999);

// 전달시 unknown 은 타입오류 발생
let testNum: number = unknownVar;
```

### 10.3. never 타입
- 에러 전용
- 어떤 것도 담을 수 없고,
- 어떤 곳에도 전달 수도 없는 타입
- 절대로 결과가 나오지 않는 함수의 리턴 데이터 종류
- 마지막 결과로 에러를 던질 때

```ts
// 모두 에러 입니다.
let neverVar1: never = 100;
let neverVar2: never = true;
let neverVar3: never = undefined;
let neverVar4: never = null;
```

# 응용 해보기

## 1. 회원가입을 팔요로 한 헝목명과 데이터를 정의해 보자.

- 필요로 한 항목을 우선 정리해 보자.
- 무엇을 보관하고 싶은지 고민해 보자.

### 1단계

```txt
- 사용자 정보를 보관하고 싶다.
  1. 이름
  2. 주민번호 앞자리 6개
  3. 전화번호
  4. 주소
  5. 이메일
  6. 아이디
  7. 비밀번호
  8. 개인정보동의
```

### 2단계

```txt
- 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
  1. 이름 : 글자
  2. 주민번호 앞자리 6개 : 글자
  3. 전화번호 : 글자
  4. 주소 : 글자
  5. 이메일 : 글자
  6. 아이디 : 글자
  7. 비밀번호 : 글자
  8. 개인정보동의 : 불린
```

### 3단계

- 코딩으로 표현하기 (변수명 정하기).

```js
//- 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
//  1. 이름 : 글자
let userName;

//  2. 주민번호 앞자리 6개 : 글자
let juminNum;

//  3. 전화번호 : 글자
let phoneNum;

//  4. 주소 : 글자
let address;

//  5. 이메일 : 글자
let email;

//  6. 아이디 : 글자
let id;

//  7. 비밀번호 : 글자
let pass;

//  8. 개인정보동의 : 불린
let policyCheck;
```

### 4단계
- 각 항목의 초기값 작성하기
```js
//- 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
//  1. 이름 : 글자
let userName = "";

//  2. 주민번호 앞자리 6개 : 글자
let juminNum = "";

//  3. 전화번호 : 글자
let phoneNum = "";

//  4. 주소 : 글자
let address = "";

//  5. 이메일 : 글자
let email = "";

//  6. 아이디 : 글자
let id = "";

//  7. 비밀번호 : 글자
let pass = "";

//  8. 개인정보동의 : 불린
let policyCheck = false;
```

### 5단계
- 타입스크립트로 고려해 보기
```ts
//- 각 사용자 정보의 데이터 종류 즉 타입을 고민해 보자.
//  1. 이름 : 글자
let userName: string = "";

//  2. 주민번호 앞자리 6개 : 글자
let juminNum: string = "";

//  3. 전화번호 : 글자
let phoneNum: string = "";

//  4. 주소 : 글자
let address: string = "";

//  5. 이메일 : 글자
let email: string = "";

//  6. 아이디 : 글자
let id: string = "";

//  7. 비밀번호 : 글자
let pass: string = "";

//  8. 개인정보동의 : 불린
let policyCheck: boolean = false;
```

# 변수명 생성법(명명법, 네이밍 규칙(컨벤션) 적용하기)
- `명사` 그리고 영문을 권장합니다.
```txt
1. 특수 기호 중 $ 와 _는 사용가능함.
2. 숫자로 시작할 수 없음.
3. 공백은 포함 못함
4. 키워드는 사용못함(if, for, switch 등)
```
- 카멜(Camel Case) 명명법
```txt
1. 가장 많이 사용하는 방식으로 소문자로 시작함
2. 새 단어는 대문자
```
- 스네이크(Snake Case) 명명법
```txt
1. 모두 소문자로 작성하며 단어마다 _기호가 붙는다.
let user_name
```
- 케밥(Kebap Case) 명명법
1. 모두 소문자로 각성
2. 단어 사이에 -기호를 붙임
3. 케밥 케이스는 코딩에 사용 못함(주로 css 클래스명으로 활용)

- 파스칼(Pascal Case) 명명법
```txt
1. 대문자로 시적함
2. 새로운 단어는 대문자로 시작
3. 의미가 다릅니다. 관례쌍(개발자간의 엄묵적 약속)
- 객체 아닐까?
- 객체를 만드는 객체생성자 함수 아냐?
- 객체를 생성하는 클래스 아냐?

let PerSon;
let Swiper;
let UserInfo;
```

- 상수(Const Case) 명명법
```txt
1. 전체가 대문자 입니다.
2. 상수라고 해서 변하지 않는 값이라고 유추합니다.
const PI = 3.142;
const APP_NAME = "TODO
```
