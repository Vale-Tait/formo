const capabilities = ['Industrial Design', 'Product Strategy', 'Prototyping', 'CMF'];
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.sec}>
      <div>
        <h1>Designing useful objects with less noise.</h1>

        <p className={styles.description}>
          FORMO explores everyday objects through proportion, material and use. The studio works
          across furniture, lighting, home electronics and small domestic objects.
        </p>
      </div>

      <ul className={styles.list}>
        {capabilities.map(cap => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>

      <div className={styles.images}>
        <img src="/images/about-portrait.jpg" alt="Portrait in the FORMO studio" />
        <img src="/images/about-environment.jpg" alt="FORMO studio workspace" />
      </div>
    </section>
  );
}

export default About;
