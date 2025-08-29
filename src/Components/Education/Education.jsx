// Stylesheets
import "./Education.css";


const Education = ({ ref }) => {
    return (
        <>
            <h2 ref={ ref }>Education</h2>
            <div className="education">
                <div className="school">
                    <div>
                        <h3>Information Technology</h3>
                        <p>Penn State DuBois</p>
                    </div>
                    <div className="info">
                        <p>Aug 2021 - June 2022</p>
                    </div>
                </div>
                <div className="school">
                    <div>
                        <h3>B.S. Software Engineering</h3>
                        <p>Indiana University of Pennsylvania</p>
                    </div>
                    <div className="info">
                        <p>Aug 2022 - December 2025</p>
                        <p>GPA: 3.3</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Education;