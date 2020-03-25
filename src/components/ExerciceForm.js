import React from "react";

const ExerciceForm = ({ handleChange, handleSubmit, state }) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input
                type="text"
                name="title"
                className="form-control"
                placeholder="title"
                onChange={handleChange}
                value={state.title}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="description"
                onChange={handleChange}
                value={state.description}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                name="img"
                className="form-control"
                placeholder="img"
                onChange={handleChange}
                value={state.img}
            />
        </div>
        <div className="form-row">
            <div className="col">
                <input
                    type="text"
                    name="leftColor"
                    className="form-control"
                    placeholder="leftColor"
                    onChange={handleChange}
                    value={state.leftColor}
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    name="rightColor"
                    className="form-control"
                    placeholder="rightColor"
                    onChange={handleChange}
                    value={state.rightColor}
                />
            </div>
        </div>
        <button type="submit" className="btn btn-primary my-3">
            Submit
        </button>
    </form>
);

export default ExerciceForm;
