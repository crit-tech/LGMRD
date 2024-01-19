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
  id: "otherconsiderations",
  title: "Other Considerations",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Many circumstances can change how challenging an actual combat encounter might be. All of the following examples set up types of encounters that often play out more easily than the lazy encounter benchmark might suggest:\n\nLikewise, the monsters might be favored over the characters in the following types of encounters:\n\nAs you make use of the benchmark, you'll soon come to recognize when the circumstances of a combat encounter might steer it toward an easier or harder fight.\n\n> ***Alternative Benchmark***\n\n> An alternative approach to the lazy encounter benchmark lets you compare monster challenge ratings and character levels with a single straightforward formula, as follows:\n\n> To assess the strength of the characters relative to the monsters they face, take the sum total of all character levels and divide by 4. Then multiply that number by the characters' tier.\n\n> At 1st tier (levels 1 to 4), the benchmark is simply the total of all character levels divided by 4. But as characters rise in level and across the tiers of play, they experience three distinct bumps in power at 5th level (the start of the second tier, multiplying the benchmark by 2), 11th level (the start of the third tier, for a ×3 multiplier), and 17th level (the start of the fourth tier, for a ×4 multiplier).\n\n> In a broad sense, characters of the second tier can be thought of as effectively twice as powerful as characters of the first tier, with characters of the third and fourth tiers increasing in power yet again. However, as with the default versions of the benchmarks, it's important to remember that increasing the multipliers for the third and fourth tier is optional, and should be done only if you find that encounters created with the ×2 multiplier aren't keeping up to the characters.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "The fight features significantly more characters than foes." },
        {
          item: "The characters' goals in an encounter can be achieved without eliminating all the foes from the fight.",
        },
        { item: "The environment favors the characters." },
        { item: "The monsters come in waves instead of all at once." },
        { item: "Foes are distracted or in disadvantageous positions." },
        {
          item: "The monsters are all surprised, or all act after the characters in initiative.",
        },
        {
          item: "The characters have spells or features well suited for taking out foes.",
        },
        {
          item: "The players engage in excellent tactical behavior and synergistic strategies.",
        },
        { item: "The characters are well rested and coming in fresh." },
        { item: "The characters have an arsenal of powerful magic items." },
        { item: "The characters have useful companions." },
      ],
    },
    {
      type: "table",
      order: 2,
      data: [
        { item: "The monsters outnumber the characters." },
        { item: "The characters are surprised by the monsters." },
        { item: "Foes have advantageous position." },
        { item: "The terrain favors the foes." },
        { item: "The monsters fight with a strong tactical synergy." },
        {
          item: "The characters are coming in well worn by previous fights and have no chance to rest.",
        },
      ],
    },
  ],
  order: 4,
};
