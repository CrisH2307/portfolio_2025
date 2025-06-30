import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const HackathonExperience = () => {
  const hackathons = [
    {
      title: "Climate Action - AI-Powered Climate Change Solution",
      event: "GDG Hacks @ Toronto Metropolitan University",
      date: "Jun 2025",
      description:
        "Developed an AI-powered resume analyzer that uses natural language processing to provide personalized feedback and suggestions for improvement.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      link: "https://github.com/yourusername/ai-resume-analyzer",
    },
    {
      title: "Stocky - AI Stock Price Prediction",
      event: "SpurHacks @ University of Waterloo",
      date: "Jun 2025",
      description:
        "Created a web-based application that forecasts stock prices and volatility using a powerful hybrid of LSTM (Long Short-Term Memory) and GARCH (Generalized Autoregressive Conditional Heteroskedasticity) models. Users can analyze historical price movements, identify trends, and receive real-time alerts on potential market shifts",
      technologies: ["Python", "Flask", "TensorFlow", "NumPy", "Pandas", "HTML", "CSS", "JavaScript"],
      link: "https://www.youtube.com/watch?v=hdZmcPJb0t0",
    },
    {
      title: "Moodfull - AI Health and Wellness App",
      event: "Food Innovation Hackathon @ Seneca Polytechnic",
      date: "March 2025",
      description:
        "Built a mobile app that Helps users make trauma-informed food choices by linking nutrition + mental health + culture. Educational content on food'ss mental health benefits & cultural significance. Interactive quizzes to test knowledge + earn points. AI-powered meal plans unlocked with quiz points (personalized). To empower users to eat for mind + body wellness through science & culture.",
      technologies: ["React Native", "AI", "Machine Learning", "Figma"],
      link: "https://drive.google.com/file/d/1TKMVn_vikWmz85iql-T_-05U7d2_qo0D/view",
    },
    {
      title: "Gemimi AI Chatbot",
      event: "Google AI Hackathon",
      date: "Jun 2024",
      description:
        "Developed a The web application ai_chatbot uses Gemimi AI and API to function.artificial intelligence, created to offer consumers a smooth and simple conversational interface. It serves as a virtual assistant that can comprehend questions in natural language and instantly respond with pertinent information. AI chatbots are designed to streamline interactions and offer customized support, whether it be through question answering, recommendation-making, or task assistance.",
      technologies: ["React", "Vite", "Gemini API AI", "Google Cloud Platform", "Node.js"],
      link: "ai-chatbot-delta-ten.vercel.app",
    },
    {
      title: "BlockChainPro - Web3.0 Blockchain Application",
      event: "UnStoppable Domains Hackathon",
      date: "May 2024",
      description:
        "Created a web-based application that uses Web3 and Solidity for blockchain integration with React.js and TypeScript for frontend development. The project intends to improve real estate transaction efficiency and transparency by employing blockchain technology to expedite and safeguard home transactions.The project HouseTransaction uses web3 and Solidity for blockchain integration with React.js and TypeScript for frontend development. The project intends to improve real estate transaction efficiency and transparency by employing blockchain technology to expedite and safeguard home transactions.",
      technologies: ["Solidity", "React.js", "TypeScript", "Web3.js", "Node.js"],
      link: "https://www.youtube.com/watch?v=hdZmcPJb0t0",
    },
    {
      title: "Student Stays ",
      event: "Housing Hackathon @ Seneca Polytechnic",
      date: "March 2024",
      description:
        "Used Next.js and Python for the StudentStays project at Seneca Hackathon 2024, designed and implemented user interfaces, collaborated on API development, contributed to a 20% improvement in data retrieval efficiency. Created a user-centric platform for student housing challenges, drawing on my expertise in web development and system analysis.",
      technologies: ["Next.js", "React.js"],
      link: "https://youtu.be/PQZnxXbTFHM?si=UUGqlDoZFSLdJW1x",
    },
  ];

  return (
    <section className={`${styles.section} py-16`} id="hackathon-experience">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="show" variants={styles.sectionVariants} className="max-w-7xl mx-auto">
          <p className={`${styles.sectionSubText} mb-3`}>My Hackathon Journey</p>
          <h2 className={`${styles.sectionHeadText} mb-12`}>Hackathon Experience.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                variants={styles.fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-2xl hover:bg-[#2a2a2a] transition-colors"
              >
                <h3 className="text-white text-xl font-bold mb-2">{hackathon.title}</h3>
                <p className="text-emerald-400 mb-2">{hackathon.event}</p>
                <p className="text-gray-400 mb-4">{hackathon.date}</p>

                <p className="text-white mb-4">{hackathon.description}</p>

                <div className="flex flex-col gap-4">
                  <span className="text-white font-semibold mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-600  px-4 py-2 rounded-full text-sm text-cyan-400 font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <br />

                {hackathon.link && (
                  <a
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    View Project
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HackathonExperience;
// export default HackathonExperience(HackathonExperience, "hackathon");
