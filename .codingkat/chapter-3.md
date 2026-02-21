---
title: 커스텀 훅
files:
  - src/useTimer.ts
  - src/TimerApp.tsx
---

마지막으로 커스텀 훅을 만들어 로직을 재사용하는 방법을 배웁니다.

**`useTimer.ts`** 파일 자체가 커스텀 훅입니다.

함수 이름이 **`use`** 로 시작하면 React는 이것을 훅으로 인식합니다.

> 💡 커스텀 훅은 상태 로직을 캡슐화하여 여러 컴포넌트에서 재사용할 수 있게 합니다.

이제 **`TimerApp.tsx`** 에서 이 훅을 사용하는 모습을 봅시다.

**`const { seconds, isRunning, start, stop, reset } = useTimer()`** 한 줄로 모든 타이머 로직을 가져옵니다.

컴포넌트는 ~~`UI 렌더링`~~ 에만 집중하고, 로직은 훅이 담당합니다.

> 🎯 이것이 관심사의 분리입니다.

- 커스텀 훅: use로 시작하는 함수
- 상태 로직 재사용 가능
- 컴포넌트는 UI에만 집중
