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
  id: "soldier",
  title: "Soldier (CR 1/2)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Representing seasoned guards, trained soldiers, powerful bandits, murderous humanoids, or armed undead, the soldier stat block works well as a boss at 1st level, an elite foe for two 2nd-level characters, or one-on-one combatants at 4th level, or in large groups at 6th level and above. Strength is this stat block's primary ability.\n\n**SOLDIER**\n\nMedium Creature\n\n**Armor Class** 12 (leather armor or natural armor)\n\n**Hit Points** 22 (4d8 + 4)\n\n**Speed** 30 ft.\n\n**Senses** passive Perception 10\n\n**Challenge** 1/2 (100 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 8 (1d12 + 2) damage.",
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
          str: "14 (+2)",
          dex: "12 (+1)",
          con: "12 (+1)",
          int: "10 (+0)",
          wis: "10 (+0)",
          cha: "10 (+0)",
        },
      ],
    },
  ],
  order: 1,
};
