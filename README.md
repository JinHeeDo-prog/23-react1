# 진희도
# 2023/05/04 10주차 수업

# chapter.10 리스트와 키
## 10.1 리스트와 키란 무엇인가
* 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같다
* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다.
* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다

## 10.2 여러개의 컴포넌트 렌더링하기
* 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트 map()함수를 이용하여 렌더링 합니다.
* 다음은 numbers 배열에 들어있는 각각의 요소를 map() 를 이용하ㅕ 하나씩 추출하여. 2를 곱한후 doubled라는 배열에 다시 넣는 코드입니다.
```javascript
const doubled = numbers.map((number) => number * 2)
```
* 다음은 리액트에서 map() 함수를 사용한 예제입니다.
```javascript
const numbeers = [1,2,3,4,5];
const listItems  = numbers.map((number) => 
    <li>{number}</li>
);
```
* 이 코드는 numbers의 요소에 2를 곱하는 대신 <li>태그를 결합해서 리턴하고 있습니다.
* 리턴된 listItems는 <ul>태그와 결합하여 렌더링 됩니다.
```javascript
Reactdom.render(
    <ul>
        <li>{1}</li>
        <li>{2}</li>
        <li>{3}</li>
        <li>{4}</li>
        <li>{5}</li>
    </ul>,
    document.getElementById('root');
);

```
## 10.3 기본적인 리스트 컴포넌트
* 앞서 작성한 코드를 별도의 컴폰넌트로 분리하면 다음과 같습니다.
* 이컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해줍니다.
```javascript
function NumberList(props){
    const {numbers} = props;

    const listItems = numbers.map((number) => 
        <li>{numbers}</li>
    );

    return ( 
        <ul>{listItems}</ul>
    );
}



const numbers = [1,2,3,4,5];

ReactDOM.render(
    <NumberList numbers={number}/>
    document.getElementById('root');
)
```
* 이코드를 실해앟면 "리스트 아이템에 무조건 키가 있어야 한다"는 경고 문구가 나옵니다.
* 경고 문구가 나오는 이유는 각각의 아이템에 key props가 없기 때문입니다.

## 10.4 리스트의 키에 대해 알아보기
* 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"입니다
* 이 키는 리스트에서 어떤 아이템이 변경, 추가  또는 제거되었는지 구분하기 위해 사용합니다.
* 키는 같은 리스트에 있는 엘리언트 사이에서만 고유한 값이면 됩니다.

* tip. 둗 대학교 사이에서는 학번이 같아도 상관없음. 이름이 다르므로!!

## 10.5 (실습) ㅊ출석부 출력하기
* src/chapter_10 폴더 생성합니다.
* AttendanceBook.jsx라는 이름의 함수형 컴포넌트를 만듭니다.


# chapteer.11 FORM
## 11.1 폼이란 무엇인가
* 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.
* 다음 코드는 사용자의 이름을 입력받는 HTML폼을 리액트 제어 컴포넌트로 만든것입니다.
```javascript
import react
import UseState 
function NameForm(props){
    const[value, setVaule] = useState('');

    fonst handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 : ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit = {handleSubmit}>
            <label>
                이름 :
                <input type = "text" value={value} onChange={handleChange}/>
            </label>
            <button type ="submit">제출</button>
        </form>
    )
}
```
### 11.2 제어 컴포넌트
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다. 
- 다음 코드는 사용자의 이름을 입력 받는 HTML폼을 리액트 제어 컴포넌트로 만든 것입니다.
``` javascript
function NameForm(pros){
    const[value,setValue]=useState('');
    const handleChange =(event)=>{
        setValue(event.target.value);
    }
    const handleSubmit=(event)=>{
        alert('입력한 이름:'+value);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
        이름:
        <input type="text" value={value} onChange={handleChange}/>
        </label>
        <button type="submit">제출</button>
        </form>
    )
    }
``` 
## 11.3 textarea태그
* HTML에서는 <textarea>의 children으로 텍스트로 들어감
* 리액트에서는 state통해 태그의 value값 조정 가능

## 11.4 select 
* select태그도 textarea와 동일합니다.

