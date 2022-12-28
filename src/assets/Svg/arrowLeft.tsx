import Svg, { Path, SvgProps } from 'react-native-svg';

interface ArrowLeftProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
}

export function ArrowLeft(props: ArrowLeftProps) {
  return (
    <Svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 8H1m0 0l7-7M1 8l7 7"
        stroke="#44484D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
