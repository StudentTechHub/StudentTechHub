function hashStringToNumber(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function numberToHexColor(num: number): string {
    const r = (num >> 16) & 0xff;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;
    return (
        '#' +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0')
    );
}

export function borderColorFromName(name: string): string {
    const hash = hashStringToNumber(name);
    return numberToHexColor(hash);
}

export function bgGradientFromName(name: string): [string, string, string] {
    const hash = hashStringToNumber(name);
    return [
        numberToHexColor(hash + 1),
        numberToHexColor(hash + 2),
        numberToHexColor(hash + 3)
    ];
}

export function generateTailwindGradientClass(color1: string, color2: string, color3: string): string {
    return `bg-gradient-to-r from-[${color1}] via-[${color2}] to-[${color3}]`;
}