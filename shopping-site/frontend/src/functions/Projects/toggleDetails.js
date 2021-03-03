export const toggleDetails = (id, openDetails, setOpenDetails) => {
    if (openDetails.includes(id)) {
        setOpenDetails(openDetails.filter((item) => item !== id));
    } else {
        setOpenDetails([...openDetails, id]);
    }
};