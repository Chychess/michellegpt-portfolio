
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 px-6 py-8 font-sans">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center space-y-4">
        <Image src="/michelle.jpg" alt="Michelle D. Gapit" width={160} height={160} className="rounded-full mx-auto shadow-lg" />
        <h1 className="text-4xl font-bold text-pink-600">Michelle D. Gapit</h1>
        <p className="flex justify-center items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>Dasmariñas City, Cavite 4114</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center space-x-1"><Mail className="w-4 h-4" /> michellegapit@gmail.com</span>
          <span className="flex items-center space-x-1"><Phone className="w-4 h-4" /> 0930 116 1007</span>
        </div>
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-10 space-y-6 max-w-3xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Career Objective</h2>
          <p>To thrive in a dynamic working environment where I can apply my skills, continue learning, and contribute effectively to a role that aligns with my knowledge and passion.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Work Experience</h2>
          <ul className="space-y-3 text-sm">
            <li>- PV Proposal Designer, Clearsource PH (May 2022 - Jan 2024)</li>
            <li>- Sales Associate, Datagen Facilities OPC (Apr 2021 - Mar 2022)</li>
            <li>- Housekeeping Supervisor, Containers by Eco Hotel (Oct 2017 - Feb 2020)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Education</h2>
          <p>Bachelor of Science in Tourism Management, Cavite State University - Silang Campus (2013 - 2017)</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">Skills</h2>
          <p>Creative, Time Management, Presentation, Team Collaboration, Microsoft Office, Adobe Photoshop (Basic)</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">References</h2>
          <ul className="text-sm space-y-2">
            <li>- Rachel Ann Peralta | 0927 180 0219 | rachelannapo28@gmail.com</li>
            <li>- Eunice Panganiban | 0975 694 9823 | eunicepanganiban2888@gmail.com</li>
            <li>- Jenica Coeur | 0915 982 7413 | jenica.coeur@gmail.com</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}
