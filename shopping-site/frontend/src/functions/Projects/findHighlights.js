export const findHighlights = (openDetails, idArray, titleArray, setHlArray) => {
    let _index = [];
    for (let i = 0; i < openDetails.length; i++) {
        _index.push(idArray.indexOf(openDetails[i]));
    };
    _index.sort();
    let _booHighlight = Array(idArray.length).fill(false);
    _index.forEach(item => _booHighlight[item] = true);
    setHlArray([_booHighlight, idArray, titleArray]);
};