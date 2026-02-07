import * as React from "react";

interface Skill {
    name: string;
    level: number;
    color: string;
}

const Skills: React.FC = () => {

    const skills: Skill[] = [
        { name: 'React', level: 80, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'MySql', level: 75, color: 'bg-green-600' }
    ];

    return (
        <div className={'p-6 space-y-6'}>
            <h1 className={'text-3xl font-bold mb-2'}>Skills & Expertise</h1>
            <div className={'space-y-4'}>
                {skills.map((skill, idx) => (
                    <div key={idx} className={'bg-white rounded-lg p-4 shadow-md'}>
                        <div className={'flex justify-between mb-2'}>
                            <span className={'font-semibold'}>{skill.name}</span>
                            <span className={'text-gray-600'}>{skill.level}%</span>
                        </div>
                        <div className={'w-full bg-gray-200 rounded-full h-3'}>
                            <div
                                className={`${skill.color} h-3 rounded-full transition-colors duration-1000`}
                                style={{width: `${skill.level}%`}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;