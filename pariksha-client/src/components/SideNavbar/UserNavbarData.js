import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';


export const UserNavbarData = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <AiIcons.AiOutlineDashboard size="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Category',
    path: '/Category',
    icon: <FaIcons.FaLayerGroup size="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Exams',
    path: '/exam',
    icon: <FaIcons.FaBookReader size="30px" />,
    cName: 'nav-text'
  },
  
  {
    title: 'Exam Invite',
    path: '/team',
    icon: <MdIcons.MdInsertInvitation  size="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Evaluate',
    path: '/Evaluate',
    icon: <FaIcons.FaCheckCircle size="30px" />,
    cName: 'nav-text'
  },
  {
    title: 'Candidates',
    path: '/Candidates',
    icon: <FaIcons.FaUsers size="30px"/>,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/support',
    icon: <FaIcons.FaUserAlt size="30px"/>,
    cName: 'nav-text'
  }
];