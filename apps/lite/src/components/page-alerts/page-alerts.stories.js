import infoHtml from "./info.html";
import errorHtml from "./error.html";
import successHtml from "./success.html";
import warningHtml from "./warning.html";

export default {
	title: "AuDS/Page alerts",
};

export const info = () => infoHtml;
export const error = () => errorHtml;
export const success = () => successHtml;
export const warning = () => warningHtml;
