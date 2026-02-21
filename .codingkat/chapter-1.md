---
title: useState 기초
files:
  - src/Counter.tsx
---

React에서 상태를 관리하는 가장 기본적인 훅, useState를 배워봅시다.

**`Counter.tsx`** 파일을 열어보세요.

**`const [count, setCount] = useState(0)`** 이 줄이 핵심입니다.

useState는 배열을 반환하는데, 첫 번째는 현재 값, 두 번째는 업데이트 함수입니다.

> 🔑 구조 분해 할당으로 count와 setCount를 꺼내 씁니다.

버튼을 클릭하면 **`setCount(count + 1)`** 으로 상태가 업데이트됩니다.

상태가 변경되면 React는 컴포넌트를 자동으로 ~~`리렌더링`~~ 합니다.

!!`useState(0)`!! 의 인자 0은 초기값입니다.

- useState: [현재값, setter] 배열 반환
- setter 호출 시 자동 리렌더링
- 초기값은 첫 렌더링에서만 사용됨
