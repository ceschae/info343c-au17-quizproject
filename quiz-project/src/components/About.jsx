import React from 'react';


export default class AboutView extends React.Component {
    render() {
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
                    <div className="col">
                        <img src="../img/claire.jpg" alt="Claire's picture"></img> 
                    </div>
                    <div className="col">
                        <img src="../img/cece.jpg" alt="Cece's picture"></img> 
                    </div>
                    <div className="col">
                        <img src="../img/caitlin.jpg" alt="Caitlin's picture"></img> 
                    </div>
                </div>
            </div>
        );
    }
}

 