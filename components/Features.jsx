"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaRegCheckCircle } from "react-icons/fa"

const featureData = [
  {
    imgSrc: "features/img-1.svg",
    title: "Smart Task Management",
    description: "Organize and prioritize task effortlesslu",
    highlights: [
      "Set die dates amd reminders",
      "Track progress and milestones",
      "Easily dort tasks reminders",  
    ]
  },
  {
    imgSrc: "features/img-2.svg",
    title: "Real-Time Collaboration",
    description: "Collaborate with your team in real-time",
    highlights: [
      "Set die dates amd reminders",
      "Track progress and milestones",
      "Easily dort tasks reminders",
    ]
  },
  {
    imgSrc: "features/img-3.svg",
    title: "Advanced Analytics",
    description: "Gains insights to boost productivity",
    highlights: [
      "Set die dates amd reminders",
      "Track progress and milestones",
      "Easily dort tasks reminders",
    ]
  },
  {
    imgSrc: "features/img-4.svg",
    title: "Customizable Workspaces",
    description: "Personalize your workspace for maximum efficiency",
    highlights: [
      "Set die dates amd reminders",
      "Track progress and milestones",
      "Easily dort tasks reminders",
    ]
  },
]


const Features = () => {
  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          {/* img */}
          <div>img</div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-24">
            {featureData.map((item, itemIndex) => {
              return (
                <div>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {/* highlights */}
                    <div className="flex flex-col gap-5">
                      {item.highlights.map((highlight, index) => {
                        return (
                          <div>
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features