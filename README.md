nvm use 14.18.3
cd 1-vanilla
npx lite-server


리액트 앱을 이루는 최소단위는 리액트 엘리먼트(를 ReactDOM이 가상 돔으로 만들어 실제 돔에 반영해줌). -> 리액트 라이브러리의 React.createElement()로 만들 수 있음.

바벨이 jsx문법 사용하게 도와줌.



# JSX
> 리액트로 UI 만들기는 JSX(자바스크립트 확장 문법)로 만든다. 가독성을 높여준다.

> 바벨에 의해 변환된다.

> 소괄호로 묶음
```js
const element = (
<header>
  <h2 class="container">검색</h2>
</header>
);

```
> 카멜케이스만 사용.
> class 대신 className
