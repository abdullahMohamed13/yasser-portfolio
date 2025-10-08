import type { NavigateFunction, Location } from 'react-router-dom'

export const handleNavigation = (url: string, navigate: NavigateFunction, location: Location) => {
    if (location.pathname === "/") {
        const sectionId = url.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        navigate('/' + url);
        return null
    }
};