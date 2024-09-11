import { fadeInSpring } from "@/motion/motionVariants"
import { motion } from "framer-motion"



const Trial = () => {
  return (
    <section className="xl:mb-32 w-full">
      <div className="py-24 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl">
        <div>
          <div>
            {/* text */}
            <div>
              <h2>
                Start your 30-day free trial
              </h2>
              <p>
                Experience the full power of our platform with a 30-day free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trial