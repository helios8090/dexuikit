import React from "react";
import { color } from "styled-system";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";

const WalletButton: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled} size={"sm"} 
    style={{position:"relative",overflow:"hidden",justifyContent:"space-between", borderRadius:"20px", height:"64px", color:"#101035", 
    fontWeight:700, backgroundColor:"#F5F5F5"}}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

WalletButton.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};

export default WalletButton;
