const colors = [
  "Moselle",
  "Accessible Beige",
  "Acier",
  "Adaptive Shade",
  "Aesthetic White",
  "Aged White",
  "Agreeable Gray",
  "Alabaster",
  "Aleutian",
  "Amazing Grey",
  "Analytical Gray",
  "Anchors Aweigh",
  "Anew Gray",
  "Angora",
  "Anonymous",
  "Antler Velvet",
  "Arcade White",
  "Arresting Auburn",
  "Artisan Tan",
  "Attitude Gray",
  "Auric",
  "Backdrop",
  "Baguette",
  "Balanced Beige",
  "Banana Cream",
  "Barro Verde",
  "Basil",
  "Bateau Brown",
  "Bauhaus Buff",
  "Beige",
  "Believable Buff",
  "Bitter Chocolate",
  "Bittersweet Stem",
  "Black Bean",
  "Black Bordeaux",
  "Black Fox",
  "Black Magic",
  "Black Of Night",
  "Blackberry",
  "Blue Peacock",
  "Blustery Sky",
  "Bold Brick",
  "Bora Bora Shore",
  "Bosporus",
  "Brandywine",
  "Brick Paver",
  "Buff",
  "Bunglehouse Blue",
  "Cadet",
  "Cajun Red",
  "Camelback",
  "Canvas Tan",
  "Cardboard",
  "Carnelian",
  "Carriage Door",
  "Casa Blanca",
  "Cast Iron",
  "Cavern Clay",
  "Caviar",
  "Celery",
  "Center Stage",
  "Champagne",
  "Charcoal Blue",
  "Charwood (Semi-Trans Stain)",
  "Chatura Gray",
  "Cheerful",
  "China Doll",
  "Chopsticks",
  "Chrysanthemum",
  "City Loft",
  "Cityscape",
  "Classic Light Buff",
  "Classical Gold",
  "Classical White",
  "Classical Yellow",
  "Cocoa Whip",
  "Cocoon",
  "Colonial Revival Green Stone",
  "Colonial Revival Stone",
  "Colonnade Gray",
  "Comical Coral",
  "Commodore",
  "Concord Buff",
  "Connected Gray",
  "Contented",
  "Convivial Yellow",
  "Cool Beige",
  "Coral Clay",
  "Cosmos",
  "Crabby Apple",
  "Creamery",
  "Creamy",
  "Crisp Linen",
  "Crushed Ice",
  "Cyberspace",
  "Dark Night",
  "Decorous Amber",
  "Dhurrie Beige",
  "Dirty Martini",
  "Diverse Beige",
  "Divine White",
  "Dockside Blue",
  "Dormer Brown",
  "Dover White",
  "Dovetail",
  "Downing Earth",
  "Downing Sand",
  "Downing Straw",
  "Downy",
  "Dress Blues",
  "Dried Thyme",
  "Dry Dock",
  "Dustblu",
  "Earl Gray",
  "Eclipse",
  "Edamame",
  "Eggwhite",
  "Eider White",
  "Elephant Ear",
  "Emerging Taupe",
  "Employ",
  "Evening Shadow",
  "Everyday White",
  "Expressive Plum",
  "Extra White",
  "Fairfax Brown",
  "Fawn Brindle",
  "Felted Wool",
  "Fiery Brown",
  "Fired Brick",
  "Fireweed",
  "Fleur De Sel",
  "Foggy Day",
  "Foothills",
  "Forestwood",
  "Forsythia",
  "French Roast",
  "Fresco Cream",
  "Freshwater",
  "Friendly Yellow",
  "Fudge",
  "Functional Gray",
  "Futon",
  "Gale Force",
  "Garret Gray",
  "Gateway Gray",
  "Gauntlet Gray",
  "Gibraltar",
  "Ginger Root",
  "Grandview",
  "Granite Peak",
  "Gray Area",
  "Gray Birch",
  "Gray Clouds",
  "Gray Matters",
  "Gray Screen",
  "Gray Shingle",
  "Gray Wisp",
  "Grays Harbor",
  "Greek Villa",
  "Green Earth",
  "Green Onyx",
  "Greenblack",
  "Grizzle Gray",
  "Hardware",
  "Hazel",
  "Hep Green",
  "High Reflective White",
  "Historic Tan",
  "Homberg Gray",
  "Homestead Brown",
  "Hopsack",
  "Hunt Club",
  "Ibis White",
  "Ice Cube",
  "Illusive Green",
  "In The Navy",
  "Incredible White",
  "Indigo Batik",
  "Inkwell",
  "Inky Blue",
  "Intellectual Gray",
  "Intricate Ivory",
  "Irish Cream",
  "Iron Ore",
  "Ivory Lace",
  "Jasper",
  "Jubilee",
  "Jumping Java",
  "June Day",
  "Keystone Gray",
  "Khaki Shade",
  "Kilim Beige",
  "Kind Green",
  "Knitting Needles",
  "Labradorite",
  "Lantern Light",
  "Latte",
  "Laurel Woods",
  "Lemon Verbena",
  "Less Brown",
  "Let It Rain",
  "Library Pewter",
  "Light French Gray",
  "Light Honey",
  "Link Gray",
  "Little Boy Blu",
  "Liveable Green",
  "Loch Blue",
  "Loggia",
  "Lotus Pod",
  "Macadamia",
  "Maison Blanche",
  "Malted Milk",
  "Manor House",
  "Mariner",
  "Marooned",
  "Mature Grape",
  "Meadow Trail",
  "Meadowlark",
  "Mega Greige",
  "Merlot",
  "Messenger Bag",
  "Mindful Gray",
  "Mission Brown",
  "Moderate White",
  "Modern Gray",
  "Monorail Silver",
  "Moonlit Orchid",
  "Morning Fog",
  "Morning Sun",
  "Moroccan Brown",
  "Moscow Midnight",
  "Moth Wing",
  "Mount Etna",
  "Mountain Stream",
  "Muddled Basil",
  "Muslin",
  "Nacre",
  "Natural Choice",
  "Natural Linen",
  "Naturel",
  "Navajo White",
  "Naval",
  "Needlepoint Navy",
  "Network Gray",
  "Neutral Ground",
  "Night Owl",
  "Nonchalant White",
  "Nuance",
  "Nurture Green",
  "Nuthatch",
  "Oceanside",
  "On The Rocks",
  "Only Natural",
  "Origami White",
  "Outerspace",
  "Oyster Bar",
  "Pacer White",
  "Paperwhite",
  "Patience",
  "Pavestone",
  "Pearly White",
  "Peppercorn",
  "Perfect Greige",
  "Perfect Periwinkle",
  "Pewter Cast",
  "Pewter Green",
  "Pewter Tankard",
  "Polar Bear",
  "Polished Mahogany",
  "Poolhouse",
  "Popular Gray",
  "Porcelain",
  "Porpoise",
  "Portabello",
  "Positive Red",
  "Pottery Urn",
  "Privilege Green",
  "Proper Gray",
  "Protege Bronze",
  "Pure White",
  "Quiver Tan",
  "Rain",
  "Ramie",
  "Rare Gray",
  "Rarified Air",
  "Real Red",
  "Realist Beige",
  "Really Teal",
  "Red Barn",
  "Red Bay",
  "Red Theatre",
  "Reflecting Pool",
  "Reflection",
  "Refuge",
  "Reliable White",
  "Rembrandt Ruby",
  "Renwick Beige",
  "Repose Gray",
  "Reserved White",
  "Restoration Ivory",
  "Retreat",
  "Rice Grain",
  "Ripe Olive",
  "Riverway",
  "Rock Bottom",
  "Rock Candy",
  "Rocky River",
  "Rojo Marron",
  "Rookwood Blue Green",
  "Rookwood Brown",
  "Rookwood Clay",
  "Rookwood Dark Brown",
  "Rookwood Red",
  "Rookwood Terra Cotta",
  "Row House Tan",
  "Roycroft Brass",
  "Roycroft Bronze",
  "Roycroft Bronze Green",
  "Roycroft Copper Red",
  "Roycroft Mist Gray",
  "Roycroft Pewter",
  "Roycroft Suede",
  "Rugged Brown",
  "Rustic Red",
  "Sable",
  "Saddle Up",
  "Sage",
  "Salute",
  "Sand Beach",
  "Sand Dollar",
  "Sands Of Time",
  "Sandy Ridge",
  "Sawdust",
  "Sea Salt",
  "Sea Serpent",
  "Sealskin",
  "Seaworthy",
  "Sensible Hue",
  "Serious Gray",
  "Shell White",
  "Sheraton Sage",
  "Shiitake",
  "Shoji White",
  "Show Stopper",
  "Sierra Redwood",
  "Silvermist",
  "Silverplate",
  "Site White",
  "Slate Tile",
  "Smokehouse",
  "Smoky Beige",
  "Smoky Blue",
  "Snowbound",
  "Sockeye",
  "Soft Apricot",
  "Softened Green",
  "Softer Tan",
  "Software",
  "Sommelier",
  "Spalding Gray",
  "Spiced Cider",
  "Status Bronze",
  "Steeley Gray",
  "Sticks and Stones",
  "Still Water",
  "Stolen Kiss",
  "Stone Lion",
  "Storm Cloud",
  "Studio Clay",
  "Studio Taupe",
  "Suitable Brown",
  "Summit Gray",
  "Sumptuous Peach",
  "Sun Dried Tomato",
  "Superior Bronze",
  "Svelte Sage",
  "Tamarind",
  "Tanbark",
  "Taupe Tone",
  "Tavern Taupe",
  "Tea Chest",
  "Teal Stencil",
  "Tempe Star",
  "Terra Brun",
  "Thistle",
  "Thunder Gray",
  "Thunderous",
  "Tiki Hut",
  "Tin Lizzie",
  "Tony Taupe",
  "Toque White",
  "Tradewind",
  "Tree Branch",
  "Tres Naturale",
  "Tricorn Black",
  "Turkish Coffee",
  "Uncertain Gray",
  "Underseas",
  "Unfussy Beige",
  "Universal Khaki",
  "Unusual Gray",
  "Urbane Bronze",
  "Useful Gray",
  "Utaupeia",
  "Utterly Beige",
  "Van Dyke Brown",
  "Versatile Gray",
  "Virtual Taupe",
  "Vital Yellow",
  "Wall Street",
  "Warm Stone",
  "Waterscape",
  "Watery",
  "Weathered Shingle",
  "Web Gray",
  "Westchester Gray",
  "Westhighland White",
  "White Flour",
  "White Heron",
  "Whitetail",
  "Wild Currant",
  "Willow Tree",
  "Windfresh White",
  "Windswept Canyon",
  "Windy Blue",
  "Wool Skein",
  "Worldly Gray",
  "Zircon",
  "Acacia Haze",
  "Adriatic Sea",
  "African Gray",
  "Alluring White",
  "Almond Roca",
  "Aloof Gray",
  "Alpaca",
  "Andiron",
  "Antique White",
  "Argos",
  "Artichoke",
  "Asteroid",
  "At Ease Soldier",
  "Atitude Gray",
  "August Moon",
  "Aurora Brown",
  "Avocado",
  "Backpack Tan",
  "Baked Cookie",
  "Baker Box-Extra White",
  "Barcelona Beige",
  "Basket Beige",
  "Beach House",
  "Bee's Wax",
  "Beige Intenso",
  "Berg",
  "Big Chill",
  "Billowy Breeze",
  "Biscuit",
  "Black Emerald",
  "Black Swan",
  "Blackthorn",
  "Blonde",
  "Blue Chip",
  "Blue Horizon",
  "Bolero",
  "Borscht",
  "Bracing Blue",
  "Brainstorm Bronze",
  "Breathless",
  "Breezy",
  "Brevity Brown",
  "Burgundy",
  "Butter Up",
  "Caffeine",
  "Canyon Clay",
  "Cape Verde",
  "Cascades",
  "Castle Beige",
  "Chateau Brown",
  "Chatroom",
  "Cheery",
  "Cielo Blanco",
  "Classic Barn Red",
  "Cloak Gray",
  "Cobble Brown",
  "Coconut Husk",
  "Colonial Revival Gray",
  "Colony Buff",
  "Comfort Gray",
  "Composed",
  "Copen Blue",
  "Copper Wire",
  "Cordovan",
  "Cork Wedge",
  "Cottage Cream",
  "Cottonwood",
  "Craftsman Brown",
  "Curio Gray",
  "Daphne",
  "Dapper Tan",
  "Dard Hunter Green",
  "Dark Clove",
  "Darkroom",
  "Deep Forest Brown",
  "Delft",
  "Denim",
  "Devon Cream",
  "Dignified",
  "Dill",
  "Distance",
  "Domino",
  "Dorian Gray",
  "Double Latte",
  "Downing Slate",
  "Downing Stone",
  "Drift of Mist",
  "Dromedary Camel",
  "Dusted Truffle",
  "Ebbtide",
  "Echelon Ecru",
  "Ecru",
  "Egret White",
  "Elkhorn Cactus",
  "Ellie Gray",
  "Empire Gold",
  "Endless Sea",
  "Enduring Bronze",
  "Enticing Red",
  "Evergreen Fog",
  "Exile",
  "Fabulous Grape",
  "Familiar Beige",
  "Farm Stand Apple",
  "Farro",
  "Favorite Jeans",
  "Favorite Tan",
  "Fencepost White",
  "Fenland",
  "Fine Wine",
  "Finial Bronze",
  "First Star",
  "Folkstone",
  "Foxhall Green",
  "Framboise",
  "Fresh Eucalyptus",
  "Frosty White",
  "Garden Gate",
  "Gentle Aquamarine",
  "Georgian Bay",
  "Gilbraltar Gray",
  "Gossamer Veil",
  "Grassland",
  "Grecian Ivory",
  "Greek Olive",
  "Green Sprout",
  "Griffin",
  "Gris",
  "Grounded",
  "Half-Caff",
  "Hammered Silver",
  "Harmonic Tan",
  "Harvester",
  "Hawthorne",
  "Heartthrob",
  "Henna Shade",
  "Heron Plume",
  "Honed Soapstone",
  "Honied White",
  "Hound",
  "Houseplant",
  "Hunters Pointe",
  "Husky Orange",
  "Icicle",
  "Icy",
  "Impressive Ivory",
  "Indigo",
  "Intense Teal",
  "Ironstone",
  "Ivanhoe",
  "Ivoire",
  "Jack In The Pulpit",
  "Jade Dragon",
  "Jasper Stone",
  "Java",
  "Jay Blue",
  "Jersey Cream",
  "Jogging Path",
  "Lagoon",
  "Lanyard",
  "Lark Green",
  "Lattice",
  "Lava Cake",
  "Lennox Hill Tan",
  "Likeable Sand",
  "Llama Wool",
  "Lullaby",
  "Malabar",
  "Mediterranean",
  "Mesa Tan",
  "Mexican Sand",
  "Midnight",
  "Midnight Moscow",
  "Mineral Deposit",
  "Mineral Gray",
  "Mink",
  "Mocha",
  "Moderne White",
  "Moody Blue",
  "Morris Room Gray",
  "Mountain Road",
  "Mudslide",
  "Nantucket Dune",
  "Natural Tan",
  "Nearly Brown",
  "Nebulous White",
  "Newton",
  "Nomadic Desert",
  "Northwest Trail",
  "Oak Barrel",
  "Olde World Gold",
  "Olympic Range",
  "Olympus White",
  "Online",
  "Opaline",
  "Otter",
  "Outerbanks",
  "Oyster Bay",
  "Oyster White",
  "Packing Nut",
  "Panda White",
  "Papaya",
  "Pavilion Beige",
  "Perle Noir",
  "Plantation Beige",
  "Plantation Shutters",
  "Playa Arenosa",
  "Plum Brown",
  "Poinsettia",
  "Poised Taupe",
  "Polished Concrete",
  "Portico",
  "Practical Beige",
  "Pussywillow",
  "Quarry",
  "Raging Sea",
  "Rainstorm",
  "Raisin",
  "Rave Red",
  "Ravishing Coral",
  "Redwing",
  "Regatta",
  "Relaxed Khaki",
  "Requisite Gray",
  "Resort Tan",
  "Restful White",
  "Restrained Gold",
  "Reticence",
  "Rhinestone",
  "River Rouge",
  "Riverwood",
  "Rockbridge",
  "Rockweed",
  "Rocky Coast",
  "Roman Column",
  "Rookwood Antique Gold",
  "Rookwood Dark Red",
  "Rosemary",
  "Roycroft Bottle Green",
  "Ruddy",
  "Rushing River",
  "Safari",
  "Salty Dog",
  "Samovar Silver",
  "Sand Trap",
  "Sandbar",
  "Sanderling",
  "Sandy Lane",
  "Secret Cove",
  "Secret Garden",
  "Sedate Gray",
  "Shade-Grown",
  "Shagreen",
  "Shamrock",
  "Sienna Sand",
  "Silken Peacock",
  "Silver Gray",
  "Silver Shimme",
  "Simple White",
  "Simplify Beige",
  "Sky High",
  "Slate",
  "Smoky Azurite",
  "Soft Fawn",
  "Softly Chining",
  "Sonata Bronze",
  "Sonata Greeb",
  "Song Thrush",
  "Spare White",
  "Spicewood",
  "Sprout",
  "Stamped Concrete",
  "Stardew",
  "Steady Brown",
  "Strapford Brown",
  "Stunning Shade",
  "Sundried Tomato",
  "Super White",
  "Swing Brown",
  "Sycamore Tan",
  "Tanager",
  "Techno Gray",
  "Temperate Taupe",
  "Thicket",
  "Threshold Taupe",
  "Tower Tan",
  "Tranquil Aqua",
  "Trusty Tan",
  "Tumblin' Tumbleweed",
  "Turkish Tile",
  "Twilight Gray",
  "Umber Rust",
  "Unique Gray",
  "Urban Jungle",
  "Urban Putty",
  "Verde Marron",
  "Vogue Green",
  "Waterloo",
  "Well-Bred Brown",
  "West Highland White",
  "Whirlpool",
  "White",
  "White Duck",
  "White Hyacinth",
  "Whole Wheat",
  "Windsor Greige",
  "Wood Ash",
  "Woodland Lichen",
  "Woodlet",
  "Woody",
  "Woody Rosemary",
  "Woven Wicker",
  "Wrought Iron",
  "Yearling",
  "Zeus",
  "Monochrome",
  "Baked Clay",
  "Evergreens",
  "Hubbard Squash",
  "Studio Blue Green",
  "Thatch Brown",
  "Bagel",
  "Black Alder",
  "Ceiling Bright White",
  "Cornwall Slate",
  "Essential Gray",
  "Gecko",
  "Kestrel White",
  "Koi Pond",
  "Loyal Blue",
  "Pediment",
  "Rock Garden",
  "Summer White",
  "Alchemy",
  "Ancient Marble",
  "Armadillo",
  "Austere Gray",
  "Berry Bush",
  "Black Thorn",
  "Blue Comet",
  "Blue Endeavour",
  "Bluebell",
  "Calypso",
  "Cascade Green",
  "Cedar Rose",
  "Cedar Tone Natural",
  "Chelsea Gray",
  "Choice Cream",
  "Clary Sage",
  "Compatible Cream",
  "Croissant",
  "Debonair",
  "Deep Sea Dive",
  "Down Home",
  "Escape Gray",
  "Ethereal Mood",
  "Flower Pot",
  "Fragile Beauty",
  "Gratifying Green",
  "Green Bay",
  "Green Black",
  "Herbal Wash",
  "Hyper Blue",
  "Interesting Aqua",
  "Isle of Pines",
  "Lemon Twist",
  "Luxurious Red",
  "Majolica Green",
  "March Wind",
  "Market Mushroom",
  "Marshmallow",
  "Netsuke",
  "Niagra Mist",
  "Northern Pike",
  "Oakmoss",
  "Oliva Oscuro",
  "Parliament Green",
  "Passive",
  "Peach Fuzz",
  "Perma White",
  "Phantom Forest",
  "Prairie Grass",
  "Quasar Blue",
  "Quiet Moments",
  "Quinoa",
  "Redbarn",
  "Rockwood Medium Brown",
  "Rockwood Terra Cotta",
  "Rookwood Amber",
  "Rookwood Dark Green",
  "Rookwood Dark Red Victorian",
  "Rookwood Medium Brown",
  "Rookwood Sash Green",
  "Roycroft Vellum",
  "Sable Night",
  "Sagey",
  "Sand Dune",
  "Seal Skin",
  "Shade-Green",
  "Skyline Steel",
  "Smart White",
  "Smokey Topaz",
  "Spaulding Gray",
  "Stucco",
  "Toile Red",
  "Touch Of Sand",
  "Tram Gray",
  "Vibrato Blue",
  "Vivax Black",
  "Walrus Tusk",
  "Wheat Penny",
  "Agate Green",
  "Aloe",
  "Antiquarian Brown",
  "Arizona White",
  "Avenue Tan",
  "Bamboo Shoot",
  "Bar Harbor",
  "Beige Pediment",
  "Belvedere Tan",
  "Billiard Green",
  "Birdseye Maple",
  "Blizzard",
  "Blue Bayou",
  "Blue Nile",
  "Blue Plate",
  "Bona Fide Beige",
  "Bracken",
  "Bravado Red",
  "Brave Purple",
  "Buckram Binding",
  "Byte Blue",
  "Cachet Cream",
  "Caraibe",
  "Celestial",
  "Charwood",
  "Chelsea Mauve",
  "Classic French Gray",
  "Coastal Plain",
  "Coastal Point",
  "Concord Grape",
  "Conservative Gray",
  "Cordial",
  "Cotton White",
  "Country Squire",
  "Covetail",
  "Cowabunga",
  "Decisive Yellow",
  "Deep Maroon",
  "Desert Castle",
  "Dutch Tile Blue",
  "Eaglet Beige",
  "Earthen Jug",
  "El Caramelo",
  "Ethereal",
  "Everest White",
  "Faded Flaxflower",
  "Festoon Aqua",
  "Filmy Green",
  "Front Porch",
  "Garden Grove",
  "Garden Spot",
  "Gold Crest",
  "Golden Gate",
  "Goldfinch",
  "Grand Canal",
  "Greenbelt",
  "Gulfstream",
  "Habanero Chile",
  "Hazel Hurdle",
  "High Tea",
  "Hinoki",
  "Holiday Turquoise",
  "Honey Bees",
  "Honorable Blue",
  "Hot Cocoa",
  "Humble Gold",
  "Impulsive Purple",
  "Inspired Lilac",
  "Interactive Cream",
  "Kaffee",
  "Krypton",
  "Lazy Gray",
  "Lite Lavender",
  "Lucky Green",
  "Magical",
  "Manitou Blue",
  "Marea Baja",
  "Mere Mortal",
  "Metal Shilling",
  "Mossy Gold",
  "Mountain Air",
  "Mountain Fig",
  "Mystical Shade",
  "Napery",
  "Naples Yellow",
  "Near Naked",
  "New Colonial Yellow",
  "Nice White",
  "Night Sail",
  "North Star",
  "Oragami White",
  "Palm Leaf",
  "Parakeet",
  "Parisian Patina",
  "Peace Yellow",
  "Pennywise",
  "Persimmon",
  "Polite White",
  "Powder Blue",
  "Quench Blue",
  "Quixotic Plum",
  "Radish",
  "Red Cent",
  "Reddened Earth",
  "Redwood",
  "Renwick Golden Oak",
  "Resolute Blue",
  "Rinard",
  "Rookwood Shutter Green",
  "Rose Tan",
  "Ruskin Room Green",
  "Russet Brown",
  "Sawgrass Basket",
  "Secure Blue",
  "Sensational Sand",
  "Silver Peony",
  "Silver Strand",
  "Sky Fall",
  "Slate Violet",
  "Sleepy Hollow",
  "Slow Green",
  "Snowdrop",
  "Snowfall",
  "Special Gray",
  "Spicy Hue",
  "Steamed Milk",
  "Tatami Tan",
  "They Call It Mellow",
  "Tobacco Stem",
  "Townhall Tan",
  "Truly Taupe",
  "Upward",
  "Vanillin",
  "Vintage Vessel",
  "Zurich White",
  "Bark Chip",
  "Billable Hours",
  "Blackhorn",
  "Boundary",
  "Bungalow Beige",
  "Bunglehouse Gray",
  "Cloudburst",
  "Copper Fire",
  "Cowboy Boots",
  "Dewberry",
  "Elf Gray",
  "Ember",
  "Enigma",
  "Frostwork",
  "Green Mallard",
  "Greylock",
  "Hinting Blue",
  "Inverness Green",
  "Juneberry",
  "Kendal Green",
  "Majestic Purple",
  "Mesquite Wood",
  "Minute Mauve",
  "Mockingbird",
  "Morrissey",
  "Quietude",
  "Renwick Olive",
  "Rockwood Brown",
  "Roycrof Tmist Grey",
  "Sea Weed",
  "Ski Slope",
  "Something Blue",
  "Tassel",
  "Tawny Owl",
  "Tidewater",
  "Veranda",
  "Vineyard Green",
  "Wicker",
  "Wilderness Green",
  "Bee",
  "Bluesy Note",
  "Bonsai Tint",
  "Citrine",
  "Copper Mountain",
  "Crewel Tan",
  "Dyer's Woad",
  "Elder White",
  "Espalier",
  "Foxy",
  "Glamour",
  "Green Labrynth",
  "Herbivore",
  "Iconic White",
  "Mesmerize",
  "Mineral Mauve",
  "Misty",
  "Modest White",
  "Navy Seawall",
  "Nevermoore Gray",
  "Notable Hue",
  "Original White",
  "Overjoy",
  "Santorini Blue",
  "Silverpointe",
  "Smokyazurite",
  "Sole",
  "Tequila",
  "Toasty",
  "Topiary Tint",
  "Travertine",
  "Velvety Chestnut",
  "Wild Grasses",
  "Wind Fresh White",
  "Wood Cut",
  "Blue Mosque",
  "English Pine",
  "Almond Tree",
  "Antique Red",
  "Barn Red",
  "Best Bronze",
  "Blue Midnight",
  "Cabbage Rose",
  "Canoe",
  "Caramelized",
  "Caribou",
  "Cennected Gray",
  "Chocolate Powder",
  "Connor's Lakefront",
  "Deepton Base",
  "Estate Tan",
  "Exclusive Plum",
  "Gardenia",
  "Golden Plumeria",
  "Grapy",
  "Halcyon Green",
  "Honey Blush",
  "Interface Tan",
  "Inverness",
  "Lakeshore",
  "Maxi Teal",
  "Midtone Base",
  "Moonmist",
  "Natchez Moss",
  "Niebla Azul",
  "Open Seas",
  "Palais White",
  "Peacock Plume",
  "Peppery",
  "Poseidon",
  "Proper Gold",
  "Quartersawn Oak",
  "Raime",
  "Rayo De Sol",
  "Renwick Rose Beige",
  "Reynard",
  "Ryegrass",
  "Sand Of Time",
  "Sensuous Gray",
  "Smokey Blue",
  "Solitude",
  "Springtime",
  "Superwhite",
  "Swanky Gray",
  "Tawny Tan",
  "Thermal Spring",
  "Totally Tan",
  "Troller",
  "Vintage Gold",
  "War Eagle",
  "Warmshadow",
  "Welcome White",
  "Wild Rice",
  "Woodsy Brown",
  "Doeskin",
  "Banyan Brown",
  "Burlap",
  "Cedar",
  "Dignity Blue",
  "Kwal",
  "Medici Ivory",
  "Mosiac Tile",
  "Oak Creek",
  "Porch Ceiling",
  "Rockwood Red",
  "Rustic",
  "Toasted Pine Nut",
  "Woodcut",
  "Leather Bound",
  "Rockwood Blue Green",
  "Adrift",
  "Agreeable Beige",
  "Amalfi",
  "Antiquity",
  "Awesome Violet",
  "Balmy",
  "Beguiling Mauve",
  "Blue Shadow",
  "Briny",
  "Brittlebush",
  "Caligraphy",
  "Cargo Pants",
  "Cayenne",
  "Cedar Bark",
  "Cerise",
  "Charming Pink",
  "Chinese Red",
  "Colonial Revival Green",
  "Confident Yellow",
  "Cooled Blue",
  "Daisy",
  "Danube",
  "Different Gold",
  "Dried Edamame",
  "Drizzle",
  "Ethereal White",
  "Exuberant Pink",
  "Gentian",
  "Goldenrod",
  "Jacaranda",
  "Jalepeno",
  "Jargon Jade",
  "Kingdom Gold",
  "Knockout Orange",
  "Lemon Chiffonade",
  "Lemon Meringue",
  "Lodge Brown",
  "Morning Glory",
  "Mysterious Mauve",
  "Obstinate Orange",
  "Olive Grove",
  "Passionate Purple",
  "Portrait Tone",
  "Rainwashed",
  "Raucous Orange",
  "Red Tomato",
  "Renick Olive",
  "Rivers Edge",
  "Rookwood Jade",
  "Roy Croft Copper Red",
  "Sensitive Tint",
  "Soar",
  "Sontorini Blue",
  "Soulmate",
  "St. Bart's",
  "Stonebriar",
  "Sturdy Brown",
  "Sudio Clay",
  "Sunny Veranda",
  "Take Five",
  "Talipot Palm",
  "Tame Teal",
  "Tarnished Trumpet",
  "Terra Cotta",
  "Veiled Violet",
  "Vesper Violet",
  "Waterfall",
  "Folksy Gold",
  "Invigorate",
  "Rose",
  "Rest Assured",
  "Aquarium",
  "Basque Green",
  "Bohemian Black",
  "Breakwater",
  "Canyon Brown",
  "Classic Sand",
  "Craft Paper",
  "Dahlia",
  "Dark Auburn",
  "Lightweight Beige",
  "Mercurial",
  "Quest Gray",
  "Silver Mist",
  "Woodsmoke Gray",
  "Coriander Powder",
  "Enjoyable Yellow",
  "Firey Brown",
  "Gentle Grape",
  "Grape Harvest",
  "In The Pink",
  "Izmir Purple",
  "Lobelia",
  "Luxe Blue",
  "Osage Orange",
  "Pelican Tan",
  "Pine Cone",
  "Proch Ceiling",
  "Ravenwood",
  "Rookword Dark Red",
  "Topsail",
  "Umber",
  "Wildcat",
  "Wisteria",
  "Yam",
  "Spatial White",
  "Yellow Bird",
  "Aqua?Sphere",
  "Atmospheric",
  "Bluebird Feather",
  "Caribbean Coral",
  "Citronella",
  "Coquina",
  "Crimson Red",
  "Cupola Yellow",
  "Deepest Mauve",
  "Falling Water",
  "Fun Yellow",
  "Gambol Gold",
  "Golden Fleece",
  "Great Falls",
  "Iced Mocha",
  "Impatiens Petal",
  "Intuitive",
  "Jute Brown",
  "Leapfrog",
  "Lime Rickey",
  "Little Blue Box",
  "Lively Yellow",
  "Metropolis",
  "Plummy",
  "Protege Brown",
  "Regale Blue",
  "Revel Blue",
  "Rural Green",
  "Searching Blue",
  "Seaweed",
  "Smoke Tree",
  "Soya",
  "Steel Wool",
  "Stop",
  "Straw Harvest",
  "Vaguely Mauve",
  "Valiant Violet",
  "Verdigreen",
  "Victorian Rose",
  "White Raisin",
  "Window Pane",
  "Woodbridge",
  "Yankee Barn",
  "Spice Chest",
  "Burnished Brandy",
  "Dauphin Gray",
  "Dressy Rose",
  "Gallery Green",
  "Glitterati Gold",
  "Highland Grey",
  "Peking Blue",
  "Storm Warning",
  "Magnetic Gray",
  "Covered Bridge",
  "Relentless Olive",
  "Acer Grey",
  "Arugula",
  "Bone China",
  "Chestnut",
  "Collonade Gray",
  "English Walnut",
  "Hearts Of Palm",
  "Hickory Smoke",
  "Hushed Auburn",
  "Molten Gold",
  "Mulberry Silk",
  "Serengeti Grass",
  "Yuma Green",
  "Baby Bok Choy",
  "Blueblood",
  "Burnt Scarlet",
  "Courtyard",
  "Fire Brick",
  "Himalayan Salt",
  "Orion Blue",
  "Renwick Heather",
  "Roycroft Adobe",
  "Sand",
  "Soulful Blue",
  "Tuxedo Gray",
  "Shagbark",
  "Station Gray",
  "Unraveled",
  "Cucuzza Verde",
  "Grandiose",
  "Guantlet Grey",
  "Languid Blue",
  "Tudor House",
  "Aquaverde",
  "Aspen White",
  "Autumnal",
  "Browse Brown",
  "Cay",
  "Constant Coral",
  "Cottage White",
  "Desert Tumbleweed",
  "Down Pour",
  "Gold Coast",
  "Grass Clipping",
  "Gunmetal",
  "Basalt Powder",
  "Highlands Ranch Fence Brown",
  "Iron Gate",
  "Keratin",
  "Ligonier Tan",
  "Loop",
  "Metal Shavings",
  "Mogul Mauve",
  "Mommia",
  "Muddy River",
  "Oriel Gray",
  "Palisade",
  "Poetry Plum",
  "Replanted",
  "River Birch",
  "Rockwood Red Victorian",
  "Row House",
  "Roycrof Copper Red",
  "San Antonio Sage",
  "Sea Blight",
  "Yankee Brown",
  "Smooth Stone",
  "Starboard",
  "Tinsmith",
  "Ultra Pure White",
  "Vanderbilt Gray",
  "Weather Vane",
  "White Iris",
  "White Snow",
  "Willow Green",
  "Windswept",
  "Woodland",
  "Cruising",
  "Grey Clouds",
  "Mannered Gold",
  "Relish",
  "Roycraft Copper Red",
  "Tavern Oak",
  "Uber Umber",
  "Wooden Oar",
  "Crispy Gold",
  "Emberglow",
  "Flyway",
  "Jagged Granite",
  "Kale Green",
  "Long Horizon",
  "Marigold",
  "Meditative",
  "No Limits",
  "Ocatillo",
  "Parisian Green",
  "Raindrop",
  "Restful",
  "Smokey Azurite",
  "Squeeky Green",
  "Stonington",
  "Succulent",
  "Sundew",
  "Swan Pointe",
  "Sweeping Rock",
  "Taupe Of The Morning",
  "Venetian Yellow",
  "White Birch",
  "Apres",
  "Biltmore Buff",
  "Cilantro",
  "Colonial Revival Tan",
  "Derbyshire",
  "Fashionable Gray",
  "Linden Green",
  "Lounge Green",
  "Monks Hood",
  "Oleander",
  "Polvo De Oro",
  "Pueblo",
  "Purple Passage",
  "Ranchero Red",
  "Rockwood Shutter Green",
  "Saffron Thread",
  "Sleepy Blue",
  "Swimming",
  "Tenderfoot",
  "Turkish",
  "Wormwood",
  "Aerie Brown",
  "Bernard Brown",
  "Berry Cream",
  "Butterscotch",
  "Calico",
  "Captivating Cream",
  "Cedar Stain",
  "Cherry Tomato",
  "Chinchila",
  "Colonial Yellow",
  "Cream And Sugar",
  "Cut The Mustard",
  "Distant Hills",
  "Errigal",
  "Gargoyle",
  "Gauzy White",
  "Gold Vessel",
  "Gorgeous White",
  "Grayish",
  "Icy Lemonade",
  "Indian White",
  "Juniper Blue",
  "Lemon Chiffon",
  "Liquid Blue",
  "Mexican Tea",
  "Midnight Blue",
  "Mountain Mist",
  "Mushroom Basket",
  "Nankeen",
  "Nugget",
  "Off White",
  "Optimistic Yellow",
  "Palmetto",
  "Pepperidge",
  "Pineapple Cream",
  "Plantation Brown",
  "Retro Mint",
  "Rojo Dust",
  "Rustic City",
  "Salem Red",
  "Salt Marsh",
  "Sandbank",
  "Shade Tree",
  "Spice Wood",
  "Splashy",
  "Sugar Loaf",
  "Super Natural",
  "Surf Green",
  "Tansy Green",
  "Truepenny",
  "Tucson Red",
  "Vast Sky",
  "Weathervane",
  "Yosemite Gold",
  "Caper",
  "Cappuccino",
  "Diesel",
  "Ensign",
  "Expresso",
  "Desert Wood",
  "Agapanthus",
  "Aluetian",
  "Baby Blue Eyes",
  "Bakelite Gold",
  "Belvedere Cream",
  "Edgy Gold",
  "Federal Blue",
  "French Moire",
  "Frolic",
  "Gingery",
  "Gris Morado",
  "Hardware Cloth",
  "Hayseed",
  "Inland",
  "Jonquil",
  "La Luna Amarilla",
  "Pier",
  "Rapture Blue",
  "Sandstone",
  "Sequoia",
  "Sparrow",
  "Wondrous Blue",
  "Avid Apricot",
  "Baby Duck",
  "Begonia",
  "Classic Gold",
  "Freestate Earth",
  "Grandeur Plum",
  "Rock Wood Shutter Green",
  "Tea Light",
  "Lei Flower",
  "Alpine White",
  "Blushing",
  "Buckskin",
  "Built Mark",
  "Chanticleer",
  "Charisma",
  "Clematis",
  "Coral Reef",
  "Ember Stain",
  "Fully Purple",
  "Greecian",
  "Harbor Mist",
  "Nifty Turquoise",
  "Sporty Blue",
  "Stucco Greige",
  "Tigereye",
  "Chapel Gray",
  "Oriental Ivory",
  "Winchester Gray",
  "Classic Ivory",
  "Forget?Me?Not",
  "Moroccan Red",
  "Wickerwork",
  "Storn Cloud",
  "Granite",
  "Apple Peel",
  "Ashlar Gray",
  "Blacktop",
  "Blue Cruise",
  "Blue Ridge",
  "Chocolate Brownie",
  "Coast Point",
  "Country Life",
  "Crows Head",
  "Daplin",
  "Dark Colossus",
  "Deer Valley",
  "Discovery",
  "Douglas Fir",
  "Esoresso",
  "Fired Steel",
  "Flourishing",
  "Forged Steel",
  "Frank Blue",
  "Gallery White",
  "Georgian Revival Blue",
  "Great Green",
  "Gull",
  "Haute Pink",
  "Heather",
  "Liberty Blue",
  "Major Blue",
  "Minor Blue",
  "Missive",
  "Mistral",
  "Natural Wicker",
  "Old Navy",
  "Open Space",
  "Outback Brown",
  "Pearl Gray",
  "Pinky Beige",
  "Pothole",
  "Richmond Kindling Wood",
  "Robust Orange",
  "Ror Croft Pewter",
  "Ruby Shade",
  "Ruby Violet",
  "Sand Castle",
  "Spellbound",
  "Stoney Plain",
  "Strom Cloud",
  "Sudio Gray",
  "Tobacco",
  "Toccata",
  "Weschester Gray",
  "Woodbriar",
  "White Core",
  "Hulett Ore",
  "Jetstream",
  "Moonraker",
  "Dense Forest",
  "Fortified Plumb",
  "Silver Salvia",
  "Almond White",
  "Auburn",
  "Blue Sky",
  "Brassine",
  "Cosmetic Peach",
  "Daffodil",
  "Dynamic Blue",
  "Potting Shed",
  "Roadside",
  "Sahara Sand",
  "Alttitude Gray",
  "Blacksmith",
  "Butter Cream",
  "Butternut",
  "Citadel",
  "Elderberry",
  "Garden Sage",
  "Greenfield",
  "Kalcyon Green",
  "Mild Blue",
  "Rhapsody Lilac",
  "Roucroft Copper Red",
  "Roycrfot Bottle Green",
  "Spanish Moss",
  "Tranquil",
  "Tupe Tone",
  "Inviting Ivory",
  "Jackson Antique",
  "Pitch Pine",
  "Quicksilver",
  "Roycroft Rose",
  "Wooden Nutmeg",
  "Brick",
  "Carribean Coral",
  "Copper Pot",
  "Crescent Cream",
  "Easy Green",
  "Full Moon",
  "Graphite",
  "Gravel",
  "Individual White",
  "King's Canyon",
  "Meander Blue",
  "Paper Lantern",
  "Riviera Water",
  "Wax Cloth",
  "Wendy Way",
  "Antimony Gold",
  "Coming Up Roses",
  "Gray Harbor",
  "Protoge Bronze",
  "Recycled Glass",
  "Ripe Berry",
];

export default colors;