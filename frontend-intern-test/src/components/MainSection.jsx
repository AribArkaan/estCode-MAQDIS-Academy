const MainSection = () => {
  return (
    <main className="main">
      <div className="container">
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I'm a university student in my 8th semester, majoring in Informatics and working towards my Bachelor's degree. Right now, I'm diving deep into everything related to informatics, with a strong focus on coding and programming logic. I'm still getting a handle on the structure of the lessons offered at Itenas and through various private and public institutions. I also have skills in UI/UX, Python, Internet Of Think, and my focus now is on website development. which I'm continuing to develop as I progress in my studies.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="skill-card">
              <h3>Design</h3>
              <p>UI/UX, Figma</p>
            </div>
            <div className="skill-card">
              <h3>Other Skills</h3>
              <p>Public Speaking, Project Management, IOT</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainSection;