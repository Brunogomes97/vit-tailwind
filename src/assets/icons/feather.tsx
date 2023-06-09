interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export const Feather = ({
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
    <path
      d="M20.24 12.24C21.3658 11.1142 21.9983 9.58719 21.9983 7.99501C21.9983 6.40282 21.3658 4.87585 20.24 3.75001C19.1142 2.62416 17.5872 1.99167 15.995 1.99167C14.4028 1.99167 12.8758 2.62416 11.75 3.75001L5 10.5V19H13.5L20.24 12.24Z"
      stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L2 22"
      stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 15H9"
      stroke={color === 'dark' ? '#0a2640' : '#ffffff'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
