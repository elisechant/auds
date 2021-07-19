import defaultHtml from "./default.html";
import blockInputsHtml from "./block-text-inputs.html";
import textareaHtml from "./textarea.html";
import validInvalidHtml from "./valid-invalid.html";
import disabledHtml from "./disabled.html";
import widthSizesHtml from "./width-sizes.html";

export default {
	title: "AuDS/Text inputs",
};

export const basic = () => defaultHtml;
export const blockTextInputs = () => blockInputsHtml;
export const textarea = () => textareaHtml;
export const validAndInvalidInputs = () => validInvalidHtml;
export const disabled = () => disabledHtml;
export const differentWidthSizes = () => widthSizesHtml;
