export default function cleanSet(set, startString) {
    // Filter values in the set that start with startString and remove startString
    const result = Array.from(set)
        .filter(value => typeof value === 'string' && value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');
    
    return result;
}
