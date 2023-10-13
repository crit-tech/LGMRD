/*
 * This work includes material taken from The Lazy GM's Resource Document by 
 * Michael E. Shea of SlyFlourish.com (https://www.slyflourish.com) and vailable at 
 * https://slyflourish.com/lazy_gm_resource_document.html. The Lazy GM's Resource 
 * Document is licensed under the Creative Commons Attribution 4.0 International 
 * License available at https://creativecommons.org/licenses/by/4.0/legalcode.

 * This work includes material taken from the System Reference Document 5.1 ("SRD 
 * 5.1") by Wizards of the Coast LLC and available at 
 * https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is 
 * licensed under the Creative Commons Attribution 4.0 International License 
 * available at https://creativecommons.org/licenses/by/4.0/legalcode.
 */

module.exports = {
  id: "zonerules",
  title: "Zone Rules",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The following guidelines establish the broad strokes of zone-based combat:",
    },
    {
      type: "table",
      order: 1,
      data: [
        {
          item: "Combat areas are made up of one or more zones, each of which is roughly 25 feet on a side but which can be any size.",
        },
        {
          item: 'The GM defines zones using evocative descriptions, such as "a crumbling bridge over a bottomless gorge," "a blood-covered altar," or "a holy statue of light."',
        },
        {
          item: "The GM can write down or define these zones and their descriptions on paper, note cards, or erasable battle maps so the players can visualize the situation. Miniatures or tokens can mark out the positions of characters and monsters in zones.",
        },
        {
          item: "Players are encouraged to make use of features in a zone, whether by taking cover, climbing to an advantageous position, activating magical locations, and so forth.",
        },
        {
          item: "Most combat encounters occur in a single zone. Big battles might use two or more zones.",
        },
        {
          item: "On each of their turns, a character can move within a zone or can move from one zone to another. Characters with extra movement can move up to two zones away.",
        },
        {
          item: "Assume that all creatures in combat move cautiously, avoiding opportunity attacks when possible. The GM informs the players if a character risks an opportunity attack from their intended activity in the fight.",
        },
        {
          item: "Attacks with a range of 25 feet or greater can target creatures within a zone or one zone away.",
        },
        {
          item: "Attacks with a range of 50 feet or greater can also target creatures two or more zones away.",
        },
        {
          item: "If a character attacks with or is attacked by a melee attack with a 5-foot reach, that character will provoke opportunity attacks if they attempt to move away from their opponent. A character attacked by a melee attack with a 5-foot reach also has disadvantage on ranged attacks.",
        },
        {
          item: 'Players can make best use of zone-based combat by describing their intent — for example, "I want to attack the orc chief with my glaive but stay out of his reach," or "I want to get between our wizard and the ogre."',
        },
        {
          item: "The GM then works with the players to help them achieve their intent.",
        },
      ],
    },
  ],
  order: 0,
};
