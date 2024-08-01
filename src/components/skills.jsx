import React, { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    // Update the handleTabChange function to return a function
    const handleTabChange = (tab) => {
        return () => setActiveTab(tab);
    };

    return (
        <section>
            <div className='container mx-auto px-4 py-12'>
                <div className='flex flex-col items-center pb-12'>
                    <span className='text-center mb-4 text-red-600'>
                        Technical Skills for Modern Web
                    </span>
                    <h2 id='skills' className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300'>
                        Proficiencies
                    </h2>
                </div>
                <div className='tab-container'>
                    <div className='flex mb-4'>
                        <button id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab1' ? ' text-red-600 rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab1')}
                        >
                            Frontend Technologies
                        </button>
                        <button  id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab2' ? ' text-red-600 rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab2')}
                        >
                           Backend Technologies
                        </button>
                        <button  id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab3' ? ' text-red-600 rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab3')}
                        >
                          Development Tools
                        </button>
                        <button  id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab4' ? ' text-red-600 rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab4')}
                        >
                          Proffessional Experience
                        </button>
                    </div>
                    <div className='card-container'>
                        {activeTab === 'tab1' && (
                            <div  id='dataBox' className='rounded-lg p-6'>
                                <h3 className='text-xl font-semibold mb-4'>Frontend Technologies</h3>
                                <p className='text-gray-700'>List your frontend skills here, such as React, Tailwind CSS, etc.</p>
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div id='dataBox' className='rounded-lg p-6'>
                                <h3 className='text-xl font-semibold mb-4'>Backend Technologies</h3>
                                <p className='text-gray-700'>List your backend skills here, such as Node.js, Express, etc.</p>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div  id='dataBox' className='rounded-lg p-6'>
                                <h3 className='text-xl font-semibold mb-4'>Development Tools</h3>
                                <p className='text-gray-700'>List your tools and other technologies here, such as Git, Docker, etc.</p>
                            </div>
                        )}
                                                {activeTab === 'tab4' && (
                            <div  id='dataBox' className='rounded-lg p-6'>
                                <h3 className='text-xl font-semibold mb-4'>Proffessional Experience</h3>
                                <p className='text-gray-700'>List your tools and other technologies here, such as Git, Docker, etc.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
