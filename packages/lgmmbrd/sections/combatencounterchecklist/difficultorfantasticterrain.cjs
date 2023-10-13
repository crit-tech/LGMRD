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
  id: "difficultorfantasticterrain",
  title: "Difficult or Fantastic Terrain",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Different areas of a location might have some sort of terrain feature that can impact the fight. Difficult terrain is the easiest option, making it challenging but not impossible to take certain routes across the battlefield. But other areas of interesting terrain can also shake up a physical encounter. Icy floors where the characters might slip don't work well as a zone-wide effect. But they can be great in specific areas, forcing the characters to avoid those areas as they move.\n\nAny of the following terrain features can make a big battle location more interesting:",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item: "A crumbling bridge over a deep crevasse" },
        {
          item: "Spikes of sharp glass that cut creatures when they fall or are forced to move through them",
        },
        { item: "Jets of flame that randomly erupt" },
        { item: "Swampy land that belches forth poisonous gas when crossed" },
        {
          item: "Oiled surfaces that cause creatures to slide across them uncontrollably.",
        },
        {
          item: "Electrified floors that deal damage to creatures at the start of each turn",
        },
        {
          item: "An area filled with antigravity magic that causes creatures to fall to the ceiling",
        },
        {
          item: "An ethereal rift where creatures become invisible and insubstantial",
        },
        {
          item: "Pockets of shadow where characters have their life energy drained away",
        },
        {
          item: "An area of antilife magic where living creatures gain vulnerability to necrotic damage",
        },
      ],
    },
  ],
  order: 8,
};
