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
  id: "specialist",
  title: "Specialist (CR 4)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "This stat block can represent spies, assassins, hunters, and trained elite forces. The specialist serves as a boss for 4th-level characters, an elite opponent versus two 5th-level characters, or a one-on-one combatant for 10th-level characters, or in large groups against 16th-level characters. Dexterity is this stat block's primary ability.\n\n**SPECIALIST**\n\nMedium Creature\n\n**Armor Class** 14\n\n**Hit Points** 84 (13d8 + 26)\n\n**Speed** 30 ft.\n\n**Saving Throws** Dex +6, Wis +4\n\n**Skills** Acrobatics +6, Perception +4, Stealth +6\n\n**Senses** passive Perception 14\n\n**Challenge** 4 (1,100 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Multiattack.*** The specialist makes two attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 14 (3d6 + 4) damage.",
    },
    {
      type: "table",
      order: 1,
      headers: {
        str: "STR",
        dex: "DEX",
        con: "CON",
        int: "INT",
        wis: "WIS",
        cha: "CHA",
      },
      data: [
        {
          str: "12 (+1)",
          dex: "18 (+4)",
          con: "14 (+2)",
          int: "10 (+0)",
          wis: "14 (+2)",
          cha: "12 (+1)",
        },
      ],
    },
  ],
  order: 3,
};
