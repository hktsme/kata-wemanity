export const ApplicationConfig = new class {

    /**
     * @description Define the port where the server will listen
     * @readonly
     * @type {number}
     * @memberof ApplicationConfig
     */
    public get Port(): number {
        return 3000;
    }

    /**
     * @description Retrieve URL of the listening API
     * @readonly
     * @type {string}
     */
    public get URL(): string {
        return `//localhost:${this.Port}/`;
    }
};