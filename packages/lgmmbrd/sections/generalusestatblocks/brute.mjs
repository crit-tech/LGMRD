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
  id: "brute",
  title: "Brute (CR 2)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Heavy-hitting veterans, capable bodyguards, low-ranking demons or devils, dangerous monsters in the wild, and powerful humanoids can all be represented by this stat block. A brute can serve as a boss against 2nd-level characters, an elite foe against two 4th-level characters, or a one-on-one opponent at 5th level, or in large groups at 10th level. This stat block relies on Strength.\n\n**BRUTE**\n\nMedium or Large Creature\n\n**Armor Class** 13 (studded leather or natural armor)\n\n**Hit Points** 45 (7d8 + 14)\n\n**Speed** 30 ft.\n\n**Saving Throws** Con +4\n\n**Skills** Athletics +5\n\n**Senses** passive Perception 10\n\n**Challenge** 2 (450 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Multiattack.*** The brute makes two attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 9 (1d12 + 3) damage.",
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
          str: "16 (+3)",
          dex: "12 (+1)",
          con: "14 (+2)",
          int: "10 (+0)",
          wis: "10 (+0)",
          cha: "8 (−1)",
        },
      ],
    },
  ],
  order: 2,
};
