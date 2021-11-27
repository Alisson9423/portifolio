import "styled-components";
import { Theme } from "alisson-application";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
