declare module 'react-lottie' {
  interface LottieOptions {
    loop?: boolean;
    autoplay?: boolean;
    animationData: object; // Replace 'any' with 'object'
    rendererSettings?: {
      preserveAspectRatio?: string;
    };
  }

  interface LottieProps {
    options: LottieOptions;
    height?: number | string;
    width?: number | string;
    isStopped?: boolean;
    isPaused?: boolean;
    eventListeners?: Array<{
      eventName: string;
      callback: () => void;
    }>;
  }

  const Lottie: React.FC<LottieProps>;
  export default Lottie;
}
