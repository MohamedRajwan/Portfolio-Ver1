import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, I am Rajwan a final-year Computer Science undergraduate at Uwa Wellasa Unirversity of Srilanka.I specialize in web development with a passion for creating user-friendly, beautiful websites.',
        line2: 'I have strong expertise in front-end development, including HTML, CSS, JavaScript, and React.js, along with frameworks like Bootstrap and Tailwind CSS to design responsive and interactive web interfaces. On the back-end, I work with PHP, Node.js, and Express.js, utilizing MySQL and MongoDB for efficient database operations.',
        line3: 'In addition to web development, I am well-versed in version control using Git and GitHub, ensuring smooth collaboration and code management. As I look ahead to my career, I am also exploring DevOps engineering, where I have gained skills in Azure DevOps, Git source control, and building CI/CD pipelines.',
        line4: 'I am passionate about both the development process and continuously improving my technical skill set to deliver high-quality solutions.'
        
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-gray-300'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
               
            </div>
        </div>
    </section>
}