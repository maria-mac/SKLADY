/*
zielony: rgba(67, 155, 93, 0.9);
czerwoy: rgba(224, 70, 70, 0.9);
pomarańczowy: rgba(221, 130, 77, 0.9);
*/
let zleSkladniki = [
  {
    name: ["Sodium Lauryl Sulfate", "SLS"],
    des: "silna substancja powierzchniowoczynna.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["Sodium Laureth Sulfate", "SLES"],
    des: "substancja powierzchniowoczynna, słabsza pochodna SLS, etylowana.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["Sodium Coco-Sulfate", "SCS", "Sodium Coco Sulfate"],
    des: "naturalna ale silna substancja powierzchniowoczynna.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },

  {
    name: ["Alcohol", "Alcohol Denat", "Drf Alcohol", "Gain Alcohol"],
    des: "alkohol etylowy, wysusza.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Stearyl Alkohol"],
    des:
      "alkohol sterarylowy, emolient, czyli działa nawilżająco, może działać komedogennie.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Cetyl Alkohol"],
    des:
      "alkohol cetylowy, emolient, czyli działa nawilżająco, może działać komedogennie.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Cetearyl Alcohol"],
    des: "alkohol cetearylowy, nawilża.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Parafina","Mineral Oil", "Paraffinum", "Paraffinum Liquidum"],
    des:
      "parafina, natłuszcza ale działa komedogennie. Pochodna ropy naftowej.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Wazelina","Petrolatum"],
    des: "wazelina.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Dimethicone"],
    des: "silkon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Adimethicone"],
    des: "silikon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Cyclopentasiloxane"],
    des: "slikon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Glycery Cocoate", "PEG-7", "PEG 7", "PEG7"],
    des: "PEG-7",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Sodium Myreth Sulfate", "SMS"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Ammonium Lauryl Sulfate", "AMS"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Magnesium Laureth Sulfate", "MLS"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["Disodium Lauryl Sulfosuccinate", "DLS"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["Coco Glucoside", "Coco-Glucoside"],
    des: "glukozyd kokodowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["Lauryl Glucoside", "Lauryl-Glucoside"],
    des: "glukozyd laurylowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["Decyl Glucoside", "Decyl-Glucoside"],
    des: "glukozyd decylowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["Betaina Kokamidopropylowa", "Cocamidopropyl Betaine"],
    des: "betaina kokamidopropylowa, środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["Sodium Cocoamphoacetate"],
    des: "środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Sodium Cocoyl Isethionate"],
    des: "środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Sarcosinate"],
    des: "środek myjący dodawany do kremów.",
    sstyle: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["Sodium Cocoyl Glutamate"],
    des: "środek myjący dodawany do kremów.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["Alkohol Benzylowy", "Benzyl Alcohol"],
    des: "alkohol benzylowy, konserwant.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Alkohol Izopropylowy", "Isopropyl Alcohol", "Isopropanol"],
    des: "izopropanol, wykazuje działanie wysuszające oraz alergizujące skórę.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Woda", "Aqua"],
    des: "woda.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Triethanolamine", "TEA"],
    des: "...",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Mandelic Acid"],
    des: "kwas, substancja drażniąca.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["Glukonolakton", "Gluconolactone"],
    des: "glukonolakton, substancja drażniąca.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["PEG"],
    des: "substancja drażniąca.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["PPG"],
    des: "substancja drażniąca.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Glikol Propylenowy", "Propylene Glycol"],
    des: "glikol propylenowy, substancja drażniąca, promotor przenikania.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Glikol Butylenowy", "Butylene Glycol"],
    des: "glikol butylenowy, może działać drażniąco.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Disodium EDTA"],
    des:
      "Disodium EDTA, substancja drażniąca, promotor przenikania, narusza warstwę hydro-lipidową naskóka.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Diazolidinyl Urea", "Imidiazolidinyl Urea"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Methylisothiazolinone", "Methylchloroisothaizolinnone"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["DMDM Hydrantoin"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Quaternium"],
    des: "donor formaldehydu",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
];

export default zleSkladniki;
