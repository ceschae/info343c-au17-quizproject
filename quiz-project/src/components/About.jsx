import React from 'react';
import cece from '../img/cece.jpg';
import claire from '../img/claire.jpg';
import caitlin from '../img/caitlin.jpg';
import { Share } from 'react-twitter-widgets'
import { FacebookButton, FacebookCount } from "react-social";

export default class AboutView extends React.Component {
    render() {
        let style = {
            'objectFit': 'cover',
             height: '250px'
        }
        let url = "https://ceschae.github.io/info343c-au17-quizproject/quiz-project/#";
        let appId = '134114333946019';
        return (
            <div className="container pb-5"> 
                <h3 className="pb-3">About</h3>
                <h5>What is Boozefeed?</h5>
                <p>
                We provide quizzes that generate a result based on the user's answers.
                Users can also use our "Create" tool to build their own Buzzfeed-esque quiz. 
                To view the quizzes you have taken or created, please navigate to the "Profile" page. 
                </p>
                <h5>The Authors</h5>
                <div className="row">
                    <div className="col text-center">
                        <img style={style} src={claire} alt="Claire's picture" className="rounded"></img> 
                        <div className="caption">
                            <p>Hyoju Claire Kim</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src={cece} style={style} alt="Cece's picture" className="rounded"></img> 
                        <div className="caption">
                            <p>Cecilia Vu</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src={caitlin} style={style}  alt="Caitlin's picture" className="rounded"></img> 
                        <div className="caption">
                            <p>Caitlin Schaefer</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                <br></br>
                <h6>Want to share this website to your friends? Click below to share!</h6>
                <FacebookButton url={url} appId={appId} className="btn btn-primary btn-sm mb-2">
                <i className="fa fa-facebook-square"></i> Share
                </FacebookButton>
                <Share url={url}></Share>
                </div>
            </div>
        );
    }
}

 