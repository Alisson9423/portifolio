import "styled-components";
import { YetzTheme } from "aplication-yetz";

declare module "styled-components" {
    export interface DefaultTheme extends YetzTheme {}
}
