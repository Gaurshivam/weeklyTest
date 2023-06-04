import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="text-center pt-4">
                <h1>Our Features</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className='Features'>
                <div className="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th?id=OIP.BjyCN8dMgoKSQInuDvDJnQHaG5&w=258&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Trusted Author</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" className="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th?id=OIP.WHlXXQohA9rkJ8HZdrvq9QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Fully responsive</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" className="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img 
                    height="200px"
                    src="https://th.bing.com/th/id/OIP.rAN-XwLZ26dtn96_3VknNwHaHF?pid=ImgDet&rs=1" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Reusable Element</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="www.google.com" className="btn btn-primary">Read More</a>
                    </div>
                </div>
        </div> 
        </div>
  )
}

export default Feature
