# 진희도

# 5주차 수업

## 엘리먼트에 대해 알아보기
1. 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.
* 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다.

### 그렇다면 리액트 엘리먼트와 DOM엘리먼트는 어떤차이가 있을가요?
* 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
*
2. 엘리먼트의 생김새
* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다
* 컴포넌트, 속성 및 내부의 모두 children을 포함하는 일반 JS객체입니다.
* 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

### 버튼을 나타내기 위한 엘리먼트의 예를 보겠습니다 type에는 html태그 이름, props속성 나타냅니다.


```javascript
{
    type : 'button',
    prorps: {
        className : 'bg-green',
        children:{
            type:'b',
            props:{
                children:'Hello, element!'
            }
        }
    }
}

```
* 리액트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.
* 역시 자바스크립트 객체 입니다.
```javascript
    {
        type : button,
        props:{
            color : 'green',
            children : 'Hello,element'
        }
    }
```

### 내부적으로자바스크립트 객체를 만드는 역할을 하는 함수가 createElement() 입니다.
* 첫번째 매개변수가 type입니다.
* 두번째 매개변수는 props라는 속성을 나타냅니다.
* 세 번째 매개변수는 children입니다. 자식태그라고 이해하면 됩니다.

### 실제 createElement() 함수가 동작하는 과정을 살펴보겠습니다.
### 다음 Button과 ConfirmDialog 컴포넌트고 ConfirmDialog가 Button을 포함하고 있습니다.
``` javascript
    funtion Button(props){
        return(
            <button className = {`bg-$props.color}`>
        
        <b>
            {props.children}
        </b>
        </button>
        )
    }
    function confirmDialog(props){
        return(
            <div>
                <p>내용을 확인하셨으면 확인버튼을 눌러주세요.</p>
                <Button color='green'>확인</button>
            </div>
        )

    }

```

### ConfirmDialog 컴포넌트를 엘리먼트의 형태로 표시하면 다음과 같습니다.
```javascript
    {
        type:'div',
        props : {
            children : [
                {
                    type : 'p',
                    props:{
                        children : '내용을 확인하셨으면 확인버튼을 눌러주세요.'
                    }
                },
                {
                type : Button,
                props:{
                    color : 'green',
                    children : '확인'

                }
            }
        ]
    }
}
```

## 3. 엘리먼트의 특징
  ### 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.
### 즉 한번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다. 
<br>

## 만일 내용이 바뀌면 어떻게 할까요?
### 새로운 엘리먼트를 만듭니다. 

## 5.1 컴포넌트에 대해 알아보기
* 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 같습니다.
* 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미

## props에 대해 알아보기
1. Props의 개념
* props는 prop(property : 속성, 특성) 의 준말입니다.
* 이 props가 바로 컴포넌트의 속성입니다.
* 컴포넌트에 어떤 속성, porps를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
* 에어비앤비의 예도 마찬가지입니다. ex) 붕어빵 Props = 팥,슈크림, 고구마

## Props의 특징
* 읽기 전용입니다. 변경할 수 없다는 의미
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

## Pure 함수 vs. Impure 함수
* Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수 입니다.
* Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수.

## 3. Props 사용법
* JSX에서는 Key-Value 쌍으로 props를 구성합니다.

## 컴포넌트 만들기
1. 컴포넌트의 종류
* 리액트 초기버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
* 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에,
* 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.

2. 함수형 컴포넌트
* Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕"뒤에 넣어 반환합니다.
```jsx
function Welcome(props){
    return <h1>안녕, {props.name}</h1>
}
```

3. 클래스형 컴포넌트
* Welcome컴포넌트는 React.Component class로부터 상속을 받아 선언합니다.
```jsx
classs Welcome extends React.Component{
    render(){
        return <h1>안녕, {this.props.name}</h1>
    }
}
```
4. 컴포넌트 이름 짓기
* 이름은 항상 대문자로 시작합니다.
* 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. html tag.
* *컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

5. 컴포넌트의 렌더링
* 렌더링의 과정은 다음 코드와 같습니다.

```jsx
function Welcome(props){
    return <h1>안녕, {props.name}</h1>
}

const elemet = <Welcome name="인재" />;
ReactDOM.render(
    element,
    document.getElementById('root');
);
```

## 5.3 컴포넌트 합성
* 컴포넌트 합성은 여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
* 리액트에서 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 대문에, 복잡한 화면을 여러개의 컴포넌트로 나누어 구현할 수 있습니다.
* 다음 코드에서는 props의 값을 다르게 해서 WelCome 컴포넌트를 여러번 사용합니다.
```jsx
function Welcome(props){
    return <h1>hello, {props.name}</h1>
}
function App(props){
    return (
        <div>
            <welcome name="Mike"/>
            <welcome name="Stake"/>
            <welcome name="Jane"/>
        <div/>
    )
}
ReactDOM.render(
    <App />
    document.getElemetById('root');
)

```

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
