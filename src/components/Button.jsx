import React from 'react';

// ** import utils
import cn from '../utils/cn';

/**
 * @typedef {'forward' | 'back'} LinkDirection
 */

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - The content inside the button.
 * @param {'solid' | 'twoTone' | 'plain' | 'default' | 'outline'} [props.variant] - The button variant.
 * @param {'start' | 'center' | 'end'} [props.position] - The button's horizontal alignment.
 * @param {'lg' | 'md' | 'sm' | 'xs'} [props.size] - The button size.
 * @param {string} [props.color] - The button's color (text and border).
 * @param {'round' | 'circle' | 'none'} [props.shape] - The button shape.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {React.ReactNode} [props.iconStart] - The icon to display before the button text.
 * @param {React.ReactNode} [props.iconEnd] - The icon to display after the button text.
 * @param {boolean} [props.loading] - Whether the button is in a loading state.
 * @param {boolean} [props.block] - Whether the button spans the full width of its container.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {LinkDirection} [props.navigate] - The direction of the link.
 * @param {string} [props.link] - The URL to link to if the button acts as a link.
 * @param {string} [props.target] - The target attribute for the link (e.g., '_blank').
 * @param {'button' | 'submit'} [props.type] - The type attribute for the link (e.g., 'button').
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({
  children,
  variant = 'default',
  position = 'center',
  size = 'md',
  color,
  shape = 'round',
  disabled = false,
  iconStart,
  iconEnd,
  loading = false,
  block = false,
  className,
  navigate,
  link,
  target,
  type = 'button', // button | submit
  ...props
}) => {
  const positionClasses = cn({
    '!justify-start': position === 'start',
    '!justify-center': position === 'center',
    '!justify-end': position === 'end',
  });

  const buttonClasses = cn(
    'outline-none inline-flex items-center justify-center font-poppins transition-all duration-200 transform active:scale-95',
    positionClasses,
    {
      'bg-primary-orange text-white border-2 border-transparent':
        variant === 'default',
      'bg-transparent text-mid-black border-2 border-primary-orange':
        variant === 'twoTone',
      'bg-transparent text-current': variant === 'plain',
      'bg-white text-primary-orange border-2 border-light-gray':
        variant === 'outline',
      'px-5 py-2 text-base sm:leading-8 sm:text-lg': size === 'md',
      'px-4 py-2 text-sm sm:leading-7 sm:text-base': size === 'sm',
      'px-3 py-1 text-xs sm:leading-6 sm:text-sm': size === 'xs',
      'px-6 py-3 text-xl sm:leading-9 sm:text-2xl': size === 'lg',
      'rounded-lg': shape === 'round',
      'rounded-full': shape === 'circle',
      'rounded-none': shape === 'none',
      'cursor-not-allowed': disabled || loading,
      'w-full': block,
    },
    color && `text-${color} border-${color}`,
    !disabled &&
      !loading &&
      color &&
      variant === 'outline' &&
      `hover:bg-${color} hover:text-white`,
    className,
  );



  const handleNavigate = () => {
console.log("hii")
  };

  return link ? (
    <span
    
      role="button"
      aria-disabled={disabled || loading}
      {...props}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {loading ? 'Loading...' : children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </span>
  ) : (
    <button
      className={`${buttonClasses}`}
      disabled={disabled || loading}
      type={type}
      {...props}
      onClick={() => {
        if (props?.onClick) {
          props?.onClick(); // Execute the props.onClick function if it exists
        }
        if (navigate) {
          handleNavigate(); // Execute handleNavigate if it exists
        }
      }}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>}
      {loading ? 'Loading...' : children}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </button>
  );
};

export default Button;
