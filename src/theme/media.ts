/*
  Media queries config
  Usage example:
  @media ${media.tablet} {
      <properties>
   }
*/

const breakpoints: any = {
    mobile: 361,
    tablet: 768,
    desktop: 1024,
    mediumDesktop: 1244,
    largeDesktop: 1440,
    largeDesktopAlter: 1444,
};

export default Object.keys(breakpoints).reduce((acc: any, cur) => {
    acc[cur] = `(min-width: ${breakpoints[cur]}px)`;
    return acc;
}, {});
