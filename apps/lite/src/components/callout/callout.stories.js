import calloutDefault from "./callout-default.html";
import calloutHeadingSrOnly from "./callout-heading-sr-only.html";
import calloutCalendar from "./callout-calendar.html";

export default {
	title: "AuDS/Callout",
};

export const basic = () => calloutDefault;
export const withHeadingScreenReaderOnly = () => calloutHeadingSrOnly;
export const withCalendar = () => calloutCalendar;
