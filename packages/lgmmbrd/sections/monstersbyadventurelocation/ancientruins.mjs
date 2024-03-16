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
            "<ul><li>A <strong>thug</strong> leads bandits intending to rob a caravan.</li><li>A vengeful <strong>shadow</strong> shifts in the darkness among a handful of arisen skeletons.</li></ul>",
        },
        {
          level: "2nd to 4th",
          example_encounters:
            "<ul><li>A pair of <strong>bugbear</strong> entrepreneurs use goblin actors as bait to seek adventurers as prey.</li><li>A sorrowful <strong>banshee</strong> orders specters to recreate their former beautiful life.</li><li>A <strong>gnoll pack lord</strong> bounty hunter leads gnolls and hyenas after an escaped prisoner.</li><li>A <strong>death dog</strong> protected by wolves lairs in a ruined cave.</li><li>A <strong>lamia</strong> served by jackalweres dwells in an illusory paradise.</li></ul>",
        },
        {
          level: "5th to 10th",
          example_encounters:
            "<ul><li>A wise <strong>bugbear chief</strong> leads bugbear and goblin soldiers from an obsidian throne.</li><li>A <strong>cyclops</strong> matriarch leads fanatically loyal ogres.</li><li>A solitary <strong>medusa</strong> dwells in a mausoleum, surrounded by petrified heroes and protected by death dogs.</li><li>A noble <strong>oni</strong> in a posh den is guarded by loyal spirit naga storytellers.</li></ul>",
        },
        {
          level: "11th to 16th",
          example_encounters:
            "<ul><li>An <strong>adult blue dragon</strong> is guarded by clay golems in a jeweled lair.</li></ul>",
        },
        {
          level: "17th to 20th",
          example_encounters:
            "<ul><li>An <strong>ancient blue dragon</strong> protected by stone golems and air elementals dwells in the shattered remains of a tower.</li></ul>",
        },
      ],
    },
  ],
  order: 1,
};
