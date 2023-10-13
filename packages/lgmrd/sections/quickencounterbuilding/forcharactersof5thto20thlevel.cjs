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
  id: "forcharactersof5thto20thlevel",
  title: "For characters of 5th to 20th Level",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        { item: "CR = 1/10 level: Four monsters per character" },
        { item: "CR = 1/4 level: Two monsters per character" },
        { item: "CR = 1/2 level: One monster per character" },
        { item: "CR = 3/4 level: One monster per two characters" },
        { item: "CR = Level + 3: One monster per four characters" },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Finally, tune encounters by adjusting the number of monsters, increasing or decreasing hit points, or making named or unique monsters more powerful.\n\n**Hit Points:** Standard monster hit points are an average of the monster\'s HD range. You can increase or decrease hit points within that range to model particularly weak or particularly strong monsters. To make a fight easier, you can also treat monsters as "instant minions," ignoring their usual hit points and letting a single attack kill them. Having a few enemies die quickly can turn the tide in favor of the characters and keep a battle from feeling stale.\n\n**Named Monsters:** Adding an extra attack or maximizing damage can make a named monster or unique foe more challenging. Named monsters can also be given legendary actions or the Legendary Resistance feature to make the fight more interesting.',
    },
  ],
  order: 2,
};
