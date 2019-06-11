
# Easy Toether (가제)

## 프로젝트 시작 전 의존성 설치 :
###
```
    yarn
```

## 개발모드로 프로젝트 시작
```
    yarn start
```
[http://localhost:12354](http://localhost:12354)


## 프로젝트 설정
- vscode에서 설정-> Experimental Decorators 검색해서 체크 (Annotation Syntax Error 방지)

# API 테스트 (rest)
## 먼저 나한테 IP주소 알려줘야 whitelist 등록해줌
- https://easytogether.herokuapp.com 가 base url임. axios 설정해둘것.

- Account
```js
    //1.회원가입
    //methods : POST
    //url : /api/account/

    {
        "username" : /^[A-Za-z0-9가-힣\-_$]{2,12}$/, //required
        "email" : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, //required
        "password" : /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/ //required
    }
```

```js
    //2.로그인
    //methods : POST
    //url : /api/account/auth

    {
        "email" : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, //required
        "password" : /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/ //required
    }
```

- Category (GET만 가능)
```js
    //1.모든 카테고리 목록 불러오기
    //methods : POST
    //url : /api/category
```

```js
    //2.특정 _id의 직속 하위 카테고리 목록 불러오기
    //methods : POST
    //url : /api/category/:_id (_id를 root로 입력시 최상위의 직속 하위 카테고리 목록을 불러옴 )
```

- Location (GET만 가능)
```js
    //1.모든 지역 목록 불러오기
    //methods : POST
    //url : /api/location
```

```js
    //2.특정 _id의 직속 하위 지역 목록 불러오기
    //methods : POST
    //url : /api/location/:_id (_id를 root로 입력시 최상위의 직속 하위 지역 목록을 불러옴 )
```

- Meeting (연습용 API : CRUD가 모두 가능하고 마음대로 하셈)
```js
    //1.모든 모임 불러오기
    //methods : GET
    //url : /api/event 모든모임
    //url : /api/event?[querystring] 쿼리스트링으로 구분해서 가져오기
    //url : /api/event/:_id 특정모임
```

```js
    //2.모임 만들기
    //methods : POST
    //url : /api/event/

    {
        "username" : "5~20자", //required
        "categoryId" : '카테고리아이디'//required
        "locationId" : '로케이션아이디'//required
    }
```
```js
    //3.모임 수정하기
    //methods : PUT
    //url : /api/event/:_id 모든 필드필요. 모든 필드를 다 교체한다.
```

```js
    //4.모임 부분수정하기
    //methods : PATCH
    //url : /api/event/:_id 일부 필드필요. 일부 필드를 다 교체한다.
```

```js
    //5.모임 삭제하기
    //methods : DELETE
    //url : /api/event/:_id 아이디로 삭제.
```