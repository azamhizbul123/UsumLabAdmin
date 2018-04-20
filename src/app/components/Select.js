import React from "react";

export const Select = (props) => {

        return(

            <div className="form-group">
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <label htmlFor="example-nf-password">Unit ID Struktur Organisasi</label>

                <select id="basic" className="selectpicker show-tick form-control" data-live-search="true" value={""}>

                    <option value="">cow</option>
                    <option data-subtext="option subtext" value="">bull</option>
                    <option className="get-className" disabled value="">ox</option>
                    <optgroup label="test" data-subtext="optgroup subtext">
                        <option value="">ASD</option>
                        <option value="">Bla</option>
                        <option value="">Ble</option>
                        <option value="" >ID Unit</option>
                    </optgroup>
                </select>
            </div>

        );

}