export default function multiply(...rest) {
    if (rest.length == 0) throw new Error("arguments should not empty");
    return rest.reduce((a, b) => a * b);
} 