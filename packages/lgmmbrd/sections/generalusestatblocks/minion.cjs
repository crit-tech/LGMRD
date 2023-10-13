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
  id: "minion",
  title: "Minion (CR 1/8)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The low-CR minions represented by this stat block might include ravenous rats, weak skeletons, shifty bandits, or low-ranking cultists. A minion can serve as a one-on-one combatant against 1st-level characters, or can be deployed in large groups at 4th level or above. This stat block focuses on Dexterity as its primary ability.\n\n**MINION**\n\nSmall or Medium Creature\n\n**Armor Class** 11\n\n**Hit Points** 9 (2d8)\n\n**Speed** 30 ft.\n\n**Senses** passive Perception 11\n\n**Challenge** 1/8 (25 XP) **Proficiency Bonus** +2\n\n**ACTIONS**\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 4 (1d6 + 1) damage.",
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
          con: "10 (+0)",
          int: "10 (+0)",
          wis: "12 (+1)",
          cha: "10 (+0)",
        },
      ],
    },
  ],
  order: 0,
};
