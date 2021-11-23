import React from 'react';

const Projects = () => {
    let projectData = [
        {
            title: 'Expense-Tracker',
            time: 'Nov 2021 - Dec 2021',
            desc: 'It keeps track of your earnings and expenditure on daily/weekly/yearly basis.',
            technology: [
                'NodeJs',
                'ReactJs',
                'MongoDB',
                'AWS(lambda)',
                'Material UI',
            ],
        },
        {
            title: 'Covide-19 Tracker',
            time: 'Jan 2021 - Feb 2021',
            desc: 'It displays the records of total cases, deaths and recovered from Covid-19.',
            technology: ['ReactJs', 'Bootstrap', 'CSS3', 'Disease.sh APIs'],
        },
        {
            title: 'Auth Functionality',
            time: 'Jan 2021 - Jan 2021',
            desc: 'It is a basic functionality to implement Auth using JWT token.',
            technology: ['NodeJs', 'MongoDB'],
        },
    ];
    return (
        <div id='projects' className='shadow p-3 mb-5 bg-body rounded'>
            <h2>Projects</h2>
            <div className='row'>
                {projectData.map((project) => {
                    return (
                        <>
                            <div className='col-lg-4'>
                                <div className='card shadow p-3 mb-5 bg-body rounded'>
                                    <img
                                        src='https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                        alt='code'
                                        className='card-img-top'
                                        height="200"
                                    />
                                    <div class='card-body'>
                                        <h3 class='card-title'>
                                            {project.title}
                                        </h3>
                                        <p class='card-text fs-4'>{project.desc}</p>
                                        <p class='card-text'>
                                            <small class='text-muted'>
                                                {project.time}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
