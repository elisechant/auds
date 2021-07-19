import buttonDefault from "./button-default.html";
import buttonSecondary from "./button-secondary.html";
import buttonTertiary from "./button-tertiary.html";
import buttonDisabled from "./button-disabled.html";
import buttonBlock from "./button-block.html";
import buttonAsLinks from "./button-as-links.html";

export default {
	title: "AuDS/Button",
};

export const basic = () => buttonDefault;
export const secondary = () => buttonSecondary;
export const tertiary = () => buttonTertiary;
export const disabled = () => buttonDisabled;
export const block = () => buttonBlock;
export const asLinks = () => buttonAsLinks;
