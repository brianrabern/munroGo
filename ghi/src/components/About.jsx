import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiFastapi,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiDocker,
  SiGit,
  SiGooglemaps,
  SiWikipedia,
} from "react-icons/si";
import { FaCss3, FaDatabase, FaSun } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar flex justify-between bg-neutral-900">
        <div className="gap-1">
          <img className="w-12" src="./MunroGo.png" alt="Mountains" />
          <div className="normal-case text-xl">MunroGo</div>
        </div>
        <button className="btn btn-danger" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
      <section className="h-96">
        <h1 className="text-2xl px-3 py-5">About:</h1>
        <p className="mx-10 my-5 text-lg">
          MunroGo is a comprehensive guide to Scotland's 282 Munros.
        </p>
        <p className="mx-10 mt-5 my-10">
          A Munro, as defined by the Scottish Mountaineering Club (SMC), is any
          mountain with a height over 3,000 feet (914.4 m), regardless of its
          topographical prominence, that is included on the official list of
          Munros. The list was first created by Sir Hugh Munro, 4th Baronet, in
          1891 and is known as Munro's Tables. The most famous Munro is Ben
          Nevis, standing at 4,411 ft (1,345 m), the highest mountain in the
          British Isles. The app is designed for adventure seekers who wish to
          plan, review, and track their Munro climbs. It provides detailed
          information on each Munro, as well as maps and real-time updates on
          weather and trail conditions. Join the Munro bagging community and
          start your own journey to the top of Scotland's magnificent mountains.
        </p>
      </section>
      <div className="divider"></div>
      <section className="min-h-screen">
        <h1 className="text-2xl px-3 py-5">Technology stack:</h1>

        <div className="flex flex-col-5 flex-wrap justify-center gap-5 h-20">
          {/* languages */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Languages</h2>
              <p className="text-sm">Python 3, JavaScript ES+, HTML5, CSS3</p>
              <div className="card-actions justify-center items-center text-4xl flex space-x-4">
                <SiPython />
                <SiJavascript />
                <SiHtml5 />
                <FaCss3 />
              </div>
            </div>
          </div>
          {/* backend */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Backend</h2>
              <p className="text-sm">MongoDB, FastAPI</p>
              <div className="card-actions justify-center items-center text-4xl flex space-x-4">
                <SiMongodb />
                <SiFastapi />
              </div>
            </div>
          </div>
          {/* frontend */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Frontend</h2>
              <p className="text-sm">React, Redux, Tailwind, DaisyUI</p>
              <div className="card-actions justify-center items-center text-4xl flex space-x-4">
                <SiReact />
                <SiRedux />
                <SiTailwindcss />
                <SiDaisyui />
              </div>
            </div>
          </div>
          {/* devtools */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Development tools</h2>
              <p className="text-sm">Docker, Git</p>
              <div className="card-actions justify-center items-center text-4xl flex space-x-4">
                <SiDocker />
                <SiGit />
              </div>
            </div>
          </div>
          {/* api */}
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">APIs</h2>
              <p className="text-sm">
                Google Maps API, OpenWeather API, Wikipedia API, the Database of
                British and Irish Hills
              </p>
              <div className="card-actions justify-center items-center text-4xl flex space-x-4">
                <SiGooglemaps />
                <FaSun />
                <SiWikipedia />
                <FaDatabase />
              </div>
            </div>
          </div>
          <p className="mx-10 mt-10">
            To use the site's functionality, users are required to sign up and
            gain access to their dashboard. The dashboard displays privately
            logged climbs, statistics on the number of Munros climbed, and
            publicly written reviews for Munros. It also includes a list of
            climbed Munros by the user and a map, integrated through the Google
            Maps API, with different colored markers depending on whether users
            have climbed a Munro or not. Unclimbed Munros are displayed with a
            red marker, while climbed Munros are displayed with a green marker.
            Each marker redirects the user to the detail page for each specific
            Munro when clicked. Users can also view a page that includes all
            their climbs and another page that displays all their reviews. Each
            Munro has its own detail page, including a picture of the Munro from
            Wikipedia API, summit height, latitude and longitude coordinates,
            the region, etc., from the Database of British and Irish Hills, and
            a summary description from Wikipedia API. It also shows current
            up-to-date weather conditions at the Munro, implemented through the
            OpenWeather API, and a map with the marker of the Munro's location,
            integrated through the Google Maps API. Buttons are provided to add
            a climb or a review for the specific Munro, both of which display a
            modal when clicked. Users can also view public reviews by other
            users. To add a climb from their dashboard, users can select a Munro
            from a dropdown menu. A list of all the Munros, including the
            region, height in feet and meters, is provided and allows the user
            to select whether a Munro has been climbed and displays a modal to
            add a climb. Users can search this list using the search bar,
            filtering by name, region, and height. Users may also navigate to
            individual Munro detail pages by clicking the Munro's name on the
            list.
          </p>
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <h1 className="text-2xl px-3 py-5">Development team:</h1>

        <div className="flex flex-col-5 flex-wrap justify-center gap-5 h-20">
          {/* card1 */}

          <div className="card w-48 bg-base-300 shadow-xl">
            <figure>
              <img
                src="https://media.licdn.com/dms/image/D5635AQGwOVj3ae0KoQ/profile-framedphoto-shrink_800_800/0/1683480079030?e=1684159200&v=beta&t=YZlejWmKusZV05W2pY1oYvhDgMh9V1IEZjIcPNtaWDA"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Warren Hill</h2>
              <p></p>
              <div className="card-actions items-center justify-end text-3xl">
                <Link to="https://gitlab.com/warrenhill7 ">
                  <AiFillGitlab />
                </Link>
                <Link to="https://www.linkedin.com/in/warren-hill-bb6565264/">
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* card2 */}

          <div className="card w-48 bg-base-300 shadow-xl">
            <figure>
              <img
                src="https://media.licdn.com/dms/image/D4E35AQHPnp2HVh2MbA/profile-framedphoto-shrink_800_800/0/1675450283919?e=1684162800&v=beta&t=9uG2tDJ8FbNsDthZ7O8UbuUNhBsOZHwu5SKhTZsY93o"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Paula Mejia</h2>
              <p></p>
              <div className="card-actions items-center justify-end text-3xl">
                <Link to="https://gitlab.com/DiggyRoy101">
                  <AiFillGitlab />
                </Link>
                <Link to="https://www.linkedin.com/in/paula-natalia-mejia/">
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div className="card w-48 bg-base-300 shadow-xl">
            <figure>
              <img
                src="https://media.licdn.com/dms/image/D4E03AQHtnS6S5SLO6w/profile-displayphoto-shrink_400_400/0/1679684052946?e=1689206400&v=beta&t=iNCy2_uxWTTwb0zuMqIatqYDEe-ZP4PfCOuVW3CmRl0"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brian Rabern</h2>
              <p></p>
              <div className="card-actions items-center justify-end text-3xl">
                <Link to="https://gitlab.com/brianrabern">
                  <AiFillGitlab />
                </Link>
                <Link to="https://www.linkedin.com/in/brian-rabern/">
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* card4 */}

          <div className="card w-48 bg-base-300 shadow-xl">
            <figure>
              <img
                src="https://media.licdn.com/dms/image/C4E03AQG1EMNrFy31vw/profile-displayphoto-shrink_400_400/0/1627951805488?e=1689206400&v=beta&t=8eG6kJIhxS94K_odGDcAV6yUsaVTgEKR_cnPMB15Z8k"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Elijah Ramos</h2>
              <p></p>
              <div className="card-actions items-center justify-end text-3xl">
                <Link to="https://gitlab.com/elijahram">
                  <AiFillGitlab />
                </Link>
                <Link to="https://www.linkedin.com/in/elijah-b-ramos/">
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
          </div>
          {/* card5 */}

          <div className="card w-48 bg-base-300 shadow-xl">
            <figure>
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFtIbapzxYL5A/profile-displayphoto-shrink_400_400/0/1673623676783?e=1689206400&v=beta&t=1_qMbrCmSzGN5hgu0gwz4qUzKfMuTfR3JWhw1HlYyW4"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Diganta Roy</h2>
              <p></p>
              <div className="card-actions items-center justify-end text-3xl">
                <Link to="https://gitlab.com/DiggyRoy101 ">
                  <AiFillGitlab />
                </Link>
                <Link to="https://www.linkedin.com/in/diganta-roy/">
                  <AiFillLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