```javascript
<select>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option value="grape">포도</option>
    <option value="watermelon">수박</option>
</select>
```
## 11.5 File input 태그
* File input태그는 그 값이 읽기 전용이기 때문에 리액트에서 비제어 컴포넌트가 됩니다.

## 11.6 여러 개의 입력 다루기
```javascript
function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState('true');
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleChange = (event) => {
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberofGuest}`);
    setValue(event.target.value);
    event.preventDefault();
  }

  return (
    <form> onSubmit={handleSubmit}>
      <label>
        아침식사 여부:
        <input
          type="checkbox"
          checked={haveBeakfast}
          onChange={(event)=> {
            setHaveBreakfast(event.target.checked);
          }} />
      </label>
      <br />
      <label>
        방문객 수 :
        <input type="number" value={numberOfGuest} 
        onChange={(event) => 
        setNumberOfGuest(event.target.value)} />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
    
```
## 11.7 Input Null Value
* 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
* 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined또는 null을 넣어주면 됩니다.
```javascript
ReactDom.render(<input value="hi" />, rootNode);

setTimeout(function(){
  ReactDom.render(<input value={null} />, rootNode);
}, 1000);
```

## 11.8 (실습) 사용자 정보 입력 받기

# 2023/04/27 9주차 수업

# chapter.8 이벤트 핸들링

## 8.1 이벤트 처리하기
* DOM에서 클릭 이벤트 처리하기 예제코드
``` javascript
<button onclick = "activate()">
    Activate
</button>
```
* React에서 클릭 이벤트 처리하는 예제코드
``` javascript
<button onClick={activate}>
    Activate
</button>
```

* 둘의 차이점은
1. 이벤트 이름이 onclick에서 onClick으로 변경.(Camel case)
2. 전달하려는 함수는 문자열에서 함수 그대로 전달.

* 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 이벤트 리스너라고 부르기도 합니다. 그냥 핸들러라고 부른다.

## 이벤트 핸들러 추가하는 방법은?
* 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출하도록 되어있습니다.
* bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 때문입니다.
* bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다.
* 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.

``` javascript
class Toggle extends React.Component{
    constructor(props){
        super((props));
    
        this.state = {isToggle:true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.state(preState =>({
            isToggleOn : !preState.isToggleOn
        }));
    }
    render(){
        return{
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "켜짐": "꺼짐"}
            </button>

        }
    }
}
```
* 클래스형을 함수형으로 바꾸면 다음 코드와 같습니다
* 함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지 입니다.
* 함수형에서는 this를 사용하지 않고
onClick에서 바로 HandleClick을 넘기면 됩니다

```javascript
    function Toggle(props){
        const [isToggleOn, setIsToggleOn] = useState(true);

        function handleClick(){
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        const handleClick = () => {
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        return (
            <button onClick={handleClick}>
                {isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
```

## 8.2 Arguments 전달하기
* 함수를 정의할때는 파라미터 혹은 매개변수, 함수를 사용할때는 아귀먼트 혹은 인자라고 부릅니다.
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.
``` javascript
    <button onClick={(event) => this.deleteItem(id,event)}삭제하기></button>
    <button onClick={this.deleteItem.bind(this,id)}삭제하기></button>
```
* 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다.
* event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.
* 두방법 모두 첫번째 매개변수는 id이고 두번째 매개변수로 event가 전달됩니다.
* 첫번째 코드는 명시적으로 event를 매개변수로 넣어주었고, 두번째 코드는 id 이후 두번째 매개변수로 event가 자동 전달됩니다.(이 방법은 클래스형에서 사용하는 방법입니다)
* 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달할때는 254페이지 코드와 같이 합니다.



## 8.3 클릭 이벤트 처리하기
1. ConfirmButton 컴포넌트 만들기
2. 클래스 필드 문법 사용하기
3. 함수 컴포넌트로 변경하기

``` javascript 
import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            isConfirmed : false;
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }
    handleConfirm(){
        this.setState((preState) => ({
            isConfirmd : !preState.isConfirmd,
        }))
    }

}
```

```javascript
import React, {useState} form "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handelConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
}


```
## 8.4마치며

# Chapter9 조건부 렌더링

## 9.1 조건부 렌더링이란?
* 여기서 조건이란 우리가 알고 있는 조건문의 조건입니다.
``` javascript
    function Greeting(props){
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting/>
        }
        return <GuestGreeting/>
    }
```
* props로 전달 받은 isLoggedIn이 true이면 <UserGreeting/>을 false면 <GuestGreeting/>을 return 합니다
* 이와 같은 렌더링을 조건부 렌더링이라고 합니다.

## 엘리먼트 변수
* 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.
* state에 따라 button 변수에 컴포넌트 객체를 저장하여 return 문에서 사용하고 있습니다.

```javascript
    let button;
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick}/>;
    } else {
        button = <LoginButton onClick = {handleLoginClick}/>;
    }

    return (
        <div>
            <Greeting isLoggin={isLoggIn}/>
            {button}
        </div>
    )
