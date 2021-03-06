import { css } from 'styled-components'

const sizes = {
  tablet: 720,
  desktop: 1140,
  giant: 1480,
}

// https://github.com/JohnAlbin/styled-media-queries
const mediaQuery = (...query) => (...rules) =>
  css`@media ${css(...query)} { ${css(...rules)} }`

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  handheld: mediaQuery`(max-width: ${(sizes.tablet - 1) / 16}em)`,
  tablet: mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
  tabletOnly: mediaQuery`(min-width: ${sizes.tablet /
    16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
  desktop: mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
  giant: mediaQuery`(min-width: ${sizes.giant / 16}em)`,
  minWidth: pxValue => mediaQuery`(min-width: ${pxValue / 16}em)`,
  print: mediaQuery`print`,
}
