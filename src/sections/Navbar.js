import { Link } from 'react-scroll';
import aboutme from '../json-data/aboutme.json';

function Navbar() {
    return (
        <nav className="flex flex-row justify-between text-textColor">
            <div className="ml-8 mr-8 mb-8 mt-3 flex flex-col justify-center">
                <h2 className="font-sans text-3xl font-bold"> {aboutme.name} </h2>
            </div>
            <div className='ml-8 mr-8 mb-8 mt-3 text-md font-semibold hidden lg:block'>
                <Link><a className="font-sans m-6 cursor-pointer">About Me</a></Link>
                <Link to="experience" smooth="true"><a className="font-sans m-6 cursor-pointer">Experience</a></Link>
                <Link to="leadership" smooth="true"><a className="font-sans m-6 cursor-pointer">Leadership</a></Link>
                <Link to="projects" smooth="true"><a className="font-sans m-6 cursor-pointer">Projects</a></Link>
                <Link to="contact" smooth="true"><a className="font-sans m-6 cursor-pointer">Contact</a></Link>
                <a href={aboutme.resumeLocation} download={aboutme.ResumeName} target="_blank" rel="noreferrer"><button className="font-sans m-6 text-white bg-textColor rounded-lg w-40 h-8">  Download Resume </button> </a>
            </div>
        </nav>
    )
}

export default Navbar;