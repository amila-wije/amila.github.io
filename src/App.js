import React, { useEffect } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./photo.jpg')} className="App-logo" alt="logo" />
        <div className="name"><p > Hi, I'm Amila Sampath</p></div>
        <p className="App-link">
         Developer
        </p>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
           I'm a passionate software developer with a strong interest in building scalable and efficient applications.</p>
          <p> I'm always looking for new challenges and opportunities to learn and grow.
        </p>
        <p>
          When I'm not coding, you can find me exploring new places, trying out new foods, or reading a good book. </p>
          <p>I'm a firm believer in the importance of work-life balance and strive to maintain a healthy balance between my professional and personal life.
        </p>
        
      </section>


      <section className="education">
        <div class="e">
        <h2 >Education</h2>
        <div class="uni">
        <a href="https://seu.ac.lk/">
        <img src="http://www.seu.ac.lk/images/seu_banner.png"  className="campus" alt="campus" height={70} width={300}/>
        </a>
        <p>Bsc(Hons) In Computer Science</p>
        </div>
        

        <div class="school">
        <a href="http://laxapanacc.sch.lk/">
        <img src="http://laxapanacc.sch.lk/images/LCC_logo.png" alt="Description of the image" height={50} width={50}/>
        </a><br></br>
        <p class="secondtext">Laxapana Central Collage</p>
          <p class="secondtext">A/L in Mathematical Stream</p>
        </div>
        </div>

        </section>


      <section className="skils">
        <h2>Skills</h2>
        <div class="box">
        <p>
        <img class="skil_logo1" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/java.svg" alt="Java Logo" />
     
      <img class="skil_logo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python Logo" />
    
      <img class="skil_logo3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Logo" />
     
      <img class="skil_logo4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node.js Logo" />
      
      <img class="skil_logo5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB Logo" />
    </p>
        </div>
      </section>

      <section className="my_projects">
        <h2>Projects</h2>
        <span title="text1">Smart Plug base System</span><br></br>
        <div class="fs3">computer science</div>

        </section>


      <section className="contact">
        <h2>contact</h2>
  <div>
   
  </div>
</section>

    </div>
    
  );
}

export default App;

/*git add .
git commit -m "Your commit message"
git push origin main  # or git push origin master if you're using the master branch
npm run build
npm run deploy*/