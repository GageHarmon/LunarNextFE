import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center pt-32">
      <Head>
        <title>About Us | LunarBreeze</title>
      </Head>
      <div className="bg-gradient-to-br from-lightpurp to-navpurp text-white shadow-lg rounded-lg p-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About LunarBreeze</h1>
          <p className="mb-4">
            LunarBreeze is a cutting-edge IT Help Desk solution designed to streamline
            and enhance the support experience for both end users and technicians.
            We understand the challenges IT professionals face daily, and we&apos;re
            committed to making their lives easier with faster solutions and improved
            quality of life.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Empowering Technicians with AI</h2>
          <p className="mb-4">
            At LunarBreeze, we believe in harnessing the power of technology to
            provide the best possible support experience. Our platform integrates
            with OpenAI&apos;s GPT-3.5 API, allowing technicians to access an extensive
            knowledge base and receive accurate, instant answers to their questions.
          </p>
          <p className="mb-6">
            This AI-driven approach not only speeds up the resolution process but
            also enables technicians to focus on more complex tasks that require
            their expertise. With LunarBreeze, IT professionals can work smarter,
            not harder.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We envision a future where IT support is seamless, efficient, and
            accessible to everyone. LunarBreeze is dedicated to bridging the gap
            between end users and IT professionals, creating a more connected and
            productive environment.
          </p>
          <p className="mb-6">
            As technology continues to evolve, LunarBreeze will remain at the
            forefront of innovation, providing state-of-the-art tools and resources
            to empower IT professionals and improve the overall support experience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            We&apos;d love to hear from you! If you have any questions or would like to
            learn more about LunarBreeze, please don&apos;t hesitate to contact us at
            {' '}
          <a href="mailto:support@lunarbreeze.com" className="text-blue-300 hover:text-blue-200">
            gaharmon1@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default About;
