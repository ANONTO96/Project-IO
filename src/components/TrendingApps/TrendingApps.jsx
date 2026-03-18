import React from 'react';
import { NavLink } from 'react-router';

const TrendingApps = ({ ProjectsData }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 py-10'>
            <h1 className='text-3xl lg:text-4xl font-semibold'>Trending Apps</h1>
            <p className='text-gray-500 text-center'>Explore All Trending Apps On The Market Developed By Our Community</p>
            {/* cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {ProjectsData.slice(0, 12).map((project) => (
                    <div key={project.id} className='card bg-base-100 shadow-xl hover:shadow-2xl w-80'>
                        {/*card content */}
                        <figure>
                            <img className='w-full h-52 object-cover'
                                src={project.image}
                                alt={project.title} />
                        </figure>
                        {/* card body */}
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.title}
                                <div className="badge badge-dash">Trending</div>
                            </h2>
                            <div className="flex justify-between items-center">
                                <div className="badge bg-green-100 text-green-500"><img className='w-4' src="https://img.icons8.com/?size=100&id=83159&format=png&color=40C057" alt="" />{project.downloads}</div>
                                <div className="badge bg-orange-100 text-orange-500"><span>★</span>{project.ratingAvg}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NavLink to="/Projects" className="btn bg-purple-500 text-white mt-5">Show all</NavLink>
        </div>
    );
};

export default TrendingApps;