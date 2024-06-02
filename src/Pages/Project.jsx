import proimg_01 from "../assets/pro_01.jpg"
import proimg_02 from "../assets/proimg_2.jpg"
import proimg_03 from "../assets/proimg_03.webp"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import proimg_04 from "../assets/proimg_04.jpg"
import proimg_05 from "../assets/proimg_05.jpg"
import proimg_006 from "../assets/proimg_006.jpg"
import proimg_07 from "../assets/proimg_007.jpg"
import proimg_08 from "../assets/proimg_08.png"
import proimg_09 from "../assets/proimg_09.jpg"

const Project = () => {
  return (
    <div>
    <div className="project_section">
    <h1>Recent Latest <span>Projects</span></h1>
      <div className="group_section">

        <div className="sec_1">
          <img src={proimg_01} alt="" />
          <h4>Crypto App</h4>
          <p>A robust cryptocurrency app built with Redux, Material UI, and secure authentication features, offering seamless API integration. Track real-time prices, manage your portfolio, and execute trades efficiently. Enjoy a sleek, user-friendly interface and state-of-the-art security for an enhanced digital currency experience. Perfect for both beginners and experts.</p>
         <a href="crypto-trending-project.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>

        </div>

        <div className="sec_1">
          <img src={proimg_02} alt="" />
          <h4>Khatabook App</h4>
          <p>Khatabook is an expense manager app built with Bootstrap and Props, offering a clean, responsive design. Easily track your spending, categorize expenses, and manage budgets. The user-friendly interface ensures seamless navigation and effective financial management, making it ideal for personal and small business use.</p>
          <a href="khatabook-app-project.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>

        <div className="sec_1">
          <img src={proimg_03} alt="" />
          <h4>Trending News app</h4>
          <p>Our trending news app, built with Context API and Bootstrap, delivers the latest trending news with a sleek, responsive design. Enjoy real-time updates, personalized news feeds, and easy navigation. Stay informed with the most current stories, all presented in an intuitive and visually appealing interface.</p>
         <a href="trending-news-app.vercel.app"> <button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>
      </div>

      <div className="group_section_2">
        <div className="sec_2">
          <img src={proimg_04} alt="" />
          <h4>Weather App</h4>
          <p>A weather app built with JavaScript and REST API allows users to retrieve real-time weather data for any location. It fetches data from a weather service API, displaying current conditions, forecasts, and other relevant details. The app features an intuitive interface, ensuring a seamless user experience.</p>
          <a href="weather-app-six-gules-97.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>

        <div className="sec_2">
          <img src={proimg_05} alt="" />
          <h4>Feedback App</h4>
          <p>A feedback app built with JavaScript and CRUD operations enables users to create, read, update, and delete feedback entries. It offers a user-friendly interface for submitting feedback, viewing past responses, and making edits. The app ensures efficient data management and enhances user engagement through streamlined interaction and feedback processes.</p>
          <a href="feedback-javascript.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>

        <div className="sec_2">
          <img src={proimg_006} alt="" />
          <h4>Quote App</h4>
          <p>A quote app built with JavaScript, Bootstrap, and an API fetches and displays inspirational quotes. Utilizing a sleek Bootstrap interface, users can view, refresh, and share quotes dynamically sourced from an external API. This app offers a stylish, engaging way to access and enjoy motivational content.</p>
          <a href="quote-app-javascript.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>
      </div>

      <div className="group_section_3">
        <div className="sec_3">
          <img src={proimg_07} alt="" />
          <h4>Netflix</h4>
          <p>Creating a Netflix clone is a popular project for web developers to practice their skills in HTML and CSS. Here's a description of what such a project would look like, focusing on a fully responsive design using HTML and CSS</p>
          <a href="netflix-project-theta.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>

        <div className="sec_3">
          <img src={proimg_08} alt="" />
          <h4>Swiggi</h4>
          <p>A Swiggy clone is a web application replicating the Swiggy interface, built using HTML and CSS. It features a fully responsive design, including a navigation bar, search functionality, restaurant listings, and a food menu. The layout adapts seamlessly to desktops, tablets, and smartphones for an optimal user experience.</p>
          <a href="swiggi-clone.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>

        <div className="sec_3">
          <img src={proimg_09} alt="" />
          <h4>Sky Scanner</h4>
          <p>A Skyscanner clone is a web application mimicking the Skyscanner interface, crafted with HTML and CSS. It offers a fully responsive design, featuring a search bar for flights, hotels, and car rentals, along with a clean, user-friendly layout. The design adapts seamlessly across desktops, tablets, and smartphones.</p>
          <a href="sky-scanner-six.vercel.app"><button>Visit Site <FaArrowUpRightFromSquare /></button></a>
        </div>
      </div>

    </div>
      
    </div>
  )
}

export default Project
