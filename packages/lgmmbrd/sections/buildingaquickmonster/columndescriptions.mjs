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

export default {
  id: "columndescriptions",
  title: "Column Descriptions",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The table includes the following columns, which will become more familiar to you as you build your monsters.\n\n***Monster CR.*** The challenge ratings presented in the CR column are the baseline measure to determine the relative difficulty of a monster in combat. You'll almost always reference this column first when building a quick monster.\n\n***Equivalent Character Level.*** This column describes the roughly equivalent level of a single character facing a single monster of this challenge rating in a hard encounter. This gives you a quick way to determine how difficult this monster will be when facing characters of a particular level.\n\nAs you can see from the table, matching character level to challenge rating isn't a simple mathematical process. There are a number of character levels missing from the table where certain challenge ratings represent a large jump in how tough a monster is.\n\n***AC/DC.*** This column indicates the typical Armor Class of a monster of the indicated challenge rating. It also describes the typical Difficulty Class if this monster uses a DC for any of their attacks or other features.\n\n***Hit Points.*** This column offers the baseline hit points of a monster of a given challenge rating. Feel free to add or subtract hit points within the suggested range based on the monster's in-world features or physiology, or the pacing you want to maintain during a battle.\n\n***Proficient Ability Bonus.*** This column gives the expected bonus for abilities with which the monster is proficient, adding the monster's ability score modifier and proficiency bonus together. This number can be used as an attack bonus, or as a bonus for proficient saving throws and ability checks. (Ability-based modifiers without proficiency are fixed values between −2 and +4, based on the monster's story.)\n\n***Damage per Round.*** This column contains the total expected damage that a monster can deal in a round. Higher-CR monsters typically split this total damage among a number of attacks, instead of doing one big attack that either deals a tremendous amount of damage or misses completely. If a single effect targets two or more characters, such as a fiery breath weapon, the damage for that effect should be half the indicated number.\n\n***Number of Attacks.*** This column notes the number of attacks a monster of a particular challenge rating typically makes per round. The damage per round from the previous column is divided among these multiple attacks in the following column.\n\n***Damage per Attack.*** This column shows the baseline amount of damage a monster deals per attack when using the default number of attacks in the previous column. It includes both average damage and a dice equation.\n\n***Example Monsters.*** This column offers example monsters for each challenge rating. This can help you gauge where your monster fits among a sampling of existing 5e monsters.",
    },
  ],
  order: 0,
};
