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
  id: "goldperlevel",
  title: "Gold Per Level",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "Use the following gold parcels to quickly reward adventuring groups based on the characters' average level. Reward four such parcels each level, or add parcels together to create larger rewards.\n\nThis earned wealth can take the form of coins, gemstones, jewelry, and art objects as desired. You can also adjust the numbers slightly to keep hoards from looking too uniform. For example, you might turn two 1,300 gp parcels into 1,145 gp and 1,422 gp.",
    },
    {
      type: "table",
      order: 1,
      headers: { level: "Level", gold_per_parcel: "Gold per Parcel" },
      data: [
        { level: "1st - 4th", gold_per_parcel: "100 gp (3d6 × 10 gp)" },
        { level: "5th - 10th", gold_per_parcel: "1,300 gp (3d8 × 100 gp)" },
        { level: "11th - 16th", gold_per_parcel: "7,000 gp (2d6 × 1,000 gp)" },
        {
          level: "17th - 20th",
          gold_per_parcel: "70,000 gp (2d6 × 10,000 gp)",
        },
      ],
    },
  ],
  order: 0,
};
