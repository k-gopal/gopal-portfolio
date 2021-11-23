import React from 'react'

const Education = () => {
    return (
        <div className='shadow p-3 mb-5 bg-body rounded' id="education">
            <h2>Education</h2>
            <div className='accordion accordion-flush' id='educationAccordian'>
                <div className='accordion-item'>
                    <h1 className='accordion-header' id='flush-edu-headingOne'>
                        <button
                            className='accordion-button collapsed fw-bold fs-4'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#flush-edu-collapseOne'
                            aria-expanded='false'
                            aria-controls='flush-edu-collapseOne'
                        >
                            MIT WPU Pune
                        </button>
                    </h1>
                    <div
                        id='flush-edu-collapseOne'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-edu-headingOne'
                        data-bs-parent='#educationAccordian'
                    >
                        <div className='accordion-body'>
                            <p className='fw-bold fs-5'>
                                Bachelor's Of Computer Applications
                            </p>
                            <p className='fw-lighter fst-italic my-0 fs-6'>
                                2017 - 2021
                            </p>
                            <p className='fw-lighter fst-italic mt-0 fs-6'>
                                Pune, Maharashtra, India
                            </p>
                            <p className='fw-normal fst-italic fs-5'>
                                CGPA: 8.41
                            </p>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h1 className='accordion-header' id='flush-edu-headingTwo'>
                        <button
                            className='accordion-button collapsed fw-bold fs-4'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#flush-edu-collapseTwo'
                            aria-expanded='false'
                            aria-controls='flush-edu-collapseTwo'
                        >
                            The Aditya Birla Public School, Awarpur
                        </button>
                    </h1>
                    <div
                        id='flush-edu-collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='flush-edu-headingTwo'
                        data-bs-parent='#educationAccordian'
                    >
                        <div className='accordion-body'>
                            <p className='fw-bold fs-5' >
                                SSC/HSC (CBSE)
                            </p>
                            <p className='fw-lighter fst-italic my-0 fs-6'>
                                2014 - 2017
                            </p>
                            <p className='fw-lighter fst-italic mt-0 fs-6'>
                                Chandrapur, Maharashtra, India
                            </p>
                            <p className='fw-normal fst-italic fs-5'>
                                SSC: 9.6 (CGPA)
                            </p>
                            <p className='fw-normal fst-italic fs-5'>
                                HSC: 65%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
