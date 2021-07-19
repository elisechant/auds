import defaultHtml from "./default.html";
import linksHtml from "./links.html";

export default {
	title: "AuDS/Tags",
};

export const withoutLinks = () => defaultHtml;
export const withLinks = () => linksHtml;
