/**
 * This file is a workaround for the issue with VSCode IntelliSense
 * autocomplete error when using re-exported styled-components/native
 *
 * @see https://github.com/validatorjs/validator.js/issues/1262
 */

import * as native from 'styled-components/native'

export const { default: styled } = native
