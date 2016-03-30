let Util = {
  /**
   *
   *
   */
  extractTags: function(content) {
    let tags = [];
    let regExp = /#\w+/gi;
    let tag;
    let tagText = "";

    do {
      tag = regExp.exec(content);
      if (tag) {
        tagText = tag[0].replace('#', '');
        tags.push(tagText);
      }
    } while (tag);


    return tags;
  }
}


module.exports = Util;
