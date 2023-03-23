# 진희도
## 2023-03-16(3주차)

# 오늘의 강의 내용 
### 초코레이티 페키지 매니지먼트, node.js install, npm install
### 리액트 개념 정리 복잡한 사이트를 쉽게 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트 개념 ! <br><br>
# 리액트의 장점 
1. 빠른 업데이트와 렌더링 속도 이것을 가능하게 하는 것이 바로 Virtual DOM입니다. 
2. DOM(Document Object Model)이란 XML, HTML문서의 각 항목을 계층으로 표현하여<br> 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이것은 W3C 표준입니다. 
3. Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법입니다.
4. DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링 합니다.

## 컴포넌트 기반 구조 
1. 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
2. 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
3. 그래서 리액트로 개발을 하다보면 레고 블럭을 조립나는 것 처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
4. 아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조입니다. 재사용성이 뛰어납니다.<br><br>

## 재사용성
1. 반복적인 작업을 줄여주기 때문에 생산성을 높여줍니다.
2. 또한 유지보수가 용이합니다.
3. 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

## 든든한 지원군
* 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다

## 활발한 지식 공유 & 커뮤니티

## 모바일 앱 개발 가능
* 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스플랫폼 모바일앱을 개발할 수 있습니다.
<hr>

# 리액트의 단점
<hr>

## 방대한 학습량
* 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

## 높은 상태 관리 복잡도
* state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.


# 작성코드 : 
### vscode 터미널에서 "npm install npx -g" -> "npx -v" -> "npx create-react-app my app" -> y -> "cd my-app" -> "npm start"
### npx생성및 react-app 생성 

### 커밋 완료및 복습 완료 오늘 수업 끝 
<br><br>
<hr>

# 2023/03/23 4주차

## JSX란?
1. JSX는 자바스크립트의 확장 문법이다. <br>
2. JSX는 HTML과 비슷한 문법을 가지고 있다. <br>
## const element = <a href ="https://www.reactjs.org">link</a>; 
* 중괄호를 사용하여 어트리뷰트에 자바스크립트 표현식을 삽입할 수도 있음

## Babel은 JSX를 React.createElement() 호출로 컴파일한다.

# JSX의 역활
1. JSX는 내부적으로 XML/THML코드를 자바스크립트로 변환합니다
2. React가 createElement함수를 삳용하여 자동으로 자바스크립트로 변환합니다.
3. 만일 JS작업할경우 직접 createElement함수를 사용해야 합니다.
4. 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여주는 역할을 합니다.

# JSX의 장점
1. 코드가 간결해 집니다.
2. 가독성이 향상 됩니다.
3. Injection Attacc이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.


# JSX사용법
1. 모든 자바스크립트 문법을 지원합니다.
2. 자바스크립트 문법에 XMl과 HTML을 섞어서 사용합니다.
3. 아래 코드의 2번 라인처럼 섞어서 사용합니다.
4. 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
```javascript
const name = '소플';<br>
const element = <h1>안녕, {name}</h1>;<br>

ReactDom.render(<br>
    element,<br>
    document.getElementById('root');<br>
)
```
5. 만일 태그의 속성값을 넣고 싶으면 다음과 같이 사용합니다.



