# 0. `TS` 기본지식

## `Typescript`를 공부하는 이유

1. `Javascript`보다 안정성이 있기 때문이다.
2. 즉, 에러가 덜 난다.
3. 그렇다고 `Javascript`의 모든 엘러를 잡아주진 않지만, 실수들을 잡을 수 있다.

<br/>

## `Typescript`의 단점

- `Javascript`보다 자유도를 잃을 수 있다.
- 하지만, 자유도 보다 안정성이 우선이다.

<br/>

## `Javascript`를 `Typescrip`t로 전환

- `Javascript`에 명시적인 `Type`은 없지만, 직접 코드를 작성하는 사람들은 머릿속에 `Type`에 대한 개념을 생각하고 있기 때문에 어렵지 않다.
- `Typescript`의 문법만 생각해서 공부한다면 수월하다.

<br/>

## 공부순서

> 강좌만 듣지말고, 꼭 공식문서를 같이 읽으면서 공부하자.

[공식문서 핸드북](https://typescript-kr.github.io/pages/the-handbook.html)

1. `Typescript`의 공식문서 핸드북, 가이드를 꼭 읽어라 !
2. 버전에 대해 한번 훑어봐라 !
   ( 1.1버전부터 최신까지 `Typescript`가 어떻게 발전해 왔는지를 확인한다. + 신기능 )
3. 그러면서, 강좌를 듣는것이 시너지가 대. 폭. 발.

<br/>

## `Typescript`를 할 때 알아야 단 한가지

> 🌟🌟🌟<br/>
> 라이브러리의 소스코드를 보는게 아니라, **라이브러리의 Type들을 분석하고 이해하고 응용해 수정한다.** <br/>
> Typescript는 최종적으로 **Javascript로 변환** 된다. <br/>
> ( 즉, Typescript로 코드를 짜도 결국엔 컴파일되어 Javascript로 변환된다. 변환되어도 코드에 문제가 없어야한다. )

1. `ts`코드가 컴파일되어 `js`코드로 변환된다. ( 컴파일러 : `tsc` )
2. 그 후, 컴파일 된 파일들을 Node나 브라우저에서 돌릴 수 있다.

> 🌟 **TS파일을 실행 하는 게 아니라, 결과물인 JS를 실행해야한다.**

<br/>

## 컴파일러 TSC의 옵션

- TS코드를 JS코드로 어떻게 바꿀지 **옵션** 에 따라 결과물이 달라진다.
- `tsconfig.json`에 작성한 옵션에 따라 tsc컴파일러가 TS코드를 JS로 바꿔준다.
  - 인풋(ts), 아웃풋(js) 모두 영향이 끼치므로 `tsconfig.json`파일의 옵션을 잘 확인한다.
  - js는 매번 업그레이드 되기 때문에 만약 예를 들면, ts가 인터넷익스플로우 지원할지 말지를 결정하면 변환해준다.
- 코드자체의 **타입 검사해주는 역할** 을 한다.
- ts코드를 js코드로 변환해주는 것과 현재 작성하는 코드의 타입을 검사해주는 것은 **별개** 이다.
  - 즉, **타입검사에 실패했지만, js코드에선 문제되지 않는 코드이기 때문에 변환** 은 해준다.
  - **실무에선 Type이 하나라도 틀리면 사용하면 안된다.**

## 설치

> vscode와 node가 설치 되어 있어야한다.

1. 이렇게 되면 node프로젝트가 되는 것이다.<br/>
   node프로젝트의 설정들을 모아둔 파일이 `package.json`이다.

```
npm init -y
yarn init -y
```

2. `typescript` 설치

- 노드에서 제공하는 `npm, yarn`패키지 안에서 `typescript`를 사용하는 것이다.
- `typescript`를 설치하면 `tsc`명령어를 사용할 수 있다.

```
npm i typescript
yarn add typescript
```

3. `tsc`생성하기

- `tsconfig.json`파일이 생성된다.

```
/* npm */
npx tsc --init

/* yarn */
tsc --init
```

4. `tsconfig.json` 옵션

- `"allowJs" : true,` js, ts를 동시에 사용할 수 있다.
- `"strict" : true,` **무조건 true** ( false인 경우, ts를 쓰는 의미가 없다. )
- `"target" : es2016,` 코드의 버전
- `"forceConnsistentCasingInfileNames" : treu,` 대소문자 꼭 지켜 `import`할 수 있도록 하는 옵션이다.
  - ts에서 파일을 `import`해 올 수 있는데, 윈도우에선 대소문자 구별을 잘 하지 않고 파일을 가져와 리눅스, 맥에서는 에러가 발생한다.
- `"skiplibCheck": true` 라이브러리 체크를 건너뛰기 ( 실제 사용하는것만 체크하고 나머지는 건너뛰기 )

- `esModuleInterop: true, strict: true` 이 두개만 주로 켜놓는다.

5. 단순 파일 검사

```
/* npm */
npx tsc --noEmit
/* yarn */
tsc --noEmit
```

6. `ts`에서 `js`코드 변환 ( js파일 생성 )

```
npx tsc
tsc
```

<br/>

---

<br/>

# 1. `TS` 문법

- `type`을 붙혀주는 행위를 **"타이핑"** 이라고 한다.
- `typescript`는 `javascript`에 **변수, 매개변수, return값 에 타입을 붙혀놓은 것이 타입스크립트** 이다.
- 반드시, 이름( 변수, 매개변수, return ) 뒤에 `:`후 타입을 적어주어야 한다.
- 타입은 **소문자** 로 적어야한다.

## 기본 문법과 타입종류

```typescript
const a: string = "123";
const b: number = 123;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;

// 입문강좌이기 때문에 다루지 않음.
const g: symbol = Symbol.for("abc"); /* es2015 문법 */
const h: bigint = 1000000n;
```

<br/>

**모든 타입이 다 되는 타입 `any`**

- `any`를 사용하게 되면 타입스크립트를 사용하는 의미가 없다.
- 그러므로, `TypeScript`의 주 목적은 `any`를 없애는 것을 목표로 한다.

<br/>

## 함수 타이핑 [자리 조심❗️]

```typescript
/* 기본 함수의 타이핑 */
function add(x: number, y: number): number {
  return x + y;
}
/* 화살표 함수의 타이핑 */
const add: (x: number, y: number) => number = (x, y) => x + y;
// : (x: number, y: number) => number 이 부분은 타입을 뜻한다.

/* 타입 선언 */
type Add = (x: number, y: number) => number;
/* 선언한 타입 함수에 사용하기 */
const add: Add = (x, y) => x + y;

/**
 * 심화과정 : 또 다른 타입 선언 방법
   ( `interface`를 통해서 함수의 타입을 정의해주는 방법 ) */
interface Add {
  (x: number, y: number): number;
}
```

- x: number
- y: number
- function add: number

### 함수 타입 읽는 법

- `:`을 찾아 그 뒤를 지웠을 때, `Javascript`로 읽힐 수 있는 함수를 생각하면 된다.
- 지운 부분이 그 함수의 타입임을 알 수 있다.

> `:`을 기준으로 지운 부분을 따로 `type`을 지정할 수 있는 방법이 있다. <br /> > `type`으로 타입을 선언하는 방식을 **`type alias` ( 타입 애일리어스 )** 라고 한다.

<br />

**❗️ 조심해야 할 부분 ❗️**

- `function`함수와 화살표함수의 `return`값의 `type`위치를 조심해야한다.
- `function` 함수에서는 `()`매개변수 바로 뒤에 `:`(클론)이다.
- 화살표 함수에서는 `return`값이 `=>`화살표 뒤에 나온다.

<br/>

## 객체 타이핑

> 명심하자 !<br/>
> `Typescript`에서는 `type`자리가 없어도 말이 되는 `Javascript`코드여야 한다.

```typescript
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
```

<br/>

## 배열 타이핑

```typescript
/* 기본 */
const arr: string[] = ["123", "456", "789"];
const arr2: number[] = [123, 456];

/* 제네릭 */
const arr3: Array<number> = [123, 456];

/* 튜플 */
const arr4: [number, number, string] = [123, 456, "hello"];
const arr5: [number, number, string] = [123, 456, "hello", "wow"]; // error
```

- 기본 배열 타이핑
  - 길이제한이 없이 무제한으로 값을 입력할 수 있다.
- 제네릭
  - `<>`(꺽새)가 들어간 타입은 제네릭이구나 정도로 알아두자.
- **❗️튜플❗️ : 길이가 고정된 배열**
  - 길이가 제한되어 있다.
  - 해당하는 하나하나의 값의 타입을 지정해주면 된다.

<br/>

## 고정된 타입 : 원시값

```typescript
const a: true = true;
const b: true = false; // error

const c: 5 = 5;
const d: 5 = 6; // error
```

- 어떠한 타입이 아니라 타입에 원시값을 지정하면 **고정된 원시값만 지정** 할 수 있다.

### 고정된 원시값이 필요한 이유

- 상수인 `const`는 바뀔 일이 없으니 타입을 지정할 필요없이 정확한 고정된 원시값을 적어주기 위해서다.
