import "./OverviewSection.css";


const OverviewSection = ({ overview, context }) => {
    return (
        <section className="detail-section">
            <h2>Project Overview</h2>
            <div className="section-content">
                <p className="overview-text">{overview}</p>
                {context && (
                    <div className="context-box">
                        <h4>Context</h4>
                        <p>{context}</p>
                    </div>
                )}
            </div>
        </section>
    );
};


export default OverviewSection;
