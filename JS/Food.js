//Js for the navbar
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// items
const menu = [{
        id: 1,
        title: "Buttered popcorn",
        category: "Americas",
        img: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: "Corn -- the workhorse of the industrial world -- is best when its sweet variety is fried up with lashings of butter till it bursts and then snarfed in greasy fistfuls while watching Netflix late at night.",
    },
    {
        id: 2,
        title: "Masala dosa",
        category: "Asia",
        img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: "A crispy, rice-batter crepe encases a spicy mix of mashed potato, which is then dipped in coconut chutney, pickles, tomato-and-lentil-based sauces and other condiments. It's a fantastic Americas food that'll keep you going till , when you'll probably come back for another.",
    },
    {
        id: 3,
        title: "Potato chips",
        category: "Europe",
        img: "https://images.pexels.com/photos/6696934/pexels-photo-6696934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `They're now one of the world's most child-friendly and best foods. But think of them this way -- if a single chip cost, say, $5, it'd be a far greater (and more popular) delicacy than caviar, a prize worth fighting wars over.One of the world's most child-friendly and best foods`,
    },
    {
        id: 4,
        title: "Seafood paella",
        category: "Europe",
        img: "https://images.pexels.com/photos/10875185/pexels-photo-10875185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode. Though if you have it in Spain, you're probably there already.`,
    },
    {
        id: 5,
        title: "Som tam",
        category: "Asia",
        img: "https://c.ndtvimg.com/1hkfbvu_som-tam-salad_625x300_04_September_18.jpg",
        desc: `To prepare Thailand's most famous salad, pound garlic and chilies with a mortar and pestle. Toss in tamarind juice, fish sauce, peanuts, dried shrimp, tomatoes, lime juice, sugar cane paste, string beans and a handful of grated green papaya. Grab a side of sticky rice. Variations include those made with crab (som tam boo) and fermented fish sauce (som tam plah lah), but none matches the flavor and simple beauty of the original.`,
    },
    {
        id: 6,
        title: "Chicken rice",
        category: "Asia",
        img: "https://images.pexels.com/photos/6249398/pexels-photo-6249398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: `Often called the "national dish" of Singapore, this steamed or boiled chicken is served atop fragrant oily rice, with sliced cucumber as the token vegetable. Variants include roasted chicken or soy sauce chicken. However it's prepared, it's one of Singapore's best foods. The dipping sauces -- premium dark soy sauce, chili with garlic and pounded ginger -- give it that little extra oomph to ensure whenever you're not actually in Singapore eating chicken rice, you're thinking of it.`,
    },
    {
        id: 7,
        title: "Poutine",
        category: "Americas",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Poutine_at_Le_Champlain_in_Quebec_City.jpg",
        desc: `Sounds kind of disgusting, looks even worse, but engulfs the mouth in a saucy, cheesy, fried-potato mix that'll have you fighting over the last dollop. Our Canadian friends insist it's best enjoyed at 3 a.m. after "several" beers`,
    },
    {
        id: 8,
        title: "Tacos",
        category: "Americas",
        img: "https://images.pexels.com/photos/9095726/pexels-photo-9095726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: `A fresh, handmade tortilla stuffed with small chunks of grilled beef rubbed in oil and sea salt then covered with guacamole, salsa, onions, cilantro or anything else you want -- perfect for Americas,  or . This is the reason no visitor leaves Mexico weighing less than when they arrived.`,
    },
    {
        id: 9,
        title: "Buttered toast with Marmite",
        category: "Europe",
        img: "https://www.jpgdic.com/wp-content/uploads/2021/04/two-pieces-toast-marmite-spread-top-jar-side-179968917.jpg",
        desc: `OK, anything buttered is probably going to taste great, but there's something about this tangy, salty, sour, love-it-or-hate-it yeast extract that turns a piece of grilled bread into a reason to go on living. For extra yum (or yuck) factor, add a layer of marmalade.`,
    },
    {
        id: 10,
        title: "Stinky tofu",
        category: "Asia",
        img: "https://images.pexels.com/photos/6120243/pexels-photo-6120243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc: `Like durian, smelly tofu is one of Southeast Asia's most iconic foods. The odor of fermenting tofu is so overpowering many aren't able to shake off the memory for months. So is the legendarily divine taste really worth the effort? Sure it is.`,
    },
    {
        id: 11,
        title: "Marzipan",
        category: "Europe",
        img: "https://www.rockrecipes.com/wp-content/uploads/2016/11/DSC_1053-2.jpg",
        desc: `Don't be fooled by cheap imitations, which use soy paste or almond essence. The real stuff, which uses nothing but ground almonds with sugar, is so good, you'll eat a whole bar of it, feel sick, and still find yourself toying with the wrapper on bar number two.`,
    },
    {
        id: 12,
        title: "Ketchup",
        category: "Americas",
        img: "https://images.pexels.com/photos/2734114/pexels-photo-2734114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Let's face it, anything that can convince 2-year-olds to eat their carrots rather than spitting them onto the floor is worthy of not just a "delicious" title, but a "miracle of persuasion" title, too.`,
    },
    {
        id: 13,
        title: "French toast",
        category: "Asia",
        img: "https://images.pexels.com/photos/8143761/pexels-photo-8143761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Two pieces of toast are slathered with peanut butter or kaya jam, soaked in egg batter, fried in butter and served with still more butter and lots of syrup. A Hong Kong best food, best enjoyed before cholesterol checks.`,
    },
    {
        id: 14,
        title: "Chicken parm",
        category: "Oceania",
        img: "https://www.theseasonedmom.com/wp-content/uploads/2020/12/Chicken-Parmesan-3.jpg",
        desc: `Melted Parmesan and mozzarella cheese, and a peppery, garlicky tomato sauce drizzled over the top of a chicken fillet -- Aussie pub-goers claim this ostensibly Italian dish as their own. Since they make it so well, there's no point in arguing.`,
    },
    {
        id: 15,
        title: "Hummus",
        category: "Asia",
        img: "https://images.pexels.com/photos/6541650/pexels-photo-6541650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `This humble Middle Eastern spread, made with chickpeas, garlic, lemon juice and tahini has become a fridge staple all around the world. This tangy treat tastes good as a dip, with breads, with meats, with vegetables, beans or -- hear us out -- on a Marmite rice cake.`,
    },
    {
        id: 16,
        title: "Chili crab",
        category: "Asia",
        img: "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2018/02/Momma-Kongs-best-chilli-crab-singapore.png",
        desc: `You can't visit Singapore without trying its spicy, sloppy, meaty specialty. While there are dozens of ways to prepare crab (with black pepper, salted egg yolk, cheese-baked, et cetera) chili crab remains the local bestseller.`,
    },
    {
        id: 17,
        title: "Maple syrup",
        category: "Americas",
        img: "https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Ever tried eating a pancake without maple syrup? It's like eating a slice of cardboard. Poorly prepared cardboard. Pass the cardboard, please.`,
    },
    {
        id: 18,
        title: "Fish 'n' chips",
        category: "Europe",
        img: "https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Anything that's been around since the 1860s can't be doing much wrong. The staple of the Victorian British working class is a crunchy-outside, soft-inside dish of simple, un-adorned fundamentals.`,
    },
    {
        id: 19,
        title: "Ankimo",
        category: "Asia",
        img: "https://live.staticflickr.com/4208/35114193921_6c33b83676_b.jpg",
        desc: `Thought not -- still, you're missing out on one of sushi's last great secrets, the prized ankimo. You won't regret trying this - one of the best foods in Japan.`,
    },
    {
        id: 20,
        title: "Parma ham",
        category: "Europe",
        img: "https://images.pexels.com/photos/10875298/pexels-photo-10875298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `You see it folded around melon, wrapped around grissini, placed over pizza, heaped over salad. There's good reason for that: these salty, paper-thin slices of air-dried ham lift the taste of everything they accompany to a higher level.`,
    },
    {
        id: 21,
        title: "Goi cuon",
        category: "Asia",
        img: "https://live.staticflickr.com/1137/534569251_35289f9240_z.jpg",
        desc: `It's "meat light," with the flavors of refreshing herbs erupting in your mouth. Dipped in a slightly sweet Vietnamese sauce laced with ground peanuts, it's wholesome, easy and the very definition of "moreish."`,
    },
    {
        id: 22,
        title: "Ohmi-gyu beef steak",
        category: "Asia",
        img: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Called the "Rolls-Royce" of beef, it's best eaten sashimi style, anointed with a drizzle of kaffir lime and green tea sea salt. Marbled fat gives each mouthful texture as the beef melts away, leaving a subtle but distinctly classic beef flavor.`,
    },
    {
        id: 23,
        title: "Pho",
        category: "Asia",
        img: "https://images.pexels.com/photos/6646072/pexels-photo-6646072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `This oft-mispronounced national dish ("fuh" is correct) is just broth, fresh rice noodles, a few herbs and usually chicken or beef. But it's greater than the sum of its parts -- fragrant, tasty and balanced.`,
    },
    {
        id: 24,
        title: "Lechón",
        category: "Asia",
        img: "https://live.staticflickr.com/312/19450617441_8d0bbfa497_b.jpg",
        desc: `A Filipino national dish, lechón is a whole young pig slow-roasted over charcoal for several hours. The process makes for tender meat and crispy skin. It's prepared on special occasions throughout the year.`,
    },
    {
        id: 25,
        title: "Fajitas",
        category: "Americas",
        img: "https://live.staticflickr.com/3626/3496175070_a8f44db07e_b.jpg",
        desc: `Step 1: Behold the meat sizzling on a fiery griddle. Step 2: Along with the meat, throw side servings of capsicum, onion, guacamole, sour cream and salsa into a warm, flour tortilla. Step 3: Promise all within hearing range that you'll have "just one more." Step 4: Repeat.`,
    },
    {
        id: 26,
        title: "Butter garlic crab",
        category: "Asia",
        img: "https://burpple.imgix.net/foods/23ca4d894e770e993c81863519_original.?w=645&dpr=1&fit=crop&q=80&auto=format",
        desc: `This delicious, simple dish is made by drowning a large crab in a gallon of butter-garlic sauce, which seeps into every nook and cranny and coats every inch of flesh. The sea gods of Butter Land are benevolent carnivores and this, their gift to the world, is their signature dish.`,
    },
    {
        id: 27,
        title: "Champ",
        category: "Europe",
        img: "https://www.craftbeering.com/wp-content/uploads/2020/01/Champ-Irish-Mashed-Potatoes-9-720x540.jpg",
        desc: `Irish national dish champ goes down faster than the first pint of Guinness on a Friday night. Mashed potato with spring onions, butter, salt and pepper, champ is the perfect side with any meat or fish.`,
    },
    {
        id: 28,
        title: "Lasagna",
        category: "Europe",
        img: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Second only to pizza in the list of famed Italian foods, there's a reason this pasta-layered, tomato-sauce-infused, minced-meaty gift to kids and adults alike is so popular -- it just works.`,
    },
    {
        id: 29,
        title: "Poke",
        category: "Americas",
        img: "https://img-global.cpcdn.com/recipes/f575fa64a4914b63/1200x630cq70/photo.jpg",
        desc: `The fish is seasoned in different ways -- so it's a delicious but also healthy dish. The meal has now spread to the mainland -- and across the globe.`,
    },
    {
        id: 30,
        title: "Croissant",
        category: "Europe",
        img: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Flaky pastry smothered in butter, a pile of raspberry jam smeared over the top and a soft, giving bite as you sink in your teeth; there's nothing not to love about this fatty, sweet Americas food that must be married to a cup of strong coffee.`,
    },
    {
        id: 31,
        title: "Arepas",
        category: "Americas",
        img: "https://www.seriouseats.com/thmb/VXWJIw3Y0430h3K-df9X2kMRw6Y=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__04__20111214-bean-soup-arepas-pork-stew-primary-1b60146803ee4ef0ac6c4f8eec08b80f.jpeg",
        desc: `A corn-dough patty that provides a savory canvas onto which you can paint any number of delicious toppings: cheese, shredded chicken, crisped pork skin, perico, beef, tomato, avocado.`,
    },
    {
        id: 32,
        title: "Bunny chow",
        category: "Africa",
        img: "https://tastyrecipes.sapeople.com/files/2014/09/bunny-chow1.png",
        desc: `Despite the name, no rabbits are harmed in the making of one of South Africa's best-loved street foods. Bunny chow is hollowed-out half- or quarter-loaves of white bread filled with super-spicy curry. The dish originated in Durban's Indian community.`,
    },
    {
        id: 33,
        title: "Shish kebab",
        category: "Asia",
        img: "https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Pick your meat, shove a stick through it, grill. These cubes of deliciousness -- most often lamb, but also beef, swordfish and chicken -- are enjoyed with rice and vegetables and are the perfect addition to your summer barbecue.`,
    },
    {
        id: 34,
        title: "Lobster",
        category: "Americas",
        img: "https://images.pexels.com/photos/8352391/pexels-photo-8352391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Forget all your fancy, contrived lobster dishes deployed by showoff chefs eager for Michelin endorsement. When you have a best food as naturally delicious as these little fellas, keep it simple. The best way to enjoy lobster is simply to boil it and serve with a side of melted butter and slice of lemon.`,
    },
    {
        id: 35,
        title: "Pastel de nata",
        category: "Europe",
        img: "https://images.pexels.com/photos/2573870/pexels-photo-2573870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Pastel de natas are perhaps the world's tastiest laundry byproduct. Legend has it that Portuguese nuns and monks, having used egg whites to starch their religious clothing, used the leftover yolks to make pastries, including these sinfully delicious custard tart`,
    },
    {
        id: 36,
        title: "Pierogi",
        category: "Europe",
        img: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/19000956/051121068-02-fried-potato-pierogi-recipe-thumb1x1.jpg",
        desc: `Pierogi are parcels of deliciousness that can be filled with everything from potato to sauerkraut to meat to cheese and to fruit, and often topped with melted butter, sour cream or fried onions. They're traditionally boiled, although fried pierogi are becoming more common.`,
    },
    {
        id: 37,
        title: "Donuts",
        category: "Americas",
        img: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `These all-American fried wheels of dough need no introduction, but we will say one thing: the delicious guilt of snacking on these addictive calorie bombs makes them taste even better. If that's possible.`,
    },
    {
        id: 38,
        title: "Corn on the cob",
        category: "Asia",
        img: "https://images.pexels.com/photos/9894412/pexels-photo-9894412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `There's something about biting down on a cob of corn -- it's a delicate enough operation to require concentration but primal enough to make you feel like the caveman you always wanted to be. Great food is caveman food.`,
    },
    {
        id: 39,
        title: "Piri-piri chicken",
        category: "Africa",
        img: "https://images.pexels.com/photos/5702791/pexels-photo-5702791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `The South African restaurant chain Nando's has made Mozambican-Portuguese piri-piri chicken loved around the world. But for the original dish, head to Maputo, capital of Mozambique. Galinha à Zambeziana is a finger-lickin' feast of chicken cooked with lime, pepper, garlic, coconut milk and piri piri sauce.`,
    },
    {
        id: 40,
        title: "Rendang",
        category: "Asia",
        img: "https://vcdn1-ione.vnecdn.net/2013/12/25/3-5557-1387966149.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=ujqxOcHIs_Lls1MS7K-XKg",
        desc: `Beef is slowly simmered with coconut milk and a mixture of lemongrass, galangal, garlic, turmeric, ginger and chilies, then left to stew for a few hours to create this dish of tender, flavorful bovine goodness.`,
    },
    {
        id: 41,
        title: "Chicken muamba",
        category: "Africa",
        img: "https://blameitonriojanerio.files.wordpress.com/2015/09/download-205.jpg",
        desc: `The proper recipe calls for chicken, hot chili, garlic, tomato, pepper, salt, okra and palm butter, an artery-clogging African butter that will force you into a second helping and a promise to start using your gym membership.`,
    },
    {
        id: 42,
        title: "Ice cream",
        category: "Asia",
        img: "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `You may have just gorged yourself to eruption point, but somehow there's always room for a tooth-rotting pile of ice cream with nuts, marshmallows and chocolate sauce.`,
    },
    {
        id: 43,
        title: "Tom yum goong",
        category: "Asia",
        img: "https://images.pexels.com/photos/10201775/pexels-photo-10201775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `This best food Thai masterpiece teems with shrimp, mushrooms, tomatoes, lemongrass, galangal and kaffir lime leaves. Usually loaded with coconut milk and cream, the hearty soup unifies a host of favorite Thai tastes: sour, salty, spicy and sweet.`,
    },
    {
        id: 44,
        title: "Penang assam laksa",
        category: "Asia",
        img: "https://dailymaybay.vn/public/uploads/news/my-penang-assam-laksa-thumb.jpg",
        desc: `Poached, flaked mackerel, tamarind, chili, mint, lemongrass, onion, pineapple ... one of Malaysia's most popular dishes is an addictive spicy-sour fish broth with noodles.`,
    },
    {
        id: 45,
        title: "Hamburger",
        category: "Americas",
        img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `The bread-meat-salad combination is so good that entire countries have ravaged their eco-systems just to produce more cows.`,
    },
    {
        id: 46,
        title: "Peking duck",
        category: "Asia",
        img: "https://live.staticflickr.com/4911/46389524311_7d0f519aca_b.jpg",
        desc: `The maltose-syrup glaze coating the skin is the secret. Slow roasted in an oven, the crispy, syrup-coated skin is so good that authentic eateries will serve more skin than meat, and bring it with pancakes, onions and hoisin or sweet bean sauce. Other than flying or floating, this is the only way you want your duck.`,
    },
    {
        id: 47,
        title: "Sushi",
        category: "Asia",
        img: "https://images.pexels.com/photos/3338500/pexels-photo-3338500.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `Brand giants such as Toyota, Nintendo, Sony, Nikon and Yamaha may have been created by people fueled by nothing more complicated than raw fish and rice, but it's how the fish and rice is put together that makes this a global first-date favorite. The Japanese don't live practically forever for no reason -- they want to keep eating this stuff.`,
    },
    {
        id: 48,
        title: "Chocolate",
        category: "Americas",
        img: "https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `The Mayans drank it, Lasse Hallström made a film about it and the rest of us get over the guilt of eating too much of it by eating more of it. Without this creamy, bitter-sweet confection, Valentine's Day would be all cards and flowers, Easter would turn back into another dull religious event.`,
    },
    {
        id: 49,
        title: "Neapolitan pizza",
        category: "Europe",
        img: "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        desc: `With just a few ingredients -- dough, tomatoes, olive oil, salt and basil (the marinara pizza does not even contain cheese) -- the Neapolitans created a food that few make properly, but everyone enjoys thoroughly.`,
    },
    {
        id: 50,
        title: "Massaman curry",
        category: "Asia",
        img: "https://www.maxpixel.net/static/photo/1x/Massaman-Curry-Thai-Bowl-Massaman-Curry-Food-6281135.jpg",
        desc: `Emphatically the king of curries, and perhaps the king of all foods. Spicy, coconutty, sweet and savory. Even the packet sauce you buy from the supermarket can make the most delinquent of cooks look like a Michelin potential.`,
    },

];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);
        return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories
        .map(function(category) {
            return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
        }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}