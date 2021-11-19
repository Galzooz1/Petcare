import React, { Component } from 'react'
import "./Planepet.css"

class Planepet extends Component {

    render() {

        return (
            <div >
                <div className="header" >Choose your plan</div>
                <div className="plan">

                    <div className="basic_plan">
                        <div className="basic-plan_header">
                            <h1 className="basic-plan_title">Basic Pet Plane</h1>
                            <h2 className="basic-plan_summary">For those getting started</h2>
                        </div>
                        <div className="basic-plan_desription">
                            <ul className="basic-plan_list">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                        <div className="price-plan_actions">
                            <p className="price-plan_cost">$0</p>
                            <p className="price-text">pet month</p>
                            <a className="price-text_button">Purchase</a>
                        </div>
                    </div>


                    <div className="basic_plan-hightlighted">
                        <div className="hightlighted-header">Recommended</div>
                        <div className="basic-plan_header">
                            <h1 className="basic-plan_title">Basic Plane</h1>
                            <h2 className="basic-plan_summary">For those getting started</h2>
                        </div>


                        <div className="basic-plan_desription">
                            <ul className="basic-plan_list">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                        <div className="price-plan_actions">
                            <p className="price-plan_cost">$25</p>
                            <p className="price-text">pet month</p>
                            <a className="price-text_button">Purchase</a>
                        </div>
                    </div>
                    <div className="basic_plan">
                        <div className="basic-plan_header">
                            <h1 className="basic-plan_title">Basic Plane</h1>
                            <h2 className="basic-plan_summary">For those getting started</h2>
                        </div>
                        <div className="basic-plan_desription">
                            <ul className="basic-plan_list">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                        <div className="price-plan_actions">
                            <p className="price-plan_cost">$50</p>
                            <p className="price-text">pet month</p>
                            <a className="price-text_button">Purchase</a>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

export default Planepet