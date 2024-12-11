import websiteImg1 from '../assets/Ecom.png';
import websiteImg2 from '../assets/FoodOrder.png';
import websiteImg3 from '../assets/YT.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/MohamedRajwan/EcomMernProject/tree/main/mernProjectEcommerce-master'
            },
            {
                image: websiteImg2,
                description: 'A food ordering system built with HTML, CSS, JavaScript, PHP, and MySQL for seamless ordering.',
                link: 'https://github.com/MohamedRajwan/Online-Food-Ordering-System.git'
            },
            {
                image: websiteImg3,
                description: 'Youtube clone project built with React',
                link: 'https://github.com/MohamedRajwan/Youtube-clone.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-gray-300">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl text-gray-800 border-b-4 border-bg-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p className='text-gray-800'>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}