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

            timelineRef.current.style.top = `${topOffset}px`;
            timelineRef.current.style.height = `${height}px`;
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
        <>
            <h2>Expertise</h2>
            <div className="expertise" ref={containerRef}>
                <div className="timeline" ref={timelineRef} />
                <div className="item">
                    <h3 ref={firstHeadRef}>Software Development</h3>
                    <p>
                        Skilled in Python, Java, and JavaScript with experience in both functional and OOP styles.
                    </p>
                </div>
                <div className="item">
                    <h3>Frontend Development</h3>
                    <p>
                        Build responsive UIs with React, Vue, HTML, CSS, and SASS. Familiar with APIs and modern tools.
                    </p>
                </div>
                <div className="item">
                    <h3 ref={lastHeadRef}>Backend Development</h3>
                    <p>
                        Develop APIs with Flask, Django, Rust, and Node.js. Work with SQL and integrate third-party services.
                    </p>
                </div>
            </div>
        </>
    );
};


export default Expertise;