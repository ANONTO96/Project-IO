import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const AllProjects = () => {
    const ProjectsData = useLoaderData();
    return (
         <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Our All Applications</h1>
            <p className='text-gray-500 text-center'>Explore All Trending Apps On The Market Developed By Our Community. We Code For Millions</p>
            <div className='flex justify-between items-center w-full md:w-10/12 lg:w-9/12 px-4'>
                <h2 className='text-xl font-semibold'>Total Projects: {ProjectsData.length}</h2>
                <input type="text" placeholder="Search projects..." className="input input-bordered" />
            </div>
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {ProjectsData.map((project) => (
                    <NavLink key={project.id} to={`/Projects/${project.id}`} className='card bg-base-100 shadow-xl hover:shadow-2xl w-80 border border-gray-100 hover:border-gray-200 transition duration-300 hover:scale-102'>
                        {/*card content */}
                        <figure>
                            <img className='w-full h-52 object-cover p-1.5 rounded-xl'
                                src={project.image}
                                alt={project.title} />
                        </figure>
                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <div className="flex justify-between items-center">
                                <div className="badge bg-green-100 text-green-500"><img className='w-4' src="https://img.icons8.com/?size=100&id=83159&format=png&color=40C057" alt="" />{project.downloads}</div>
                                <div className="badge bg-orange-100 text-orange-500"><span>★</span>{project.ratingAvg}</div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;