import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Portfolio from './Portfolio';

const DarkCard = ({ photo }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold mb-6">Frontend Developer</h1>
      
      <div className="mb-6">
        <img 
          src={photo} 
          alt="Profile" 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <div className="border-t border-gray-700 pt-4">
        <ContactInfo 
          email="bakirbazarkul16@gmail.com"
          phone="+996 700 394 180"
          github="github.ru"
          theme="dark"
        />
      </div>
      
      <div className="border-t border-gray-700 pt-4 mt-4">
        <Portfolio 
          projects={['Fanat.ks', 'Admin.ks', 'Jop.ks']}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default DarkCard;