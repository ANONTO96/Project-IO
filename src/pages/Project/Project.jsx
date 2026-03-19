import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Project = () => {
    const ProjectData = useLoaderData();
    const { image, title, description, downloads, ratingAvg, ratings, reviews, size, companyName } = ProjectData;

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">

            {/* 🔹 Header */}
            <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 items-start">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-60 sm:w-96 sm:h-72 rounded-xl border border-gray-200 shadow-xl object-cover"
                />

                <div className="flex flex-col space-y-2 w-full md:w-[60%]">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <p className="text-sm text-gray-500">
                        Developed by <span className="text-primary">{companyName}</span>
                    </p>

                    {/* 🔹 Stats */}
                    <div className="stats shadow-md mt-4">

                        {/* Downloads */}
                        <div className="stat flex flex-col gap-1 items-center">
                            <div className="stat-figure text-green-500">
                                <img className='w-6 h-6' src="https://img.icons8.com/?size=100&id=83159&format=png&color=40C057" alt="" />
                            </div>
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value text-lg">{downloads}</div>
                        </div>

                        {/* Rating */}
                        <div className="stat flex flex-col gap-1 items-center">
                            <div className="stat-figure text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.26a1 1 0 00.95.69h6.584c.969 0 1.371 1.24.588 1.81l-5.33 3.87a1 1 0 00-.364 1.118l2.036 6.26c.3.921-.755 1.688-1.54 1.118l-5.33-3.87a1 1 0 00-1.176 0l-5.33 3.87c-.784.57-1.838-.197-1.539-1.118l2.035-6.26a1 1 0 00-.364-1.118L2.39 11.687c-.783-.57-.38-1.81.588-1.81h6.584a1 1 0 00.95-.69l2.037-6.26z" />
                                </svg>
                            </div>
                            <div className="stat-title">Rating</div>
                            <div className="stat-value text-lg">{ratingAvg}</div>
                            <div className="stat-desc">{reviews} reviews</div>
                        </div>

                        {/* Size */}
                        <div className="stat flex flex-col gap-1 items-center">
                            <div className="stat-figure text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
                                </svg>
                            </div>
                            <div className="stat-title">Size</div>
                            <div className="stat-value text-lg">{size}</div>
                        </div>

                    </div>

                    {/* Install Button */}
                    <NavLink to="/Installation" className="btn bg-white hover:shadow-md rounded-xl hover:scale-102 transition-all duration-300 bg-linear-to-br from-purple-600 via-slate-700 to-purple-400 text-white mt-3">
                        Install Now ({size}MB)
                    </NavLink>
                </div>
            </div>

            {/* 🔹 Ratings Section */}
            <div>
                <h2 className="font-semibold mb-3">Ratings :</h2>

                <div className="space-y-3">
                    {[...ratings]
                        .sort((a, b) => b.count - a.count) // optional (by popularity)
                        .sort((a, b) => parseInt(b.name) - parseInt(a.name)) // ensure 5 → 1
                        .map((r, index) => {
                            const maxRating = Math.max(...ratings.map(r => r.count), 1);


                            return (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="w-12 text-sm badge bg-orange-50 text-orange-500">{r.name} </span>

                                    <div className="flex-1 bg-gray-200 h-3 rounded">
                                        <div
                                            className="bg-purple-600 h-3 rounded"
                                            style={{
                                                width: `${(r.count / maxRating) * 100}%`
                                                ,
                                            }}
                                        ></div>
                                    </div>

                                    <span className="text-xs w-12 text-right">
                                        {r.count}
                                    </span>
                                </div>
                            );
                        })}
                </div>
            </div>

            {/* 🔹 Description */}
            <div>
                <h2 className="font-semibold mb-2">Description :</h2>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Project;