import "./TechnicalHighlightsSection.css";


const TechnicalHighlightsSection = ({ highlights }) => {
    if (!highlights) return null;

    return (
        <section className="detail-section">
            <h2>Technical Highlights</h2>
            <div className="section-content">
                <div className="highlights-grid">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="highlight-card">
                            <h4>{highlight.title}</h4>
                            <p>{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TechnicalHighlightsSection;
