const pastelColors = [
    '#FFB3BA', // Light Pink
    '#FFDFBA', // Light Orange
    '#FFFFBA', // Light Yellow
    '#BAFFC9', // Light Green
    '#BAE1FF', // Light Blue
    '#D4BAFF', // Light Purple
    '#FFB3E6', // Light Magenta
    '#FFBABA', // Light Red
    '#BAFFD4', // Light Teal
    '#BAFFFA'  // Light Cyan
];

const gradients: [string, string, string][] = [
    // ! Light Gradients
    // ['#ff9a9e', '#fad0c4', '#fad0c4'], // Pink Gradient
    // ['#a18cd1', '#fbc2eb', '#fbc2eb'], // Purple Gradient
    // ['#fad0c4', '#ffd1ff', '#ffd1ff'], // Light Pink Gradient
    // ['#ffecd2', '#fcb69f', '#fcb69f'], // Orange Gradient
    // ['#a1c4fd', '#c2e9fb', '#c2e9fb'], // Blue Gradient
    // ['#d4fc79', '#96e6a1', '#96e6a1'], // Green Gradient
    // ['#84fab0', '#8fd3f4', '#8fd3f4'], // Teal Gradient
    // ['#a6c0fe', '#f68084', '#f68084'], // Purple-Red Gradient
    // ['#fccb90', '#d57eeb', '#d57eeb'], // Orange-Purple Gradient
    // ['#e0c3fc', '#8ec5fc', '#8ec5fc']  // Purple-Blue Gradient,
    // ! Bright Gradients
    // ['#ff5f6d', '#ffc371', '#ff5f6d'], // Bright Red to Orange
    // ['#36d1dc', '#5b86e5', '#36d1dc'], // Bright Teal to Blue
    // ['#ff9a9e', '#fad0c4', '#ff9a9e'], // Bright Pink to Light Pink
    // ['#a1c4fd', '#c2e9fb', '#a1c4fd'], // Bright Blue to Light Blue
    // ['#fbc2eb', '#a6c1ee', '#fbc2eb'], // Bright Pink to Purple
    // ['#84fab0', '#8fd3f4', '#84fab0'], // Bright Green to Teal
    // ['#fccb90', '#d57eeb', '#fccb90'], // Bright Orange to Purple
    // ['#e0c3fc', '#8ec5fc', '#e0c3fc'], // Bright Purple to Blue
    // ['#f093fb', '#f5576c', '#f093fb'], // Bright Pink to Red
    // ['#4facfe', '#00f2fe', '#4facfe']  // Bright Blue to Cyan
    // ! Dark Gradients
    ['#232526', '#414345', '#232526'], // Dark Grey to Black
    ['#0f2027', '#203a43', '#2c5364'], // Dark Blue to Teal
    ['#3a1c71', '#d76d77', '#ffaf7b'], // Dark Purple to Pink
    ['#141e30', '#243b55', '#141e30'], // Dark Blue to Navy
    ['#000428', '#004e92', '#000428'], // Dark Blue to Light Blue
    ['#373b44', '#4286f4', '#373b44'], // Dark Grey to Blue
    ['#1e3c72', '#2a5298', '#1e3c72'], // Dark Blue to Indigo
    ['#16222a', '#3a6073', '#16222a'], // Dark Teal to Blue
    ['#2c3e50', '#4ca1af', '#2c3e50'], // Dark Blue to Cyan
    ['#0f0c29', '#302b63', '#24243e']  // Dark Purple to Blue
];

function hashStringToIndex(str: string, arrayLength: number): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % arrayLength;
}

export function borderColorFromName(name: string): string {
    const index = hashStringToIndex(name, pastelColors.length);
    return pastelColors[index];
}

export function bgGradientFromName(name: string): [string, string, string] {
    const index = hashStringToIndex(name, gradients.length);
    return gradients[index];
}