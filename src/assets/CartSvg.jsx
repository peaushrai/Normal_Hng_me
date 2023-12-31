import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    className={`w-fit cursor-pointer transition-all duration-200  transform active:scale-95 ${props.className}`}
  >
    <g clipPath="url(#clip0_942_7530)">
      <path
        fill={`${
          props?.active ? '#fe724c' : '#8C8A9D'
        }`}
        d="M7.438 17.78c-1.049-.053-1.03-1.528 0-1.579 2.914.01 10.6.003 13.607.005.822 0 1.526-.56 1.71-1.361l1.708-7.393c.098-.424 0-.862-.27-1.202a1.408 1.408 0 0 0-1.109-.539c-1.21 0-11.477-.047-16.736-.067L5.515 2.55a1.703 1.703 0 0 0-1.64-1.255H1.203a.704.704 0 0 0 0 1.407h2.67c.132 0 .248.089.282.215l3.202 11.879a2.18 2.18 0 0 0-1.485.653 2.18 2.18 0 0 0-.632 1.58 2.207 2.207 0 0 0 2.197 2.159h1.025a2.465 2.465 0 0 0 2.224 3.518 2.465 2.465 0 0 0 2.225-3.518h4.442a2.465 2.465 0 0 0 2.225 3.517 2.465 2.465 0 0 0 2.206-3.555.703.703 0 0 0-.225-1.37H7.438Zm4.305 2.463a1.056 1.056 0 0 1-2.11 0c0-.582.472-1.055 1.054-1.055h.002c.581 0 1.054.473 1.054 1.055Zm7.836 1.055a1.056 1.056 0 0 1-.017-2.11h.034a1.056 1.056 0 0 1-.017 2.11Zm3.51-14.175c.005.005.004.008.003.012l-.72 3.115h-2.435l.415-3.143 2.727.01c.004 0 .006 0 .01.006ZM15.838 14.8v-3.142h2.495l-.415 3.142h-2.08Zm-3.489 0-.418-3.142h2.5V14.8h-2.082Zm-3.238 0h-.003a.381.381 0 0 1-.367-.28l-.77-2.862h2.54l.419 3.142h-1.82Zm2.633-4.549-.423-3.18 3.11.013v3.167h-2.687Zm4.094 0V7.09l3.096.012-.416 3.15h-2.68ZM9.9 7.065l.424 3.185H7.59l-.862-3.198 3.172.013Zm11.145 7.734h-1.709l.415-3.142h2.297l-.663 2.871a.347.347 0 0 1-.34.27Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
