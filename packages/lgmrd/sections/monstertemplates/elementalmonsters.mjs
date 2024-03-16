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
  id: "elementalmonsters",
  title: "Elemental Monsters",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Apply this template to any monster to make an elemental version of that monster. Choose from or roll on the following table to determine the type of elemental template you want to apply:\n\nThen choose one or more of the following traits to customize your monster, making use of the damage type determined by the elemental template:\n\nThe amount of damage and the size of a templated creature's elemental aura is determined by the base creature's challenge rating. The damage noted is the same for both attacks and the creature's aura.\n\nThis elemental template increases a monster's challenge rating by 1 or 2.",
    },
    {
      type: "table",
      order: 1,
      headers: { d8: "d8", elemental_template: "Elemental Template" },
      data: [
        { d8: "1", elemental_template: "Fire" },
        { d8: "2", elemental_template: "Cold" },
        { d8: "3", elemental_template: "Lighting" },
        { d8: "4", elemental_template: "Acid" },
        { d8: "5", elemental_template: "Poison" },
        { d8: "6", elemental_template: "Necrotic" },
        { d8: "7", elemental_template: "Radiant" },
        { d8: "8", elemental_template: "Thunder" },
      ],
    },
    {
      type: "table",
      order: 2,
      data: [
        {
          item: "Elemental Resistance. The templated creature has resistance against its damage type.",
        },
        {
          item: "Elemental Damage. When the templated creature scores a hit using a weapon attack, the attack deals extra damage of its damage type.",
        },
        {
          item: "Elemental Aura. Any creature that starts their turn within an area surrounding the templated creature, or that enters that area for the first time on a turn, takes damage of the templated creature's type.",
        },
        {
          item: "Elemental Shield. Any creature that touches the templated creature or hits them with a melee attack while within 5 feet of them takes damage of the templated creature's type.",
        },
      ],
    },
    {
      type: "table",
      order: 3,
      headers: { cr: "CR", damage: "Damage", aura_size: "Aura Size" },
      data: [
        { cr: "0-1", damage: "3 (1d6)", aura_size: "5 feet" },
        { cr: "2-5", damage: "7 (2d6)", aura_size: "10 feet" },
        { cr: "6-10", damage: "10 (3d6)", aura_size: "15 feet" },
        { cr: "11-15", damage: "14 (4d6)", aura_size: "20 feet" },
        { cr: "16+", damage: "21 (6d6)", aura_size: "25 feet" },
      ],
    },
  ],
  order: 1,
};
