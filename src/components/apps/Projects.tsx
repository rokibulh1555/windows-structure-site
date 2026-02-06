import * as React from "react";
import type { Project } from "../../types";
import { Code } from 'lucide-react';


const Projects: React.FC = () => {
    const projects: Project[] = [
        {name: 'Ecommerce Platform', tech: 'React, Nodejs, MongoDB', color: 'from-blue-500 to-cyan-500'},
        {name: 'Social Media App', tech: 'React Native, Firebase', color: 'from-purple-500 to-pink-500'},
        {name: 'Task Management App', tech: 'Vue js, Express Postgresql', color: 'from-green-500 to-teal-500'},
        { name: 'Real-time Chat', tech: 'Socket.io, React, Redis', color: 'from-orange-500 to-red-500' },
        { name: 'Analytics Dashboard', tech: 'React, D3.js, Python', color: 'from-indigo-500 to-blue-500' },
        { name: 'Blog Platform', tech: 'Next.js, Prisma, Tailwind', color: 'from-pink-500 to-rose-500' }
    ]

    return (
        <div className={'p-6 space-y-4'}>
            <h1 className={'text-3xl font-bold mb-6'}>My Projects</h1>
            <div className={'grid grid-cols-3 gap-4'}>
                {projects.map((project, idx) => (
                    <div key={idx} className={'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition'}>
                        <div className={`bg-gradient-to-r ${project.color} h-32 flex items-center justify-center`}>
                            <Code className={'h-12 w-12 text-white'} />
                        </div>
                        <div className={'p-4'}>
                            <h2 className={'text-xl font-bold mb-2'}>{project.name}</h2>
                            <p className={'text-gray-600 text-sm'}>{project.tech}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;