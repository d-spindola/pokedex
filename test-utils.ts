import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
export const Providers = ({ children }: any) => {
    return children;
  };

export const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };