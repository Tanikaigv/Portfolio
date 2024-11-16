import './App.css';
import tanikaiPic from './Tanikai-pic.png';
import skills from './skills.png';  
import gitHub from './github.png';
import linkedIn from './linkedIn.png';
import instagram from './instagram.png';
function App() {
  return (
    <div>
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
        <aside className="details">
          <h1>Hey, I'm <span className="name">Tanikaiselvan</span></h1>
          <p>I am a passionate Frontend Developer focusing on creating interactive webpages</p>
          <a href="https://drive.google.com/file/d/1faBhwImM9w7KcAnMk4q7VVml0JmiZt4V/view?usp=sharing"><button>Resume</button></a>
          <div className="logos">
            <a href="https://github.com/Tanikaigv"><img src={gitHub}/></a>
            <a href="https://www.linkedin.com/in/tanikaiselvan-g/"><img src={linkedIn}/></a>
            <a href="https://www.instagram.com/call_me_tanikai/"><img src={instagram}/></a>
          </div>
        </aside>
        <img src={tanikaiPic}/>
      </div>
          <br/><br/><br/><br/><br/><br/><br/><hr/>
      <div className="about" id="abt">
        <h1>About Me<img src="https://imgs.search.brave.com/Ydqi_VZHGZsud9pHe4-x1mRWkfz4Ny_47znPr4QE3LI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltZzEvNjk5/OTE1LnBuZw" className="about-img"/></h1>
        <div className="about-content">
          <p>
            I am currently pursuing a BE in Mechanical Engineering at Sri Eshwar College of Engineering, maintaining an academic grade of over 8.0 out of 10.
            As a passionate Frontend Developer, I specialize in HTML, CSS, JavaScript, and React.js, with a keen interest in Full Stack Development.
            I have successfully completed two internships and worked on multiple web development projects, 
            showcasing my expertise in creating responsive and dynamic web applications.
            I am actively seeking opportunities as a Frontend Developer, React Developer, or Full Stack Developer to contribute my skills and grow further in the field of web development.
          </p>
        </div>
      </div>
      <hr/>
      <div className="projects" id="prjcts">
        <h1>Projects<img src="https://cdn-icons-png.flaticon.com/128/1420/1420462.png" className="project-img"/></h1>
        <div className="project-images">
          <div className="imgs">
            <img src="https://imgs.search.brave.com/-thpLxnz6vRRr-2d7Bb1yYZJmRElvybEOSHZ6RTmiAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZW1pbnQuY29t/L2xtLWltZy9pbWcv/MjAyNC8xMC8yMS82/MDB4MzM4L1pvbWF0/b18xNzI5NTI2ODE1/OTQ2XzE3Mjk1MjY4/MTYxODQuSlBH"/>
            <p>The Responsive landing page clone of Zomato, using HTML and CSS major focusing on the Media Queries</p>
          </div>
          <div className="imgs">
            <img src="https://imgs.search.brave.com/oEYd3aWXC_J69uTYog6t_ZjP-4zMbiea08tKTv70vGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2dU/WWs3X3BkaVE0dDZD/Tm9tV3htRlFpQUJN/SjdTTUstaHpJM2w5/b1M3VUwwLUw0LTRZ/TkJtZDJNeFJGbExR/UVlMdz13MzAw"/>
            <p>A Project on Tasks depends on our needs with the help of JavaScript, showcasing the dynamic features</p>
          </div>
          <div className="imgs">
            <img src="https://imgs.search.brave.com/PDte9NmYvLExjhh8gLSDDjs9zTM7CdF2mBqq4O9ZjwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzMwLzI2LzMy/LzM2MF9GXzEwMzAy/NjMyMTBfM2pJWkNx/SDJDblhWNEhNOXdL/bFRwYlRBZ1FvV3dr/WDUuanBn"/>
            <p>A Book Record Management API using Backend Technology like Express.js focused on fetching datas and working of the server</p>
          </div>
        </div>
      </div>
      
      <div className="skills" id="skls">
        <h1>Skills</h1>
        <img src={skills}/>
      </div>

      <div className="achievements" id="achvmnts">
        <div className="achievement-head">
          <h1>Achievements - Certifications</h1>
          <img src="https://imgs.search.brave.com/RMKI0sTZDJMH5O-pepT3AGhuVpmYrBVmfdYgSJYfd-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU0LzExLzc1/LzM2MF9GXzI1NDEx/NzUzMl9VWW93bURi/YW9walVGQ084WERp/aXpiV1dGcnk4cmZz/Qi5qcGc" className="achievement-img"/>
        </div>
        <ul className="achievement-list">
          <li> Accomplished the resolution over 400 + diverse and challenging problems</li>
          <li> Successfully tackled more than 90+ problems, achieved a contest rating of 1280</li>
          <li> Accredited in React JS bootcamp, exhibiting expertise in constructing dynamic user interfaces</li>
          <li> Conceptualized UI & UX utilizing Figma, demonstrating expertise through 5+ real-world projects</li>
          <li> Concluded a comprehensive Web Development Internship, expertise in HTML, CSS,JavaScript.</li>
        </ul>
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
