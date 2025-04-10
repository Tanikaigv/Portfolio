import './App.css';
import tanikaiPic from './Tanikai-pic.png';
import skills from './skills.png';  
import gitHub from './github.png';
import linkedIn from './linkedIn.png';
import instagram from './instagram.png';
import abt from './abt_ill.jpg';
function App() {
  return (
    <div className="parent">
      <header className="header">
      <h1>Portfolio</h1>
      <div className="routes">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#abt">About</a></li>
          <li><a href="#prjcts">Projects</a></li>
          <li><a href="#skls">Skills</a></li>
          <li><a href="#achvmnts">Achievements</a></li>
          <li><a href="#cntct">Contact</a></li>
        </ul>
      </div>
      </header>

      <div className="home-content" id="home">
        <div className="home-div">
        <aside className="details">
          <h1>Hey, I'm <span className="name">Tanikaiselvan</span></h1>
          <p>I am a passionate MERN Developer excited on creating dynamic web applications</p>
          <a href="https://drive.google.com/file/d/1faBhwImM9w7KcAnMk4q7VVml0JmiZt4V/view?usp=sharing"><button className="resume-btn">Resume</button></a>
          <div className="logos">
            <a href="https://github.com/Tanikaigv"><img src={gitHub}/></a>
            <a href="https://www.linkedin.com/in/tanikaiselvan-g/"><img src={linkedIn}/></a>
            <a href="https://www.instagram.com/call_me_tanikai/"><img src={instagram}/></a>
          </div>
        </aside>
        <img src={tanikaiPic}/>
        </div>
      </div>
          <br/><br/><br/><br/><br/><br/><br/><hr/>
      <div className="about" id="abt">
        <h1>About Me</h1>
        <div className="values">
          <div className="image">
          <img src={abt}/>
          </div>
        <div className="abt-container">
        <div className="about-content">
          <p>
            I am currently pursuing a BE in Mechanical Engineering at Sri Eshwar College of Engineering, maintaining an academic grade of over 8.0 out of 10.
            As a passionate MERN Developer, I specialize in HTML, CSS, JavaScript, and React.js, Node, Express.js, Mongo DB with a keen interest in Full Stack Development.
            I have successfully completed two internships and worked on multiple web development projects, 
            showcasing my expertise in creating responsive and dynamic web applications.
            I am actively seeking opportunities as a Frontend Developer, React Developer, or Full Stack Developer to contribute my skills and grow further in the field of web development.
          </p>
        </div>
        </div>
        </div>
      </div>
      <hr/>
      <div className="projects" id="prjcts">
      <h1>Projects<img src="https://cdn-icons-png.flaticon.com/128/1420/1420462.png" className="project-img"/></h1>
        <div className="project-content">
        <div className="project-images">
          <div className="imgs">
            <img src="https://imgs.search.brave.com/-thpLxnz6vRRr-2d7Bb1yYZJmRElvybEOSHZ6RTmiAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZW1pbnQuY29t/L2xtLWltZy9pbWcv/MjAyNC8xMC8yMS82/MDB4MzM4L1pvbWF0/b18xNzI5NTI2ODE1/OTQ2XzE3Mjk1MjY4/MTYxODQuSlBH"/>
            <p>The Responsive landing page clone of Zomato, using HTML and CSS major focusing on the Media Queries</p>
            <a href="https://github.com/Tanikaigv/Zomato_landing_page_clone"><button>View Repo</button></a>
          </div>
          <div className="imgs">
            <img src="https://imgs.search.brave.com/oEYd3aWXC_J69uTYog6t_ZjP-4zMbiea08tKTv70vGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2dU/WWs3X3BkaVE0dDZD/Tm9tV3htRlFpQUJN/SjdTTUstaHpJM2w5/b1M3VUwwLUw0LTRZ/TkJtZDJNeFJGbExR/UVlMdz13MzAw"/>
            <p>A Project on Tasks depends on our needs with the help of JavaScript, showcasing the dynamic features</p>
            <a href="https://github.com/Tanikaigv/JS_Tasky_Application"><button>View Repo</button></a>
          </div>
          <div className="imgs">
            <img src="https://imgs.search.brave.com/PDte9NmYvLExjhh8gLSDDjs9zTM7CdF2mBqq4O9ZjwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzMwLzI2LzMy/LzM2MF9GXzEwMzAy/NjMyMTBfM2pJWkNx/SDJDblhWNEhNOXdL/bFRwYlRBZ1FvV3dr/WDUuanBn"/>
            <p>A Book Record Management API using Backend Technology like Express.js focused on fetching datas and working of the server</p>
            <a href="https://github.com/Tanikaigv/Book_Record_Management_System"><button>View Repo</button></a>
          </div>
          <div className="imgs">
            <img src="https://imgs.search.brave.com/0hoBYSeikYz0jrU39UOfRcRJuqBlY7UzF2IKmUuPEYg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS82RVV0cTFlaWtn/ZDZXQTJYUWZ3MVVQ/WDRBRTI3R3hqRGc4/QWc0cHVoUGRGM0ph/Y2h2ZUtseHg5SUot/M3cxMnlYMU9NPXcy/NDAtaDQ4MC1ydw.jpeg"/>
            <p>Book My show clone application using The movie data base (TMDB) understanding the fundamental working of real world applications</p>
            <a href="https://github.com/Tanikaigv/book-my-show-clone"><button>View Repo</button></a>
          </div>
        </div>
        </div>
      </div>
      
      <div className="skills" id="skls">
        <h1>Skills</h1>
        <div className="skill-img">
        <img src={skills}/>
        </div>
      </div>

      <div className="achievements" id="achvmnts">
        <div className="achievement-head">
          <h1>Achievements - Certifications</h1>
          <img src="https://imgs.search.brave.com/RMKI0sTZDJMH5O-pepT3AGhuVpmYrBVmfdYgSJYfd-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzExLzc1/LzM2MF9GXzI1NDEx/NzUzMl9VWW93bURi/YW9walVGQ084WERp/aXpiV1dGcnk4cmZz/Qi5qcGc" className="achievement-img"/>
        </div>
        <div className="achievement-container">
        <ul className="achievement-list">
          <li> Accomplished the resolution over 400 + diverse and challenging problems in Code Chef</li>
          <li> Successfully tackled more than 90+ problems, achieved a contest rating of 1280 in Leetcode</li>
          <li> Accredited in React JS bootcamp, exhibiting expertise in constructing dynamic user interfaces</li>
          <li> Conceptualized UI & UX utilizing Figma, demonstrating expertise through 5+ real-world projects</li>
          <li> Concluded a comprehensive Web Development Internship, expertise in HTML, CSS,JavaScript.</li>
        </ul>
        </div>
      </div>

      <div className="contact" id="cntct">
        <h2>Contact Me</h2>
        <div className="contact-content">
        <p>tanikaigv05@gmail.com</p>
        <p>|</p>
        <p>tanikaiselvan.g2022mech@sece.ac.in</p>
        <p>|</p>
        <p>+91 6381489330</p>
        <p>|</p>
        <a href="https://www.linkedin.com/in/tanikaiselvan-g/">LinkedIn</a>
        <p>|</p>
        <a href="https://www.instagram.com/call_me_tanikai/?next=%2F">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;

