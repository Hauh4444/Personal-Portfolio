// External Libraries
import { useRef, useEffect } from "react";

// Stylesheets
import "./Expertise.css";


const Expertise = () => {
    const containerRef = useRef(null);
    const firstHeadRef = useRef(null);
    const lastHeadRef = useRef(null);
    const timelineRef = useRef(null);


    const updateTimeline = () => {
        if (firstHeadRef.current && lastHeadRef.current && timelineRef.current && containerRef.current) {
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const firstTop = firstHeadRef.current.getBoundingClientRect().top;
            const lastBottom = lastHeadRef.current.getBoundingClientRect().top;

            const topOffset = firstTop - containerTop + 20;
            const height = lastBottom - firstTop;

            timelineRef.current.style.top = `${ topOffset }px`;
            timelineRef.current.style.height = `${ height }px`;
        }
    }


    useEffect(() => {
        updateTimeline();

        window.addEventListener("resize", updateTimeline);
        return () => {
            window.removeEventListener("resize", updateTimeline);
        };
    }, []);


    return (
        <div className="expertise" ref={ containerRef }>
            <h2>Expertise</h2>
            <div className="timeline" ref={ timelineRef } />
            <div className="items">
                <div className="item">
                    <h3 ref={ firstHeadRef }>Software Development</h3>
                    <p>
                        Skilled in Python, Java, and JavaScript, with experience in both functional and object-oriented programming.
                    </p>
                </div>
                <div className="item">
                    <h3>Frontend Development</h3>
                    <p>
                        Build responsive interfaces using React, Vue, HTML, CSS, and SASS. Experienced in connecting UIs with APIs and frontend tools.
                    </p>
                </div>
                <div className="item">
                    <h3>Backend Development</h3>
                    <p>
                        Develop APIs and backend systems with Flask, Django, Rust, and Node.js. Work with relational databases and external services.
                    </p>
                </div>
                <div className="item">
                    <h3 ref={ lastHeadRef }>Database Management</h3>
                    <p>
                        Experience with Supabase, MongoDB, PostgreSQL, and MySQL, including schema design, queries, and application integration.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Expertise;