import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin,AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Full-Stack Developer and DeVops Engineer',
        social: {
            linkedin: 'https://www.linkedin.com/in/mohamed-rajwan-b9aa9923a/',
            github : 'https://github.com/MohamedRajwan',
            facebook: 'https://www.facebook.com/afmohamed.rajwan?mibextid=ZbWKwL',
            
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-gray-800 text-6xl font-hero-font'>Hi, <br/> I am <span className='text-gray-500'>Rajwan</span>
                <p className='text-2xl '>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>  
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                  
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
