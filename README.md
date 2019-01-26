# algospot-js

자바스크립트로 [알고스팟](https://algospot.com/) 문제를 풀어보자.

## 푼 문제 목록

- [HELLOWORLD](https://algospot.com/judge/problem/read/HELLOWORLD)
- [MERCY](https://algospot.com/judge/problem/read/MERCY)
- [DRAWRECT](https://algospot.com/judge/problem/read/DRAWRECT)

## 설치 및 실행

### 설치

```
npm install
```

### 문제 풀이 파일 생성

```
./init.sh {problem_id}
```

위 스크립트를 실행하면 문제 풀이를 위한 세 가지 파일을 만듭니다:

- `data/{problem_id}.in`
- `source/{problem_id}.js`
- `test/{problem_id}-test.js`

### 실행

```
node {problem_id}/solution.js < {problem_id}/data.in
```

또는

```
./run.sh {problem_id}
```

### 테스트

```
npm test {problem_id}
```
