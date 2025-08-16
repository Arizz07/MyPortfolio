"use client"
import TypewriterComponent from "typewriter-effect";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <div className="h-[80vh] relative flex justify-around items-center bg-blue-100">
          <div className="header w-78  ">
            <h1 className="text-4xl font-bold">Azz is a
              <span>
                <TypewriterComponent
                  options={{
                    strings: ["Web Developer...", "Designer...", "Webpacker..."],
                    autoStart: true,
                    loop: true,
                    delay: 50,

                  }}
                />
              </span>
            </h1>
          </div>
          <div className="img">
            <img className="w-100 h-100 object-cover rounded-full" src="/LOGO.jpg" alt="" />
          </div>
        </div>
        <div className="  w-full flex  rounded  h-screen mt-20 ">
          <div className="img  ">
            <img className="w-120 h-120" src="/Code.webp" alt="coder" />
          </div>
          <div id="about" className="content flex justify-center items-center bg-sky-100 text-black rounded-lg ml-26 h-80 w-120 shadow-md mt-10">
            <p className="text-md px-4 py-8 text-justify">
              Hey, I&apos;m Ariizz. I&apos;m 21 years old and I live in Puttur. I&apos;m a Full Stack Developer. <br /><br />
              I studied Applied Computer Sciences at University of Mangalore. I chose the Full Stack WebDeveloping Course to learn more about Web Developing using MERN. <br />
              <br />
              During my course     I studied Applied Computer Sciences at University of Mangalore. I chose the Full Stack Web Developing Course to learn more about web development using the MERN stack. During my course i have created so many projects
              You can read more about skills in the section below.
            </p>
          </div>
        </div>

        <div id="contact" className="contact h-screen flex bg-sky-500/50">
          <div className="contact-form flex flex-col mt-8 mx-20 w-120 bg-sky-200 rounded-lg shadow-md p-4 h-3/4">
            <h2 className="text-2xl font-bold">Drop your message here</h2>
            <div className="form   px-2 py-4 ">
              <form action="">
                <div className="px-2">
                  <label className="px-2" htmlFor="email">Email</label>
                  <input className="w-full border-2 px-2 py-1 border-sky-400 my-1 rounded-md hover:outline-none" placeholder="info@ex.com" type="email" name="email" id="email" />
                </div>
                <div className="px-2">
                  <label className="px-2" htmlFor="message">Message</label>
                  <textarea className="w-full border-2 px-2 py-1 border-sky-400 my-1 rounded-md hover:outline-none" placeholder="Tell me something..." rows={5} name="message" id="message"></textarea>
                </div>
                <button className="bg-sky-500 px-4 py-1 rounded-md  text-white mt-2 mx-2">Submit</button>
              </form>
            </div>
          </div>
          <div className="social h-3/4 flex flex-col justify-center items-center ml-20">
            <img className="w-68 h-80  " src="style.png" alt="Contact" />
            <div className="links space-y-3">
              <h3 className="text-blue-600 font-semibold text-xl">Find me in social Links</h3>
              <div className="links flex gap-6">
              <Link href={'https://www.facebook.com/ariizz07'}><FaFacebook size={30} className="text-blue-500" /></Link>
              <Link href={'https://www.instagram.com/ariizz07/'}><FaInstagram size={30} className="text-blue-500" /></Link>
              <Link href={'https://www.linkedin.com/in/arizz07/'}><FaLinkedin size={30} className="text-blue-500" /></Link>
              <Link href={'https://github.com/Arizz07/'}><FaGithub size={30} className="text-blue-500" /></Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
