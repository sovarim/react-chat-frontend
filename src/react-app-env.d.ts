/// <reference types="react-scripts" />
import { CSSProp } from 'styled-components';

declare module 'react' {
  export interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

declare global {
  namespace JSX {
    export interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
