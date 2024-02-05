export const scrollToSectionWithOffset = (
  selector: string,
  offset: number = 50
): void => {
  const section = document.getElementById(selector);
  if (section) {
    const sectionTop = section.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const finalPosition = sectionTop + scrollTop - offset;

    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth',
    });
  }
};
