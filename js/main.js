// when the page is ready
document.addEventListener('DOMContentLoaded', initialize);

// all events data
const eventsData = [
    {
        id: 1,
        title: { ar: "سحر الجاز", en: "Jazz Magic" },
        date: { ar: "2025-11-15", en: "2025-11-15" },
        description: {
            ar: "فعالية موسيقية تعرض جمال موسيقى الجاز وايقاعاتها المميزة, مع عروض حية لفنانين محليين  ودوليين.  تتيح الفعالية للحضور تجربة الأصوات العميقة والايقاعات المتنوعة للجاز, وتوضح تأثير هذه الموسيقى على المشهد الفني والثقافي المعاصر. تستهدف الفعالية تعزيز التواصل بين الجمهور والفن الموسيقي, وتشجيع الشباب على الانفتاح على أنواع موسيقية مختلفة, مع جو ممتع وترفيهي.",
            en: "A musical event showcasing the beauty and distinctive rhythms of jazz, with live performances by local and international artists. The event allows attendees to experience the deep sounds and diverse rhythms of jazz, highlighting the influence of this music on the contemporary artistic and cultural scene. The event aims to foster communication between the public and musical art, and encourage young people to explore different musical genres, all in a fun and entertaining atmosphere."
        },
        image: "./imgs/jazz.jpg",
        category: "music",
        location: { ar: "كافيه مجاز", en: "Majaz Cafe" },
        startTime: { ar: "19:00", en: "7:00 PM" },
        endTime: { ar: "22:00", en: "10:00 PM" },
        image1: "./imgs/gz1.jpg",
        image2: "./imgs/jz3.jpg", 
        image3: "./imgs/jz2.jpg",
        map: "./imgs/majaz.png",
        cal: "https://evt.to/3p7ztpsd5rqp",
        mainImage: "./imgs/jz2.jpg"
    },
    {
        id: 2,
        title: { ar: "الطائرات الورقية", en: "Paper Kites" },
        date: { ar: "2025-12-02", en: "2025-12-02" },
        description: {
            ar: "فعالية تجمع المشاركين من جميع الأعمار في جو من المرح والإبداع، حيث يقومون بتصميم وصناعة الطائرات الورقية ثم إطلاقها في الهواء، مع مسابقات لأطول طيران وأجمل تصميم.تساعد الفعالية على تعزيز الروح الجماعية، الإبداع اليدوي، والتواصل بين الأطفال والكبار، بالإضافة إلى تقديم تجربة ممتعة تربط بين الطبيعة والفن.يتم توفير أدوات السلامة والإشراف الفني لضمان تجربة ممتعة وآمنة للجميع",
            en: "An event that brings participants of all ages together in an atmosphere of fun and creativity, where they design, make, and fly paper kites, with competitions for the longest flight and most beautiful design. The event helps promote team spirit, manual creativity, and communication between children and adults, in addition to offering a fun experience linking nature and art. Safety tools and technical supervision are provided to ensure a fun and safe experience for everyone."
        },
        image: "./imgs/حشحثق.jpg",
        category: "family",
        location: { ar: "الحديقة العامة", en: "The Public Park" },
        startTime: { ar: "10:00", en: "10:00 AM" },
        endTime: { ar: "13:00", en: "1:00 PM" },
        image1: "./imgs/ppr1.jpg",
        image2: "./imgs/ppr33.jpg",
        image3: "./imgs/ppr22.jpg",
        map: "./imgs/parkloc.png",
        cal: "https://evt.to/fpqh73fh384p",
        mainImage: "./imgs/ppr22.jpg"
    },
    {
        id: 3,
        title: { ar: "معرض فني", en: "Art Exhibition" },
        date: { ar: "2025-11-23", en: "2025-11-23" },
        description: {
            ar: "معرض يضم مجموعة من الأعمال الفنية المعاصرة والمتنوعة، من لوحات زيتية ورسم بالألوان المائية إلى منحوتات وتجهيزات فنية ثلاثية الأبعاد. يهدف المعرض إلى إتاحة منصة للفنانين المحليين والعالميين لعرض إبداعاتهم أمام جمهور واسع، ويتيح للزوار فرصة التفاعل مع الأعمال من خلال جولات إرشادية وورش فنية قصيرة.تركّز الفعالية على تعزيز التواصل بين الفن والجمهور، وتشجيع الابتكار الفني وتقدير الجمال والثقافة البصرية في المجتمع.",
            en: "An exhibition featuring a collection of diverse contemporary artworks, from oil paintings and watercolors to sculptures and 3D art installations. The exhibition aims to provide a platform for local and international artists to display their creations to a wide audience, and allows visitors the opportunity to interact with the works through guided tours and short art workshops.The event focuses on enhancing communication between art and the public, encouraging artistic innovation, and appreciating beauty and visual culture in society."
        },
        image: "./imgs/art.jpg",
        category: "family",
        location: { ar: "دار الثقافة", en: "Culture House" },
        startTime: { ar: "17:00", en: "5:00 PM" },
        endTime: { ar: "20:00", en: "8:00 PM" },
        image1: "./imgs/art6.jpg",
        image2: "./imgs/art5.jpg",
        image3: "./imgs/art2.jpg",
        map: "./imgs/culu.png",
        cal: "https://evt.to/r6m9pjl8pk32",
        mainImage: "./imgs/art2.jpg"
    },
    {
        id: 4,
        title: { ar: "محاضرة ايمانية", en: "Faith Lecture" },
        date: { ar: "2025-10-12", en: "2025-10-12" },
        description: {
            ar: "لقاء إيماني يتضمن محاضرة قيّمة تتناول مواضيع روحانية تمس حياة الفرد والأسرة، من تفسير آيات قرآنية وأحاديث نبوية شريفة إلى قصص وعبر من سير الصالحين. تهدف المحاضرة إلى إتاحة منبر للتذكير بالله وتجديد الإيمان في القلوب، وتتيح للحضور فرصة للتفاعل وطرح الأسئلة في نهاية اللقاء.تركّز الفعالية على تعزيز ارتباط المسلم بدينه، وتشجيع التدبر والتفكر في أمور الحياة، وتقدير القيم الأخلاقية والروحانية في المجتمع.",
            en: "A faith-based gathering that includes a valuable lecture on spiritual topics affecting the lives of individuals and families, from interpreting Quranic verses and noble Prophetic hadiths to stories and lessons from the lives of the righteous. The lecture aims to provide a platform for remembering God and renewing faith in hearts, and allows attendees the opportunity to interact and ask questions at the end of the meeting. The event focuses on strengthening the Muslim's connection to their religion, encouraging contemplation and reflection on life's matters, and appreciating moral and spiritual values in society."
        },
        image: "./imgs/reg.jpg",
        category: "family",
        location: { ar: "مسجد خالد بن الوليد", en: "Khalid ibn al-Walid Mosque" },
        startTime: { ar: "09:00", en: "9:00 AM" },
        endTime: { ar: "11:00", en: "11:00 AM" },
        image1: "./imgs/rel1.jpg",
        image2: "./imgs/rel2.jpg",
        image3: "./imgs/rel3.jpg",
        map: "./imgs/ms.png",
        cal: "https://evt.to/4b6q0vx8l29b",
        mainImage: "./imgs/rel3.jpg"
    },
    {
        id: 5,
        title: { ar: "ديربي حمص", en: "Homs Derby" },
        date: { ar: "2025-10-10", en: "2025-10-10" },
        description: {
            ar: "يبدأ الحدث بعروض جماهيرية وأغانٍ تراثية حمصية تعبّر عن الفرح والحماس، يليها عرض قصير يستعرض تاريخ الناديين العريقين وإنجازاتهما على مدى العقود.ثم تنطلق المباراة في أجواء مليئة بالتشويق، مع بث مباشر وشاشات عملاقة لعرض اللقطات المميزة.في نهاية المباراة، يتم تكريم اللاعبين القدامى الذين ساهموا في رفع اسم حمص عاليًا في الملاعب السورية، وتوزيع جوائز رمزية لأفضل لاعب وأفضل جمهور.",
            en: "The event begins with public displays and traditional Homsi songs expressing joy and enthusiasm, followed by a short presentation reviewing the history and achievements of the two long-standing clubs over the decades. The match then kicks off in an atmosphere full of excitement, with a live broadcast and giant screens to display highlights. At the end of the match, veteran players who contributed to raising Homs' name high in Syrian stadiums are honored, and symbolic prizes are distributed for the best player and best audience."
        },
        image: "./imgs/الكرامة-والوثبة.jpg",
        category: "sport",
        location: { ar: "الملعب البلدي", en: "The Municipal Stadium" },
        startTime: { ar: "15:00", en: "3:00 PM" },
        endTime: { ar: "17:00", en: "5:00 PM" },
        image1: "./imgs/sp1.jpg",
        image2: "./imgs/sp3.jpg",
        image3: "./imgs/sp2.jpg",
        map: "./imgs/stdim.png",cal: "https://evt.to/qft56bbvqq3s",
        mainImage: "./imgs/sp2.jpg"
    },
    {
        id: 6,
        title: { ar: "حكاية من قلب التاريخ", en: "A Story from the Heart of History" },
        date: { ar: "2025-10-30", en: "2025-10-30" },
        description: {
            ar: "فعالية تُبرز عراقة مدينة تدمر، جوهرة الصحراء السورية، التي كانت مركزًا حضاريًا وتجاريًا هامًا عبر التاريخ. تتضمن الفعالية عرض صور ومجسمات لأبرز المعالم التدمرية مثل الأعمدة والمعابد، إلى جانب فقرة تعريفية بتاريخ المدينة وأهميتها التراثية. تهدف الفعالية إلى تعزيز الوعي الثقافي وتشجيع الحضور على الحفاظ على الإرث السوري الأصيل.",
            en: "An event highlighting the heritage of the city of Palmyra, the jewel of the Syrian desert, which was an important cultural and commercial center throughout history. The event includes a display of photos and models of the most prominent Palmyrene landmarks such as columns and temples, along with an introductory segment on the city's history and its heritage importance. The event aims to enhance cultural awareness and encourage attendees to preserve the authentic Syrian heritage"
        },
        image: "./imgs/infocus_palmyra_dpl_04_2016.jpg",
        category: "calu",
        location: { ar: "متحف تدمر", en: "Palmyra Museum" },
        startTime: { ar: "08:00", en: "8:00 AM" },
        endTime: { ar: "14:00", en: "2:00 PM" },
        image1: "./imgs/calu1.jpg",
        image2: "./imgs/calu3.jpg",
        image3: "./imgs/calu2.jpg",
        map: "./imgs/tdmr.png",
        cal: "https://evt.to/pqk2870347mt",
        mainImage: "./imgs/calu2.jpg"
    }
];

