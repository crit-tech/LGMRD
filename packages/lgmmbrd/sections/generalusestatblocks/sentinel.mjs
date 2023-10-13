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
  id: "sentinel",
  title: "Sentinel (CR 11)",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "This stat block is a good fit for strong, often-otherworldly creatures such as demons, devils, impressive beings of the Outer Planes, guardian constructs, or powerful undead. The sentinel can serve as a boss for 7th-level characters, an elite foe against two 12th-level characters, or can stand one-on-one against 16th-level characters. This stat block focuses on Strength.\n\n**SENTINEL**\n\nMedium, Large, or Huge Creature\n\n**Armor Class** 17 (natural armor or magical protection)\n\n**Hit Points** 165 (22d8 + 66)\n\n**Speed** 30 ft.\n\n**Saving Throws** Str +9, Dex +7\n\n**Skills** Perception +6\n\n**Senses** passive Perception 16\n\n**Challenge** 11 (7,200 XP) **Proficiency Bonus** +4\n\n**ACTIONS**\n\n***Multiattack.*** The sentinel makes four attacks.\n\n***Attack.*** *Melee or Ranged Weapon Attack:* +9 to hit, reach 5 ft. or range 60 ft., one target. *Hit:* 18 (3d8 + 5) damage.",
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
          str: "20 (+5)",
          dex: "16 (+3)",
          con: "16 (+3)",
          int: "10 (+0)",
          wis: "14 (+2)",
          cha: "10 (+0)",
        },
      ],
    },
  ],
  order: 5,
};
