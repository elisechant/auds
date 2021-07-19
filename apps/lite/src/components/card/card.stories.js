import cardBasic from "./card-basic.html";
import cardImages from "./card-images.html";
import cardClickable from "./card-clickable.html";
import cardLists from "./card-lists.html";
import cardFeatureHeader from "./card-feature-header.html";
import cardFeatureFooter from "./card-feature-footer.html";

export default {
	title: "AuDS/Card",
};

export const basic = () => cardBasic;
export const withImages = () => cardImages;
export const withClickable = () => cardClickable;
export const withList = () => cardLists;
export const withFeatureHeader = () => cardFeatureHeader;
export const withFeatureFooter = () => cardFeatureFooter;
