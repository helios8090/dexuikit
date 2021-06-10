import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button)<ButtonProps>`
  padding: 0;
  width: ${({ size }) => (size === "sm" ? "32px" : "48px")};
  position: absolute !important;
  right:10px;
`;

export default IconButton;
