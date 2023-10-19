const categories = [
  'Dairy',
  'Dairy & Eggs',
  'Beverages',
  'Condiments',
  'Dips',
  'Salads',
  'Spreads',
  'Sweeteners',
  'Sauces',
  'Jams',
  'Canned Goods',
  'Grains',
  'Vegetables',
  'Pasta',
  'Nuts',
  'Cereals',
  'Seeds',
  'Baking Ingredients',
  'Grains and Legumes',
  'Dried Fruits',
  'Pickles',
  'Spices',
  'Soups',
  'Snacks',
  'Household Items',
  'Cleaning Supplies',
  'Baking Supplies',
  'Fruits',
  'Oils',
  'Hygiene Products',
  'Frozen Food',
  'Bakery',
  'Desserts',
  'Pet Supplies',
  'Herbs',
];

const items_hebrew = [
  'גבינה לבנה',
  'קוטג',
  'חלב',
  'ביצים',
  'שמנת להקצפה',
  'שמנת לבישול',
  'גבינה צהובה',
  'משקאות חלבון',
  'מעדני יופלה',
  'מעדני חלבון',
  'חמאה',
  'מיונז',
  'חרדל',
  'קטשופ',
  'לאבנה',
  'גבינת פטה',
  'גבינת שמנת',
  'גבינה בולגרית',
  'גבינת ריקוטה',
  'חומוס',
  'טחינה',
  'סלטים',
  'גבינת פרמזן',
  'גבינת מוצרלה',
  'גבינת שמנת חמוצה',
  'ממרח פסטו',
  'ממרח עגבניות מיובשות',
  'ממרח נוטלה',
  'ממרח השחר',
  'דבש',
  'מייפל',
  'רוטב טריאקי',
  'רוטב סויה',
  'רוטב ויניגרט',
  'סירופ ורדים',
  'ממרח חלווה',
  'ממרח ריבת חלב',
  'ריבת דובדבנים',
  'ריבת משמשים',
  'ריבת אוכמניות',
  'חמאת בוטנים',
  'טחינה גולמית',
  'טונה',
  'תירס',
  'רסק עגבניות',
  'עגבניות מרוסקות',
  'פסטה פנה',
  'פסטה פרפלה',
  'רוטב ויניגרט',
  'סירופ ורדים',
  'ממרח חלווה',
  'ממרח ריבת חלב',
  'ריבת דובדבנים',
  'ריבת משמשים',
  'ריבת אוכמניות',
  'חמאת בוטנים',
  'טחינה גולמית',
  'טונה',
  'תירס',
  'רסק עגבניות',
  'עגבניות מרוסקות',
  'פסטה פנה',
  'פסטה פרפלה',
  'ספגטי',
  'פסטה פוזילי',
  'אגוזי מלך',
  'שקדים',
  'בוטנים',
  'אגוזי קשיו',
  'גרנולה',
  'קורנפלקס',
  'חומוס',
  'שומשום',
  'פיצוחים',
  'אורז',
  'קמח לבן',
  'קמח תופח',
  'סודה לשתייה',
  'אבקת אפייה',
  'תמצית וניל',
  'סוכר וניל',
  'סוכר לבן',
  'סוכר דמררה',
  'סוכר חום בהיר',
  'סוכר חום כהה',
  'עדשים אדומות',
  'תמרים',
  'שזיפים מיובשים',
  'נס קפה',
  'קפה נמס',
  'תה',
  'מלפפונים חמוצים',
  'זיתים',
  'פפריקה',
  'מרק עוף',
  'אטריות אורז',
  'אטריות ביצים',
  'צימוקים',
  'אורגנו',
  'תבלין לעוף',
  'תבלין לעל האש',
  'תבלין לשווארמה',
  'קינמון',
  'דובשניות',
  'במבה',
  "תפוצ'יפס",
  'אפרופו',
  'דובונים',
  'ביסלי',
  'נייר סופג',
  'ניילון נצמד',
  'נייר אלומיניום',
  "שקיות לסנדוויצ'ים",
  'שקיות לזבל',
  'קפסולות למדיח',
  'קפסולות לכביסה',
  'חומר ניקוי לכלים',
  'נייר אפייה',
  'חטיפי אנרגיה',
  'לימונים',
  'עגבניות',
  'מלפפונים',
  'גמבות',
  'בצל',
  'בטטות',
  'קישואים',
  'זוקיני',
  'חצילים',
  'חטיפים',
  'תפוזים',
  'בננות',
  'תפוחים',
  'שזיפים',
  'אפרסקים',
  'אבוקדו',
  'שמן זית',
  'שמן קנולה',
  'נייר טואלט',
  'סבון לידיים',
  'סבון לכלים',
  'שמפו',
  'סבון לגוף',
  'משחת שיניים',
  'מברשת שיניים',
  'קיסמים',
  "צ'יפס קפוא",
  'שניצל טבעול',
  'אפונה קפואה',
  'גזר קפוא',
  'פיתות',
  'לחם',
  'לחמניות',
  'ביצים',
  'גלידה',
  'אוכל לחתולים',
  'זעתר',
  'יין',
  'פלפל חריף',
  'תפוחי אדמה',
  'פטרוזיליה',
  'כוסברה',
  'בצל ירוק',
  'שום',
  'אננס',
];

