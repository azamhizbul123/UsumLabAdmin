import React from 'react';

const name = ['Name A', 'Name B',];
const RenderDropAgentNameSocialMedia = ({ input, meta: { touched, error } }) => (
    <div>
        <div className="form-group">
            <select className="js-select2 form-control select2-hidden-accessible" {...input}>

                <option value="">Agent Name</option>
                {name.map(val => <option value={val} key={val}>{val}</option>)}

            </select>
            {touched && error && <span>{error}</span>}
        </div>

    </div>
);


export default RenderDropAgentNameSocialMedia;
