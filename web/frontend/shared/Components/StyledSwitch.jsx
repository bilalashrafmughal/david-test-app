import Switch from "@mui/material/Switch";
import styled from "styled-components";
import tickIcon from "../../assets/icons/tick.svg";

const StyledSwitch = styled(Switch)`
  width: 76px;
  height: 57px;
  & .MuiSwitch-thumb {
    width: 27px;
    height: 27px;
    transform: translate(6px, 6px);
    border: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: none;
  }
  & .MuiSwitch-track {
    /* width: 60px;
    height: 28px; */
    border-radius: 30px;

    opacity: 0.5;
  }

  & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    opacity: 1;
  }
  & .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb {
    background-color: #fff;
    background-image: url("/assets/icons/tick.svg");
  }
`;

export default StyledSwitch;
