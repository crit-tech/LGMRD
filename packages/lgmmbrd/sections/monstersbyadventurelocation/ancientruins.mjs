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
  id: "ancientruins",
  title: "Ancient Ruins",
  content: [
    {
      type: "table",
      order: 0,
      headers: { level: "Level", example_encounters: "Example Encounters" },
      data: [
        {
          level: "1st",
          example_encounters:
            "*   A thug leads bandits intending to rob a caravan.",
        },
      ],
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "A vengeful shadow shifts in the darkness among a handful of arisen skeletons.                                                                                                                                                                                                                                                                       |\n| 2nd to 4th   | *   A pair of bugbear entrepreneurs use goblin actors as bait to seek adventurers as prey.",
        },
        {
          item: "A sorrowful banshee orders specters to recreate their former beautiful life.",
        },
        {
          item: "A gnoll pack lord bounty hunter leads gnolls and hyenas after an escaped prisoner.",
        },
        { item: "A death dog protected by wolves lairs in a ruined cave." },
        {
          item: "A lamia served by jackalweres dwells in an illusory paradise. |\n| 5th to 10th  | *   A wise bugbear chief leads bugbear and goblin soldiers from an obsidian throne.",
        },
        { item: "A cyclops matriarch leads fanatically loyal ogres." },
        {
          item: "A solitary medusa dwells in a mausoleum, surrounded by petrified heroes and protected by death dogs.",
        },
        {
          item: "A noble oni in a posh den is guarded by loyal spirit naga storytellers.                                                                      |\n| 11th to 16th | *   An adult blue dragon is guarded by clay golems in a jeweled lair.                                                                                                                                                                                                                                                                                                                                            |\n| 17th to 20th | *   An ancient blue dragon protected by stone golems and air elementals dwells in the shattered remains of a tower.                                                                                                                                                                                                                                                                                              |",
        },
      ],
    },
  ],
  order: 1,
};
