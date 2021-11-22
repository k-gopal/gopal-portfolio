import React from 'react';

const Experience = () => {
    return (
        <div className='shadow p-3 mb-5 bg-body rounded' id="experience">
            <h2>Experience</h2>
            <div className='accordion accordion-flush' id='experienceAccordian'>
                <div className='accordion-item'>
                    <h1 className='accordion-header' id='flush-headingOne'>
                        <button
                            className='accordion-button collapsed fw-bold fs-4'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#flush-collapseOne'
                            aria-expanded='false'
                            aria-controls='flush-collapseOne'
                        >
                            ASSOCIATE SOFTWARE ENGINEER
                        </button>
                    </h1>
                    <div
                        id='flush-collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-headingOne'
                        data-bs-parent='#experienceAccordian'
                    >
                        <div className='accordion-body'>
                            <p className='fw-bold fs-5'>
                                iProgrammer Solutions Pvt. Ltd.
                            </p>
                            <p className='fw-lighter fst-italic my-0 fs-6'>
                                Feb 2021 - Present
                            </p>
                            <p className='fw-lighter fst-italic mt-0 fs-6'>
                                Pune, Maharashtra, India
                            </p>
                            <p className='fw-normal fst-italic fs-5'>
                                Started as a Frontend Developer, currently
                                working as a Full Stack Developer (NodeJs, AWS,
                                MongoDB, MySQL, ReactJs, ExpressJS).
                            </p>
                            <ul className="fw-normal fs-5">
                                <li>
                                    - Client communication and Requirement
                                    Analysis
                                </li>
                                <li>
                                    - Suggestion for DB Architecture and Business
                                    Requirements
                                </li>
                                <li>
                                    - Planning and execution of several tasks(JIRA
                                    and BitBucket)
                                </li>
                                <li>
                                    - Scripts to fulfill a particular one time
                                    tasks
                                </li>
                                <li>
                                    - Queries in MySQL and mongoDB(Data
                                    Visualization, Charts)
                                </li>
                                <li>
                                    - python scripts and models for Recommendation
                                    System
                                </li>
                                <li>
                                    - deployment on different environments
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h1 className='accordion-header' id='flush-headingTwo'>
                        <button
                            className='accordion-button collapsed fw-bold'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#flush-collapseTwo'
                            aria-expanded='false'
                            aria-controls='flush-collapseTwo'
                        >
                            WEB DEVELOPER
                        </button>
                    </h1>
                    <div
                        id='flush-collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-headingTwo'
                        data-bs-parent='#experienceAccordian'
                    >
                        <div className='accordion-body'>
                            Placeholder content for this accordion, which is
                            intended to demonstrate the{' '}
                            <code>.accordion-flush</code> className. This is the
                            second item's accordion body. Let's imagine this
                            being filled with some actual content.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
