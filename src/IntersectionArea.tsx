import { useIntersection } from './useIntersection';

type IntersectionAreaProps = {
  onImpression: VoidFunction;
};

export const IntersectionArea = ({ onImpression }: IntersectionAreaProps) => {
  const observeRef = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);
    onImpression();
  });

  return <div ref={observeRef} />;
};
