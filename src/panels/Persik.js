import React from "react";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Button,
  Div,
  FixedLayout,
} from "@vkontakte/vkui";

import persik from "../img/persik.png";
import "./Persik.css";

const Persik = ({ id, go, activePanel }) => (
  <Panel id={id}>
    <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>
      Persik
    </PanelHeader>
    <img className="Persik" src={persik} alt="Persik The Cat" />
    {activePanel && (
      <FixedLayout vertical="bottom">
        <Div className="ButtonGroup">
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to={toPanel(activePanel)}
          >
            Test 1
          </Button>
          <Div></Div>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to={toPanel(activePanel)}
          >
            Test 2
          </Button>
        </Div>
        <Div className="ButtonGroup">
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to={toPanel(activePanel)}
          >
            Test 3
          </Button>
          <Div></Div>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to={toPanel(activePanel)}
          >
            Test 4
          </Button>
        </Div>
      </FixedLayout>
    )}
  </Panel>
);

function toPanel(activePanel) {
  switch (activePanel) {
    case "question-1":
      return "question-2";
    default:
      return "question-1";
  }
}

export default Persik;
