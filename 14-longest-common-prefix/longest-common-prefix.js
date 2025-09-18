/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    // Start with the first string as prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Keep trimming the prefix until the current word starts with it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (!prefix) return "";
        }
    }
    return prefix;
};
