interface DashboardIconProps {
  fillColor?: string;
  strokeColor?: string;
}

const DashboardIcon = ({ fillColor = '#fff', strokeColor = '#fff' }: DashboardIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='19' height='18' viewBox='0 0 19 18' fill='none'>
    <path
      d='M18.0703 7.35322L9.55468 1.11823C9.39047 0.998024 9.16738 0.998024 9.00324 1.11823L0.487521 7.35322C0.279521 7.50553 0.234328 7.7976 0.386643 8.0056C0.538959 8.2136 0.831065 8.25873 1.03903 8.10648L9.27892 2.07336L17.5188 8.10644C17.6019 8.16732 17.6985 8.19662 17.7942 8.19662C17.9379 8.19662 18.0797 8.13048 18.1712 8.00557C18.3235 7.7976 18.2783 7.50553 18.0703 7.35322Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth='0.5'
    />
    <path
      d='M15.8139 8.21191C15.5561 8.21191 15.3471 8.4209 15.3471 8.67869V16.1085H11.613V12.0528C11.613 10.7658 10.5659 9.71879 9.27897 9.71879C7.99202 9.71879 6.94494 10.7659 6.94494 12.0528V16.1085H3.2108V8.67872C3.2108 8.42093 3.00178 8.21195 2.74402 8.21195C2.48627 8.21195 2.27725 8.42093 2.27725 8.67872V16.5753C2.27725 16.8331 2.48627 17.0421 2.74402 17.0421H7.41171C7.65718 17.0421 7.85806 16.8524 7.87666 16.6117C7.87778 16.6008 7.87848 16.5888 7.87848 16.5753V12.0529C7.87848 11.2806 8.50673 10.6524 9.27897 10.6524C10.0512 10.6524 10.6795 11.2807 10.6795 12.0529V16.5753C10.6795 16.5888 10.6802 16.6005 10.6813 16.6112C10.6997 16.8522 10.9006 17.0421 11.1462 17.0421H15.8139C16.0717 17.0421 16.2807 16.8331 16.2807 16.5753V8.67872C16.2807 8.4209 16.0717 8.21191 15.8139 8.21191Z'
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth='0.5'
    />
  </svg>
);

export default DashboardIcon;
