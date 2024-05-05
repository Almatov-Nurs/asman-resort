"use client";
// modules
import Link from "next/link";
// styles
import classes from "./style.module.scss";


const Instagram = () => {
  return (
    <Link href="https://www.instagram.com/asman_resort/" className={classes.instagram} target="_blank">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon ${classes.icon}`}>
        <path d="M22.667 2.6665H9.33366C5.65176 2.6665 2.66699 5.65127 2.66699 9.33317V22.6665C2.66699 26.3484 5.65176 29.3332 9.33366 29.3332H22.667C26.3489 29.3332 29.3337 26.3484 29.3337 22.6665V9.33317C29.3337 5.65127 26.3489 2.6665 22.667 2.6665Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3336 15.1599C21.4981 16.2696 21.3086 17.4029 20.7919 18.3986C20.2753 19.3943 19.4578 20.2018 18.4558 20.7061C17.4537 21.2105 16.3182 21.386 15.2106 21.2078C14.1031 21.0296 13.0799 20.5067 12.2867 19.7135C11.4935 18.9202 10.9706 17.8971 10.7924 16.7895C10.6141 15.682 10.7897 14.5464 11.294 13.5444C11.7984 12.5424 12.6058 11.7249 13.6016 11.2082C14.5973 10.6916 15.7306 10.502 16.8403 10.6666C17.9722 10.8344 19.0201 11.3619 19.8292 12.171C20.6383 12.9801 21.1657 14.028 21.3336 15.1599Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.333 8.6665H23.3463" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.667 2.6665H9.33366C5.65176 2.6665 2.66699 5.65127 2.66699 9.33317V22.6665C2.66699 26.3484 5.65176 29.3332 9.33366 29.3332H22.667C26.3489 29.3332 29.3337 26.3484 29.3337 22.6665V9.33317C29.3337 5.65127 26.3489 2.6665 22.667 2.6665Z" stroke="url(#paint0_linear_47_106)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3336 15.1599C21.4981 16.2696 21.3086 17.4029 20.7919 18.3986C20.2753 19.3943 19.4578 20.2018 18.4558 20.7061C17.4537 21.2105 16.3182 21.386 15.2106 21.2078C14.1031 21.0296 13.0799 20.5067 12.2867 19.7135C11.4935 18.9202 10.9706 17.8971 10.7924 16.7895C10.6141 15.682 10.7897 14.5464 11.294 13.5444C11.7984 12.5424 12.6058 11.7249 13.6016 11.2082C14.5973 10.6916 15.7306 10.502 16.8403 10.6666C17.9722 10.8344 19.0201 11.3619 19.8292 12.171C20.6383 12.9801 21.1657 14.028 21.3336 15.1599Z" stroke="url(#paint1_linear_47_106)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.333 8.6665H23.3463" stroke="url(#paint2_linear_47_106)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_47_106" x1="16.0003" y1="2.6665" x2="16.0003" y2="29.3332" gradientUnits="userSpaceOnUse">
        <stop stopColor="#744ABF"/>
        <stop offset="1" stopColor="#EB6643"/>
        </linearGradient>
        <linearGradient id="paint1_linear_47_106" x1="16.0579" y1="10.6089" x2="16.0579" y2="21.2756" gradientUnits="userSpaceOnUse">
        <stop stopColor="#744ABF"/>
        <stop offset="1" stopColor="#EB6643"/>
        </linearGradient>
        <linearGradient id="paint2_linear_47_106" x1="23.3397" y1="8.6665" x2="23.3397" y2="9.6665" gradientUnits="userSpaceOnUse">
        <stop stopColor="#744ABF"/>
        <stop offset="1" stopColor="#EB6643"/>
        </linearGradient>
        </defs>
      </svg>
    </Link>
  );
};

export default Instagram;