import "./skills.css"

function SkillsCard({ title, skills,delay }) {
  return (
    <div className="card"
  data-aos="fade-up"
  data-aos-delay={delay}
  data-aos-duration="1000">
      <h2>{title}</h2>

      <ul>
        {skills.map((item, index) => (
          <li key={index}>
            {item.icon} {item.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SkillsCard;