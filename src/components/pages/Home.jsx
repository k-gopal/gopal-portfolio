import React from 'react';
import '../styles/home.css';
import javascript from '../../static/javascript.png';
import aws from '../../static/aws.png';
import mysql from '../../static/mysql.png';
import reactjs from '../../static/reactjs.png';
import nodejs from '../../static/nodejs.png';
import mongodb from '../../static/mongodb.png';

const Home = () => {
    let images = {
        javascript: javascript,
        nodejs: nodejs,
        reactjs: reactjs,
        mongodb: mongodb,
        mysql: mysql,
        aws: aws,
    };

    return (
        <>
            <div className='div_backdrop backdrop'>
                <div className='container backdrop_text'>
                    <h3 className='text-white font-monospace fw-bolder'>
                        ACCOMPLISHING DREAMS.
                    </h3>
                    <h1 className='text-black backdrop_occupation'>
                        FULL STACK SOFTWARE ENGINEER
                    </h1>
                    <div className='wrapper'>
                        <div className='typing-demo text-white'>
                            Technolgies: JavaScript, NodeJs, ReactJs, ExpressJs,
                            MySQL, MongoDB, AWS
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn btn_white fw-bolder me-5'>
                            RESUME
                        </button>
                        <button
                            type='button'
                            className='btn btn_black fw-bolder'
                            data-bs-toggle='modal'
                            data-bs-target='#summaryModal'
                        >
                            SUMMARY
                        </button>
                    </div>
                </div>
            </div>
            <div className='container'>
                {Object.keys(images).map((image) => {
                    return (
                        <img
                            src={images[image]}
                            alt={image}
                            className='technologies'
                        />
                    );
                })}
            </div>
            <div className='modal fade' id='summaryModal' tabindex="-1" aria-labelledby="exSummaryModal" aria-hidden="true">
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 class="modal-title" id="exSummaryModal">Summary</h3>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div class='modal-body'>
                            <p className='fs-4'>
                                It entered to the market in 2004, but it was
                                2011 when I first logged into it. Yes, It was
                                Facebook.
                            </p>
                            <p className='fs-4'>
                                {' '}
                                I still remember my brain running in maze, by
                                just looking at its functionality. That was the
                                day I decided about the path to conquer.
                            </p>
                            <p className='fs-4'>
                                I wanted to build those mazes. Those days, when
                                internet cafes were boom, 10 Rs/hr were worth to
                                chat with a online friend, but for me chats were
                                last option and exploring this giant app was
                                first. And then I started reading about it,
                                which took me to the world of programming.
                            </p>
                            <p className='fs-4'>
                                {' '}
                                I made computer science my strength, continued
                                to pursue education in same stream.
                            </p>
                            <p className='fs-4'>
                                Journey continued through MIT WPU Pune as a
                                Bachelor's in Computer Applications.
                            </p>
                            <p className='fs-4'>
                                For me everything in programming world is like a
                                new automatic car toy for a baby, with the same
                                excitement I scratched through concepts like
                                algorithms, data structures, vectors, matrices
                                and applied mathematics.
                            </p>
                            <p className='fs-4'>
                                Currently in IT industry, the excitement remains
                                same. Started as a Frontend Developer in React
                                and continuing as a Backend Engineer(NodeJs,
                                AWS, MySQL, mongoDB, ExpressJs)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
