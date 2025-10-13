import { CustomIcon } from "@/components/CustomIcon/CustomIcon.jsx";
import "./TechnicalStackSection.css";


const TechnicalStackSection = ({ technicalStack }) => {
    return (
        <section className="detail-section">
            <h2>Technical Stack</h2>
            <div className="section-content">
                <div className="tech-categories">
                    {technicalStack.map((category, index) => (
                        <div key={index} className="tech-category">
                            <h4>{category.category}</h4>
                            <div className="tech-items">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="tech-item-detail">
                                        <div className="tech-item-header">
                                            <CustomIcon size={24} icon={item.icon} />
                                            <span className="tech-name">{item.name}</span>
                                        </div>
                                        <p className="tech-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TechnicalStackSection;
