// import './button.scss';
import buttonDefault from "./button-default.html";
import buttonSecondary from "./button-secondary.html";
import buttonTertiary from "./button-tertiary.html";
import buttonDisabled from "./button-disabled.html";
import buttonBlock from "./button-block.html";
import buttonAsLinks from "./button-as-links.html";

export default {
	title: "AuDS/Button",
};

export const withDefault = () => buttonDefault;
export const withSecondary = () => buttonSecondary;
export const withTertiary = () => buttonTertiary;
export const withDisabled = () => buttonDisabled;
export const withBlock = () => buttonBlock;
export const withAsLinks = () => buttonAsLinks;
