
import '../styling/projectcard.css'

/*
Important test code
<Box position={[-1.2, 0, 0]} />
<Box position={[1.2, 0, 0]} />
*/

type ProjectCardProps = {
    header: string;
    summary: string;
    technologies: string[];
    imgURL?: string;
    repository: string;
    liveSite?: string;
};

export function ProjectCard({ header, summary, technologies, imgURL="/project_images/weather-app-gif.gif", repository, liveSite="0" }: ProjectCardProps) {
    return (
        <div className='project-card'>
            <div className='project-card-left'>
                <img className='project-card-image' src={imgURL}></img>
            </div>
            <div className='project-card-right'>
                <h2 className='project-header'>{header}</h2>
                <p className='project-summary'>{summary}</p>
                <ul className='project-tech'>
                    {technologies.map((tech, index) => (
                    <li className='project-tech-item' key={index}>{tech}</li>
                    ))}
                </ul>
                <div className='project-links'>
                    <a href={repository}><p className='site-link'>Repository</p></a>
                    {liveSite!="0" && <div><a href={liveSite}><p className='site-link'>Live</p></a></div>}
                </div>
            </div>
        </div>
    );
}
