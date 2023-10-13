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
  id: "quickmonsterstatistics",
  title: "Quick Monster Statistics",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        '"Building a Quick Monster" provides great guidelines for creating a foe for your game in just a few minutes. But you can come up with an even quicker set of monster statistics using the following steps.\n\nFirst, choose a challenge rating for your monster, based on their perceived power in the encounter. When needed, compare your monster to existing monsters to find a suitable challenge rating. Then use the following guidelines to craft their baseline statistics:\n\nStart your monster out with one attack, then add one additional attack at CR 2, CR 7, CR 11, and CR 15. Split the total damage noted above across all attacks.\n\nWith a solid set of combat statistics at hand, you can then use narrative descriptions to make your monster unique, interesting, and evocative.',
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Armor Class = 12 + 1/2 CR" },
        { item: "Hit points = (15 × CR) + 15" },
        { item: "Proficient saving throws and skills = 4 + 1/2 CR" },
        {
          item: "Nonproficient saving throws and abilities = −2 to +2, based on the monster's story",
        },
        { item: "Attack bonus = 4 + 1/2 CR" },
        { item: "DC for saving throws = 12 + 1/2 CR" },
        { item: "Total damage per round = (7 × CR) + 5" },
      ],
    },
  ],
  order: 0,
};
