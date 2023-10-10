import React, { useState } from 'react';

// ** import shared components
import Typography from './components/Typography';
import Button from './components/Button';

// ** import assets
import CartSvg from './assets/CartSvg';
import DishSvg from './assets/DishSvg';
import HomeSvg from './assets/HomeSvg';
import StarOutlineSvg from './assets/StarOutlineSvg';


// ** import utils
import cn from './utils/cn';

const BottomMenu = ({val}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const BottomMenuData = [
    { svg: <HomeSvg active />, inActiveSvg: <HomeSvg />, title: 'Home', to:"/#" },
    { svg: <DishSvg active />, inActiveSvg: <DishSvg />, title: 'Magic', to:"/#" },
    { svg: <StarOutlineSvg active />, inActiveSvg: <StarOutlineSvg />, title: "Special", to:"/#" },
    { svg: <CartSvg active />, inActiveSvg: <CartSvg />, title: 'Cart', to:"/#" },
  ];

  return (

    <div className=" sm:w-1/2 sm:mx-auto sm:bottom-8 sm:rounded-full sm:px-8 sm:pb-2 fixed bottom-0 left-0 right-0 px-6  pb-4 bg-primary-white shadow-custom2 ">
      <div className=" flex justify-between">

      {BottomMenuData.map((nav, index) => (
        <Button
          key={index}
          variant="plain"
          link={nav.to}
          className={cn(
            'pt-3 sm:pt-4 flex flex-col items-center',
            index == selectedIndex &&
            'border-t-4 !rounded-none border-primary-orange sm:border-0',
            index == selectedIndex
            ? 'text-primary-orange'
              : 'text-primary-gray',
              )}
          onClick={() => {
            setSelectedIndex(index);
          }}
          >
          {index == selectedIndex ? nav.svg : nav.inActiveSvg}

          <Typography variant="P_Medium_H6" className={'pt-3'}>
            {nav.title}
          </Typography>
        </Button>
      ))}
      </div>
    </div>
    
  );
};

export default BottomMenu;
