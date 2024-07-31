import React from 'react';

const about = () => {
    const myCv = 'images/Kabeer Ahamed - Full-Stack Web Developer.pdf';
    const cvName = 'Kabeer Ahamed - Full-Stack Web Developer.pdf';

    return (
        <section>
            <div className='pt-16 pb-16 pl-24 pr-24 flex flex-row gap-8 '>
                <div className='transition w-2/5 '>
                    <div className='abouts2 p-16'>
                        <div className="inline-block rounded-full p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3" style={{ backgroundColor: 'rgba(255, 1, 95, 0.2)' }}>
                            <span className="material-symbols-outlined text-white bg-[#e60045] rounded-full p-1 sm:p-0.5 md:p-1 lg:p-1.5 xl:p-2 ">
                                person
                            </span>
                        </div>
                        <h2 className='pt-4 text-[#EDEADE] text-5xl font-semibold'>
                            Hi, I'm <span style={{ color: '#ff014f' }}>Kabeer</span>
                        </h2>
                        <p className='pt-4 text-[#BEBEBE]'>Passionate Full-stack developer and designer creating captivating digital experiences.</p>
                        <div className='flex flex-col gap-1 pt-6'>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    description
                                </span>
                                <span className='text-[#BEBEBE]'>Full-Stack Developer</span>
                            </div>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    mail
                                </span>
                                <span className='text-[#BEBEBE]'>kabeerahamedkm@gmail.com</span>
                            </div>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    home_pin
                                </span>
                                <span className='text-[#BEBEBE]'>Malappuram, Kerala</span>
                            </div>
                        </div>
                    </div>
                    <div className='abouts2 flex flex-col mt-6'>
                        <h2 className='text-[#BEBEBE] pb-1'>Download my Curriculum Vitae:</h2>
                        <div className='flex flex-row items-center gap-8 pt-2'>
                            <a href={myCv} download={cvName}>
                                <button className="CallButton">DOWNLOAD CV</button>
                            </a>
                            <button className="CallButton">CONTACT ME</button>
                        </div>
                    </div>
                </div>
                <div className='abouts'>
                    <img className='image-1' src="https://rainbowit.net/html/inbio/assets/images/slider/banner-02.png" alt="Kabeer Ahamed" />
                </div>
            </div>
        </section>
    );
};

export default about;
