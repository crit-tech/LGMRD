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
  id: "hardchallengelevelmonstercombinations",
  title: "Hard Challenge Level Monster Combinations",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The challenge ratings in the tables are geared toward creating encounters that are a hard challenge. The encounter concepts are set up along specific lines, reflecting some of the most common—and fun—combinations of foes.\n\n***One Monster.*** The leftmost column notes the challenge rating expected for a solo creature whose statistics and capabilities can build a hard challenge. Running an encounter for a single solo monster is always tricky, so make sure an intended solo creature is up to the challenge.\n\n***Two, Four, Six, Eight, or Twelve Monsters.*** The other columns under Monsters of the Same CR allow you to challenge the characters with a number of creatures of the same CR, and usually of the same type. For example, a hard challenge for four 4th-level characters could constitute six scouts (CR 1/2) or two ogres (CR 2).\n\nUsing creatures of the same type allows you to quickly and simply tell a story as the characters find themselves in an ogre market cavern, a caravan under attack, the room with mimics, and so forth. Using the same monsters also lets you focus on a single stat block for ease of play.\n\n***One Boss + X Monsters.*** Encounter concepts often suggest a group of creatures led by a more formidable leader. Each of the Boss Scenarios columns pairs up one boss and a number of subordinates of lower challenge rating. For example, a group of four 3rd-level characters could face one boss of CR 2 and two subordinates of CR 1/2-perhaps an ogre explorer and the two rust monsters they've befriended.\n\nThe rightmost column under Boss Scenarios builds encounters with eight minions, two lieutenants of a higher challenge rating, and one boss whose CR is higher again.\n\n### Using the Tables\n\nTo build encounters using the tables, follow these steps:\n\n### Scaling Encounters\n\nEach of the tables is intended to build a hard encounter. However, you can easily build encounters with other challenge levels in mind by adding or subtracting a modifier to the party's average character level:\n\nFor example, when building an encounter for four 10th-level characters, you could use the row for 8th-level characters to create a medium challenge.\n\nIn all cases, be cautious with scaling. Encounters of certain types and at certain levels will be harder or easier than the approximation would indicate. Always be prepared to adjust encounters on the fly.",
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "Select the appropriate table, based on the number of characters in the party—four, five, or six.",
        },
        {
          item: "In the leftmost column of the selected table, find the row containing the average character level for all the characters. (To find the average, add up all the characters' levels, then divide by the number of characters and round down.)",
        },
        {
          item: "Follow that row to the column containing the encounter concept you wish to use. For example, to create an encounter with one boss and three lesser monsters, you'd go to the 1 Boss + 3 Monsters column.",
        },
        {
          item: 'The entry you cross-referenced notes the challenge ratings of the creature or creatures in your encounter. If a multiplier is indicated, that\'s the number of monsters for the preceding CR. For example, wanting to challenge four 3rd-level characters with the encounter concept of one boss and three monsters yields an entry of "2 + 1/4 (×3)." This indicates that you want one CR 2 creature acting as the boss, and three CR 1/4 creatures acting as subordinates.',
        },
        {
          item: 'Choose your monsters! If you\'re building a quick encounter, the recommendations in "Monsters by Adventure Location" are a good starting point.',
        },
      ],
    },
    {
      type: "table",
      order: 2,
      data: [
        { item: "For a deadly challenge: +1 or +2" },
        { item: "For a medium challenge: −2" },
        { item: "For an easy challenge: −4" },
      ],
    },
  ],
  order: 0,
};
