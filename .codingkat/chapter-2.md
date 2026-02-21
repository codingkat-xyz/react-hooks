---
title: useEffect 활용
files:
  - src/useTimer.ts
---

이제 사이드 이펙트를 처리하는 useEffect를 알아봅시다.

**`useTimer.ts`** 파일의 커스텀 훅을 보겠습니다.

**`useEffect(() => { ... }, [isRunning])`** 구조입니다.

두 번째 인자인 ~~`[isRunning]`~~ 이 의존성 배열입니다.

> 📌 의존성 배열의 값이 변경될 때만 이펙트가 다시 실행됩니다.

타이머가 돌아가는 동안 **`setInterval`** 로 1초마다 카운트를 증가시킵니다.

중요한 것은 **`return () => clearInterval(interval)`** 입니다.

> ⚠️ 이것이 클린업 함수입니다. 컴포넌트 언마운트 시 또는 의존성 변경 시 실행됩니다.

클린업 없이 setInterval을 사용하면 !!`메모리 누수`!! 가 발생합니다.

- useEffect: 사이드 이펙트 처리
- 의존성 배열: 재실행 조건 지정
- 클린업 함수: 리소스 정리 필수
