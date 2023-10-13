/*
 * This work includes material taken from the Lazy GM's 5e Monster Builder Resource 
 * Document 
 * (https://slyflourish.com/lazy_5e_monster_building_resource_document.html) 
 * written by Teos Abadía of Alphastream.org (https://alphastream.org/), Scott 
 * Fitzgerald Gray of Insaneangel.com (https://insaneangel.com/), and Michael E. 
 * Shea of SlyFlourish.com (https://slyflourish.com/), available under a Creative 
 * Commons Attribution 4.0 International License 
 * (http://creativecommons.org/licenses/by/4.0/).

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

module.exports = {
  id: "tenusefulmonsterfeatures",
  title: "Ten Useful Monster Features",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Give any custom monster impactful features and attacks that make sense for their place in the game. When a monster feature deals damage, choose a damage type appropriate to the creature's physiology, theme, or story. A creature channeling magical power might deal acid, cold, fire, lightning, force, poison, psychic, necrotic, radiant, or thunder damage. A creature making use of spines, spikes, or projectiles might deal bludgeoning, piercing, or slashing damage.\n\n***Damaging Blast.*** This creature has one or more single-target ranged attacks using the attack bonus and damage calculated above, and which deal damage of an appropriate type.\n\n***Damage Reflection.*** Whenever a creature within 5 feet of this creature hits them with a melee attack, the attacker takes damage in return of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.\n\n***Misty Step.*** As a bonus action, this creature can teleport up to 30 feet to an unoccupied space they can see.\n\n***Knockdown.*** When this creature hits a target with a melee attack, the target must succeed on a Strength saving throw or be knocked prone.\n\n***Restraining Grab.*** When this creature hits a target with a melee attack, the target is grappled (escape DC based on this creature's Strength or Dexterity modifier). While grappled, the target is restrained.\n\n***Damaging Burst.*** As an action, this creature can create a burst of energy, magic, spines, or some other effect in a 10-foot-radius sphere, either around themself or at a point within 120 feet. Each creature in that area must make a Dexterity, Constitution, or Wisdom saving throw (your choice, based on the type of burst). On a failure, a target takes damage of an appropriate type equal to half this creature's total damage per round. On a success, a target takes half as much damage.\n\n***Cunning Action***. On each of their turns, this creature can use a bonus action to take the Dash, Disengage, or Hide action.\n\n***Damaging Aura.*** Each creature who starts their turn within 10 feet of this creature takes damage of a type appropriate to the creature. The damage dealt is equal to half the damage of one of this creature's attacks. If you give a creature this feature, give them one less attack than normal.\n\n***Energy Weapons.*** The creature's weapon attacks deal extra damage of an appropriate type. You can add this damage on top of the creature's regular damage output to give them a combat boost, or you can replace some of the creature's normal weapon damage with this energy damage.\n\n***Damage Transference.*** When this creature takes damage, they can transfer half or all of that damage (your choice) to a willing creature within 30 or 60 feet of them. This feature is particularly good for boss monsters.",
    },
  ],
  order: 1,
};
