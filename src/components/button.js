import { useContext } from "react";
import { CalcContext } from "../context/calcContext";

const getStyle = (button) => {
  const keys = {
    "=": "equals",
    "%": "opt",
    "*": "opt",
    "/": "opt",
    "+": "opt",
    "-": "opt",
    "+/-": "opt",
    AC: "del"
  };
  return keys[button];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };

  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;

    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue
    });
  };

  const singlClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
  };

  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "*": (a, b) => a * b,
          "/": (a, b) => a / b
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0
      });
    }
  };

  const persenClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: ""
    });
  };

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      AC: resetClick,
      "*": singlClick,
      "/": singlClick,
      "-": singlClick,
      "+": singlClick,
      "=": equalsClick,
      "%": persenClick,
      "+/-": invertClick
    };

    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button onClick={handleBtnClick} className={`${getStyle(value)} btn`}>
      {value}
    </button>
  );
};

export default Button;
