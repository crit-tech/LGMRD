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
  id: "zone-wideeffects",
  title: "Zone-Wide Effects",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Sometimes a combat environment has a big ongoing effect—something that impacts all the creatures in the area, no matter where they are. Such zone-wide effects can make a fight more interesting, as with any of the following examples:\n\nAvoid zone-wide effects that are just plain annoying. Having creatures fall down a lot because of icy floors sounds fun—until all the characters are lying on their backs and the players are wishing they'd never entered the fight in the first place.\n\nLikewise, certain effects hurt some classes more than others. Disadvantage on attack rolls hurts martial combatants more than spellcasters. Limiting movement hurts melee attackers, while limiting visibility hurts ranged attackers. Be aware of when a zone-wide effect affects some characters more than others, so that you can change it up if needed.",
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "Unholy energy in a crypt makes healing magic only half as effective as normal.",
        },
        {
          item: "Supernatural fire negates any creature's resistance to fire, and turns immunity to fire into resistance.",
        },
        {
          item: "Psychic wailing forces each character to succeed on a DC 10 Constitution check to successfully cast a spell.",
        },
        {
          item: "Periodic bolts of lightning strike, with each creature in combat having a 1-in-4 chance of being struck at the start of their turn.",
        },
        {
          item: "An arcane rift causes each damaging spell cast in a fight to deal an extra 2d6 force damage.",
        },
        {
          item: "An aura of bloody rage fills the area, granting each combatant advantage on attack rolls.",
        },
        {
          item: "A rift to a realm of chaos causes all spells to trigger a wild magic surge.",
        },
        {
          item: "The god of blood infuses all melee attacks with an extra die of damage.",
        },
        {
          item: "A rift in space-time lets a creature swap places with an enemy within 60 feet if that enemy fails a DC 12 Wisdom saving throw.",
        },
        {
          item: "A thick fog makes it impossible to see creatures more than 30 feet away.",
        },
      ],
    },
  ],
  order: 3,
};
