import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactInfo from './ContactInfo';
import Portfolio from './Portfolio';

const MinimalistCard = ({ photo }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
      <div className="flex items-center space-x-6">
        <img 
          src={photo} 
          alt="Profile" 
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Frontend Developer</h1>
          <div className="w-20 h-1 bg-blue-500 mt-2"></div>
        </div>
      </div>
      
      <ContactInfo 
        email="bakirbazarkul16@gmail.com"
        phone="+996 700 394 180"
        github="github.ru"
      />
      
      <Portfolio 
        projects={['Fanat.ks', 'Admin.ks', 'Jop.ks']}
      />
    </div>
  );
};

export default MinimalistCard;