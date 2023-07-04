"use client";
import { Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import useHomeVariants from "./hooks/useHomeVariants";

export default function Home() {
  const skills = [
    { label: "Software Development", icon: "/Vector(1).png" },
    { label: "Web Development", icon: "/Vector(2).png" },
    { label: "UI/UX Design", icon: "/Vector(3).png" },
  ];

  const tech = [
    "Typescript",
    "Javascript",
    "Dart",
    "Python",
    "HTML",
    "Sass",
    "TailwindCss",
    "NextJs",
    "ReactJs",
  ];

  const contacts = [
    { label: "Email Address", icon: <Mail />, value: "ntevin25@gmail.com" },
    { label: "Github", icon: <Github />, value: "@njabulotevin" },
    { label: "Phone Number", icon: <Phone />, value: "(+72) 64 891 7936" },
  ];

  const {
    imageVariants,
    titleVariants,
    aboutUsVariants,
    aboutUsHeaderVariants,
  } = useHomeVariants();

  return (
    <div className="overflow-x-hidden w-full">
      <motion.main
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ amount: 0.8 }}
        className="lg:p-20 pt-32 lg:pt-[50px] w-full"
      >
        <section
          style={{
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="bg-[url('/developer.png')] flex flex-wrap flex-col w-full min-h-[80vh] px-10 lg:pt-20 py-6"
        >
          <div className="flex  flex-wrap  gap-20 lg:gap-24 justify-center items-center text-gray-100 ">
            <motion.div
              variants={titleVariants}
              className="flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center lg:text-start lg:text-8xl hidden lg:flex flex-col  font-semibold">
                <span>Hey There,</span>{" "}
                <span>
                  I&apos;m <span className="gradientText">Tevin</span>
                </span>
              </h1>
              <h1 className="text-5xl text-center lg:text-start lg:text-8xl flex lg:hidden flex-col  font-bold mb-5">
                <span className="">Frontend.</span>{" "}
                <span className="gradientText">Developer.</span>{" "}
                <span>Designer</span>
              </h1>
              <div className="w-full lg:max-w-[400px] text-center lg:text-start flex flex-col gap-4">
                <p>
                  <span className="lg:hidden flex text-center justify-center font-medium">
                    Hey There, i&apos;m Tevin
                  </span>
                  A frontend developer with a passion for creating visually
                  appealing and user-friendly web experiences.
                </p>
                <p>
                  With expertise in frontend technologies such as Next.js, Sass,
                  Tailwind CSS, and TypeScript,
                </p>
              </div>
            </motion.div>
            <div className="w-[250px] h-[250px] flex items-center justify-center  lg:w-[600px] lg:h-[600px] ">
              <motion.img variants={imageVariants} src="/me_3.png" alt="" />
            </div>
          </div>
          <div>
            <img className="mx-auto" src="/tech.png" />
          </div>
        </section>
      </motion.main>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex gap-5 w-full flex-wrap justify-center lg:gap-3 bg-white min-h-[60vh] px-10 lg:px-20 py-36"
      >
        <motion.div
          variants={aboutUsHeaderVariants}
          className="flex flex-col gap-3 "
        >
          <h2 className="text-6xl lg:text-8xl font-semibold gradientText">
            5+
          </h2>
          <h3 className="text-lg lg:text-3xl font-semibold text-primary-900 max-w-[220px]">
            /Years of working Experience
          </h3>
        </motion.div>
        <motion.div
          variants={aboutUsVariants}
          className="flex flex-col gap-4 lg:max-w-[48vw] my-10 lg:m-0"
        >
          <h2 className="text-4xl font-semibold gradientText">About me</h2>
          <p className="font-semibold text-primary-900">
            I&apos;m a frontend developer with a passion for creating visually
            appealing and user-friendly web experiences. With expertise in
            frontend technologies such as{" "}
            <span className="gradientText">
              Next.js, Sass, Tailwind CSS, Javascript and TypeScript
            </span>
            , I specialize in designing and building robust and responsive
            frontend projects.{" "}
          </p>
          <p className=" text-primary-900">
            I thrive on crafting elegant and efficient code that brings ideas to
            life and ensures an exceptional user experience. From
            conceptualization to implementation, I enjoy collaborating with
            teams to create innovative solutions that exceed expectations. With
            a keen eye for detail and a commitment to staying updated on the
            latest industry trends, I am dedicated to delivering high-quality
            work that aligns with both user needs and business goals. Let&apos;s
            collaborate to bring your frontend projects to the next level!
          </p>
        </motion.div>
      </motion.section>
      <section
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 40%",
        }}
        className="px-20 flex flex-col items-center gap-10 py-36 min-h-[60vh] bg-[url('/developer.png')]"
      >
        <h2 className="text-2xl lg:text-4xl font-semibold text-white text-center">
          What I do
        </h2>
        <div className="flex justify-center gap-10 flex-wrap px-10 lg:p-0">
          {skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-primary-500 w-full lg:w-[350px] h-[180px] lg:h-[240px] px-[50px] py-[20px] flex flex-col gap-5 rounded-tl-[20px] rounded-br-[20px]"
              >
                <img
                  src={skill.icon}
                  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] object-contain"
                />
                <h4 className="text-primary-300 font-semibold text-2xl lg:text-3xl">
                  {skill.label}
                </h4>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {tech.map((tech, i) => {
            return (
              <div
                key={i}
                className="text-white border border-white rounded-md px-3 py-2 font-semibold"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </section>
      <section className="lg:px-20 p-10 lg:py-36 flex flex-wrap justify-center gap-4 min-h-[60vh]">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold gradientText">
            My Recent Work
          </h2>
          <h3 className="text-3xl font-semibold text-white">Uzoori App</h3>
          <p className=" text-primary-300 w-full lg:max-w-[30vw]">
            Uzoori is a social commerce app that allows users to discover new
            styles and trends in the beauty and food industries, book
            appointments with stylists and make orders for food from local
            restaurants. Users can also engage with other users and merchants,
            follow their favorite stylists and restaurants, and even earn money
            through an affiliate program. visit beta:
            <Link
              className="text-secondary-900 underline"
              href="https://uzoori.app"
            >
              uzoori.app
            </Link>{" "}
            powered by Nextjs.
          </p>
          <div className="my-5">
            <Link
              className="primary-gradient text-primary-900 font-medium p-3 rounded-md"
              href="/projects"
            >
              View All projects
            </Link>
          </div>
        </div>
        <div className="w-[300px] h-[180px]">
          <img src="/uzoori.png" />
        </div>
      </section>
      <section className="px-20 py-36 ">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-36">
          {contacts.map((contact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-3 items-center text-white"
              >
                <div className="bg-primary-500 text-secondary-900 w-[70px] h-[70px] rounded-full flex justify-center items-center mb-8">
                  {contact.icon}
                </div>
                <h4 className="font-semibold text-base">{contact.label}</h4>
                <p className="text-sm">{contact.value}</p>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <p className="text-primary-300 text-sm text-center py-10">
          All copyright reserved © Tevin 2023
        </p>
      </footer>
    </div>
  );
}
