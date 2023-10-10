import Button from "./components/Button";
import Typography from "./components/Typography";
import RightArrowSvg from './assets/RightArrow'
import BottomMenu from "./BottomMenu";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-red-300 text-center underline">
        Hello world!
      </h1>
      <div className="w-full flex-col justify-center items-center mt-56 ">
          <div className="py-8 flex w-full">
            <div className="h-px bg-light-gray w-1/2 mx-auto my-auto"></div>
            <Typography variant="P_SemiBold_H6">or</Typography>
            <div className="h-px bg-light-gray w-1/2 mx-auto my-auto"></div>
          </div>
          <Button
            variant=""
            className="flex justify-center w-10/12 items-center mx-auto"
          >
            <Typography variant="P_Medium_H5" className="text-primary-orange">
              Skip Now
            </Typography>
            <RightArrowSvg />
          </Button>
        </div>
<BottomMenu/>
    </div>
  );
}

export default App;
