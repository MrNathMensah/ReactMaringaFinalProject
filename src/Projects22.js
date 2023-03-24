import React from 'react'
import Footers from './Footers'
import Header from './Header'
import Projects from './Projects'
import './Projects22.css'


const Projects22 = () => {
    return (
        <div>
            <Header/>
            <Projects/>
        <div>

        </div>
        <div className="container">
            <div className="left-side">
                <div className="select-button">
                    <h3>Project Type</h3>
                    <select>
                        <option>Full Stack</option>
                        <option>Back End</option>
                        <option>Front End</option>
                    </select>
                </div>
            </div>
            <div className="right-side">
                <div className="project-tracker">
                    <img src="2021class.jpeg" alt="document" />
                    <div className="project-info">
                        <h2 className='projectrack'>Project Tracker</h2>
                        <p>Cohort Name: Group A</p>
                        <p>Git hub URL: <a href="https://github.com/">https://github.com/</a></p>
                        <p>Description: A Mobile Application that allows you to Order Food from wherever you are.</p>
                        
                    </div>
                </div>
                <div className="project-tracker">
                    <img src="2022cohort.jpeg" alt="document" />
                    <div className="project-info">
                        <h2 className='projectrack'>Project Tracker</h2>
                        <p>Cohort Name: Group B</p>
                        <p>Git hub URL: <a href="#">https://github.com/</a></p>
                        <p>Description: A Web Application for a E Commerce</p>
                        
                    </div>
                </div>
                <div className="project-tracker">
                    <img src="2014class.jpeg" alt="document" />
                    <div className="project-info">
                        <h2 className='projectrack'>Project Tracker</h2>
                        <p>Cohort Name: Group C</p>
                        <p>Git hub URL: <a href="#">https://github.com/</a></p>
                        <p>Description: A Web and Mobile Application for a Tranport Company that allows you to book transport from the comfort of your home</p>
                        
                    </div>
                </div>
                <div className="project-tracker">
                    <img src="2018class.jpeg" alt="document" />
                    <div className="project-info">
                        <h2 className='projectrack'>Project Tracker</h2>
                        <p>Cohort Name: Group D</p>
                        <p>Git hub URL: <a href="#">https://github.com/</a></p>
                        <p>Description: A Web and Mobile online Streaming Application that will help and promote local Movies</p>
                        
                    </div>
                </div>
                <div className="project-tracker">
                    <img src="2017class.jpeg" alt="document" />
                    <div className="project-info">
                        <h2 className='projectrack'>Project Tracker</h2>
                        <p>Cohort Name: Group E</p>
                        <p>Git hub URL: <a href="#">https://github.com/</a></p>
                        <p>Description: Shipment Application that keeps tracks of all Shipments</p>
                       
                    </div>
               </div>
            </div>
        </div>
        <div>
            <Footers/>
        </div>
        </div>

  )
}

export default Projects22
