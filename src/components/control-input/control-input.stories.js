import checkboxHtml from "./checkbox.html";
import radioHtml from "./radio.html";
import checkboxBlockHtml from "./checkbox-block.html";
import radioBlockHtml from "./radio-block.html";
import validAndInvalidStatesHtml from "./valid-and-invalid-states.html";
import disabledHtml from "./disabled-control-inputs.html";
import smallHtml from "./small-inputs.html";

export default {
	title: "AuDS/Control Input",
};

export const checkbox = () => checkboxHtml;
export const checkboxBlock = () => checkboxBlockHtml;
export const radio = () => radioHtml;
export const radioBlock = () => radioBlockHtml;
export const validAndInvalidStates = () => validAndInvalidStatesHtml;
export const disabledControlInputs = () => disabledHtml;
export const smallControls = () => smallHtml;
