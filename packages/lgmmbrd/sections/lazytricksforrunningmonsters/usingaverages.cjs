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
  id: "usingaverages",
  title: "Using Averages",
  content: [
    {
      type: "paragraph",
      order: 0,
      markdown:
        "By default, 5e monster stat blocks calculate the average damage for any attack's dice expression, as with \"13 (2d8 + 4) bludgeoning damage\" for an ogre's Greatclub attack. Using average damage for a monster's attacks is one of the best ways to speed up combat.\n\nSometimes, though, you need to roll damage for effects that aren't in a stat block. When you do, you can use the following table to quickly look up the average value of various dice equations. Simply find the number of dice in the leftmost column, then go across to the appropriate die type. As can be seen in the table, you can add up averages to get an average value for higher numbers of dice—for example, adding the average of 2d10 and 6d10 to get the average of 8d10. You can use this approach to find the average for rolling more than twelve dice, so that if you need an average for 24d10, you can simply look at the 12d10 average and double it.\n\nYou can also compute averages for dice expressions with simple equations you can keep in your head. The average of two dice is the maximum value of one of those dice + 1, so that the average of 2d12 is 13. Then double that number for multiples of two, so that the average of 2d8 is 9, the average of 4d8 is 18, and so forth. Likewise, the average of a single die is half the size of the die, so add that number to a two-dice average to get odd numbers. For example, the average of 4d6 is 14, so the average of 5d6 is 17. (The average of one die is actually half the size of the die plus 0.5, which is why the average of two dice is the maximum value of the die +1.)",
    },
    {
      type: "table",
      order: 1,
      headers: {
        num_of_dice: "# of dice",
        d4: "d4",
        d6: "d6",
        d8: "d8",
        d10: "d10",
        d12: "d12",
      },
      data: [
        { num_of_dice: "1", d4: "2", d6: "3", d8: "4", d10: "5", d12: "6" },
        { num_of_dice: "2", d4: "5", d6: "7", d8: "9", d10: "11", d12: "13" },
        { num_of_dice: "3", d4: "7", d6: "10", d8: "13", d10: "16", d12: "19" },
        {
          num_of_dice: "4",
          d4: "10",
          d6: "14",
          d8: "18",
          d10: "22",
          d12: "26",
        },
        {
          num_of_dice: "5",
          d4: "12",
          d6: "17",
          d8: "22",
          d10: "27",
          d12: "32",
        },
        {
          num_of_dice: "6",
          d4: "15",
          d6: "21",
          d8: "27",
          d10: "33",
          d12: "39",
        },
        {
          num_of_dice: "7",
          d4: "17",
          d6: "24",
          d8: "31",
          d10: "38",
          d12: "45",
        },
        {
          num_of_dice: "8",
          d4: "20",
          d6: "28",
          d8: "36",
          d10: "44",
          d12: "52",
        },
        {
          num_of_dice: "9",
          d4: "22",
          d6: "31",
          d8: "40",
          d10: "49",
          d12: "58",
        },
        {
          num_of_dice: "10",
          d4: "25",
          d6: "35",
          d8: "45",
          d10: "55",
          d12: "65",
        },
        {
          num_of_dice: "11",
          d4: "27",
          d6: "38",
          d8: "49",
          d10: "60",
          d12: "71",
        },
        {
          num_of_dice: "12",
          d4: "30",
          d6: "42",
          d8: "54",
          d10: "66",
          d12: "78",
        },
      ],
    },
  ],
  order: 2,
};
