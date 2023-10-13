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
  id: "champion",
  title: "Champion (CR 15)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Representing greater demons, devils, vampires, liches, or powerful spellcasters, the champion serves as a boss for 11th-level characters, an elite foe for two 15th-level characters, or a one-on-one challenge against 17th-level characters. This stat block focuses on Charisma.\n\n**CHAMPION**\n\nMedium, Large, or Huge Creature\n\n**Armor Class** 19 (natural armor or magical protection)\n\n**Hit Points** 212 (25d8 + 100)\n\n**Speed** 30 ft.\n\n**Saving Throws** Wis +8, Cha +11\n\n**Skills** Perception +8\n\n**Senses** passive Perception 18\n\n**Challenge** 15 (13,000 XP) **Proficiency Bonus** +5\n\n**ACTIONS**\n\n***Multiattack.*** The champion makes four attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +11 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 24 (4d8 + 6) damage.",
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
          str: "10 (+0)",
          dex: "12 (+1)",
          con: "18 (+4)",
          int: "12 (+1)",
          wis: "16 (+3)",
          cha: "22 (+6)",
        },
      ],
    },
  ],
  order: 6,
};
