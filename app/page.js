"use client"
import TypewriterComponent from "typewriter-effect";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Header Section */}
        <div className="min-h-[80vh] relative flex flex-col md:flex-row justify-around items-center bg-blue-100 px-4">
          <div className="header text-center md:text-left md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Azz is a{" "}
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
          <div className="img mt-6 md:mt-0">
            <img
              className="w-40 h-40 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full"
              src="/LOGO.jpg"
              alt="Logo"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row w-full rounded h-auto md:h-screen mt-10 px-4 gap-6">
          <div className="img flex justify-center">
            <img
              className="w-60 h-auto sm:w-80 md:w-96 lg:w-[28rem] object-contain"
              src="/Code.webp"
              alt="coder"
            />
          </div>
          <div
            id="about"
            className="content flex justify-center items-center bg-sky-100 text-black rounded-lg md:ml-10  shadow-md p-4 md:p-8 max-w-2xl"
          >
            <p className="text-sm sm:text-md md:text-lg text-justify">
              Hey, I&apos;m Ariizz. I&apos;m 21 years old and I live in Puttur. I&apos;m a Full Stack Developer. <br /><br />
              I studied Applied Computer Sciences at University of Mangalore. I chose the Full Stack Web Developing Course to learn more about Web Developing using MERN. <br /><br />
              During my course I studied Applied Computer Sciences at University of Mangalore. I chose the Full Stack Web Developing Course to learn more about web development using the MERN stack. During my course I have created many projects.  
              You can read more about skills in the section below.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="contact min-h-screen flex flex-col md:flex-row items-center justify-center bg-sky-500/50 px-4 py-10 gap-8">
          <div className="contact-form flex flex-col w-full md:w-1/2 lg:w-1/3 bg-sky-200 rounded-lg shadow-md p-4">
            <h2 className="text-xl sm:text-2xl font-bold">Drop your message here</h2>
            <form className="mt-4">
              <div className="px-2">
                <label className="px-2" htmlFor="email">Email</label>
                <input
                  className="w-full border-2 px-2 py-1 border-sky-400 my-1 rounded-md"
                  placeholder="info@ex.com"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="px-2">
                <label className="px-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full border-2 px-2 py-1 border-sky-400 my-1 rounded-md"
                  placeholder="Tell me something..."
                  rows={5}
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button className="bg-sky-500 px-4 py-1 rounded-md text-white mt-2 mx-2">
                Submit
              </button>
            </form>
          </div>

          <div className="social flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3">
            <img
              className="w-40 h-auto sm:w-52 md:w-64 lg:w-72 object-contain"
              src="/style.png"
              alt="Contact"
            />
            <div className="links space-y-3 mt-4 text-center">
              <h3 className="text-blue-600 font-semibold text-lg sm:text-xl">Find me in social Links</h3>
              <div className="links flex gap-6 justify-center">
                <Link href={'https://www.facebook.com/ariizz07'}>
                  <FaFacebook size={28} className="text-blue-500" />
                </Link>
                <Link href={'https://www.instagram.com/ariizz07/'}>
                  <FaInstagram size={28} className="text-blue-500" />
                </Link>
                <Link href={'https://www.linkedin.com/in/arizz07/'}>
                  <FaLinkedin size={28} className="text-blue-500" />
                </Link>
                <Link href={'https://github.com/Arizz07/'}>
                  <FaGithub size={28} className="text-blue-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
