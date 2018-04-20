import React from "react";
import { Provider } from 'react-redux';
import storeEdit from "../../Form/sotreEdit";
import showResultEdit from "../../Form/showResultEdit"
import InitializeFromStateForm from '../../Form/InitializeFromStateForm'


export class testingLoadData extends React.Component{
    render(){
        return(
            <main id="main-container">


                <Provider store={storeEdit}>
                    <div>
                        <InitializeFromStateForm onSubmit={showResultEdit}/>

                    </div>

                </Provider>

            </main>
        );
    }
}