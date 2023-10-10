import { Link } from 'react-router-dom';

// ** third party library
import { motion as m } from 'framer-motion';

/**
 * @typedef {'P_Bold_H1' | 'P_Bold_H2' | 'P_Bold_H3' | 'P_Bold_H4' | 'P_Bold_H5' | 'P_Bold_H6' |
 *            'P_SemiBold_H1' | 'P_SemiBold_H2' | 'P_SemiBold_H3' | 'P_SemiBold_H4' | 'P_SemiBold_H5' | 'P_SemiBold_H6' |
 *            'P_Medium_H1' | 'P_Medium_H2' | 'P_Medium_H3' | 'P_Medium_H4' | 'P_Medium_H5' | 'P_Medium_H6' |
 *            'P_Regular_H1' | 'P_Regular_H2' | 'P_Regular_H3' | 'P_Regular_H4' | 'P_Regular_H5' | 'P_Regular_H6'} TypographyVariant
 * @typedef {'move' | 'underline'} TypographyAnimation
 * @typedef {'forward' | 'back'} LinkDirection
 */

/**
 * Represents a Typography component with various text styles and animations.
 *
 * @component
 * @param {object} props - The component props.
 * @param {TypographyVariant} props.variant - The text variant.
 * @param {React.ReactNode} props.children - The content to display.
 * @param {string} props.className - Additional CSS classes for styling.
 * @param {number} props.maxLines - Maximum number of lines to display (0 for no limit).
 * @param {LinkDirection} [props.navigate] - The direction of the link.
 * @param {string} props.link - Optional link URL.
 * @param {string} props.target - Target attribute for the link.
 * @param {TypographyAnimation} props.animate - Animation type ('move' or 'underline').
 * @param {boolean} props.disableSelect - Disable selection
 * @param {React.ReactNode} props.children - The content to display.
 * @returns {React.ReactNode} The rendered Typography component.
 *
 * @example
 * // Example usage of Typography component
 * <Typography variant="P_Bold_H1" animate="move">Hello, World!</Typography>
 */

function Typography({
  mVariants,
  mDelay = 0,
  variant,
  children,
  className,
  maxLines,
  navigate,
  link = '',
  target = '',
  animate = '',
  disableSelect = false, // Added the new prop with a default value of false
  ...props
}) {
  if (!variant) {
    throw new Error('variant is required');
  }

  const getClassName = () => {
    switch (variant) {
      // "Bold" - 700
      case 'P_Bold_H1':
        return 'font-poppins font-bold text-[40px] md:text-[62px] tracking-normal';
      case 'P_Bold_H2':
        return 'font-poppins font-bold text-[32px] md:text-[49px] tracking-normal';
      case 'P_Bold_H3':
        return 'font-poppins font-bold text-[24px] md:text-[39px] tracking-normal';
      case 'P_Bold_H4':
        return 'font-poppins font-bold text-[20px] md:text-[25px] tracking-normal';
      case 'P_Bold_H5':
        return 'font-poppins font-bold text-[16px] md:text-[20px] tracking-normal';
      case 'P_Bold_H6':
        return 'font-poppins font-bold text-[14px] md:text-[16px] tracking-normal';

      // "SemiBold" - 600
      case 'P_SemiBold_H1':
        return 'font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal';
      case 'P_SemiBold_H2':
        return 'font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal';
      case 'P_SemiBold_H3':
        return 'font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal';
      case 'P_SemiBold_H_T':
        return 'font-poppins font-semibold text-[24px] md:text-[31px] tracking-normal';
      case 'P_SemiBold_H4':
        return 'font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal';
      case 'P_SemiBold_H5':
        return 'font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal';
      case 'P_SemiBold_H6':
        return 'font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal';

      // "Medium" - 500
      case 'P_Medium_H1':
        return 'font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal';
      case 'P_Medium_H2':
        return 'font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal';
      case 'P_Medium_H3':
        return 'font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal';
      case 'P_Medium_H4':
        return 'font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal';
      case 'P_Medium_H5':
        return 'font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal';
      case 'P_Medium_H6':
        return 'font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal';
      case 'P_Medium_H7':
        return 'font-poppins font-semibold text-[10px] md:text-[14px] tracking-normal';

      // "Regular" - 400
      case 'P_Regular_H1':
        return 'font-poppins font-normal text-[40px] md:text-[62px] tracking-normal';
      case 'P_Regular_H2':
        return 'font-poppins font-normal text-[32px] md:text-[49px] tracking-normal';
      case 'P_Regular_H3':
        return 'font-poppins font-normal text-[24px] md:text-[39px] tracking-normal';
      case 'P_Regular_H4':
        return 'font-poppins font-normal text-[20px] md:text-[25px] tracking-normal';
      case 'P_Regular_H5':
        return 'font-poppins font-normal text-[16px] md:text-[20px] tracking-normal';
      case 'P_Regular_H6':
        return 'font-poppins font-normal text-[14px] md:text-[16px] tracking-normal';

      default:
        return '';
    }
  };

  const fontTypes = getClassName();

  const lineClampClass =
    maxLines > 0 ? `line-clamp-${maxLines?.toString()}` : 'whitespace-normal';

  const getAnimationClass = () => {
    switch (animate) {
      case 'move':
        return 'hover:ml-1.5 transition-all duration-300';
      case 'underline':
        return 'hover:underline transition-all duration-300';
      default:
        return '';
    }
  };

  const animationClass = getAnimationClass();


  const handleNavigate = () => {
   console.log("hii")
  };

  const content = (
    <m.span
      initial="hidden"
      whileInView="visible"
      variants={mVariants}
      transition={{ duration: 0.6, ease: 'easeIn', delay: mDelay }}
      viewport={{ once: true }}
      className={`${fontTypes} ${className} ${lineClampClass} ${animationClass} overflow-wrap overflow-hidden leading-normal`}
      style={{ userSelect: disableSelect ? 'none' : 'auto' }} // Add this line to conditionally apply userSelect style
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
      {children}
    </m.span>
  );

  return  (
   
    content
  );
}

Typography.defaultProps = {
  className: '',
  maxLines: 0,
  animate: '',
};

export default Typography;
