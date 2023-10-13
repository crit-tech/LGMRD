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
  id: "default",
  title: "",
  content: [
    {
      type: "table",
      order: 0,
      data: [
        {
          item: "They show which creatures might inhabit a particular adventure location.",
        },
        {
          item: "They highlight foes appropriate for a given level range in that location.",
        },
        {
          item: "They show which foes might naturally pair up with other foes.",
        },
        {
          item: "They offer example relationships between creatures and suggest what they might be doing in a location.",
        },
      ],
    },
    {
      type: "paragraph",
      order: 0,
      markdown:
        'Though you can use the setups in the tables directly, you\'ll get even more value from them by customizing your own list of foes for these common locations and scenarios—or by adding environments and scenarios that fit the specifics of your campaign.\n\nEach line in the "Example Encounters" column contains an example encounter with multiple monsters. You can decide how many monsters are appropriate given the scenario, the number of characters, and their level.\n\nMonsters who are in **bold** represent potential bosses for an encounter.',
    },
  ],
  order: 0,
};
