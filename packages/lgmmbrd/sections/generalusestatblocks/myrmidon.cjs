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
  id: "myrmidon",
  title: "Myrmidon (CR 7)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Powerful elite bodyguards, high priests, wizards, warlocks, sorcerers, demons, and devils can all be represented by this stat block. A myrmidon can serve as a boss monster for 5th-level characters, an elite combatant against two characters of 7th level, or a one-on-one combatant against 14th-level characters, or in large groups against 20th-level characters. This stat block focuses on Intelligence.\n\n**MYRMIDON**\n\nMedium or Large creature\n\n**Armor Class** 15 (chain shirt or natural armor)\n\n**Hit Points** 130 (20d8 + 40)\n\n**Speed** 30 ft.\n\n**Saving Throws** Dex +5, Wis +5\n\n**Skills** Perception +5\n\n**Senses** passive Perception 15\n\n**Challenge** 7 (2,900 XP) **Proficiency Bonus** +3\n\n**ACTIONS**\n\n***Multiattack.*** The myrmidon makes three attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 17 (3d8 + 4) damage.",
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
          dex: "14 (+2)",
          con: "14 (+2)",
          int: "18 (+4)",
          wis: "14 (+2)",
          cha: "10 (+0)",
        },
      ],
    },
  ],
  order: 4,
};
