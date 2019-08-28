import moment from "moment";
import marked from "marked";

const formateTime = time => {
  return moment(time).format("Do MMMM YYYY hh:mm a");
};

const sortByCreatedAt = (a, b) => {
  if (a.createdAt > b.createdAt) {
    return -1;
  } else if (a.createdAt < b.createdAt) {
    return 1;
  } else {
    return 0;
  }
};

const sortByCreatedAtReverse = (a, b) => {
  if (a.createdAt > b.createdAt) {
    return 1;
  } else if (a.createdAt < b.createdAt) {
    return -1;
  } else {
    return 0;
  }
};

const tidyUpText = text => {
  return text
    .trim()
    .toLowerCase()
    .replace(/ /g, "-");
};

const compiledMarkdown = md => marked(md, { breaks: true });

export default {
  formateTime,
  sortByCreatedAt,
  tidyUpText,
  compiledMarkdown,
  sortByCreatedAtReverse
};