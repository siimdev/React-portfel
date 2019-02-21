import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Siim Saar</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia autem possimus. Maiores quis hic magnam a sequi enim repellendus in quod molestiae similique quo eligendi, aperiam labore dolor cupiditate.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 5566-6489</p>
                        <h5>Email</h5>
                        <p>someone@web.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse aperiam nemo repellat facere sapiente, repudiandae optio nesciunt illo? Nihil at omnis facilis optio nobis saepe animi ex corporis earum?"
                        />

                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="My Second University"
                            schoolDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse aperiam nemo repellat facere sapiente, repudiandae optio nesciunt illo? Nihil at omnis facilis optio nobis saepe animi ex corporis earum?"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2015}
                            endYear={2020}
                            jobName="My Workplace"
                            jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse aperiam nemo repellat facere sapiente, repudiandae optio nesciunt illo? Nihil at omnis facilis optio nobis saepe animi ex corporis earum?"
                        />

                        <Experience
                            startYear={2020}
                            endYear={2025}
                            jobName="My Second Workplace"
                            jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse aperiam nemo repellat facere sapiente, repudiandae optio nesciunt illo? Nihil at omnis facilis optio nobis saepe animi ex corporis earum?"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={40}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />

                        <Skills
                            skill="React"
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;