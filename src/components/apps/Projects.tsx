import * as React from "react";
import type { Project } from "../../types";
import { Code } from 'lucide-react';


const Projects: React.FC = () => {
    const projects: Project[] = [
        {name: 'Ecommerce Platform', tech: 'React, Nodejs, MongoDB', color: 'from-blue-500 to-cyan-500'},
        {name: 'E-Commerce Website', tech: 'React, Nodejs, MongoDB', color: 'from-blue-500 to-cyan-500'},
    ]

    return (
        <div className={'p-6 space-y-4'}>
            <h1 className={'text-3xl font-bold mb-6'}>My Projects</h1>
            <div className={'grid grid-cols-2 gap-4'}>
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