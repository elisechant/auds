import defaultHtml from "./default.html";
import customHeaderWidthsHtml from "./custom-header-widths.html";
import stripedHtml from "./striped.html";

export default {
	title: "AuDS/Table",
};

export const basic = () => defaultHtml;
export const customHeaderWidths = () => customHeaderWidthsHtml;
export const striped = () => stripedHtml;
