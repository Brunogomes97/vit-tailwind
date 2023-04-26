interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const Sun = ({
  width = '24',
  height = '24',
  color = 'dark',
  className,
}: IconProps) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_0_521)">
      <path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1V3"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21V23"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.22021 4.22L5.64021 5.64"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3601 18.36L19.7801 19.78"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12H3"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H23"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.22021 19.78L5.64021 18.36"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3601 5.64L19.7801 4.22"
        stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_521">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);