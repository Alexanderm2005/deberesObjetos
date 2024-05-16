export class DnDCharacter {
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    public hitpoints: number;

    constructor() {
        
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();


        const constitutionModifier = DnDCharacter.getModifierFor(this.constitution);
        this.hitpoints = 10 + constitutionModifier;
    }


    public static generateAbilityScore(): number {

        const rolls = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ];


        rolls.sort((a, b) => a - b);


        rolls.shift();
        const abilityScore = rolls.reduce((sum, roll) => sum + roll, 0);

        return abilityScore;
    }


    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}