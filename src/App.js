import "./styles.css";
import "./theme.css";
import { useState } from "react";
import { GiMoon } from "react-icons/gi";
import Wrapper from "./components/wrapper";
import Screen from "./components/screen";
import ButtonBox from "./components/buttonBox";
import Button from "./components/button";
import CalcProvider from "./context/calcContext";
import { useTheme } from "./components/theme";
import { BsFillSunFill } from "react-icons/bs";

export default function App() {
  const calc = [
    ["AC", "%", "+/-", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ];

  const { theme, setTheme } = useTheme();

  const handleLight = () => {
    setTheme("light");
  };

  const handleDark = () => {
    setTheme("dark");
  };

  return (
    <CalcProvider>
      <Wrapper>
        <div className="top">
          <h1>Calculator</h1>
          <div className="icons">
            <BsFillSunFill onClick={handleLight} className="sun" />
            <GiMoon onClick={handleDark} className="moon" />
          </div>
        </div>

        <Screen />
        <ButtonBox>
          {calc.flat().map((el, i) => (
            <Button value={el} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}
