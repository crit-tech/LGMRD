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
  id: "historicalsecrets",
  title: "Historical Secrets",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Use historical secrets to give the characters meaningful and useful information as they explore the setting of the campaign. Secrets of this kind should provide characters and players alike with bite-sized pieces of local or world history.\n\nHistorical secrets might be found as mosaics in ancient tombs, statues in old ruins, dusty tomes in ancient libraries, markings on strange weapons, or tales shared among elderly villagers.",
    },
    {
      type: "table",
      order: 1,
      data: [
        { item_num: 1, item: "What dead god has a connection to the area?" },
        { item_num: 2, item: "What armies once battled here?" },
        { item_num: 3, item: "What cruel lord was slain in this place?" },
        { item_num: 4, item: "What ancient civilization once thrived here?" },
        { item_num: 5, item: "What old empire's settlements lie buried here?" },
        { item_num: 6, item: "What alien creature or power is hidden here?" },
        { item_num: 7, item: "What rebellion took place here?" },
        { item_num: 8, item: "What primeval mysteries lay buried here?" },
        { item_num: 9, item: "What was this location's former purpose?" },
        { item_num: 10, item: "What horrific monster once ruled here?" },
      ],
    },
  ],
  order: 1,
};
