import Button from '../components/UI/Button';
import { ReactComponent as ArrowIcon } from '../assets/icons/up-arrow-icon.svg';
import { ReactComponent as PlayButton } from '../assets/images/video-play-btn.svg';
import { ReactComponent as FeaturesSVG } from '../assets/images/features.svg';
import { ReactComponent as Toronto } from '../assets/images/toronto.svg';
import { ReactComponent as MapSVG } from '../assets/images/map.svg';
import { ReactComponent as LocationSVG } from '../assets/icons/location.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg';
import { ReactComponent as SocialMediaIcons } from '../assets/images/social-media-icons.svg';
import Testimonials from '../components/Testimonials';
import StepsCard from '../components/StepsCard';
import greenCircleGif from '../assets/images/green-circle.gif';

const navigationLinks = [
    { label: 'Home', url: '#' },
    { label: 'About Us', url: '#' },
    { label: 'Owners', url: '#' },
    { label: 'Tenants', url: '#' },
    { label: 'Properties', url: '#' }
];

const otherLinks = [
    { label: 'Online Medications', url: '#' },
    { label: 'Download App', url: '#' },
    { label: 'Start Treatment', url: '#' },
    { label: 'Online Urgent Care', url: '#' },
    { label: 'FAQ', url: '#' }
];
function Home() {
    return (
        <>
            <div className="h-[1080px] cover-image-wrapper">
                <div className="absolute h-[1080px] inset-0 bg-black opacity-50" />
                <div className="z-1 absolute w-full">

                    <div className="flex flex-col justify-center items-center mt-10">
                        <div className="w-[80%]">
                            <div
                                className="w-full py-[32px] px-[48px] flex justify-between items-center bg-[#0000001A] backdrop-blur-sm rounded-[16px]"
                            >
                                <div className="text-[61.28px] font-cabinet font-semibold text-white">LOGO</div>
                                <div className="flex items-center gap-10 text-white text-lg">
                                    {navigationLinks.map((link) => <a href={link.url}>{link.label}</a>)}
                                </div>
                                <Button onClick={() => {}}>
                                    Start Treatment
                                </Button>
                            </div>

                            <div className="max-w-[815px] mt-64 flex flex-col gap-4">
                                <p className="text-2xl text-offWhite">No lines.Less hassle, Lower costs.</p>
                                <p className="text-[72px] font-medium text-white">
                                    Easy Online Suboxone Treatment for Opioid Addiction
                                </p>
                                <Button
                                    onClick={() => {
                                    }}
                                    icon={<ArrowIcon />}
                                >
                                    Download the app today
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="h-[375px] relative recovery-wrapper">
                <div className="absolute h-[375px] inset-0 bg-white opacity-80" />
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
                                We’re not just offering a service; we’re creating a lifeline. Our platform is designed
                                to
                                eliminate
                                the challenges that often stand in the way of recovery—whether it’s stigma,
                                inconvenience,
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

            <div className="w-full flex flex-col items-center">
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
                        <div className="absolute h-[395px] inset-0 bg-black opacity-50" />
                        <div className="z-1 absolute w-full h-full flex justify-center items-center">
                            <PlayButton />
                        </div>
                    </div>
                </div>

                <div className="w-[80%]">
                    <Testimonials />
                </div>
            </div>

            <div className="relative w-full mt-16">
                <div className="absolute mt-[250px] w-full flex justify-center">
                    <img src={greenCircleGif} alt="circle-green-gif" />
                </div>
                <div className="z-1 relative w-full flex justify-center steps-block-wrapper">
                    <div className="w-[80%] py-16">
                        <h3 className="text-themeColor text-2xl font-medium mb-2">GET SAME-DAY ONLINE</h3>
                        <div className="flex justify-between items-center w-full">
                            <h2 className="text-[52px] font-medium text-gray-800">Suboxone Treatment In 10 Minutes</h2>
                            <Button
                                onClick={() => {
                                }}
                                icon={<ArrowIcon />}
                            >
                                Download the app today
                            </Button>
                        </div>

                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-[400px]">
                            <div>
                                <StepsCard
                                    step="1"
                                    title="Download The App"
                                    content="Click the link to download our app to get started."
                                />
                                <StepsCard
                                    className="mt-20"
                                    step="1"
                                    title="Schedule Your First Visit"
                                    content="Our onboarding team will send you a link to book your first meeting. Many times, this is the same day."
                                />
                            </div>
                            <div>
                                <StepsCard
                                    step="2"
                                    title="Complete Onboarding Process & Documents"
                                    content="Provide medical history and sign treatment forms."
                                />
                                <StepsCard
                                    className="mt-20"
                                    step="4"
                                    title="Meet With Licensed Provider"
                                    content="At the time of your appointment, open the app on your phone to have your visit."
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-20">
                            <StepsCard
                                step="6"
                                title="Pick Up Medication"
                                content="Your script will be sent to your pharmacy of choice for pick up the same day."
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-16 w-full flex flex-col items-center">
                <div className="w-[80%]">
                    <h3 className="text-themeColor text-2xl font-medium mb-2">AS SEEN</h3>
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[52px] font-medium text-gray-800">Featured On</h2>
                        <div className="features-svg-wrapper">
                            <FeaturesSVG />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 mt-5">
                        <h3 className="text-themeColor text-2xl font-medium mb-2">STATES WE</h3>
                        <h2 className="text-[52px] font-medium text-gray-800">Currently Serve</h2>
                        <p className="w-[70%] text-center text-[20px] text-customBlack">
                            We believe everyone should have access to treatment and care. That’s why we’re teaming up
                            with providers
                            all over the country. Click on a green state to see the insurance companies
                            we currently accept and to learn more about online Suboxone doctors in your area.
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-[40%_60%] gap-10">
                        <div className="flex flex-col gap-3 mt-4">
                            <Toronto />
                            <div className="text-[31.56px] font-semibold">
                                Toronto
                            </div>
                            <div className="flex items-center gap-2">
                                <LocationSVG />
                                <span className="text-[#00927C] text-[18.41px] font-semibold">Ottawa St. and Homer Waston Blvd.</span>
                            </div>
                        </div>
                        <div className="w-fit max-h-[521px] overflow-y-hidden">
                            <MapSVG />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[502px] mt-32 relative get-app-block-wrapper">
                <div className="absolute h-[502px] inset-0 get-app-block opacity-80" />
                <div className="flex justify-center items-center z-1 absolute w-full h-full">
                    <div className="max-w-[868px] flex flex-col items-center gap-5">
                        <div className="text-lg font-medium">SECURE ACCESS TO YOUR MEDICATION</div>
                        <div className="text-4xl font-medium">Get Your Meds Online Today</div>
                        <div className="text-[20px] text-black">
                            We have partnered with RX-Outreach to provide mail order medications at a fraction of
                            the price you may find in your local pharmacy. Meet your chronic illness provider
                            online today and get your medication delivered as quickly as 24 hours later.
                        </div>
                        <Button
                            variant="black"
                            onClick={() => {
                            }}
                            icon={<ArrowIcon />}
                        >
                            Get The App
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-16 w-full flex flex-col items-center">
                <div className="w-[80%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <div className="text-themeColor text-[76.52px] font-medium">LOGO</div>
                            <div className="mt-5 text-customBlack text-lg max-w-[459px]">
                                Experience the convenience of Recovery Delivered, your trusted source for
                                online medication delivery. We bring the pharmacy to your doorstep,
                                ensuring fast, discreet, and reliable service. Whether you&apos;re managing a
                                chronic condition or need a one-time prescription filled, we make the process simple and
                                hassle-free
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <div className="text-themeColor text-2xl">Quick Links</div>
                                <div className="mt-3 flex flex-col gap-5">
                                    {navigationLinks.map((link) => (
                                        <a className="text-customBlack text-lg" href={link.url}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="text-themeColor text-2xl">Other Links</div>
                                <div className="mt-3 flex flex-col gap-5">
                                    {otherLinks.map((link) => (
                                        <a className="text-customBlack text-lg" href={link.url}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="ml-10 flex flex-col gap-7">
                                    <div className="text-themeColor text-2xl">Contact</div>
                                    <div className="flex items-center gap-2 text-customBlack text-lg">
                                        <PhoneIcon />
                                        <span className="text-customBlack">1-866-757-9868</span>
                                    </div>
                                    <div className="text-themeColor text-2xl">Social Media</div>
                                    <SocialMediaIcons />
                                </div>
                                <p className="mt-10 text-sm text-customBlack">Designed and developed by Ropstam</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 w-full h-[1px] bg-[#C6C6C6]" />
                    <p className="my-5 text-sm text-customBlack">©2024 – recovery Delivered | All Right Reserved</p>

                </div>
            </div>
        </>
    );
}

export default Home;
