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

export default {
  id: "charactercapabilitiesvary",
  title: "Character Capabilities Vary",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "No chart, table, or equation works perfectly to judge encounter balance at any given level, because no such system can take into account the wide range of options that can affect combat. Any individual character's effective power in a fight can go well beyond what's expected for their given level, especially at higher levels. And other factors that can affect a character's power might include any of the following:\n\nSo use the benchmarks for determining whether an encounter might be deadly as a starting point. Then trust that you'll be better able to gauge what your characters can handle in combat the more you see them in action during the game.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "Player experience" },
        { item: "Class synergy between different characters in the party" },
        { item: "Magic items" },
        { item: "Environmental and situational circumstances" },
        { item: "Feats and multiclassing" },
        { item: "The total number of actions on either side" },
        { item: "How well rested the characters are" },
      ],
    },
  ],
  order: 3,
};
