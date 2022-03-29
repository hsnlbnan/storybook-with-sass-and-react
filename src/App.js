import React, { useState } from "react";
import "./styles/main.scss";
import "./App.css";
import "./tokens.css";

import Checkbox from "./components/checkbox";
import Radio from "./components/Radio";
import Icon from "./components/Icon";
import { Modal, Button } from "./components/Modal";

import "../src/styles/components/popup.scss";

function App() {
  return (
    <>
      <div className="App">
        <Checkbox
          placeholder="Kullanıcı sözleşmesini okudum, onaylıyorum."
          defaultChecked={true}
        />
        <Checkbox
          placeholder="Kullanıcı sözleşmesini okudum, onaylıyorum."
          defaultChecked={true}
        />
        <Icon color="#fff" name="dashboard" />
        <Icon color="#fff" name="trash" />

        <Button className="c-button--black">Deneme</Button>
        {/* <>
          <Button onClick={() => {}}>Open modal</Button>
          <Modal
            backdropClassName=""
            contentClassName=""
            dialogClassName=""
            onCancel={function noRefCheck() {}}
            onHide={function noRefCheck() {}}
            onSave={function noRefCheck() {}}
            show
            title="Deneme"
          >
            <div
              style={{
                height: 200,
              }}
            >
              Deneme
            </div>
          </Modal>
        </> */}
      </div>
    </>
  );
}
console.log(Radio);
export default App;
