export default class ColourModel {

    public name!: string;

    private backingRed!: number;
    private backingGreen!: number;
    private backingBlue!: number;
    private backingHue!: number;
    private backingSaturation!: number;
    private backingLuminosity!: number;
    private backingHex!: string;
    private lockRed: boolean = false;
    private lockGreen: boolean = false;
    private lockBlue: boolean = false;
    private lockHue: boolean = false;
    private lockSaturation: boolean = false;
    private lockLuminosity: boolean = false;
    private lockHex: boolean = false;


    public static fromColour(colour: ColourModel): ColourModel {
        const obj = new ColourModel();
        obj.name = '';
        obj.backingRed = colour.red;
        obj.backingGreen = colour.green;
        obj.backingBlue = colour.blue;
        obj.setHslFromRgb();
        obj.setHexFromRgb();
        return obj;
    }

    public static fromRgb(red: number, green: number, blue: number): ColourModel {
        const obj = new ColourModel();
        obj.name = '';
        obj.backingRed = red;
        obj.backingGreen = green;
        obj.backingBlue = blue;
        obj.setHslFromRgb();
        obj.setHexFromRgb();
        return obj;
    }

    public static fromHsl(hue: number, saturation: number, luminosity: number): ColourModel {
        const obj = new ColourModel();
        obj.name = '';
        obj.backingHue = hue;
        obj.backingSaturation = saturation;
        obj.backingLuminosity = luminosity;
        obj.setRgbFromHsl();
        obj.setHexFromRgb();
        return obj;
    }

    public static fromNamedHex(name: string, hex: string): ColourModel {
        const obj = new ColourModel();
        obj.name = name;
        obj.backingHex = hex;
        obj.setRgbFromHex();
        obj.setHslFromRgb();
        obj.setHexFromRgb();
        return obj;
    }

    public lockAll() {
        this.lockRed = true;
        this.lockGreen = true;
        this.lockBlue = true;
        this.lockHue = true;
        this.lockSaturation = true;
        this.lockLuminosity = true;
        this.lockHex = true;
    }

    public unlockAll() {
        this.lockRed = false;
        this.lockGreen = false;
        this.lockBlue = false;
        this.lockHue = false;
        this.lockSaturation = false;
        this.lockLuminosity = false;
        this.lockHex = false;
    }

    public lockAllExceptRed() {
        this.lockAll();
        this.lockRed = false;
    }

    public lockAllExceptGreen() {
        this.lockAll();
        this.lockGreen = false;
    }
    public lockAllExceptBlue() {
        this.lockAll();
        this.lockBlue = false;
    }
    public lockAllExceptHue() {
        this.lockAll();
        this.lockHue = false;
    }
    public lockAllExceptSaturation() {
        this.lockAll();
        this.lockSaturation = false;
    }

    public lockAllExceptLuminosity() {
        this.lockAll();
        this.lockLuminosity = false;
    }

    public lockAllExceptHex() {
        this.lockAll();
        this.lockHex = false;
    }

    public get hex(): string {
        return this.backingHex;
    }

    public set hex(value: string) {
        if (this.lockHex) {
            return;
        }
        this.backingHex = value;
        this.setRgbFromHex();
        this.setHslFromRgb();
        this.setHexFromRgb();
    }

    public get hue(): number {
        return Math.round(this.backingHue);
    }

    public set hue(value: number) {
        if (this.lockHue) {
            return;
        }
        this.backingHue = value;
        this.setRgbFromHsl();
        this.setHexFromRgb();
    }

    public get luminosity(): number {
        return this.backingLuminosity;
    }

    public set luminosity(value: number) {
        if (this.lockLuminosity) {
            return;
        }
        this.backingLuminosity = value;
        this.setRgbFromHsl();
        this.setHexFromRgb();
    }

    public get luminosityPercentage(): number {
        return Math.round(this.backingLuminosity * 100);
    }

    public set luminosityPercentage(value: number) {
        if (this.lockLuminosity) {
            return;
        }
        this.backingLuminosity = value / 100;
        this.setRgbFromHsl();
        this.setHexFromRgb();
    }

    public get saturation(): number {
        return this.backingSaturation;
    }

    public set saturation(value: number) {
        if (this.lockSaturation) {
            return;
        }
        this.backingSaturation = value;
        this.setRgbFromHsl();
        this.setHexFromRgb();
    }

