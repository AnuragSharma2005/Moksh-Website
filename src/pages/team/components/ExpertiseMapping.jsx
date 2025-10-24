import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Lakshya Chauhan",
    role: "CEO & Founder",
    qualification: "B.Tech in Computer Science",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anurag Sharma",
    role: "Co-Founder & CMO",
    qualification: "Bachelor of Computer Science Engineer",
    img: "Anurag1.jpg",
  },
  {
    name: "Aditya Sharma",
    role: "Co-Founder & CTO",
    qualification: "Bachelor of Computer Science Engineer",
    img: "Aditya1.jpg",
  },
  {
    name: "Vaibhav Katiyal",
    role: "Co-Founder & COO",
    qualification: "Bachelor of Computer Science Engineer",
    img: "Vaibhav1.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const ExpertiseMapping = () => {
  return (
    <section className="w-full">
      {/* 🔵 Top Blue Gradient Section */}
      <div className="min-h-[60vh] bg-moksha-gradient text-white py-40 px-6 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Expert Team
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Our dedicated professionals bring creativity, strategy, and technology together
          to craft innovative digital experiences for businesses worldwide.
        </motion.p>
      </div>

      {/* ⚪ Cards Section */}
      <div className="bg-white py-20 px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Creative Professionals
          </h3>
          <p className="text-gray-500 mt-2">
            Experts who help drive innovation and deliver excellence at every step.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2 w-full max-w-5xl">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="p-[3px] rounded-3xl bg-gradient-to-br from-[#0a1d5a] via-[#1a3fc4] to-[#4b2ae8] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {/* Inner white card */}
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center h-full">
                {/* Image */}
                <motion.div
                  className="w-40 h-40 rounded-2xl overflow-hidden mb-6 border-4 border-blue-500/30 shadow-lg group-hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Text Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-gray-600 italic mb-4">
                  {member.qualification}
                </p>

                {/* Social Icons */}
                {/* <div className="flex space-x-6 mt-4">
                  {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className="text-gray-400 hover:text-blue-600 transition-all"
                      whileHover={{ scale: 1.3 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div> */}

                {/* Optional Badge */}
                {/* <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  Top Designer
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMapping;