```
## 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법
1. 인라인 if
* if문을 직접사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자 사용
* &&는 and연자로 모든 조건이 참일때만 참이 됩니다.
* 첫번 조건이 거짓이면 두번째 조건은 판단 필요없음. 단축평가
* 판단만 하지 않는 것이고 결과값은 그대로 리턴
## 인라인 if-else
* 삼항 연사자 사용 
* 조건문 ? 참일경우 : 거짓일경우
* 문자열이나 엘리먼트를 넣어서 사용 가능합니다. 

##  9.4 컴포넌트 렌더링 막기

* 컴포넌트 렌더링하고 싶지 않을떄는 null리턴
```javascript
function Warning(props){
    if!(props.warning){
        return null;
    }

    return (
        <div>경고</div>
    );
}
```







# 2023/04/13 7주차 수업

## 훅이란
* 클래스형 컴포넌트에서 생성자에서 state를 정의하고, setState()  함수를 통해 state를 업데이트합니다.
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없습니다.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능 바로 훅(Hook)입니다.
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능 모두 동일하게 구현
* Hook이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수
* 훅의 이름은 use로 시작합니다,
* 사용자 정의 훅 (custom hook)을 만들 수 있으며, 이경우에 이름은 자유롭게할 수 있으나 use로 시작할것을 꼭 그렇게 할 것.

## useState
* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.
* 다음 예제는 버튼을 클릭할때마다 카운트가 증가하는 함수형 컴포넌트입니다.
* 하지만 증가는 시킬 수 있지만 증가할때마다 재 랜더링이 일어나지 않는다.
* 이럴때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용

* userState() 함수의 사용법은 다음과 같다.
* 첫번째 항목은 state의 이름(변수명)이고
* 두번째 항목은 state의 set함수입니다. 즉 state를 업데이트합니다.
* 함수를 호출 할 때 state의 초기값을 설정
* 함수의 리턴 값은 배열의 형태입니다.

``` javascript
import React, { useState } from "react";

