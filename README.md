![header](https://capsule-render.vercel.app/api?type=waving&text=MyToDoList&color=auto&height=200&animation=scaleIn)

<div align=center> 
<img src="https://img.shields.io/badge/React.js-F7DF1E?style=for-the-badge&logo=react&logoColor=#3776AB"/>
<img src="https://img.shields.io/badge/Styled_Components-000000?style=for-the-badge&logo=react&logoColor=#3776AB"/>
<img src="https://img.shields.io/badge/Redux-F7DF1E?style=for-the-badge&logo=redux&logoColor=#1572B6"/>
<img src="https://img.shields.io/badge/javascript-red?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-008000?style=for-the-badge&logo=HTML5&logoColor=#E34F26"/>
<img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=#1572B6"/>
</div>
<br>   


- 항해99 8기 A반 3조 개인프로젝트 
- React.js 로 간단한 ToDoList앱을 만들었습니다. 
- 2022.07.29 ~ 2022.08.05

## 라이브러리 🛠
- React.js
- Redux-Toolkit
- Styled Components
- Router

## 환경설정
```
- npm install --global yarn (yarn을 설치 안했을때)
- yarn create react-app "프로젝트 명"
- yarn add styled-components
- yarn add react-redux
- yarn add react-router=dom@6
- yarn add react-redux @reduxjs/toolkit
- yarn start
```
##

## 메인페이지
![Screen Shot 2022-08-02 at 2 51 49 PM](https://user-images.githubusercontent.com/26310384/182301703-87478753-01b9-448d-8107-0805daec96c8.png)
## 상세페이지
![Screen Shot 2022-08-02 at 2 51 53 PM](https://user-images.githubusercontent.com/26310384/182301756-37a7082f-d33c-4fbe-b9c7-5632e06c4f26.png)

## 폴더 구성
![Screen Shot 2022-08-03 at 3 30 31 PM](https://user-images.githubusercontent.com/26310384/182539651-8e9f4436-92bf-478a-a1e8-b457f57dc180.png)
우선 폴더구성을 이미지로 보기 쉽게 올려두었습니다.

## 컴포넌트 구성
```javascript
<App>
  <Layout>
    <Header />
    <TodoList>
      <Form />
      <List />
    </Todolist>
    <TodoDetail />
  </Layout>
</App>
```

Layout 컴포넌트는 단순히 전체페이지 틀일 잡기 위해서 만들어놓은 css 레이아웃이다.
그 밑에 Header, TodoList와 TodoDetail 페이이로 컴포넌트 구성을 잤다.
TodoList 컴포넌트는 하위 컴포넌트인 Form 과 List를 형제 컴포넌트로 품고 있다.
Form과 List를 TodoList 하위 컴포넌트로 묶어준 이유는 Router를 이용할때 Form과 List가 한 페이지에 모여있기 때문에
상위 컴포넌트인 TodoList를 "/" 즉 홈으로 지정하고, TodoDetail를 "/detail/:id" 로 페이지 설정을 하여서 
Router 이용해 페이지간 이동할 수 있도록 설계하였다.
