# `TS` 기본지식

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
라이브러리의 소스코드를 보는게 아니라, __라이브러리의 Type들을 분석하고 이해하고 응용해 수정한다.__ <br/>
Typescript는 최종적으로 __Javascript로 변환__ 된다. <br/>
( 즉, Typescript로 코드를 짜도 결국엔 컴파일되어 Javascript로 변환된다. 변환되어도 코드에 문제가 없어야한다. )

1. `ts`코드가 컴파일되어 `js`코드로 변환된다. ( 컴파일러 : `tsc` )
2. 그 후, 컴파일 된 파일들을 Node나 브라우저에서 돌릴 수 있다.

> 🌟 __TS파일을 실행 하는 게 아니라, 결과물인 JS를 실행해야한다.__

<br/>

## 컴파일러 TSC의 옵션

- TS코드를 JS코드로 어떻게 바꿀지 __옵션__ 에 따라 결과물이 달라진다.
- `tsconfig.json`에 작성한 옵션에 따라 tsc컴파일러가 TS코드를 JS로 바꿔준다.
  - 인풋(ts), 아웃풋(js) 모두 영향이 끼치므로 `tsconfig.json`파일의 옵션을 잘 확인한다.
  - js는 매번 업그레이드 되기 때문에 만약 예를 들면, ts가 인터넷익스플로우 지원할지 말지를 결정하면 변환해준다.
- 코드자체의 __타입 검사해주는 역할__ 을 한다.
- ts코드를 js코드로 변환해주는 것과 현재 작성하는 코드의 타입을 검사해주는 것은 __별개__ 이다.
  - 즉, __타입검사에 실패했지만, js코드에선 문제되지 않는 코드이기 때문에 변환__ 은 해준다.
  - __실무에선 Type이 하나라도 틀리면 사용하면 안된다.__

## 설치
>
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
- `"strict" : true,` __무조건 true__ ( false인 경우, ts를 쓰는 의미가 없다. )
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

# TS 문법

- `type`을 붙혀주는 행위를 __"타이핑"__ 이라고 한다.
- `typescript`는 `javascript`에 __변수, 매개변수, return값 에 타입을 붙혀놓은 것이 타입스크립트__ 이다.
