import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Siim Saar</h2>
                        <img
                            src="https://www.w3schools.com/w3images/avatar2.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptates voluptatum error ut corporis exercitationem, sint iste porro pariatur adipisci fuga itaque temporibus quisquam aliquid et, repellendus nesciunt mollitia nisi.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contactList">
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-font">
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+372) 555446688
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className="contact-font">
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        skypeId
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className="contact-font">
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                        someone@example.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;