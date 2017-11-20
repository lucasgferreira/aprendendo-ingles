export class Coracao {
    constructor(
        public cheio: boolean,
        public classCoracaoCheio: string = 'fa-heart',
        public classCoracaoVazio: string = 'fa-heart-o'
    ) {}

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.classCoracaoCheio;
        } else {
            return this.classCoracaoVazio;
        }
    }
}
