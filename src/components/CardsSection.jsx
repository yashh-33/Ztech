import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ added

const serviceCardsData = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtsBBf9VEee9Uz3ek4TofbmsGOAW96LCfKw&s',
    type: 'Mobile Apps',
    description: 'Native iOS & Android applications built with Swift, Kotlin, and React Native. From concept to App Store deployment.',
    features: [
      'iOS (Swift) & Android (Kotlin)',
      'React Native Cross platform',
      'App Store Optimization'
    ],
    timeframe: '2-6 months',
    link: '/mobile-apps' // ✅ added
  },
  {
    image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740&q=80',
    type: 'Web Development',
    description: 'Modern web applications using React, Next.js, and Node.js. Fast, scalable, and SEO-optimized solutions.',
    features: [
      'React, Next.js, Vue.js',
      'Node.js, Python APIs',
      'Cloud Deployment (AWS/Vercel)'
    ],
    timeframe: '1-4 months',
    link: '/web-development' // ✅ added
  },
  {
    image: 'data:image/jpeg;base64,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', // Replace with your actual image path
    type: 'SEO & Training',
    description: 'Technical SEO optimization and comprehensive training programs for developers and digital marketers.',
    features: [
      'Technical SEO Audits',
      'Developer Training Programs',
      'Career Growth Mentoring'
    ],
    timeframe: '8-16 weeks',
    link: '/seo-training' // ✅ added
  },
  {
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740&q=80',
    type: 'UI/UX Design',
    description: 'User-centered design solutions with modern interfaces, wireframing, prototyping, and usability testing.',
    features: [
      'Figma & Adobe XD',
      'Responsive Design Systems',
      'User Testing & Analytics'
    ],
    timeframe: '3-8 weeks',
    link: '/ui-ux-design' // ✅ added
  },
];

// Reusable Card Component
const ServiceCard = ({ image, type, description, features, timeframe, link }) => (
  <div className="flex items-center justify-center ">
  <div
    className="bg-white rounded-2xl shadow-xl overflow-hidden 
               transform transition duration-300 hover:shadow-2xl hover:scale-[1.10]
               border border-gray-100 w-70 "
  >
    {/* Image */}
    <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img src={image} alt={type} className="w-full h-full object-cover rounded-t-xl" />
    </div>

    {/* Card Content */}
    <div className="p-6 text-left">
      <h3 className="text-base font-bold text-gray-800 mb-2">{type}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-700 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Timeframe and Arrow (ONLY THIS PART CHANGED) */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-sm font-semibold text-red-600">{timeframe}</span>

        <Link
          to={link}
          className="flex items-center text-gray-500 hover:text-gray-700 transition duration-200"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
  </div>
);

const CardsSection = () => {
  return (
    <section id="transform" className="py-16 px-4 text-center bg-gray-50 ">
      <div className="max-w-7xl mx-auto">

        <p className="text-orange-600 font-semibold mb-2 flex items-center justify-center">
          <Star className="w-4 h-4 mr-2" /> Our Expertise
        </p>

        <h2 className="lg:text-6xl text-3xl font-extrabold text-gray-900 mb-2">
          Transforming Ideas Into
        </h2>

        <p className="lg:text-5xl text-2xl text-red-600 mb-4 font-bold">
          Digital Reality
        </p>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          From cutting-edge mobile applications to enterprise web solutions and professional training programs that accelerate careers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
