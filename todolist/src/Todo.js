import React, { Component } from 'react'

export default class Todo extends Component {

    state = {
        element:''
    }

    render() {
        return (
            <div className="card my-3">
                <div className="card-header">To-Do List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="element">Chose à faire</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="element"
                                            onChange={this.onChange}
                                            value={this.state.element}
                                        />
                                </div>
                            <button className="btn btn-primary btn-block"> Ajouter une chose à faire!</button>         

                        </form>
                </div>
            </div>
        )
    }
}