    public get saturationPercentage(): number {
        return Math.round(this.backingSaturation * 100);
    }

    public set saturationPercentage(value: number) {
        if (this.lockSaturation) {
            return;
        }
        this.backingSaturation = value / 100;
        this.setRgbFromHsl();
        this.setHexFromRgb();
    }

    public get red(): number {
        return this.backingRed;
    }

    public set red(value: number) {
        if (this.lockRed) {
            return;
        }
        this.backingRed = value;
        this.setHslFromRgb();
        this.setHexFromRgb();
    }

    public get green(): number {
        return this.backingGreen;
    }

    public set green(value: number) {
        if (this.lockGreen) {
            return;
        }
        this.backingGreen = value;
        this.setHslFromRgb();
        this.setHexFromRgb();
    }

    public get blue(): number {
        return this.backingBlue;
    }

    public set blue(value: number) {
        if (this.lockBlue) {
            return;
        }
        this.backingBlue = value;
        this.setHslFromRgb();
        this.setHexFromRgb();
    }

    private setHexFromRgb() {
        this.backingHex = '#' +
            this.zeroPadHex(Math.abs(Math.round(this.backingRed)).toString(16)) +
            this.zeroPadHex(Math.abs(Math.round(this.backingGreen)).toString(16)) +
            this.zeroPadHex(Math.abs(Math.round(this.backingBlue)).toString(16))
                .toUpperCase();
    }

    private zeroPadHex(value: string): string {
        if (value.length < 2) {
            return `0${value}`;
        }
        return value;
    }

    private setRgbFromHex(): void {
        const localHex = this.backingHex.replace('#', '');
        this.backingRed = parseInt(localHex.substring(0, 2), 16);
        this.backingGreen = parseInt(localHex.substring(2, 4), 16);
        this.backingBlue = parseInt(localHex.substring(4, 6), 16);
    }

    private setHslFromRgb() {
        const localRed = this.backingRed / 255;
        const localGreen = this.backingGreen / 255;
        const localBlue = this.backingBlue / 255;
        const max = Math.max(localRed, localGreen, localBlue);
        const min = Math.min(localRed, localGreen, localBlue);
        const l = (max + min) / 2;
        const d = max - min;
        let h = 0;
        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case localRed:
                    // h = (localGreen - localBlue) / d % 6;
                    h = (localGreen - localBlue) / d % 6 + (localGreen < localBlue ? 6 : 0);
                    break;

                case localGreen:
                    h = (localBlue - localRed) / d + 2;
                    break;

                case localBlue:
                    h = (localRed - localGreen) / d + 4;
                    break;
            }
        }

        this.backingLuminosity = l;
        if (l > 0.5) {
            this.backingSaturation = (max + min === 2) ? 1 : d / (2 - max - min);
        } else {
            this.backingSaturation = ((max + min) === 0) ? 0 : d / (max + min);
        }
        this.backingHue = h * 60;
    }

    private setRgbFromHsl() {

        const localHue = this.backingHue / 360;
        const localSaturation = this.backingSaturation; // / 100;
        const localLuminosity = this.backingLuminosity; // / 100;

        if (localSaturation === 0) {
            this.backingRed = localLuminosity * 255;
            this.backingGreen = localLuminosity * 255;
            this.backingBlue = localLuminosity * 255;
        } else {

            const q = localLuminosity < 0.5 ?
                localLuminosity * (1 + localSaturation)
                : localLuminosity + localSaturation - localLuminosity * localSaturation;

            const p = 2 * localLuminosity - q;

            const localRed = this.hueToRgb(p, q, localHue + 1 / 3);
            const localGreen = this.hueToRgb(p, q, localHue);
            const localBlue = this.hueToRgb(p, q, localHue - 1 / 3);

            this.backingRed = Math.round(localRed * 255);
            this.backingGreen = Math.round(localGreen * 255);
            this.backingBlue = Math.round(localBlue * 255);
        }
    }

    private hueToRgb(p: number, q: number, t: number) {
        if (t < 0) { t += 1; }
        if (t > 1) { t -= 1; }
        if (t < 1 / 6) { return p + (q - p) * 6 * t; }
        if (t < 1 / 2) { return q; }
        if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
        return p;
    }
}