function Count(props){
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>

    )
}
```

## userEffect
* useState와 함께 가장 많이 사용하는 훅입니다.
* 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
* 영어로 side effect는 부작용X(여기서 말하는 부수적인 작용을 뜻함 저자가 잘못 이해함.) 을 의미하고 개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것입니다.
* 하지만 리액트는 효과또는 영향을 뜻하는 effect의 의미에 가깝습니다.
* 예를 들면 서버에서 데이터를 바당오거나 수동으로 DOM을 변경하는 작업을 의미합니다.
* 이작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 랜더링 중에는 작업이 완료될 수 없기 때문입니다.
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공
* 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다.

* 사용법 useEffect(이펙트 함수, [의존성 배열])
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수중에 하나라도 값이 변경되었을때 이펙트 함수가 실행됩니다.
* 이펙트 함수는 처음 컴포넌트가 렌더링된이후 그리고 제 렌더링 이후에 실행됩니다.
* 이펙트가 함수가 마운트와 언마운트 될 때만 한번씩 실행하게 되게 하고 싶으면 빈 배열을 넣으면 됩니다.
```javascript
import React, { useState, userEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    //componentDidMount, componentDidUpdate와 비슷하게 작동
    useEffect(() => {
        document.title = `${count}번 클릭했습니다.`;
    });

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </div>
    )           
}
```
### 여기서는 배열 없이 useEffect를 사용했기 때문에 DOM이 변경된 이후에 해당 이펙트 함수를 실행하라는 의미입니다. 업데이트 될때마다 호출 됨

``` javascript
useEffect(() => {
    //컴포넌트가 마운트 된 이후,
    // 의존성 배열에 잇는 변수들중 하나라도 값이 변경되었을때 실행
    // 의존성 배열에 빈배열을 넣으면 마운트 언마운트시에 단 한번씩 실행
    // 의존성 배열 생략시 컴포넌트 업데이트 시마다 실행돔


return () => {
    // 컴포넌트가 마운트 해제되기전에 실행됨
    ...
}
},[의존선 변수1, 의존성 변수2,....])
```

## useMemo
* useMemo()혹은 Memoizde value를 리턴하는 훅입니다.
* 이전 계산 값을 갖고있기 때문에 연산량 많은 작업의 반복을 피할 수 있습니다.
* 이 훅은 렌더링이 일어나는 동안 실행됨
* 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.

```javascript
const memoizedValue = useMemo(
    () => computeExpensiveValue(a,b);
        //연산량이 높은 작업을 수행하여 결과를 반환
);
```

## useCallback
* useMemo()와 유사한 역할
* 차이점은 값이 아닌 함수를 반환함.

## useRef
* 레퍼런스를 사용하기 위한 훅입니다.
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
* useRef() 훅은 바로 이 레퍼런스 객체를 반환합니다.
* 레퍼런스객체는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트 의미
```javascript
const refContatiner = useRef(초깃값)
```
* 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프 타임 전체에 걸쳐서 유지됨.

## 훅의 규칙
* 최상의 레벨에서만 호출해야만 된다는 것. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미
* 따라서 반복문 조건문에서 호출X
* 이규칙에 따라서 혹은 컴포넌트가 렌더링 될때마다 같은 순서로 호출되어야 합니다.
* 두번째 규칙은 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다는 것입니다.
* 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨
* 함수형 컴포넌트 혹은 직업 만든 커스컴 훅에서만 호출 가능

## 나만의 훅 만들기


1. 커스텀 훅을 만들어야 하는 상황
* 로직이 중복될때
* 앞에 코드와 useState()와 useEffect(),훅을 사용하는 부분이 동일합니다.
*  이렇게 state와 관련된 로직이 중복되는 경우에 render prorps또는 HOC를 사용합니다.

2. 커스컴 훅 추출하기
* 두개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을때 새로운 함수를 하나로 만드는 방법을 사용합니다.
* 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법 선언한다.
* 이름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됩니다.
* 아래 코드는 중복되는 로직을 useUserStatus()라는 커스컴 훅으로 추출해낸것입니다.

* 한가지 주의할 점은 일반 컴포넌트와 달리 최상위 레벨에서 호출해야함.
* 커스텀 훅은 일반 함수와 같다고 생각해도 됩니다.



# 2023/4/6 6주차 수업

## 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있다.
* 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것입니다.
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.

## 6. State
1. state란
* state는 리액트 컴포넌트의 상태를 의미합니다.
* 사앹의 의미는정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
* 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
* State가 변하면 다시 렌더링이 되기 떄문에 렌덩링과 관련된 값만 state에 포함시켜야 합니다.

2. state의 특징
- 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다.
- 예의 LikeButton은 class 컴포넌트이다.
- constructorsms 생성자이고 그 안에있는 this.state가 현 컴포넌트이 state이다.

* 클래스에서만 쓰고 useState함수를 사용
* state는 변경이 가능하다고 했지만 직접 수정해서는 안됩니다.
* 불가능하다고 생각하는 것이 좋습니다.
* state를 변경하고자 할때는 setstate()함수 사용

``` javascript
틀린 예시
this.state={
    name : 'Inje'
}; 

this.setState({
    name: 'Inje'
});
```
## 생명주기에 대해 알아보기
* 생명주기는 컴포넌트의 생성시점, 사용시점,종료시점
* constructor가 실행 되면서 컴포넌트가 생성됩니다,
* 생성 직후 componentDidMount() 함수가 호출됩니다.
* 컴포넌트가 소멸하기 전까지 여러번 랜더링 합니다.
* 랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
* 그리고 랜더링이 끝나면 componentDinUpdate() 함수가 호출됩니다.
* 마지막으로 컴포넌트가 언마운트 되면 conpomentWilUnmount()가 호출됩니다.

#



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
