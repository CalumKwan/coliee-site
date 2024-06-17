declare module 'react-signature-canvas' {
    import { Component } from 'react';
  
    export interface SignatureCanvasProps {
      canvasProps?: object;
      clearOnResize?: boolean;
      dotSize?: number | (() => number);
      minWidth?: number;
      maxWidth?: number;
      throttle?: number;
      minDistance?: number;
      backgroundColor?: string;
      penColor?: string;
      velocityFilterWeight?: number;
      onEnd?: (event: MouseEvent | TouchEvent) => void;
      onBegin?: (event: MouseEvent | TouchEvent) => void;
    }
  
    class SignatureCanvas extends Component<SignatureCanvasProps> {
      clear(): void;
      isEmpty(): boolean;
      fromDataURL(dataUrl: string, options?: object): void;
      toDataURL(type?: string, encoderOptions?: number): string;
      fromData(data: any): void;
      toData(): any;
      getTrimmedCanvas(): HTMLCanvasElement;
    }
  
    export default SignatureCanvas;
  }
  