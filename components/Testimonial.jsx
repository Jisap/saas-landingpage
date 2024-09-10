import { fadeInOnScroll } from "@/motion/motionVariants"
import { motion } from "framer-motion"
import { BiSolidQuoteLeft} from 'react-icons/bi'

const testimonial = [
  {
    name: "John Doe",
    message: "This service was incredible! It exceeded my expectations and I will definitely recommend it to others.",
  },
  {
    name: "Jane Doe",
    message: "I was impressed with the level of support and responsiveness provided by this company. They truly went above and beyond to make my experience as smooth and enjoyable as possible.",
  },
  {
    name: "Bob Smith",
    message: "I was blown away by the quality of work and the level of support provided by this company. They truly went above and beyond to make my experience as smooth and enjoyable as possible.",
  },
  {
    name: "Mark Brown",
    message: "This service was incredible! It exceeded my expectations and I will definitely recommend it to others.",
  },
  {
    name: "Samuel Green",
    message: "I was impressed with the level of support and responsiveness provided by this company.",
  },
  {
    name: "Crhistiano Rowland",
    message: "Incredible service! I was blown away by the quality of work and the level of support provided by this company.",
  },
]

const Testimonial = () => {
  return (
    <section className="w-full xl:py-24 mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        {/* text */}
        <div>text</div>
        {/* card list */}
        <div>
          <div>
            <div>
              {testimonial.map((item, index) => {
                return (
                  <div>card</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial