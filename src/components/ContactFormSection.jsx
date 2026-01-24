// src/components/ContactFormSection.jsx
import React, { useState } from 'react';
import { 
    User, Mail, Phone, Settings, MessageSquare, Send, PhoneCall, 
    Mail as ContactMailIcon,
    MapPin, Linkedin, Twitter, Instagram, Youtube, Dribbble 
} from 'lucide-react';

// ---------- Input Field ----------
const InputField = ({ icon: Icon, type, placeholder, name, halfWidth = false, isTextarea = false }) => (
    <div className={`p-1.5 bg-white border border-gray-200 rounded-lg ${halfWidth ? 'w-1/2' : 'w-full'}`}>
        {isTextarea ? (
            <textarea
                name={name}
                placeholder={placeholder}
                rows="4"
                required
                className="w-full text-gray-800 focus:outline-none resize-none p-2"
            />
        ) : (
            <div className="flex items-center">
                <Icon className="w-5 h-5 text-gray-400 mx-2" />
                <input
                    type={type}
                    name={name}
                    required
                    placeholder={placeholder}
                    className="w-full text-gray-800 focus:outline-none py-1"
                />
            </div>
        )}
    </div>
);

// ---------- Contact Info ----------
const ContactInfoBlock = ({ icon: Icon, title, content, iconBg }) => (
    <div className="flex   p-4 bg-white rounded-xl shadow-md border border-gray-100">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${iconBg} text-white`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-sm font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-gray-600 leading-tight mt-0.5">
                <span dangerouslySetInnerHTML={{ __html: content }} />
            </p>
        </div>
    </div>
);

// ---------- MAIN COMPONENT ----------
const ContactFormSection = () => {
    const [result, setResult] = useState("");

    // ✅ WEB3FORMS SUBMIT HANDLER
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "a7f37383-9935-4017-8aa4-aa2d0fdb05b9"); // 🔑 PASTE KEY

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully! We'll contact you soon.");
            event.target.reset();
        } else {
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/50">
            <div className="max-w-6xl mx-auto text-center">

                <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold py-1 px-4 rounded-full mb-4">
                    💬 Let's Connect
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mb-2">Ready to Start Your</h2>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Digital Journey?</h2>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
                    Get in touch to discuss your project ideas, enroll in courses, or explore career opportunities in tech.
                </p>

                <div className="bg-white p-6 lg:p-10 rounded-[32px] shadow-2xl border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* ---------- FORM ---------- */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Send us a Message</h3>
                            <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours</p>

                            <form className="space-y-4" onSubmit={onSubmit}>
                                <div className="flex space-x-4">
                                    <InputField icon={User} type="text" name="name" placeholder="Your Name" halfWidth />
                                    <InputField icon={Mail} type="email" name="email" placeholder="Email Address" halfWidth />
                                </div>

                                <div className="flex space-x-4">
                                    <InputField icon={Phone} type="tel" name="phone" placeholder="Phone Number" halfWidth />
                                    <InputField icon={Settings} type="text" name="service" placeholder="Select Service" halfWidth />
                                </div>

                                <InputField
                                    icon={MessageSquare}
                                    name="message"
                                    placeholder="Tell us about your project or questions..."
                                    isTextarea
                                />

                                <input type="hidden" name="from_page" value="Contact Section" />

                                <button
                                    type="submit"
                                    className="w-full py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:from-orange-600 hover:to-red-600 flex items-center justify-center space-x-2 mt-6"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>

                                {result && (
                                    <p className="text-center text-sm text-gray-600 mt-3">{result}</p>
                                )}
                            </form>
                        </div>

                        {/* ---------- CONTACT INFO ---------- */}
                        <div className="space-y-6 ">
                            <ContactInfoBlock
                                icon={PhoneCall}
                                title="Call Us"
                                content="Available Mon-Sat, 9 AM - 7 PM<br/>+91 9172101122"
                                iconBg="bg-orange-500"
                            />

                            <ContactInfoBlock
                                icon={ContactMailIcon}
                                title="Email Us"
                                content="Quick response within 24 hours <br/> ztechwareindia@gmail.com"
                                iconBg="bg-blue-500"
                            />

                            <ContactInfoBlock
                                icon={MapPin}
                                title="Visit Office"
                                content="Pl No 197, Above Rudra Optical,<br/>Near Haldiram,Medical Square Nagpur - 440024"
                                iconBg="bg-green-500"
                            />

                            <div className="pt-4 ">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                                <div className="flex gap-5 lg:ml-45 ml-15">
                                    <a href="#" className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center"><Linkedin /></a>
                                    <a href="#" className="w-10 h-10 rounded-lg bg-pink-600 text-white flex items-center justify-center"><Instagram /></a>
                                    <a href="#" className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center"><Youtube /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
