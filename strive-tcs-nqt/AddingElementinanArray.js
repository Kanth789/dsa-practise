const AddingElementinanArray = () => {
    let arr = [1, 2, 3, 4, 5];

    const insertBeginning = (value) => {
        arr.unshift(value);
        return arr;
    };

    const insertEnd = (value) => {
        arr.push(value);
        return arr;
    };

    const insertAtPosition = (value, endPosition) => {
        arr.splice(endPosition, 0, value);
        return arr;
    };

    return {
        insertBeginning,
        insertEnd,
        insertAtPosition
    };
};

const adder = AddingElementinanArray();
console.log(adder.insertBeginning(0));
console.log(adder.insertEnd(6)); 
console.log(adder.insertAtPosition(99, 3)); 
