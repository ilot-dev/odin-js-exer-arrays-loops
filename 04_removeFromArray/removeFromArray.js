const removeFromArray = function(mainArray, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        return mainArray.filter(itemOfMainArray => !itemsToRemove.includes(itemOfMainArray));
        /* Used .filter() so that items returned are only those that are not included in the
           itemsToRemove array.
        */
    }

};

// Do not edit below this line
module.exports = removeFromArray;
