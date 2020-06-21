/**
 * @fileoverview App generic styles or styles
 * helper functions
 * @package
 */
import * as colors from './colors';

const globalStyles = {
  defaultText: {
    color: colors.text,
    fontSize: 9
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  flex: (num) => ({ flex: num }),

  mg: (px) => ({ margin: px }),
  mgL: (px) => ({ marginLeft: px }),
  mgR: (px) => ({ marginRight: px }),
  mgT: (px) => ({ marginTop: px }),
  mgB: (px) => ({ marginBottom: px }),
  mgV: (px) => ({ marginVertical: px }),
  mgH: (px) => ({ marginHorizontal: px }),

  pad: (px) => ({ padding: px }),
  padL: (px) => ({ paddingLeft: px }),
  padR: (px) => ({ paddingRight: px }),
  padT: (px) => ({ paddingTop: px }),
  padB: (px) => ({ paddingBottom: px }),
  padV: (px) => ({ paddingVertical: px }),
  padH: (px) => ({ paddingHorizontal: px }),
  w: (px) => ({ width: px }),
  h: (px) => ({ height: px }),
  lH: (px) => ({ lineHeight: px }),

  h1: { fontSize: 30 },
  h2: { fontSize: 22 },
  h3: { fontSize: 17 },
  h4: { fontSize: 15 },
  h5: { fontSize: 12 },
  h6: { fontSize: 10 },
};

export default globalStyles;
