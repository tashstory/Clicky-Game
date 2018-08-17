import React from "react";
import "./index.css"


const Wrapper = props => (
    <div className="container">
        <div className="row">
            {props.data.map(x => (
                <div className="col" key={x.id}>
                    <div >
                        <div>
                            <img src={x.image} onClick={() => {props.onClick(x.id)}}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default Wrapper;
