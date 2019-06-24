/**
 * A simple "language" with only comments
 * @param hljs {Object}
 * @returns {Object}: Language plugin
 */
export default function(hljs) {
  return {
    aliases: ['hash'],
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
}
