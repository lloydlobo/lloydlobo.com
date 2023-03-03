import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkProjects } from "@/components/WorkProjects";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { GlobeAnimation } from "@/components/effects/GlobeAnimation";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import { Hero } from "@/components/layout/Hero";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function IndexPage() {
  return (
    <>
      <Layout title="Home | ">
        <div className="min-h-screen">
          <Hero />
          <div className="relative mx-auto w-fit">
            <div className="grid grid-cols-2 gap-4 ">
              <Link
                href="/work"
                className="flex items-center rounded-md font-semibold uppercase text-primary underline decoration-accent underline-offset-8 shadow-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1 -ml-1.5 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                Work
              </Link>

              <a
                href="https://github.com/lloydlobo/"
                className="flex items-center font-semibold uppercase text-primary underline decoration-accent underline-offset-8 hover:text-accent"
              >
                <svg viewBox="0 0 24 24" className="mr-1 -ml-1.5 h-5 w-5">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
                  ></path>
                </svg>
                Code&nbsp;&nbsp;
                <span aria-hidden="true" className="">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

//// export const inter = Inter({ subsets: ["latin"] });
//
//// const StickyTitle = ({ title, ctaText, ctaUrl }) => {
////   const [isSticky, setIsSticky] = useState(false);
////   const ref = useRef(null);
//
////   useEffect(() => {
////     const handleScroll = () => {
////       if (window.pageYOffset >= ref.current.offsetTop) {
////         setIsSticky(true);
////       } else {
////         setIsSticky(false);
////       }
////     };
////     window.addEventListener("scroll", handleScroll);
////     return () => window.removeEventListener("scroll", handleScroll);
////   }, []);
//
////   const stickyClasses = isSticky ? "sticky top-0 z-10 bg-white py-4" : "";
//
////   return (
////     <div ref={ref} className="relative">
////       <h2
////         className={`${stickyClasses} transition-all duration-300 ease-in-out`}
////       >
////         {title}
////       </h2>
////       <a
////         href={ctaUrl}
////         className={`${
////           isSticky ? "opacity-100" : "opacity-0"
////         } absolute top-0 right-0 mt-4 mr-4 rounded bg-blue-500 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-blue-600`}
////       >
////         {ctaText}
////       </a>
////     </div>
////   );
//// };
//
//// function StickyProjectTitle({ title }) {
////   return (
////     <>
////       <h3 className="sticky">{title}</h3>
////     </>
////   );
//// }
//
//// const FixedImage = ({ imageUrl, scrollPosition }) => {
////   const [isFixed, setIsFixed] = useState(false);
//
////   useEffect(() => {
////     const handleScroll = () => {
////       if (window.pageYOffset >= scrollPosition) {
////         setIsFixed(true);
////       } else {
////         setIsFixed(false);
////       }
////     };
////     window.addEventListener("scroll", handleScroll);
////     return () => window.removeEventListener("scroll", handleScroll);
////   }, [scrollPosition]);
//
////   const fixedClasses = isFixed ? "fixed top-0 left-0 w-full" : "";
//
////   return (
////     <img
////       src={imageUrl}
////       alt="Fixed Image"
////       className={`${fixedClasses} transition-all duration-300 ease-in-out`}
////     />
////   );
//// };
//
//// function ImageGallery() {
////   return (
////     <>
////       <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-8">
////         <div className="-rotate-6 scale-110 transform blur ">
////           <img src="/vercel.svg" alt="" loading="lazy" />
////         </div>
////         <div className="translate-y-15 col-start-3 translate-x-2 rotate-6 scale-75 transform">
////           <img src="/vercel.svg" alt="" loading="lazy" />
////         </div>
////         <div className="translate-y-11 scale-150 transform">
////           <img src="/vercel.svg" alt="" loading="lazy" />
////         </div>
////         <div className="translate-y-24 transform">
////           <img src="/vercel.svg" alt="" loading="lazy" />
////         </div>
////         <div className="col-span-2 col-start-2 row-start-1 translate-x-20 translate-y-4 transform">
////           <img src="/vercel.svg" alt="" loading="lazy" />
////         </div>
////       </div>
////     </>
////   );
//// }
//// // https://d3-graph-gallery.com/graph/treemap_basic.html
//// // name,parent,value
//// // Origin,,
//// // grp1,Origin,12
//// // grp2,Origin,23
//// // grp3,Origin,11
//// // grp4,Origin,40
//// // grp5,Origin,30
//// // grp6,Origin,25
//// const TREEMAP_DATA_URL =
////   "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_hierarchy_1level.csv";
//
//// function AsteriskDecor() {
////   return (
////     <svg
////       className="h-12 w-12"
////       data-as-style="lines"
////       data-as-duration="0.4"
////       data-as-stagger="0.1"
////       data-as-order="3"
////       data-as-position="-=0.6"
////       viewBox="0 0 84 97"
////       fill="none"
////       xmlns="http://www.w3.org/2000/svg"
////     >
////       <path
////         d="M31.1521 6.65771C34.1497 13 36.1497 22.5 40.6497 33.5C44.8083 50.3792 47.2583 67.6791 50.6619 84.6969"
////         stroke="currentColor"
////         strokeWidth="4"
////         strokeLinecap="round"
////         style={{
////           strokeDasharray: "80.6619px, 80.6619px",
////           strokeDashoffset: "0px",
////         }}
////       />
////       <path
////         d="M3.10669 52.9936C13.0749 60.9681 37.8477 49.1558 48.1554 46.3548C58.4631 43.5536 64.6497 42.0002 76.2685 39.5806"
////         stroke="currentColor"
////         strokeWidth="4"
////         strokeLinecap="round"
////         style={{
////           strokeDasharray: "75.9052px, 75.9052px",
////           strokeDashoffset: "0px",
////         }}
////       />
////       <path
////         d="M61.6364 3C53.974 25.9871 43.22 47.332 33.3201 69.3876C29.7305 77.3845 26.3813 85.4882 23.1587 93.6394"
////         stroke="currentColor"
////         strokeWidth="4"
////         strokeLinecap="round"
////         style={{
////           strokeDasharray: "98.5087px, 98.5087px",
////           strokeDashoffset: "0px",
////         }}
////       />
////       <path
////         d="M16.5198 22.5098C37.5174 43.5074 60.1804 62.5123 81.146 83.4779"
////         stroke="currentColor"
////         strokeWidth="4"
////         strokeLinecap="round"
////         style={{
////           strokeDasharray: "88.8538px, 88.8538px",
////           strokeDashoffset: "0px",
////         }}
////       />
////     </svg>
////   );
//// }
//
//// function Underline() {
////   return (
////     <div className="">
////       <div className="">
////         <svg
////           data-as-style="lines"
////           data-as-duration="0.4"
////           data-as-stagger="0.1"
////           data-as-order="1"
////           data-as-position="-=0.15"
////           viewBox="0 0 659 32"
////           fill=""
////           xmlns="http://www.w3.org/2000/svg"
////         >
////           <path
////             d="M9.06055 13.428C9.06055 13.428 90.1028 13.4314 172.433 10.4525C223.539 8.60328 268.459 3.48823 315.061 2.92782C379.21 2.15641 469.06 5.1297 539.561 8.10689C607.765 10.9871 658.016 10.4525 658.016 10.4525"
////             stroke="currentColor"
////             strokeWidth="4"
////             style={{
////               strokeDasharray: "649.32px, 649.32px",
////               strokeDashoffset: "0px",
////             }}
////           ></path>
////           <path
////             d="M0.0605469 25.9277C0.0605469 25.9277 78.2413 25.2307 161.271 22.3581C227.405 20.0701 293.614 15.5764 347.561 14.9277C450.283 13.6924 554.767 19.9762 657.061 29.4277"
////             stroke="currentColor"
////             strokeWidth="4"
////             style={{
////               strokeDasharray: "657.678px, 657.678px",
////               strokeDashoffset: "0px",
////             }}
////           ></path>
////         </svg>
////       </div>
////     </div>
////   );
//// }
//
//// const path_upper =
////   "M0.0605469 25.9277C0.0605469 25.9277 78.2413 25.2307 161.271 22.3581C227.405 20.0701 293.614 15.5764 347.561 14.9277C450.283 13.6924 554.767 19.9762 657.061 29.4277";
//// const path_lower =
////   "M9.06055 13.428C9.06055 13.428 90.1028 13.4314 172.433 10.4525C223.539 8.60328 268.459 3.48823 315.061 2.92782C379.21 2.15641 469.06 5.1297 539.561 8.10689C607.765 10.9871 658.016 10.4525 658.016 10.4525";
//
//// // https://framer.com/m/framer/Animator.js
//
//// const pathVariants = {
////   hidden: {
////     pathLength: 0,
////     fill: "rgba(0, 0, 0, 0)",
////   },
////   visible: {
////     pathLength: 1,
////     fill: "rgba(0, 0, 0, 1)",
////     transition: {
////       duration: 0.5,
////       ease: "easeInOut",
////     },
////   },
//// };
//
//// type PropsHandwriting = {
////   children?: ReactNode;
////   path?: string;
//// };
//
//// const HandwritingAnimation = ({ children, path }: PropsHandwriting) => {
////   return (
////     <svg
////       viewBox="0 0 659 32"
////       className={`-z-10 m-0 p-0`}
////       fill="none"
////       xmlns="http://www.w3.org/2000/svg"
////     >
////       <motion.path
////         d={`${path}`}
////         stroke="currentColor"
////         strokeWidth="6"
////         className={``}
////         variants={pathVariants}
////         initial="hidden"
////         animate="visible"
////         // initial={{ opacity: 0 }}
////         // animate={{ opacity: 1 }}
////         // transition={{ duration: 1.5, delay:1 }}
////       />
////     </svg>
////   );
//// };
//
//// function styleHeading(heroTitle: String, wordToStyle: String) {
////   return heroTitle.split(" ").map((word, index) => {
////     if (word === wordToStyle) {
////       return (
////         <>
////           <span
////             key={word + index}
////             className={`relative overflow-x-auto`}
////             style={{ fontWeight: "normal" }}
////           >
////             {word}{" "}
////             <span
////               className={`absolute -left-[0.5rem] -right-[0.5rem] -bottom-[0.525rem] z-0 h-[0.75rem] bg-no-repeat text-primary`}
////             >
////               <HandwritingAnimation path={`${path_upper}`} />
////               <HandwritingAnimation path={`${path_lower}`} />
////             </span>
////           </span>
////         </>
////       );
////     } else {
////       return (
////         <span key={word + index} className={`z-10`}>
////           {word}{" "}
////         </span>
////       );
////     }
////   });
//// }
//
//// const GRADIENT_VAR = {
////   violet: "linear-gradient(to bottom, #7F00FF, #E100FF)",
////   cyan: "linear-gradient(to bottom, #00F6FF, #0087FF)",
////   sky: "linear-gradient(to bottom, #00A1FF, #5E32FF)",
////   green: "linear-gradient(to bottom, #00F280, #057D40)",
////   orange: "linear-gradient(to bottom, #FF5E5E, #FF2A2A)",
////   purple: "linear-gradient(to bottom, #8E00FF, #1B00FF)",
//// };
//
//// function GitLineVar({
////   gradientCss,
//// }: {
////   gradientCss: string;
////   // gradientCss: keyof typeof GRADIENT_VAR;
//// }) {
////   const [ref, inView] = useInView({
////     threshold: 0.3, // when section is 50% visible
////     triggerOnce: false, // only trigger once
////   });
////   return (
////     <motion.div
////       ref={ref}
////       animate={{ opacity: inView ? 1.0 : 0.0 }}
////       transition={{ duration: 1, delay: 0.0 }}
////       className={`absolute hidden h-[300vh] w-[1px] rounded-full bg-blend-overlay blur-[3px] brightness-[99%] saturate-[99%] `}
////       // className={`absolute left-10 h-full w-[3px] rounded blur brightness-90 `}
////       // className={`absolute left-1/2 h-[200vh] min-h-screen w-[2px] rounded blur-lg brightness-90 `}
////       // className={`absolute right-0 h-[150vh] min-h-screen w-[2px] rounded blur-[2px] brightness-[100.0%] saturate-[100.0%] sepia-[100%] `}
////       // className={`absolute left-0  h-full w-[3px] rounded blur brightness-90 `}
////       style={{
////         backgroundImage: `${gradientCss}, linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1))`,
////         backgroundSize: "100% 100%, 100% calc(100% - 20px)",
////         backgroundRepeat: "no-repeat",
////         boxShadow: "0 0 20px 10px rgba(0,0,0,0.1)",
////       }}
////     ></motion.div>
////   );
//// }
//
//// // <span className="easter_egg hidden">
//// //   Empowering innovators to create at the speed of inspiration is my forte.
//// //   As a frontend developer, I harness the power of open source and
//// //   AI-driven tools to write code faster and more efficiently, allowing me
//// //   to focus on the big picture and effortlessly tackle complex problems.
//// // </span>
//// export default function IndexPage() {
////   return (
////     <Layout title="Home | ">
////       <div className="relative">
////         <Section>
////           <div className="grid place-content-center bg-on-primary py-6 lg:scale-75">
////             <div className="ourtine absolute top-0 left-0 min-h-screen w-[50vw] brightness-[140%] sepia-[00%]"></div>
////             <h1
////               className={`relative -left-[0%] mx-auto flex text-9xl font-extrabold leading-[1] -tracking-[0.10ch] lg:text-[28rem] ${inter.className} z-10 font-bold text-[#f3c77c]`}
////             >
////               <div>he</div>
////               <div className="flex">
////                 <div>llo</div>
////                 <div className="text-accent opacity-0">.</div>
////               </div>
////               <motion.div
////                 className="drag"
////                 drag={true}
////                 whileHover={{ scale: 1.1 }}
////                 animate={{
////                   opacity: 1,
////                   // x: [0, 0, 0],
////                 }}
////                 whileTap={{ scale: 1.618 }}
////                 transition={{
////                   duration: 0.3,
////                   delay: 0.1,
////                   ease: [0.5, 0.71, 1, 1.5],
////                 }}
////                 dragConstraints={{ right: 10, left: -150, top: -70, bottom: 0 }}
////                 dragTransition={{ bounceStiffness: 60, bounceDamping: 8 }}
////               >
////                 <div className="right-[3.5%] bottom-[22%]  origin-bottom-right scale-0 opacity-70 mix-blend-color-dodge outline filter backdrop-blur-3xl lg:absolute lg:scale-[200%]">
////                   <GlobeAnimation />
////                 </div>
////                 <div className="mix-blend-color-dodge/20 right-[3.5%] bottom-[22%] origin-bottom-right scale-0 opacity-70 blur sepia-[70%] filter backdrop-blur-3xl lg:absolute lg:scale-[200%]">
////                   <GlobeAnimation />
////                 </div>
////                 <div className="absolute right-[3.5%] bottom-[22%] origin-bottom-right scale-[60%] opacity-70 mix-blend-color-dodge filter backdrop-blur-3xl lg:hidden">
////                   <GlobeAnimation />
////                 </div>
////                 <div className="mix-blend-color-dodge/20 absolute right-[3.5%] bottom-[22%] origin-bottom-right scale-[60%] opacity-70 blur sepia-[70%] filter backdrop-blur-3xl lg:hidden">
////                   <GlobeAnimation />
////                 </div>
////               </motion.div>
////             </h1>
//
////             <div className="space-y-2 ">
////               <h2
////                 className={`mx-auto text-center text-2xl font-extrabold tracking-tighter text-primary lg:text-[5rem] ${inter.className}`}
////               >
////                 <div className="subtitle max-[50vw]:grid place-content-center text-[#f3c77c] md:flex md:space-x-1">
////                   <span>Design.</span>
////                   <span>Develop.</span>
////                   <span>Ship.</span>
////                 </div>
////               </h2>
////             </div>
////             <h2
////               className={`hidden pt-8 text-2xl tracking-tighter text-[#f3c77c] lg:text-center lg:text-4xl  ${inter.className}`}
////             >
////               <div className="subtitle max-[427px]:grid place-content-center text-center uppercase md:flex md:space-x-2">
////                 <span>Design.</span>
////                 <span>Develop.</span>
////                 <span>Ship.</span>
////               </div>
//
////               <div className="relative w-full space-x-6 lg:max-w-[53vw]">
////                 <p
////                   className={`relative text-center text-lg text-secondary lg:max-w-[66vw] `}
////                 >
////                   <span className="absolute hidden">
////                     Empowering innovators to create at the speed of inspiration.
////                   </span>
////                   As a software developer, I use open source and AI tools to
////                   architect efficient code and tackle complex problems with
////                   ease.
////                 </p>
////               </div>
////             </h2>
////           </div>
////         </Section>
////       </div>
//
////       <div className={`mx-auto space-y-[6rem] font-sans lg:space-y-[12rem]`}>
////         {/* <HeroCopilot/> */}
////         <Section>
////           <div className="mx-auto hidden w-full space-y-3 ">
////             <h1
////               className={`max-[320px]:text-5xl m-0 mx-auto text-center text-9xl font-extrabold leading-[1] -tracking-[0.1ch] text-primary
////               shadow lg:text-[44vw] ${inter.className}`}
////             >
////               hello
////             </h1>
////             <h2
////               className={`text-2xl font-extrabold tracking-tighter text-primary lg:text-center lg:text-5xl ${inter.className}`}
////             >
////               <div className="subtitle max-[427px]:grid place-content-center text-center md:flex md:space-x-1">
////                 <span>Design.</span>
////                 <span>Develop.</span>
////                 <span>Ship.</span>
////               </div>
////             </h2>
////             <div className="mt-10 hidden grid-cols-2 items-center justify-center space-x-6 place-self-center lg:max-w-[50vw]">
////               <a
////                 href="#"
////                 className="rounded-md  py-2.5 text-sm font-semibold uppercase text-primary underline underline-offset-8 shadow-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
////               >
////                 Start Deploying <span aria-hidden="true">&rarr;</span>
////               </a>
////               <a
////                 href="#"
////                 className="text-sm font-semibold uppercase text-primary underline underline-offset-8 hover:text-accent"
////               >
////                 Works <span aria-hidden="true">&rarr;</span>
////               </a>
////             </div>
////             <p
////               className={`mx-auto text-center text-lg text-secondary lg:max-w-[66vw] `}
////             >
////               Empowering innovators to create at the speed of inspiration.
////               <br />
////               <br />
////               As a software developer, I use open source and AI tools to
////               architect efficient code and tackle complex problems with ease.
////             </p>
////           </div>
//
////           {/* <div className="bg-on-primary py-24 sm:py-32"> */}
////           <div className="hidden bg-on-primary pt-12 sm:pt-16">
////             <div className="mx-auto max-w-7xl px-6 lg:px-8">
////               <h2 className="text-center text-lg font-semibold leading-8 text-primary">
////                 Trusted by the world's most innovative teams
////               </h2>
////               <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 blur-[0.4px] brightness-[400%] invert sepia sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
////                 <img
////                   className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
////                   src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
////                   alt="Transistor"
////                   width={158}
////                   height={48}
////                 />
////                 <img
////                   className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
////                   src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
////                   alt="Reform"
////                   width={158}
////                   height={48}
////                 />
////                 <img
////                   className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
////                   src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
////                   alt="Tuple"
////                   width={158}
////                   height={48}
////                 />
////                 <img
////                   className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
////                   src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
////                   alt="SavvyCal"
////                   width={158}
////                   height={48}
////                 />
////                 <img
////                   className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
////                   src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
////                   alt="Statamic"
////                   width={158}
////                   height={48}
////                 />
////               </div>
////             </div>
////           </div>
////         </Section>
//
////         <Section>
////           <div className="mx-auto w-full text-secondary">
////             <div className="relative mx-auto w-full">
////               <p className="mb-20 w-[25vw] border-b-[6px] border-secondary py-4 text-start text-xl font-normal">
////                 Lloyd Lobo
////               </p>
////               <div className="grid grid-cols-1 gap-12 text-xl sm:grid-cols-2 lg:grid-cols-3">
////                 <ul className={`hidden space-y-1 lg:block`}>
////                   <li className="">
////                     <Link href={`#work`}>Work</Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>About</Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>Contact</Link>
////                   </li>
////                 </ul>
////                 <p>
////                   I'm a software developer who's passionate about building great
////                   stuff. My focus is on creating innovative solutions that
////                   exceed client expectations.
////                 </p>
////                 <p>
////                   My goal is to help businesses and individuals achieve their
////                   goals by adopting new ideas and approaches that they may have
////                   previously avoided. By working together, we can build trust
////                   and create a positive and productive work environment.
////                 </p>
////               </div>
////             </div>
////           </div>
////         </Section>
//
////         <Section>
////           <div className="relative grid w-full">
////             <h2
////               className="mb-20 flex w-[25vw] items-baseline justify-between place-self-end border-b-[6px] border-secondary py-3 text-end text-xl font-normal text-secondary before:text-sm
////                 before:content-['01'] lg:mb-48
////                 "
////             >
////               Work
////             </h2>
////           </div>
////           <WorkProjects />
////         </Section>
//
////         <Section>
////           <div className="relative mx-auto w-full">
////             <h2
////               className="mb-24 flex w-[25vw] items-baseline justify-between place-self-start border-b-[6px] border-secondary py-3 text-start text-xl font-normal text-secondary after:text-sm
////                 after:content-['02'] lg:mb-40
////                 "
////             >
////               About
////             </h2>
////           </div>
////           <div className="w-full text-secondary lg:place-items-center">
////             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
////               <h2
////                 className={`relative text-left text-5xl font-semibold tracking-tighter text-primary lg:-left-10 lg:col-start-2 lg:col-end-4 ${inter.className}`}
////               >
////                 Developer by trade,
////                 <br />
////                 creator by heart
////               </h2>
////             </div>
////             <div className="grid space-y-12 text-lg leading-normal tracking-wide md:grid-cols-2 lg:grid-cols-3">
////               <div className="ghost"></div>
////               <p className="relative col-start-1 lg:-left-10 lg:col-start-2 lg:pr-12">
////                 As a developer, I am also a creator. This{" "}
////                 <span className="font-bold italic">
////                   term encapsulates the full spectrum{"... "}
////                 </span>
////                 of my creative endeavors — from designing software and building
////                 apps to producing digital art and music for fun.
////               </p>
////               <p className="lg:pr-12">
////                 Thoroughly understanding your medium is crucial. When technology
////                 and ideas blend, products excel{" "}
////                 <span className="text-xs">(like Apple)</span>. Each project
////                 reflects my unique blend of technical expertise and artistic
////                 vision — resulting in functional and visually stunning work.
////               </p>
////             </div>
//
////             <div className="ml-auto w-[75vw]  space-y-20 tracking-widest ">
////               <div className="mt-32">
////                 <h3
////                   className="mb-8 flex items-baseline justify-between place-self-end
////                   border-b-[2px] border-secondary py-3 text-start text-base font-bold uppercase text-secondary "
////                 >
////                   Expertise
////                 </h3>
////                 <ul className={`uppercase text-secondary`}>
////                   <li className="">
////                     <Link href={`#work`}>Front-end development</Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>Web APIs - NodeJS, Actix Web</Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>CLI Apps</Link>
////                   </li>
////                 </ul>
////               </div>
//
////               <div className=" ">
////                 <h3
////                   className="mb-10 flex items-baseline justify-between place-self-end
////                   border-b-[2px] border-secondary py-3 text-start text-base font-bold uppercase text-secondary "
////                 >
////                   Stacks
////                 </h3>
////                 <ul className={`uppercase text-secondary`}>
////                   <li className="">
////                     <Link href={`#work`}>NextJS React JamStack</Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>
////                       Rust, Go, Python, JavaScript, TypeScript
////                     </Link>
////                   </li>
////                   <li className="">
////                     <Link href={`#work`}>Neovim, VS Code, bash</Link>
////                   </li>
////                 </ul>
////               </div>
////             </div>
////           </div>
////         </Section>
//
////         <Section>
////           <div className="relative grid w-full">
////             <h2
////               className="mb-24 flex w-[25vw] items-baseline justify-between place-self-end border-b-[6px] border-secondary py-3 text-end text-xl font-normal text-secondary before:text-sm
////                 before:content-['03'] lg:mb-48
////                 "
////             >
////               Contact
////             </h2>
////           </div>
////           <div className="relative flex w-full  flex-col space-y-28 text-secondary lg:-left-10 lg:items-center">
////             <div className="relative w-fit">
////               <h3
////                 className={`${inter.className} text-5xl font-bold leading-[1.2ch] tracking-tight text-primary backdrop-blur-[1px] hover:text-accent md:text-[5.3rem]`}
////               >
////                 Let's
////                 <br />
////                 work
////                 <br />
////                 together
////               </h3>
//
////               <div
////                 style={{
////                   opacity: 1,
////                   clipPath: "inset(11.15rem 0 0 0)",
////                   height: "clamp(28rem, 35vw, 31.3rem)",
////                   width: "clamp(18rem, 35vw, 31.3rem)",
////                 }}
////                 className="absolute left-1 bottom-0 -z-10 origin-bottom-left scale-[68%] bg-blend-overlay brightness-[30%] grayscale-[30%] sepia-[50%] filter lg:scale-[121%]"
////               >
////                 <img
////                   alt="Person drinking lots of coffee. Source: https://media.giphy.com/media/Mk1wQ8cH5TtsqafLiX/giphy.gif"
////                   src="/drita_arsela_coffee.webp"
////                 />
////               </div>
////             </div>
//
////             <div className="relative ml-auto">
////               <div
////                 className={`relative w-full -rotate-45 scale-75 text-primary md:scale-100 lg:-rotate-[55deg]`}
////               >
////                 <div
////                   className={`absolute bottom-40 left-[30%] h-1/2 -translate-x-1/2 lg:bottom-56`}
////                 >
////                   <motion.div
////                     initial={{ opacity: 0, y: 0 }}
////                     animate={{ opacity: 1, y: [0, -10, 0] }}
////                     transition={{
////                       duration: 1.5,
////                       yoyo: Infinity,
////                       ease: "easeInOut",
////                       delay: 1,
////                     }}
////                   >
////                     <WritingArrowDown />
////                   </motion.div>
////                 </div>
////               </div>
////               <EmailCopy />
////             </div>
////           </div>
////         </Section>
////       </div>
////     </Layout>
////   );
//// }
//
