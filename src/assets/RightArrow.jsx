import * as React from "react"
const SvgComponent = (props) => (
  <svg
  {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={`w-fit cursor-pointer transition-all duration-200  transform active:scale-95 ${props.className}`}

  >
    <path
      fill="#fe724c"
      fillRule="evenodd"
      d="M6.91 5.244a.833.833 0 0 1 1.18 0l4.444 4.445a.833.833 0 0 1 0 1.178l-4.445 4.444a.833.833 0 1 1-1.178-1.178l3.855-3.855-3.855-3.855a.833.833 0 0 1 0-1.179Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
