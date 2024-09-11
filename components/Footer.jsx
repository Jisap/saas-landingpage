import { motion } from "framer-motion"
import Link from "next/link"
import Logo from "./Logo"


const icons = [
  {
    src: "/footer/1.svg",
    href: "",
  },
  {
    src: "/footer/2.svg",
    href: "",
  },
  {
    src: "/footer/3.svg",
    href: "",
  },
  {
    src: "/footer/4.svg",
    href: ""
  },
  {
    src: "/footer/5.svg",
    href: ""
  },
  {
    src: "/footer/6.svg",
    href: ""
  },
  {
    src: "/footer/7.svg",
    href: ""
  },
]

const Footer = () => {
  return (
    <footer className="bg-[#10112f] py-24">
      <div>
        {/* Socials */}
        <div></div>
        {/* logo */}
        <Logo />
        {/* Copyright */}
        <p>&copy;</p>
      </div>
    </footer>
  )
}

export default Footer