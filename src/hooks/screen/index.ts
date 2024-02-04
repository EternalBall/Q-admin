import { reactive } from "vue";
import { useBreakpoints } from "@vueuse/core";

export const breakpointsEnum = {
    xl: 1600,
    lg: 1199,
    md: 991,
    sm: 767,
    xs: 575,
};

export const useScreen = () => {
    const breakpoints = reactive(useBreakpoints(breakpointsEnum));
    // Mobile
    const isMobile = breakpoints.smaller("sm");
    // Pad
    const isPad = breakpoints.between("sm", "md");
    // Pc
    const isDesktop = breakpoints.greater("md");
    return {
        isMobile,
        isPad,
        isDesktop,
    };
};
