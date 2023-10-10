import * as React from "react"
const SvgComponent = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    className={`w-fit cursor-pointer transition-all duration-200  transform active:scale-95 ${props.className}`}
  >
    <path
     fill={`${props.active ? '#fe724c' : '#8C8A9D'}`}
      d="m23.06 8.965-6.447-.937-2.882-5.842a.816.816 0 0 0-1.457 0L9.392 8.028l-6.447.937a.811.811 0 0 0-.45 1.386L7.16 14.9 6.058 21.32a.811.811 0 0 0 1.178.856l5.766-3.032 5.767 3.032a.811.811 0 0 0 1.178-.856L18.845 14.9l4.664-4.547a.81.81 0 0 0 .236-.465.81.81 0 0 0-.685-.922Zm-6.178 5.294.917 5.34-4.797-2.519-4.796 2.521.917-5.34-3.88-3.783 5.362-.78 2.397-4.856L15.4 9.699l5.363.78-3.88 3.78Z"
    />
  </svg>
)
export default SvgComponent
