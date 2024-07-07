
import '../styling/credits.css'

type CreditsProps = {
    credits: string;
};

export function Credits({ credits }: CreditsProps) {
    return (
        <div className='credits-info'>
            <p className='credits-text'>{credits}</p>
        </div>
    );
}
