class Vip extends Guest {
    protected _isUltraVip: boolean
    public constructor(isUltraVip: boolean, fullName: string) {
        super(fullName)
        this._isUltraVip = isUltraVip
    }

    public isUltraVip(): void {
        this._isUltraVip ? console.log('You are UltraVip') : console.log('You are Vip')
    }
}