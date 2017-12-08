import React from 'react';
import cece from '../img/cece.jpg';
import claire from '../img/claire.jpg';


export default class AboutView extends React.Component {
    render() {
        let style = {
            'objectFit': 'cover',
             height: '250px'
        }
        return (
            <div className="container"> 
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
                        <img style={style} src={claire} alt="Claire's picture"></img> 
                        <div className="caption">
                            <p>Hyoju Claire Kim</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src={cece} style={style} alt="Cece's picture"></img> 
                        <div className="caption">
                            <p>Cecilia Vu</p>
                        </div>
                    </div>
                    <div className="col text-center">
                        <img src="../img/caitlin.jpg" style={style}  alt="Caitlin's picture"></img> 
                        <div className="caption">
                            <p>Caitlin Schaefer</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 