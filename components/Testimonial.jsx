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
    message: "I was impressed with the level of support and responsiveness provided by this company.",
  },
  {
    name: "Bob Smith",
    message: "I was blown away by the quality of work and the level of support provided by this company.",
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
    <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
      <div className="overflow-hidden">
        {/* text */}
        <motion.div
          variants={fadeInOnScroll(0.2, 0.4)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="h2 mb-4 text-center">What People Are Saying</h2>
          <p className="lead text-center mb-24">Hear directly from those who have improved their efficiency and organization.</p>
        </motion.div>

        {/* card list */}
        <motion.div 
          variants={fadeInOnScroll(0.2, 0.6)}
          initial="hidden"
          whileInView="visible"
          className="flex"
        >
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex"
          >
            {testimonial.map((item, index) => {
              return (
                <div 
                  key={index} 
                  className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                >
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                  <p className="mb-4 text-lg text-white/80">
                    {item.message}
                  </p>
                  <p className="text-xl">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex"
          >
            {testimonial.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[460px] h-[300px] bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14"
                >
                  <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                  <p className="mb-4 text-lg text-white/80">
                    {item.message}
                  </p>
                  <p className="text-xl">
                    {item.name}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial