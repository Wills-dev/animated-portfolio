import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="p-[1px] rounded-[20px] shadow-card "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-lg py-5 px-3  flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-10 h-10 object-contain"
        />

        <h3 className="text-white text-base font-bold text-center">{name}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a detail-oriented Frontend Developer with a passion for creating
        quality applications using JavaScript and its frameworks. My journey
        began in 2019, after completing a zero-mastery program in web
        development. Since then, I've gained hands-on experience by contributing
        to various projects and acquiring certifications in software and web
        development. <br /> <br /> Proficient in JavaScript, Typescript, Next,
        React, CSS, HTML, and more, I specialize in crafting interactive user
        interfaces and dynamic user experiences. I am confident, well-organized,
        and continuously curious about learning new technologies. I thrive on
        creative problem-solving and am perpetually working to improve my skills
        one challenge at a time. <br /> <br /> Outside of coding, you'll often
        find me on the football field or immersed in video games.
      </motion.p>

      <motion.div variants={textVariant()}>
        <div className="mt-20"></div>
        <p className={styles.sectionSubText}>My Stacks</p>
      </motion.div>

      <div className=" flex flex-wrap gap-4">
        {technologies.map((service, index) => (
          <ServiceCard key={service.name} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
