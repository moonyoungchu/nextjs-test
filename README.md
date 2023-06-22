# Jest

---

8시간짜리 강의를 통해 Next.js test를 배워보자💪

---

**이 과정은 다음을 포함하여 Next.js 애플리케이션의 모든 측면을** 테스트하는 방법을 설명합니다 .

1. UI unit tests
2. API unit tests
3. Next.js routes
4. Cached pages
5. Data updates (both to the cache and via SWR refresh interval)
6. Authentication
7. End-to-End tests for a complete user flow

이 과정은 다음을 특징으로 하는 **테스트 기술을** 사용합니다 .

1. Jest
2. React Testing Library
3. Mock Service Worker
4. Cypress
5. Cypress Testing Library

---

## Section 1: Introduction

```
npx create-next-app@latest --example with-jest with-jest-app
```

https://nextjs.org/docs/pages/building-your-application/optimizing/testing#quickstart-2

npm test ← test 수행 되는 것까지 확인


## Section 2: Testing Definitions and Philosophy

test에 대한 개념들 확인


## Section 3: Course App and Next.js Data Fetching Strategies

강의에 사용될 코스앱 설치 및 확인 완료


## Section 4: UI Testing

> /base-concert-venue/**tests**/ui/home.test.tsx
> 

**`@testing-library/react`** 패키지에서 제공하는 **`render`**와 **`screen`** 메소드를 사용하여 페이지가 올바르게 렌더링되고 제목과 이미지가 적절히 표시되는지를 검증함.

**`screen.getByRole(role, name)`**
- 웹 페이지에서 특정 역할을 가진 요소를 검색하는 데 사용.
- 첫 번째로 일치하는 요소를 반환. 일치하는 요소가 없으면 테스트는 실패.

**`expect(요소).toBeInTheDocument()`**
- 검색된 요소가 문서에 존재하는지 확인