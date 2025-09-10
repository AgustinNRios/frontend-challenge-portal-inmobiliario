import 'jest-axe';

declare module 'jest-axe' {
  import { AxeResults } from 'axe-core';
  import { MatcherFunction } from 'expect';
  export function axe(html: HTMLElement): Promise<AxeResults>;
  export const toHaveNoViolations: MatcherFunction;
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(): R;
    }
  }
}