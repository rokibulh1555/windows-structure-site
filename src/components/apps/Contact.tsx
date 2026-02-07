import * as React from "react";
import {useState} from "react";
import type {ContactFormData} from "../../types";

interface ContactProps {
    name: string;
    description: string;
}

const Contact: React.FC = () => {
    const contact: ContactProps[] = [
        {name: 'Email', description: 'rokibulh1555@gmail.com'},
        {name: 'Phone', description: '+8801832084928'},
        {name: 'Location', description: 'Dhaka, Bangladesh'}
    ];

    const [formData, setFormData ] = useState<ContactFormData>({name: '', email: '', message: ''});

    const handleSubmit = (): void => {
        alert('Message Sent Successfully(Demo only).');
        setFormData({name: '', email: '', message: ''});
    }
    return (
        <div className={'p-6 space-y-6'}>
            <h1 className={'text-3xl font-bold mb-6'}>Get In Touch</h1>
            <div className={'grid grid-cols-2 gap-6 md:grid-cols-3'}>
                <div className={'space-y-4'}>
                    {contact.map((item, idx) => (
                        <div key={idx} className={'bg-white rounded-lg p-6 shadow-md'}>
                            <h3 className={'font-bold text-lg mb-2'}>{item.name}</h3>
                            <p className={'text-gray-600'}>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className={'bg-white rounded-lg p-6 shadow-md space-y-4'}>
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Name</label>
                        <input
                            type={'text'}
                            value={formData.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                        <textarea
                            value={formData.message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            rows={5}
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;