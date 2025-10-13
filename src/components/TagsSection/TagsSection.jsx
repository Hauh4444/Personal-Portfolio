import { Chip } from "@mui/material";
import "./TagsSection.css";


const TagsSection = ({ tags }) => {
    if (!tags) return null;

    return (
        <section className="detail-section">
            <h2>Tags</h2>
            <div className="section-content">
                <div className="tags-container">
                    {tags.map((tag, index) => (
                        <Chip key={index} label={tag} className="tag-chip" />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TagsSection;
