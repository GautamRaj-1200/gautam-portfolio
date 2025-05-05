import { motion } from "framer-motion";
import { usePortfolioConfig } from "../../hooks/usePortfolioConfig";
import {
  FaFile,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDribbble,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedButton from "../ui/AnimatedButton.tsx";
import { FaBehance, FaGlobe } from "react-icons/fa";
import ParallaxBackground from "../ui/ParallaxBackground.tsx";

const Hero = () => {
  const { personal, about } = usePortfolioConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id={"hero"}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-100 to-white relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <ParallaxBackground />
      <motion.div
        className="w-full pt-16 lg:pt-0 grid grid-cols-1 lg:grid-cols-2 max-w-7xl relative z-10 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center sm:text-left">
          <motion.h1
            className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-7xl mb-4 font-bold text-primary-900"
            variants={itemVariants}
          >
            {personal.name}
          </motion.h1>
          <motion.p
            className="section-title text-xl sm:text-2xl text-primary-600 mb-6"
            variants={itemVariants}
          >
            {personal.role}
          </motion.p>
          <motion.p
            className="body-text text-base sm:text-lg text-primary-700 mb-8 max-w-2xl mx-auto sm:mx-0"
            variants={itemVariants}
          >
            {personal.description}
          </motion.p>

          {/* Socials and other sections */}
          <motion.div
            className="flex justify-center sm:justify-start space-x-6 mb-8"
            variants={itemVariants}
          >
            {personal.socials.map((social) => (
              <motion.div
                key={social.platform}
                className="group relative flex items-center justify-center rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open(social.url, "_blank");
                  }
                }}
              >
                {/* Ripple Effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-300 to-primary-600 opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500 dark:from-primary-600 dark:to-primary-800"></span>

                {/* Icon */}
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white p-4 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  {social.platform.toLowerCase() === "github" && (
                    <FaGithub
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}
                  {social.platform.toLowerCase() === "linkedin" && (
                    <FaLinkedin
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}
                  {social.platform.toLowerCase() === "twitter" && (
                    <FaXTwitter
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}
                  {social.platform.toLowerCase() === "dribbble" && (
                    <FaDribbble
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}
                  {social.platform.toLowerCase() === "behance" && (
                    <FaBehance
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}

                  {/* Default icon for unrecognized platforms */}
                  {![
                    "github",
                    "linkedin",
                    "twitter",
                    "dribbble",
                    "behance",
                  ].includes(social.platform.toLowerCase()) && (
                    <FaGlobe
                      className="text-primary-600 group-hover:text-primary-800 transition-all duration-300"
                      size={28}
                    />
                  )}
                </motion.a>

                {/* Tooltip */}
                <span className="absolute -bottom-10 text-sm font-medium bg-primary-900 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                  {social.platform.charAt(0).toUpperCase() +
                    social.platform.slice(1) || "Website"}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center relative"
          animate={{ y: [0, -10, 0] }}
        >
          <motion.div
            className="relative mt-4 md:mt-12 bg-gradient-to-br from-white to-primary-100  p-6 rounded-lg shadow-lg border-2 border-primary-100 hover:border-primary-300  transition-all duration-300"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-3xl font-bold font-title text-primary-900 mb-4">
              {about.title}
            </h2>
            <motion.p
              className="text-primary-600 font-medium text-base md:text-lg mb-6"
              variants={itemVariants}
            >
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={`mailto:${personal.email}`}
                className="hover:text-primary-800 transition-all duration-300 flex items-center space-x-2"
              >
                <FaEnvelope size={20} className="transition-all duration-300" />
                <span>{personal.email}</span>
              </a>
            </motion.p>

            {/* Location Section */}
            <motion.p
              className="text-primary-600 font-medium text-base md:text-lg mb-6 flex items-center space-x-2"
              variants={itemVariants}
            >
              <FaMapPin size={20} className="transition-all duration-300" />
              <span>{personal.location}</span>
            </motion.p>

            <p className="text-primary-700 text-base leading-relaxed">
              {about.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <AnimatedButton
              text="Download Resume"
              icon={<FaFile size={20} />}
              link={about.resume}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden absolute bottom-3 lg:flex justify-center w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="size-9 hover:bg-primary-900 hover:text-white border flex justify-center items-center border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-full animate-bounce cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          role="button"
          tabIndex={0}
          aria-label="Scroll down"
        >
          <IoIosArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
