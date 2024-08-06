import React from "react";

export default function List(props) {
    return (

            <div className="list">
                <ul type='none'>
                    <li className="d-flex">
                        <div className="iconHolder">
                            <img src={props.image} />
                        </div>

                        <div className="content fontSize">
                            <h6 className="fw-bold">{props.head}</h6>
                            <p className="fontColor">{props.content}</p>
                        </div>
                    </li>
                </ul>
            </div>
      

    )
}