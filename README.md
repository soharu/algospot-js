# algospot-js

자바스크립트로 [알고스팟](https://algospot.com/) 문제를 풀어보자.

## 푼 문제 목록

- [HELLOWORLD](https://algospot.com/judge/problem/read/HELLOWORLD) / [제출된 답안 보기](https://algospot.com/judge/submission/recent/?problem=HELLOWORLD&user=haru&language=js&state=6)
- [MERCY](https://algospot.com/judge/problem/read/MERCY) / [제출된 답안 보기](https://algospot.com/judge/submission/recent/?problem=MERCY&user=haru&language=js&state=6)
- [DRAWRECT](https://algospot.com/judge/problem/read/DRAWRECT) / [제출된 답안 보기](https://algospot.com/judge/submission/recent/?problem=DRAWRECT&user=haru&language=js&state=6)
- [ENDIANS](https://algospot.com/judge/problem/read/ENDIANS) / [제출된 답안 보기](https://algospot.com/judge/submission/recent/?problem=ENDIANS&user=haru&language=js&state=6)
- [LECTURE](https://algospot.com/judge/problem/read/LECTURE) / [제출된 답안 보기](https://algospot.com/judge/submission/recent/?problem=LECTURE&user=haru&language=js&state=6)

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
- `data/{problem_id}.out`
- `source/{problem_id}.js`
- `test/{problem_id}-test.js`

### 실행

```
node {problem_id}/solution.js < {problem_id}/data.in
```

또는

```
./run.sh {problem_id} [--diff]
```

- `--diff` 옵션을 주면 출력을 기대하는 출력(`data/{problem_id}.out`)과 비교해줍니다.

### 테스트

```
npm test {problem_id}
```
