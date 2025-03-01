import Button from "./components/UI/Button";
import {ReactComponent as ArrowIcon} from "./assets/icons/up-arrow-icon.svg"
import {ReactComponent as PlayButton} from "./assets/images/video-play-btn.svg"

function App() {
  return (
      <>
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
                              <Button onClick={() => {
                              }} icon={<ArrowIcon/>}>
                                  Download the app today
                              </Button>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

          <div className="h-[375px] relative recovery-wrapper">
              <div className="absolute h-[375px] inset-0 bg-white opacity-80"></div>
              <div className="flex justify-center items-center z-1 absolute w-full">
                  <div className="w-[80%] grid grid-cols-2 gap-20 py-16">
                      <div>
                          <div className="text-[46px] font-medium text-customBlack">
                              Breaking Barriers to Recovery
                          </div>
                          <div className="mt-10 text-xl text-customBlack">
                              Our mission is to make Medication Assisted Treatment accessible to people in both major
                              cities
                              and rural communities.
                              We’re deeply committed to removing obstacles to recovery, ensuring our clients get the
                              support
                              they need.
                          </div>
                      </div>
                      <div>
                          <div className="text-xl text-customBlack">
                              We’re not just offering a service; we’re creating a lifeline. Our platform is designed to
                              eliminate
                              the challenges that often stand in the way of recovery—whether it’s stigma, inconvenience,
                              or lack of access to quality care
                          </div>
                          <div className="mt-10 mx-5 grid grid-cols-3">
                              <div>
                                  <div className="text-themeColor text-[40px] font-medium">500+</div>
                                  <div className="text-customBlack text-[24px]">Patients Treated</div>
                              </div>
                              <div>
                                  <div className="text-themeColor text-[40px] font-medium">300+</div>
                                  <div className="text-customBlack text-[24px]">Centers Nationwide</div>
                              </div>
                              <div>
                                  <div className="text-themeColor text-[40px] font-medium">4.9/5</div>
                                  <div className="text-customBlack text-[24px]">Patients Satisfaction</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="w-full flex justify-center">
              <div className="w-[80%] grid grid-cols-2 gap-20 py-16">
                  <div className="flex flex-col gap-5">
                      <div className="text-2xl text-themeColor">
                          WELCOME TO RECOVERY DELIVERED
                      </div>
                      <div className="text-[52px] font-medium text-customBlack">
                          Your Fully Online Suboxone Treatment Platform
                      </div>
                      <div className="text-xl text-customBlack">
                          100% online opioid treatment with licensed buprenorphine providers starts at just $99/month.
                      </div>
                      <div className="text-xl text-customBlack">
                          With monthly and weekly meetings based on where you are in your recovery. Get a same-day
                          appointment and script.
                      </div>
                  </div>
                  <div className="relative cover-image-wrapper h-[395px] rounded-[16px] overflow-hidden">
                      <div className="absolute h-[395px] inset-0 bg-black opacity-50"></div>
                      <div className="z-1 absolute w-full h-full flex justify-center items-center">
                          <PlayButton/>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
