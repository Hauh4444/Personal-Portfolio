import "./FeaturesSection.css";


const FeaturesSection = ({ features }) => {
    return (
        <section className="detail-section">
            <h2>Key Features</h2>
            <div className="section-content">
                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li key={index} className="feature-item">
                            <div className="feature-content">
                                <div className="feature-header">
                                    <div className="feature-icon">✓</div>
                                    <h4>{feature.title}</h4>
                                </div>
                                <p>{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};


export default FeaturesSection;
