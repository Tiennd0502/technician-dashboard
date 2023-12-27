interface NotificationIconProps {
  fillColor?: string;
}

const NotificationIcon = ({ fillColor = '#4c52bc' }: NotificationIconProps) => (
  <svg width='23' height='24' viewBox='0 0 23 24' fill='none'>
    <path
      d='M5.45605 15.9237L4.58934 15.4249C4.41126 15.7343 4.41165 16.1152 4.59037 16.4243C4.7691 16.7334 5.09904 16.9237 5.45605 16.9237V15.9237ZM18.4422 15.9237V16.9237C18.7992 16.9237 19.1292 16.7334 19.3079 16.4243C19.4866 16.1152 19.487 15.7343 19.3089 15.4249L18.4422 15.9237ZM21.8983 15.9237H22.8983C22.8983 15.3714 22.4505 14.9237 21.8983 14.9237V15.9237ZM3.98474 8.96439H2.98474H3.98474ZM21.8983 17.9237V18.9237C22.4505 18.9237 22.8983 18.476 22.8983 17.9237H21.8983ZM9.3614 20.4042L8.49486 19.9051L9.3614 20.4042ZM14.5369 20.4042L13.6703 20.9033H13.6703L14.5369 20.4042ZM14.5353 21.4051L13.6703 20.9033H13.6703L14.5353 21.4051ZM9.36293 21.4051L8.49793 21.9069L9.36293 21.4051ZM6.98474 8.96439C6.98474 6.22263 9.20737 4 11.9491 4V2C8.1028 2 4.98474 5.11806 4.98474 8.96439H6.98474ZM6.98474 13.939V8.96439H4.98474V13.939H6.98474ZM6.32277 16.4225C6.74408 15.6904 6.98474 14.8413 6.98474 13.939H4.98474C4.98474 14.4819 4.84067 14.9882 4.58934 15.4249L6.32277 16.4225ZM18.4422 14.9237H5.45605V16.9237H18.4422V14.9237ZM16.9135 13.939C16.9135 14.8413 17.1542 15.6904 17.5755 16.4225L19.3089 15.4249C19.0576 14.9882 18.9135 14.4819 18.9135 13.939H16.9135ZM16.9135 8.96439V13.939H18.9135V8.96439H16.9135ZM11.9491 4C14.6909 4 16.9135 6.22263 16.9135 8.96439H18.9135C18.9135 5.11806 15.7955 2 11.9491 2V4ZM21.8983 14.9237C21.3544 14.9237 20.9135 14.4828 20.9135 13.939H18.9135C18.9135 15.5874 20.2498 16.9237 21.8983 16.9237V14.9237ZM20.9135 13.939V8.96439H18.9135V13.939H20.9135ZM20.9135 8.96439C20.9135 4.01349 16.9 0 11.9491 0V2C15.7955 2 18.9135 5.11806 18.9135 8.96439H20.9135ZM11.9491 0C6.99823 0 2.98474 4.01349 2.98474 8.96439H4.98474C4.98474 5.11806 8.1028 2 11.9491 2V0ZM2.98474 8.96439V13.939H4.98474V8.96439H2.98474ZM2.98474 13.939C2.98474 14.4828 2.54386 14.9237 2 14.9237V16.9237C3.64843 16.9237 4.98474 15.5874 4.98474 13.939H2.98474ZM2 14.9237C0.895431 14.9237 0 15.8191 0 16.9237H2V14.9237ZM0 16.9237C0 18.0283 0.895431 18.9237 2 18.9237V16.9237H0ZM2 18.9237H21.8983V16.9237H2V18.9237ZM22.8983 17.9237V15.9237H20.8983V17.9237H22.8983ZM10.2279 18.9033C9.51267 18.9033 8.85186 19.2853 8.49486 19.9051L10.2279 20.9033V18.9033ZM13.6703 18.9033H10.2279V20.9033H13.6703V18.9033ZM15.4034 19.9051C15.0464 19.2853 14.3856 18.9033 13.6703 18.9033V20.9033H13.6703L15.4034 19.9051ZM15.4003 21.9069C15.7592 21.2882 15.7604 20.5249 15.4034 19.9051L13.6703 20.9033L15.4003 21.9069ZM11.9491 23.8947C13.3716 23.8947 14.6866 23.1374 15.4003 21.9069L13.6703 20.9033C13.3144 21.517 12.6586 21.8947 11.9491 21.8947V23.8947ZM8.49793 21.9069C9.21171 23.1374 10.5266 23.8947 11.9491 23.8947V21.8947C11.2397 21.8947 10.5839 21.517 10.2279 20.9033L8.49793 21.9069ZM8.49486 19.9051C8.13786 20.5249 8.13903 21.2882 8.49793 21.9069L10.2279 20.9033L8.49486 19.9051Z'
      fill={fillColor}
    />
  </svg>
);

export default NotificationIcon;
