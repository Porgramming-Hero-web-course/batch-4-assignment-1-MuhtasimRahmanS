{

    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((num, index) => numbers.indexOf(num) === index);
    }
    

}