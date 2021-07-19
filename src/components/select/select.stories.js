import defaultHtml from "./default.html";
import blockHtml from "./block.html";
import validAndInvalidHtml from "./valid-invalid-states.html";
import disabledHtml from "./disabled.html";

export default {
	title: "AuDS/Select",
};

export const basic = () => defaultHtml;
export const block = () => blockHtml;
export const validAndInvalidStates = () => validAndInvalidHtml;
export const disabled = () => disabledHtml;
