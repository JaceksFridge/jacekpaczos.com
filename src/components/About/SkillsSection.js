import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const BookSection = ({ skills }) => {

    const [ref, inView] = useInView({
        threshold: 0.1,
    })

  return (
    <div className="skills-section" ref={ref}>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <motion.a
                    className="skills-card" 
                    href={skill.link}
                    data-aos="fade-up"
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ 
                        opacity: 0, 
                        translateX: -50, 
                        // translateY: index % 2 ? -50 : 50
                        translateY: -50
                    }}
                    animate={inView ? { opacity: 1, translateX: 0, translateY: 0 } : {}}
                    transition={{ duration: 0.1, delay: index * 0.2 }}
                >
                    <img src={skill.url} alt={skill.image} className="skill-image" />
                    <div className="skill-info">
                        <h4 className="skill-title">{skill.title}</h4>
                        <h4 className="skill-type">{skill.type}</h4>
                    </div>
                </motion.a>
            ))}
        </div>
    </div>
  )
}

export default BookSection
