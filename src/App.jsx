import Button from "./components/UI/Button";
import {ReactComponent as ArrowIcon} from "./assets/icons/up-arrow-icon.svg"

function App() {
  return (
      <div className="h-[1080px] cover-image-wrapper">
          <div className="absolute h-[1080px] inset-0 bg-black opacity-50"></div>
          <div className="z-1 absolute w-full">

              <div className="flex flex-col justify-center items-center mt-10">
                  <div className="w-[80%]">
                      <div
                          className="w-full py-[32px] px-[48px] flex justify-between items-center bg-[#0000001A] backdrop-blur-sm rounded-[16px]">
                          <div className="text-[61.28px] font-cabinet font-semibold text-white">LOGO</div>
                          <div className="flex items-center gap-10 text-white text-lg">
                              <a href="#" className="font-semibold">Home</a>
                              <a href="#">About Us</a>
                              <a href="#">Owners</a>
                              <a href="#">Tenants</a>
                              <a href="#">Properties</a>
                          </div>
                          <Button onClick={() => {
                          }}> Start Treatment</Button>
                      </div>

                      <div className="max-w-[815px] mt-64 flex flex-col gap-4">
                          <p className="text-2xl text-offWhite">No lines.Less hassle, Lower costs.</p>
                          <p className="text-[72px] font-medium text-white">
                              Easy Online Suboxone Treatment for Opioid Addiction
                          </p>
                          <Button onClick={() => {}} icon={<ArrowIcon />}>
                              Download the app today
                          </Button>
                      </div>
                  </div>
              </div>

          </div>

      </div>
  );
}

export default App;
