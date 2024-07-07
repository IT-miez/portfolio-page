
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
};

export function ProjectCard({ header, summary, technologies }: ProjectCardProps) {
    return (
        <div className='project-card'>
            <div className='project-card-left'>
                <img src={'/vite.svg'}></img>
            </div>
            <div className='project-card-right'>
                <h2 className='project-header'>{header}</h2>
                <p className='project-summary'>{summary}</p>
                <ul className='project-tech'>
                    {technologies.map((tech, index) => (
                    <li className='project-tech-item' key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
