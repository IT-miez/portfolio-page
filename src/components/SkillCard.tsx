
import '../styling/skillcard.css'
type SkillCardProps = {
    name: string;
    logo: string;
};

export function SkillCard({ name, logo }: SkillCardProps) {
    return (
        <div className='skill-card'>
            <p className='skill-name'>{name}</p>
            <img className='skill-image' src={logo}></img>
        </div>
    );
}
