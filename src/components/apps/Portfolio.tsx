import * as React from "react";

interface ProfileItem {
    title: string;
    description: string;
    color: string;
}

const profileItems: ProfileItem[] = [
    {title: '1+', description: 'Years Experience', color: 'text-blue-600'},
    {title: '15+', description: 'Projects Completed', color: 'text-purple-600'},
    {title: '20+', description: 'Happy Clients', color: 'text-pink-600'}
]


const Portfolio: React.FC = () => {
    return (
        <div className={'p-6 space-y-6'}>
            <div className={'bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white'}>
                <h1 className={'text-4xl font-bold mb-2'}> Md Rokibul Hasan </h1>
                <p className={'text-xl opacity-90'}>Full Stack Developer with ML Knowledge.</p>
            </div>
            <div className={'grid grid-cols-3 gap-4'}>
                {profileItems.map((item, idx) => (
                    <div key={idx} className={'text-white rounded-lg p-6 shadow-md'}>
                        <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.title}</div>
                        <div className={'text-gray-600'}>{item.description}</div>
                    </div>
                ))}
            </div>
            <div className={'bg-white rounded-lg p-6 shadow-md'}>
                <h2 className={'text-2xl font-bold mb-4'}>About Me</h2>
                <p className={'text-gray-700 leading-relaxed'}>
                    Passionate developer with expertise in React, Node.js, and modern web technologies.
                    I love creating beautiful, functional applications that solve real-world problems.
                    My focus is on writing clean, maintainable code and delivering exceptional user experiences.
                </p>
            </div>
        </div>
    )
}


export default Portfolio;