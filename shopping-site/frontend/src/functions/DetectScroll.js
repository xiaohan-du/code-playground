export const detectScroll = (distance, setClass, fixedClass) => {
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrolled > distance) {
        setClass(fixedClass);
    }
    else {
        setClass('');
    }
}