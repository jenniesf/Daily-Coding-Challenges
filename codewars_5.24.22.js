        // MAX DIFF
function maxDiff(list) {
        list.sort( (a,b) => a-b)
        return list.length == 0? 0: list[list.length-1] - list[0]
}