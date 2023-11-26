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


## 템플릿 언어
리액트에서는 JSX(JavaScript XML)을 사용한다.
자바스크립트의 확장 문법.

- 카멜케이스
class -> className
placeholder -> placeHolder
autofocus -> autoFocus

- 모두를 감싸는 하나의 부모노드가 있어야 함. (루트 노드가 여러개일 경우)
```html
<>
  <header>
    <h2 className="container">검색</h2>
  </header>
  <div className="container">
    <form id="search-form-view">
      ...
      </form>
  </div>
</>
```
- 이벤트 핸들러
onChange={}
리액트에서 이벤트 처리하는 핸들러 이름은 접두사로 handle을 넣는다.
ex) handleChangeInput


- 조건부 렌더링
1. 엘리먼트 변수를 사용하는 방식
2. 삼항 연산자를 사용하는 방식
{this.state.searchKeyword.length > 0 ? <button type="reset" className="btn-reset"></button> : null }

3. && 연산자를 사용하는 방식
{this.state.searchKeyword.length > 0 && (<button type="reset" className="btn-reset"></button>)}


## setState
비동기로 동작한다.
컴포넌트 갱신 요청.

## li key
li에 key값 설정해야 함
<li key={item.id}>
보통은 id값을 넣는다.

키값으로 index를 넣게 되면(두번째 파라미터 값으로도 넣어줘야 함.), 성능 저하나 화면이 갱신되지 않는 문제 내포.