const categories_translations = {
  'גבינה לבנה': { category: 'Dairy', english: 'White Cheese' },
  קוטג: { category: 'Dairy', english: 'Cottage Cheese' },
  חלב: { category: 'Dairy', english: 'Milk' },
  ביצים: { category: 'Dairy', english: 'Eggs' },
  'שמנת להקצפה': { category: 'Dairy', english: 'Whipping Cream' },
  'שמנת לבישול': { category: 'Dairy', english: 'Cooking Cream' },
  'גבינה צהובה': { category: 'Dairy', english: 'Yellow Cheese' },
  'משקאות חלבון': { category: 'Beverages', english: 'Protein Drinks' },
  'מעדני יופלה': { category: 'Dairy', english: 'Yoplait Desserts' },
  'מעדני חלבון': { category: 'Dairy', english: 'Protein Desserts' },
  חמאה: { category: 'Dairy', english: 'Butter' },
  מיונז: { category: 'Condiments', english: 'Mayonnaise' },
  חרדל: { category: 'Condiments', english: 'Mustard' },
  קטשופ: { category: 'Condiments', english: 'Ketchup' },
  לאבנה: { category: 'Dairy', english: 'Labneh' },
  'גבינת פטה': { category: 'Dairy', english: 'Feta Cheese' },
  'גבינת שמנת': { category: 'Dairy', english: 'Cream Cheese' },
  'גבינה בולגרית': { category: 'Dairy', english: 'Bulgarian Cheese' },
  'גבינת ריקוטה': { category: 'Dairy', english: 'Ricotta Cheese' },
  חומוס: { category: 'Dips', english: 'Hummus' },
  טחינה: { category: 'Dips', english: 'Tahini' },
  סלטים: { category: 'Salads', english: 'Salads' },
  'גבינת פרמזן': { category: 'Dairy', english: 'Parmesan Cheese' },
  'גבינת מוצרלה': { category: 'Dairy', english: 'Mozzarella Cheese' },
  'גבינת שמנת חמוצה': { category: 'Dairy', english: 'Sour Cream' },
  'ממרח פסטו': { category: 'Spreads', english: 'Pesto Spread' },
  'ממרח עגבניות מיובשות': {
    category: 'Spreads',
    english: 'Sun-dried Tomato Spread',
  },
  'ממרח נוטלה': { category: 'Spreads', english: 'Nutella Spread' },
  'ממרח השחר': { category: 'Spreads', english: 'Hashachar Spread' },
  דבש: { category: 'Sweeteners', english: 'Honey' },
  מייפל: { category: 'Sweeteners', english: 'Maple Syrup' },
  'רוטב טריאקי': { category: 'Sauces', english: 'Teriyaki Sauce' },
  'רוטב סויה': { category: 'Sauces', english: 'Soy Sauce' },
  'רוטב ויניגרט': { category: 'Sauces', english: 'Vinaigrette' },
  'סירופ ורדים': { category: 'Sweeteners', english: 'Rose Syrup' },
  'ממרח חלווה': { category: 'Spreads', english: 'Halva Spread' },
  'ממרח ריבת חלב': { category: 'Spreads', english: 'Milk Jam' },
  'ריבת דובדבנים': { category: 'Jams', english: 'Strawberry Jam' },
  'ריבת משמשים': { category: 'Jams', english: 'Apricot Jam' },
  'ריבת אוכמניות': { category: 'Jams', english: 'Blueberry Jam' },
  'חמאת בוטנים': { category: 'Spreads', english: 'Peanut Butter' },
  'טחינה גולמית': { category: 'Dips', english: 'Raw Tahini' },
  טונה: { category: 'Canned Goods', english: 'Tuna' },
  תירס: { category: 'Grains', english: 'Corn' },
  'רסק עגבניות': { category: 'Sauces', english: 'Tomato Puree' },
  'עגבניות מרוסקות': { category: 'Vegetables', english: 'Crushed Tomatoes' },
  'פסטה פנה': { category: 'Pasta', english: 'Penne Pasta' },
  'פסטה פרפלה': { category: 'Pasta', english: 'Fusilli Pasta' },
  ספגטי: { category: 'Pasta', english: 'Spaghetti' },
  'פסטה פוזילי': { category: 'Pasta', english: 'Fusilli Pasta' },
  'אגוזי מלך': { category: 'Nuts', english: 'Walnuts' },
  שקדים: { category: 'Nuts', english: 'Almonds' },
  בוטנים: { category: 'Nuts', english: 'Peanuts' },
  'אגוזי קשיו': { category: 'Nuts', english: 'Cashews' },
  גרנולה: { category: 'Cereals', english: 'Granola' },
  קורנפלקס: { category: 'Cereals', english: 'Cornflakes' },
  חומוס: { category: 'Dips', english: 'Hummus' },
  שומשום: { category: 'Seeds', english: 'Sesame' },
  פיצוחים: { category: 'Nuts', english: 'Pistachios' },
  אורז: { category: 'Grains', english: 'Rice' },
  'קמח לבן': { category: 'Baking Ingredients', english: 'White Flour' },
  'קמח תופח': { category: 'Baking Ingredients', english: 'Self-raising Flour' },
  'סודה לשתייה': { category: 'Beverages', english: 'Soda' },
  'אבקת אפייה': { category: 'Baking Ingredients', english: 'Baking Powder' },
  'תמצית וניל': { category: 'Baking Ingredients', english: 'Vanilla Extract' },
  'סוכר וניל': { category: 'Sweeteners', english: 'Vanilla Sugar' },
  'סוכר לבן': { category: 'Sweeteners', english: 'White Sugar' },
  'סוכר דמררה': { category: 'Sweeteners', english: 'Demerara Sugar' },
  'סוכר חום בהיר': { category: 'Sweeteners', english: 'Light Brown Sugar' },
  'סוכר חום כהה': { category: 'Sweeteners', english: 'Dark Brown Sugar' },
  'עדשים אדומות': { category: 'Grains and Legumes', english: 'Red Lentils' },
  תמרים: { category: 'Dried Fruits', english: 'Dates' },
  'שזיפים מיובשים': { category: 'Dried Fruits', english: 'Dried Plums' },
  'נס קפה': { category: 'Beverages', english: 'Instant Coffee' },
  'קפה נמס': { category: 'Beverages', english: 'Soluble Coffee' },
  תה: { category: 'Beverages', english: 'Tea' },
  'מלפפונים חמוצים': { category: 'Pickles', english: 'Pickled Cucumbers' },
  זיתים: { category: 'Pickles', english: 'Olives' },
  פפריקה: { category: 'Spices', english: 'Paprika' },
  'מרק עוף': { category: 'Soups', english: 'Chicken Soup' },
  'אטריות אורז': { category: 'Pasta', english: 'Rice Noodles' },
  'אטריות ביצים': { category: 'Pasta', english: 'Egg Noodles' },
  צימוקים: { category: 'Dried Fruits', english: 'Raisins' },
  אורגנו: { category: 'Spices', english: 'Oregano' },
  'תבלין לעוף': { category: 'Spices', english: 'Chicken Seasoning' },
  'תבלין לעל האש': { category: 'Spices', english: 'Grill Seasoning' },
  'תבלין לשווארמה': { category: 'Spices', english: 'Shawarma Seasoning' },
  קינמון: { category: 'Spices', english: 'Cinnamon' },
  דובשניות: { category: 'Snacks', english: 'Dobsoniots (Cereals)' },
  במבה: { category: 'Snacks', english: 'Bamba' },
  "תפוצ'יפס": { category: 'Snacks', english: 'Tapuchips (Potato Chips)' },
  אפרופו: { category: 'Snacks', english: 'Apropo (Corn Snack)' },
  דובונים: { category: 'Snacks', english: 'Dubonim (Peanut Snack)' },
  ביסלי: { category: 'Snacks', english: 'Bissli' },
  'נייר סופג': { category: 'Household Items', english: 'Paper Towels' },
  'ניילון נצמד': { category: 'Household Items', english: 'Cling Film' },
  'נייר אלומיניום': { category: 'Household Items', english: 'Aluminum Foil' },
  "שקיות לסנדוויצ'ים": {
    category: 'Household Items',
    english: 'Sandwich Bags',
  },
  'שקיות לזבל': { category: 'Household Items', english: 'Trash Bags' },
  'קפסולות למדיח': {
    category: 'Cleaning Supplies',
    english: 'Dishwasher Capsules',
  },
  'קפסולות לכביסה': {
    category: 'Cleaning Supplies',
    english: 'Laundry Capsules',
  },
  'חומר ניקוי לכלים': {
    category: 'Cleaning Supplies',
    english: 'Dishwashing Liquid',
  },
  'נייר אפייה': { category: 'Baking Supplies', english: 'Baking Paper' },
  'חטיפי אנרגיה': { category: 'Snacks', english: 'Energy Bars' },
  לימונים: { category: 'Fruits', english: 'Lemons' },
  עגבניות: { category: 'Vegetables', english: 'Tomatoes' },
  מלפפונים: { category: 'Vegetables', english: 'Cucumbers' },
  גמבות: { category: 'Vegetables', english: 'Bell Peppers' },
  בצל: { category: 'Vegetables', english: 'Onion' },
  בטטות: { category: 'Vegetables', english: 'Sweet Potatoes' },
  קישואים: { category: 'Vegetables', english: 'Squash' },
  זוקיני: { category: 'Vegetables', english: 'Zucchini' },
  חצילים: { category: 'Vegetables', english: 'Eggplants' },
  חטיפים: { category: 'Snacks', english: 'Snacks' },
  תפוזים: { category: 'Fruits', english: 'Oranges' },
  בננות: { category: 'Fruits', english: 'Bananas' },
  תפוחים: { category: 'Fruits', english: 'Apples' },
  שזיפים: { category: 'Fruits', english: 'Plums' },
  אפרסקים: { category: 'Fruits', english: 'Peaches' },
  אבוקדו: { category: 'Fruits', english: 'Avocado' },
  'שמן זית': { category: 'Oils', english: 'Olive Oil' },
  'שמן זית': { category: 'Oils', english: 'Olive Oil' },
  'שמן קנולה': { category: 'Oils', english: 'Canola Oil' },
  'נייר טואלט': { category: 'Household Items', english: 'Toilet Paper' },
  'סבון לידיים': { category: 'Hygiene Products', english: 'Hand Soap' },
  'סבון לכלים': { category: 'Cleaning Supplies', english: 'Dish Soap' },
  שמפו: { category: 'Hygiene Products', english: 'Shampoo' },
  'סבון לגוף': { category: 'Hygiene Products', english: 'Body Soap' },
  'משחת שיניים': { category: 'Hygiene Products', english: 'Toothpaste' },
  'מברשת שיניים': { category: 'Hygiene Products', english: 'Toothbrush' },
  קיסמים: { category: 'Snacks', english: 'Pretzels' },
  "צ'יפס קפוא": { category: 'Frozen Food', english: 'Frozen Fries' },
  'שניצל טבעול': { category: 'Frozen Food', english: 'Frozen Schnitzel' },
  'אפונה קפואה': { category: 'Frozen Food', english: 'Frozen Peas' },
  'גזר קפוא': { category: 'Frozen Food', english: 'Frozen Carrots' },
  פיתות: { category: 'Bakery', english: 'Pitas' },
  לחם: { category: 'Bakery', english: 'Bread' },
  לחמניות: { category: 'Bakery', english: 'Rolls' },
  ביצים: { category: 'Dairy & Eggs', english: 'Eggs' },
  גלידה: { category: 'Desserts', english: 'Ice Cream' },
  'אוכל לחתולים': { category: 'Pet Supplies', english: 'Cat Food' },
  זעתר: { category: 'Spices', english: "Za'atar" },
  יין: { category: 'Beverages', english: 'Wine' },
  'פלפל חריף': { category: 'Vegetables', english: 'Hot Pepper' },
  'תפוחי אדמה': { category: 'Vegetables', english: 'Potatoes' },
  פטרוזיליה: { category: 'Herbs', english: 'Parsley' },
  כוסברה: { category: 'Herbs', english: 'Cilantro' },
  'בצל ירוק': { category: 'Vegetables', english: 'Green Onion' },
  שום: { category: 'Vegetables', english: 'Garlic' },
  אננס: { category: 'Fruits', english: 'Pineapple' },
};

function convertToMongoFormat(translations) {
    return Object.entries(translations).map(([name, details]) => ({
      name,
      category: details.category
    }));
  }
  
  const mongoFormattedData = convertToMongoFormat(categories_translations)
  export const jsonOutput = JSON.stringify(mongoFormattedData, null, 2);