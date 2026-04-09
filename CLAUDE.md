@AGENTS.md

# Re:Mind — CLAUDE.md

## 서비스 개요

Re:Mind는 익명 질문/답변 웹 서비스입니다.

## 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Backend/DB**: Supabase
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Server State**: TanStack Query

## 패키지 매니저

pnpm

## 브랜치 전략

- `main` — 프로덕션 배포 브랜치
- `dev` — 통합 브랜치 (PR 대상)
- `feature/기능명` — 기능 개발 브랜치

## 커밋 컨벤션 (Conventional Commits)

| 타입       | 설명                                 |
| ---------- | ------------------------------------ |
| `feat`     | 새로운 기능 추가                     |
| `fix`      | 버그 수정                            |
| `chore`    | 빌드, 설정, 의존성 등 기타 작업      |
| `docs`     | 문서 수정                            |
| `refactor` | 기능 변경 없는 코드 리팩토링         |
| `style`    | 코드 포매팅, 세미콜론 등 스타일 변경 |
| `test`     | 테스트 추가 또는 수정                |

예시: `feat: 질문 작성 폼 컴포넌트 추가`

## 코드 컨벤션

- **컴포넌트**: PascalCase (예: `QuestionCard.tsx`)
- **함수/변수**: camelCase (예: `handleSubmit`, `isLoading`)
- **타입/인터페이스**: PascalCase (예: `type QuestionItem`, `interface UserProfile`)
- **파일명**: 컴포넌트는 PascalCase, 그 외는 kebab-case 또는 camelCase

## 작업 규칙

- 세션 시작 시 항상 TODO.md를 읽고 현재 상태 파악
- 기능 완료 시마다 TODO.md 업데이트 (완료 항목 체크, 다음 예정 추가)
- 중요한 기술 결정은 의사결정 메모 섹션에 날짜와 함께 기록 (중복 없고 기존 항목 갱신하지 않고, 날짜 순서대로)
- 세션 종료 전 오늘 완료한 내용과 다음 작업을 TODO.md에 정리/업데이트 후 커밋
