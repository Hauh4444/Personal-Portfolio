import "./ChallengesSection.css";


const ChallengesSection = ({ challenges }) => {
    if (!challenges) return null;

    return (
        <section className="detail-section">
            <h2>Challenges & Solutions</h2>
            <div className="section-content">
                {challenges.map((challenge, index) => (
                    <div key={index} className="challenge-item">
                        <h4>Challenge: {challenge.challenge}</h4>
                        <p><strong>Solution:</strong> {challenge.solution}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default ChallengesSection;