// get elements from HTML
const cat = document.getElementById('cat');
const dateFilter = document.getElementById('dateFilter');
const searchFilter = document.getElementById('searchFilter');
const eventscontainer = document.getElementById('events-container');

let allEvents = [];
let filteredCard = [];

// run when page load
function initialize() {
    // copy all data to allEvents
    allEvents = eventsData;

    // get category from the link (URL)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // if user came with category in link -> set it in dropdown
    if (cat && category) {
        cat.value = category;
    }

    // add event listeners for filters
    cat.addEventListener('change', handleFilterChange);
    dateFilter.addEventListener('change', handleFilterChange);
    searchFilter.addEventListener('input', handleFilterChange);

    // show the first time
    handleFilterChange();
}

// this function runs when filters change
function handleFilterChange() {
    applyFilters();
    display();
}

// filter events
function applyFilters() {
    filteredCard = allEvents.filter(event => {
        const selectedCat = cat.value;
        const selectedDate = dateFilter.value;

        // check category
        if (selectedCat && event.category !== selectedCat) {
            return false;
        }

        // check date 
        if (selectedDate && event.date.ar !== selectedDate && event.date.en !== selectedDate) {
            return false;
        }

        // check date again using Date object
        if (selectedDate) {
            const eventDateTime = new Date(event.date.en + 'T00:00:00Z').getTime();
            const filterDateTime = new Date(selectedDate + 'T00:00:00Z').getTime();
            if (eventDateTime !== filterDateTime) {
                return false;
            }
        }

        // check search text
        const search = searchFilter.value.toLowerCase();
        if (search) {
            const searchField = [
                event.title.ar,
                event.title.en,
                event.location.ar,
                event.location.en,
                event.description.en,
                event.description.ar
            ].join(' ').toLowerCase();

            if (!searchField.includes(search)) {
                return false;
            }
        }

        return true; // keep this event
    });
}

// show the filtered events on the page
function display() {
    // clear old events
    eventscontainer.innerHTML = '';

    // loop through filtered events
    filteredCard.forEach(event => {
        // make new column
        const column = document.createElement('div');
        column.className = 'col-md-4 mb-4';// add HTML inside
        column.innerHTML = `
            <div class="card h-100">
                <img src="${event.image}" class="card-img-top" alt="${event.title.ar}">
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title" data-en="${event.title.en}">${event.title.ar}</h5>
                    <p class="card-text" data-en="${event.date.en}">${event.date.ar}</p>
                    <a href="event.html?id=${event.id}" class="btn btn-primary mt-auto" data-en="Details">التفاصيل</a>
                </div>
            </div>
        `;

        // add the card to page
        eventscontainer.appendChild(column);
    });
}
