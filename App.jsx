
import "./App.css";

function Introduction({ name, bio }) {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
      <h1>Hi, I'm {name}</h1>
      <p className="hero-bio">{bio}</p>
      <a href="#contact" className="primary-button">
        Get in touch
      </a>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <p>
        I'm a medical student with passion in technology. I want to integrate technology into my daily practise and a doctor.
      </p>
    </section>
  );
}

function Skills({ title, skills }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="tag-list">
        {skills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Hobbies({ interests }) {
  return (
    <section className="section">
      <h2>Hobbies & Interests</h2>
      <ul className="hobby-list">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}

function Contact({ email, github }) {
  return (
    <section className="section contact" id="contact">
      <h2>Let's Connect</h2>
      <p>Have an idea or want to collaborate? Reach out!</p>

      <p>
        Email:{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>

    
    </section>
  );
}

function App() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
  ];

  const medicalSkills = [
    "Basic life support",
    "Advanced cardiac life support",
    "Surgical skills",
    "Advanced trauma life support",
  ];

  const interests = [
    "Hiking",
    "Reading",
    "Learning new technologies",
    "Making terrible puns ",
  ];

  return (
    <main className="container">
      <Introduction
        name="Robin"
        bio="Medical student who loves coding."
      />

      <AboutMe />

      <div className="skills-grid">
        <Skills
          title="Technical Skills"
          skills={technicalSkills}
        />

        <Skills
          title="medical Skills"
          skills={medicalSkills}
        />
      </div>

      <Hobbies interests={interests} />

      <Contact
        email="neverwriting@never.com"
      />

    
    </main>
  );
}

export default App
