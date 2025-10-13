import { useRef, useEffect } from "react";
import "./Expertise.css";


const EXPERTISE_AREAS = [
    {
        title: "Software Development",
        description: "Skilled in Python, Java, and JavaScript, with experience in both functional and object-oriented programming.",
        isFirst: true,
    },
    {
        title: "Frontend Development",
        description: "Build responsive interfaces using React, Vue, HTML, CSS, and SASS. Experienced in connecting UIs with APIs and frontend tools.",
    },
    {
        title: "Backend Development",
        description: "Develop APIs and backend systems with Flask, Django, Rust, and Node.js. Work with relational databases and external services.",
    },
    {
        title: "Database Management",
        description: "Experience with Supabase, MongoDB, PostgreSQL, and MySQL, including schema design, queries, and application integration.",
        isLast: true,
    },
];


const Expertise = () => {
    const containerRef = useRef(null);
    const firstHeadRef = useRef(null);
    const lastHeadRef = useRef(null);
    const timelineRef = useRef(null);

    const updateTimeline = () => {
        if (!firstHeadRef.current || !lastHeadRef.current || !timelineRef.current || !containerRef.current) {
            return;
        }

        const containerTop = containerRef.current.getBoundingClientRect().top;
        const firstTop = firstHeadRef.current.getBoundingClientRect().top;
        const lastBottom = lastHeadRef.current.getBoundingClientRect().top;

        const topOffset = firstTop - containerTop + 15;
        const height = lastBottom - firstTop;

        timelineRef.current.style.top = `${topOffset}px`;
        timelineRef.current.style.height = `${height}px`;
    };

    useEffect(() => {
        updateTimeline();
        window.addEventListener("resize", updateTimeline);
        
        return () => window.removeEventListener("resize", updateTimeline);
    }, []);

    return (
        <div className="expertise" ref={containerRef}>
            <h2>Expertise</h2>
            <div className="timeline" ref={timelineRef} />
            <div className="items">
                {EXPERTISE_AREAS.map((area, index) => (
                    <div className="item" key={index}>
                        <h3 ref={area.isFirst ? firstHeadRef : area.isLast ? lastHeadRef : null}>
                            {area.title}
                        </h3>
                        <p>{area.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Expertise;
