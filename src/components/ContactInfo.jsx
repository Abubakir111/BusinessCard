import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = ({ email, phone, github, theme = 'dark' }) => {
  const textColor = theme === 'light' ? 'text-white' : 'text-gray-300';
  
  return (
    <div className="space-y-2">
      <div className={`flex items-center ${textColor}`}>
        <FaEnvelope className="mr-2" />
        <span>{email}</span>
      </div>
      <div className={`flex items-center ${textColor}`}>
        <FaPhone className="mr-2" />
        <span>{phone}</span>
      </div>
      <div className={`flex items-center ${textColor}`}>
        <FaGithub className="mr-2" />
        <span>{github}</span>
      </div>
    </div>
  );
};

export default ContactInfo;