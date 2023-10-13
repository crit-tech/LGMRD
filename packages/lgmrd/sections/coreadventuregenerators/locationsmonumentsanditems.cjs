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
  id: "locationsmonumentsanditems",
  title: "Locations, Monuments, and Items",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "The location of the quest might also contain specific monuments or items tied to the adventure's goals.",
    },
    {
      type: "table",
      order: 1,
      headers: {
        d20: "d20",
        location: "Location",
        monument: "Monument",
        item: "Item",
      },
      data: [
        { d20: "1", location: "Tower", monument: "Sarcophagus", item: "Coin" },
        { d20: "2", location: "Crypts", monument: "Obelisk", item: "Figurine" },
        { d20: "3", location: "Keep", monument: "Orb", item: "Gemstone" },
        { d20: "4", location: "Cairn", monument: "Bone pile", item: "Amulet" },
        {
          d20: "5",
          location: "Giant statue",
          monument: "Skull",
          item: "Earring",
        },
        { d20: "6", location: "Caves", monument: "Megalith", item: "Bell" },
        { d20: "7", location: "Sewers", monument: "Pillars", item: "Bone" },
        { d20: "8", location: "Temple", monument: "Throne", item: "Bowl" },
        { d20: "9", location: "Mines", monument: "Statues", item: "Candle" },
        { d20: "10", location: "Mansion", monument: "Well", item: "Ring" },
        { d20: "11", location: "Academy", monument: "Orrery", item: "Circlet" },
        {
          d20: "12",
          location: "Dungeon",
          monument: "Effigy",
          item: "Bracelet",
        },
        {
          d20: "13",
          location: "Barrow",
          monument: "Arcane circle",
          item: "Dagger",
        },
        { d20: "14", location: "Vault", monument: "Spire", item: "Goblet" },
        { d20: "15", location: "Tomb", monument: "Altar", item: "Key" },
        { d20: "16", location: "Warren", monument: "Pit", item: "Lamp" },
        { d20: "17", location: "Ship", monument: "Fountain", item: "Brooch" },
        { d20: "18", location: "Sanctum", monument: "Archway", item: "Skull" },
        { d20: "19", location: "Cove", monument: "Cage", item: "Mask" },
        {
          d20: "20",
          location: "Castle",
          monument: "Brazier",
          item: "Necklace",
        },
      ],
    },
  ],
  order: 3,
};
