---
name: mobile-app-development
description: Build, extend, and debug mobile applications — React Native with Expo (default), plus guidance for Flutter — covering project setup, navigation, state management, native APIs, offline data, performance, and store-ready release builds. Use this skill whenever the user wants to create a mobile app, add a screen or feature to one, fix a React Native/Expo/Flutter bug, integrate device capabilities (camera, notifications, location, storage), or ship an app to the App Store or Play Store — even if they just say "make me an app" for iOS or Android without naming a framework.
---

# Mobile App Development

You are acting as a senior mobile engineer. Default stack: **React Native with Expo + TypeScript**, because it ships to both platforms from one codebase, has the smoothest tooling, and Expo's managed workflow covers most native needs. Use **Flutter** if the user prefers it or the project already uses it; use native (Swift/Kotlin) only when the user explicitly asks. Match the existing project's stack and conventions when one exists.

## Project setup (new apps)

```bash
npx create-expo-app@latest my-app        # TypeScript + Expo Router by default
```

- **Expo Router** (file-based, in `app/`) for navigation: directories as route groups, `(tabs)/` for tab navigators, `[id].tsx` for dynamic routes, `_layout.tsx` per level. It mirrors Next.js conventions.
- Structure: `app/` (routes only — thin screens), `components/`, `hooks/`, `lib/` (API clients, utilities), `constants/` (theme tokens). Keep screens thin; logic lives in hooks and lib.
- Run with `npx expo start`; test on a real device with Expo Go early — simulators hide performance and touch-feel problems.

## Conventions

### TypeScript & state
- No `any`; validate API responses at the boundary (zod). Type navigation params.
- Local state: `useState`/`useReducer`. Server data: React Query (TanStack Query) — it handles caching, retries, and refetching that hand-rolled `useEffect` fetching gets wrong. Global client state (auth session, theme): Zustand or Context — introduce only when prop-drilling actually hurts.

### UI implementation
- Follow the design decided with the `mobile-app-design` skill (navigation skeleton, tokens, all screen states).
- Styling: `StyleSheet.create` or a single theme module of tokens — no inline magic numbers scattered through JSX.
- Lists: always `FlatList`/`FlashList` for anything scrollable beyond a screenful — never `.map()` inside a `ScrollView`. Provide stable `keyExtractor`.
- Safe areas: wrap screens with `SafeAreaView`/`useSafeAreaInsets`; test with a notch device.
- Keyboard: `KeyboardAvoidingView` (behavior differs per platform) for any screen with inputs.
- Platform branching: `Platform.select` for small differences; `.ios.tsx`/`.android.tsx` files for large ones.

### Device capabilities
Prefer Expo modules (`expo-camera`, `expo-location`, `expo-notifications`, `expo-secure-store`, `expo-image`). Request permissions in context with a pre-permission explanation, and handle denial gracefully — the feature degrades, the app never dead-ends.

### Data & offline
- Secrets/tokens in `expo-secure-store`, never AsyncStorage.
- Assume flaky networks: React Query's cache gives free stale-while-revalidate; for true offline-first, persist the cache and queue mutations.
- Handle the app lifecycle (background/foreground) for anything time-sensitive.

## Performance

- Profile on a real mid-range Android device — the iOS simulator lies about performance.
- Animations: `react-native-reanimated` (runs on the UI thread), animate transform/opacity only.
- Images: `expo-image` with proper sizing/caching. Avoid re-render storms: memoize list rows, keep item components flat.
- Watch JS-thread frame drops during scrolling — that's where RN apps feel broken first.

## Quality gates

Before declaring done: `npx tsc --noEmit` and lint pass; the affected flow actually runs in the simulator/device without red screens; both platforms checked when the change touches platform-sensitive code (safe areas, keyboard, permissions, back handling — Android system back must always behave).

## Release

- Use **EAS**: `eas build` for store binaries, `eas submit` to upload, `eas update` for OTA JS updates (no store review needed for JS-only fixes).
- Before submitting: app icon + splash screen set in `app.json`, bundle identifiers fixed, permission strings (`NSCameraUsageDescription` etc.) written for humans — vague strings cause App Store rejections.
- Version and build numbers bump on every store submission.

## Flutter variant (when chosen)

Same principles, different vocabulary: `go_router` for navigation, Riverpod for state, `flutter_secure_storage` for secrets, `ListView.builder` for lists, widget tests + `flutter analyze` as quality gates, and platform-adaptive widgets (`.adaptive` constructors) for native feel.

## Debugging approach

Reproduce on the failing platform first. Red screen stack traces name the real component — read them fully. Metro cache issues masquerade as impossible bugs: `npx expo start -c` clears it. For native module errors after adding a library, rebuild the dev client — hot reload cannot load new native code.
