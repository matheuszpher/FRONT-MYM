const EmailIcon = () => {
  return (
    <svg
      width="35"
      height="33"
      viewBox="0 0 35 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_560_8)">
        <path
          d="M22.0977 24.5H8.69924C4.6797 24.5 2 22.4706 2 17.7353V8.26471C2 3.52941 4.6797 1.5 8.69924 1.5H22.0977C26.1173 1.5 28.797 3.52941 28.797 8.26471V17.7353C28.797 22.4706 26.1173 24.5 22.0977 24.5Z"
          stroke="#EBF5EE"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0977 8.94104L17.904 12.3234C16.5239 13.4328 14.2596 13.4328 12.8795 12.3234L8.69922 8.94104"
          stroke="#EBF5EE"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_560_8"
          x="0"
          y="0.5"
          width="34.7969"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_560_8"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_560_8"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default EmailIcon
