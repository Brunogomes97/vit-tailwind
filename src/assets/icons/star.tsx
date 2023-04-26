interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const Star = ({
  width = '28',
  height = '28',
  color = 'dark',
  className,
}: IconProps) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_0_514)">
      <path
        d="M2.7749 13.6543C2.7749 13.6543 6.7749 5.6543 13.7749 5.6543C20.7749 5.6543 24.7749 13.6543 24.7749 13.6543C24.7749 13.6543 20.7749 21.6543 13.7749 21.6543C6.7749 21.6543 2.7749 13.6543 2.7749 13.6543Z"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7749 16.6543C15.4318 16.6543 16.7749 15.3112 16.7749 13.6543C16.7749 11.9974 15.4318 10.6543 13.7749 10.6543C12.118 10.6543 10.7749 11.9974 10.7749 13.6543C10.7749 15.3112 12.118 16.6543 13.7749 16.6543Z"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_514">
        <rect
          width="24"
          height="24"
          stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
          transform="translate(1.7749 1.6543)"
        />
      </clipPath>
    </defs>
  </svg>
);
