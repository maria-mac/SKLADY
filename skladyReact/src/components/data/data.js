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
    name: ["mineral oil", "parafina", "paraffinum", "paraffinum liquidum"],
    des:
      "parafina, natłuszcza ale działa komedogennie. Pochodna ropy naftowej.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["petrolatum"],
    des: "wazelina.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["dimethicone"],
    des: "silkon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["adimethicone"],
    des: "silikon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["cyclopentasiloxane"],
    des: "slikon.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["glycery Cocoate", "peg-7"],
    des: "PEG-7",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["sodium myreth sulfate", "sms"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["ammonium lauryl sulfate", "ams"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["magnesium laureth sulfate", "mls"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["disodium lauryl sulfosuccinate", "dls"],
    des: "anionowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },

  {
    name: ["coco glucoside", "coco-glucoside"],
    des: "glukozyd kokodowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["lauryl glucoside", "lauryl-glucoside"],
    des: "glukozyd laurylowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["decyl glucoside", "decyl-glucoside"],
    des: "glukozyd decylowy, niejonowy środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["cocamidopropyl betaine"],
    des: "betaina kokamidopropylowa, środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },

  {
    name: ["sodium cocoamphoacetate"],
    des: "środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["sodium cocoyl isethionate"],
    des: "środek powierzchniowo czynny.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["sarcosinate"],
    des: "środek myjący dodawany do kremów.",
    sstyle: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["sodium cocoyl glutamate"],
    des: "środek myjący dodawany do kremów.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["Benzyl Alcohol", "Alkohol Benzylowy"],
    des: "alkohol benzylowy, konserwant.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Isopropyl Alcohol", "Isopropanol"],
    des: "izopropanol, wykazuje działanie wysuszające oraz alergizujące skórę.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["Aqua", "Woda"],
    des: "woda.",
    style: { backgroundColor: "rgba(67, 155, 93, 0.9)" },
  },
  {
    name: ["Triethanolamine", "TEA"],
    des: "...",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["mandelic acid"],
    des: "kwas, substancja drażniąca.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["gluconolactone"],
    des: "glukonolakton, substancja drażniąca.",
    style: { backgroundColor: "rgba(221, 130, 77, 0.9)" },
  },
  {
    name: ["peg"],
    des: "substancja drażniąca.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["ppg"],
    des: "substancja drażniąca.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["propylene glycol"],
    des: "glikol propylenowy, substancja drażniąca, promotor przenikania.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["butylene glycol", "glikol butylenowy"],
    des: "glikol butylenowy, może działać drażniąco.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["disodium edta"],
    des:
      "Disodium EDTA, substancja drażniąca, promotor przenikania, narusza warstwę hydro-lipidową naskóka.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["diazolidinyl urea", "imidiazolidinyl urea"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["methylisothiazolinone", "methylchloroisothaizolinnone"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["dmdm hydrantoin"],
    des: "donor formaldehydu.",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
  {
    name: ["quaternium"],
    des: "donor formaldehydu",
    style: { backgroundColor: "rgba(224, 70, 70, 0.9)" },
  },
];

export default zleSkladniki;
