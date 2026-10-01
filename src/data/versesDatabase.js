export const versesDatabase = {
  "SB-2.5.38": {
    reference:"Śrīmad-Bhāgavatam 2.5.38",
    sanskrit:"भूर्लोकः कल्पितः पद्भ्यां भुवर्लोकोऽस्य नाभितः । हृदा स्वर्लोक उरसा महर्लोको महात्मनः ॥",
    transliteration:"bhūrlokaḥ kalpitaḥ padbhyāṁ bhuvarloko ’sya nābhitaḥ hṛdā svarloka urasā maharloko mahātmanaḥ",
    summary:"The verse describes Bhūrloka, Bhuvarloka, Svarloka and Maharloka through an analogy with the cosmic form. The application visualizes the hierarchy; its coordinates are not astronomical measurements.",
    url:"https://vedabase.io/en/library/sb/2/5/38/"
  },
  "SB-2.5.40-41": {
    reference:"Śrīmad-Bhāgavatam 2.5.40–41",
    sanskrit:"",
    transliteration:"",
    summary:"These verses enumerate the seven lower planetary systems: Atala, Vitala, Sutala, Talātala, Mahātala, Rasātala and Pātāla. The application uses that sequence for its lower-loka navigation.",
    url:"https://vedabase.io/en/library/sb/2/5/40/"
  },
  "SB-3.15.21": {
    reference:"Śrīmad-Bhāgavatam 3.15.21",
    sanskrit:"",
    transliteration:"",
    summary:"This verse is part of the Bhāgavata's description of the Vaikuṇṭha planets and their extraordinary beauty. The application uses the reference as textual context, not as a claim that its 3D geometry is literal.",
    url:"https://vedabase.io/en/library/sb/3/15/21/"
  },
  "SB-10.28.14": {
    reference:"Śrīmad-Bhāgavatam 10.28.14",
    sanskrit:"इति सञ्चिन्त्य भगवान् महाकारुणिको हरिः । दर्शयामास लोकं स्वं गोपानां तमसः परम् ॥",
    transliteration:"iti sañcintya bhagavān mahā-kāruṇiko hariḥ darśayām āsa lokaṁ svaṁ gopānāṁ tamasaḥ param",
    summary:"The verse says that Hari showed the cowherd men His own abode, beyond material darkness. The application uses this as support for separating transcendental realms from the material stack.",
    url:"https://vedabase.io/en/library/sb/10/28/14/"
  },
  "BS-5.43": {
    reference:"Brahma-saṁhitā 5.43",
    sanskrit:"गोलोक नाम्नी निज धाम्नि तले च तस्य देवी महेश हरि धामसु तेषु तेषु । ते ते प्रभाव निचया विहिताश्च येन गोविन्दम् आदि पुरुषं तमहं भजामि ॥",
    transliteration:"goloka-nāmni nija-dhāmni tale ca tasya devi maheśa-hari-dhāmasu teṣu teṣu te te prabhāva-nicayā vihitāś ca yena govindam ādi-puruṣaṁ tam ahaṁ bhajāmi",
    summary:"The verse gives a graded theological description of Devī-dhāma, Maheśa-dhāma, Hari-dhāma and Goloka. The application therefore renders these as a separate transcendental category rather than as another material altitude.",
    url:"https://vedabase.io/en/library/bs/5/43/"
  }
};
export const getVerseForReference=(reference)=>{
  const r=reference.toLowerCase();
  if(r.includes("2.5.38")) return versesDatabase["SB-2.5.38"];
  if(r.includes("2.5.40")||r.includes("2.5.41")) return versesDatabase["SB-2.5.40-41"];
  if(r.includes("3.15.21")) return versesDatabase["SB-3.15.21"];
  if(r.includes("10.28.14")) return versesDatabase["SB-10.28.14"];
  if(r.includes("5.43")&&r.includes("brahma")) return versesDatabase["BS-5.43"];
  return null;
};
