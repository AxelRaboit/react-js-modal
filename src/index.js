/* TEST */
import React from "react";
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => (
    <>
        <Modal
            modalBackgroundColor={"#97ba16"}
            modalTextColor={"#fff"}
            modalMaxWidth={"600px"}
            children={
                <div>
                    <h3>Sucess!</h3>
                </div>
            }
        />
    </>
);

render(<App />, document.getElementById("root"));
