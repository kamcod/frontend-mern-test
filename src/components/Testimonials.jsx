import { useState } from "react"
import {ReactComponent as LeftArrow} from "../assets/icons/left-arrow.svg";
import {ReactComponent as RightArrow} from "../assets/icons/right-arrow.svg";
import {ReactComponent as FullStar} from "../assets/icons/star_full.svg";
import {ReactComponent as HalfStar} from "../assets/icons/star_half.svg";
import {ReactComponent as EmptyStar} from "../assets/icons/star_outline.svg";
import clientImg1 from "../assets/images/client-img1.png";
import clientImg2 from "../assets/images/client-img2.png";
import clientImg3 from "../assets/images/client-img3.png";


export default function Testimonials() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const testimonials = [
        {
            id: 1,
            name: "Nicholas O.",
            title: "Client",
            content: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
            rating: 3.5,
            image: clientImg1,
        },
        {
            id: 2,
            name: "Christine M.",
            title: "Client",
            content:
                "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
            rating: 3.5,
            image: clientImg2,
        },
        {
            id: 3,
            name: "Heather B.",
            title: "Client",
            content:
                "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
            rating: 3.5,
            image: clientImg3,
        },
    ];

    const getStarSvg = (i, rating) => {
        const num = i + 1;
        if(num <= rating){
            return <FullStar />
        } else if(num - rating < 1){
            return <HalfStar />
        }
        return <EmptyStar />
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h3 className="text-themeColor text-2xl font-medium mb-2">OUR CLIENT&apos;S</h3>
                    <h2 className="text-[52px] font-medium text-gray-800">Testimonials</h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        <LeftArrow />
                    </button>
                    <button className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors">
                        <RightArrow />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className={`bg-white rounded-[12px] p-8 border border-[#E2E8F0] shadow-sm transition-all duration-500 ease-in-out ${
                            hoveredCard !== null && hoveredCard !== testimonial.id ? "blur-[2px] scale-95" : ""
                        } ${hoveredCard === testimonial.id ? "rotate-[-5deg] shadow-md z-10" : ""}`}
                        onMouseEnter={() => setHoveredCard(testimonial.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                getStarSvg(i, +testimonial.rating)
                            ))}
                        </div>
                        <p className="text-customBlack mb-6 select-none">{testimonial.content}</p>
                        <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

