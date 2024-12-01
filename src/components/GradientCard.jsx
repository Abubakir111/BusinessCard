import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Portfolio from './Portfolio';

const GradientCard = ({ photo }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-xl max-w-md mx-auto text-white">
      <div className="flex flex-col items-center">
        <img 
          src={photo} 
          alt="Profile" 
          className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
        />
        <h1 className="text-2xl font-bold mb-6">Frontend Developer</h1>
      </div>
      
      <ContactInfo 
        email="bakirbazarkul16@gmail.com"
        phone="+996 700 394 180"
        github="github.ru"
        theme="light"
      />
      
      <Portfolio 
        projects={['Fanat.ks', 'Admin.ks', 'Jop.ks']}
        theme="light"
      />
    </div>
  );
};

export default GradientCard;