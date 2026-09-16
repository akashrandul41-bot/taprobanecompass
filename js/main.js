/* ==========================================================================
   Sri Lanka Journeys - Interactions, Animations & Localization
   ========================================================================== */

// --- Translations Dictionary (English & Arabic) ---
const translations = {
    en: {
        nav_destinations: "Destinations",
        nav_packages: "Packages",
        nav_experiences: "Experiences",
        nav_journal: "Journal",
        btn_plan_trip: "Plan Your Trip",
        hero_title: "Discover Sri Lanka, <br><span>Your Way</span>",
        hero_subtitle: "From misty mountains and golden beaches to ancient kingdoms and unforgettable adventures.",
        btn_explore_packages: "Explore Packages",
        btn_discover_destinations: "Discover Destinations",
        story_tag: "Our Story",
        story_title: "More Than a <span>Destination</span>",
        story_p1: "Sri Lanka is not a place you simply visit. It is a place you slowly discover — one sunrise, one cup of tea, one winding road at a time. Here, the warmth of the people matches the golden sun, and every path leads to a new adventure.",
        story_p2: "From the wild elephants roaming in Yala to the ancient echoes of Sigiriya, we craft journeys that connect you deeply with the heart of this island.",
        btn_start_journey: "Start Your Journey <i class=\"fas fa-arrow-right\"></i>",
        dest_tag: "Explore",
        dest_title: "Popular <span>Destinations</span>",
        dest_desc: "Discover the rich tapestry of landscapes and cultures that make up our beautiful island.",
        sigiriya_title: "Sigiriya",
        sigiriya_sub: "Ancient Rock Fortress",
        ella_title: "Ella",
        ella_sub: "Misty Mountains & Tea",
        galle_title: "Galle",
        galle_sub: "Historic Dutch Fort",
        mirissa_title: "Mirissa",
        mirissa_sub: "Whales & Golden Sands",
        btn_explore: "Explore",
        pkg_tag: "Journeys",
        pkg_title: "Our Featured <span>Packages</span>",
        pkg_desc: "Curated itineraries designed to give you the ultimate Sri Lankan experience.",
        pkg1_badge: "7 Days / 6 Nights",
        pkg1_title: "Sri Lanka Essentials",
        pkg1_desc: "The perfect introduction to Sri Lanka, covering the cultural triangle, tea country, and southern coast.",
        pkg1_dest: "Colombo, Sigiriya, Kandy, Ella, Galle",
        pkg1_exp: "5+ Premium Experiences",
        pkg1_price: "From $890",
        btn_view_details: "View Details",
        pkg2_badge: "6 Days / 5 Nights",
        pkg2_title: "Wild Sri Lanka",
        pkg2_desc: "An immersive wildlife safari experience focusing on leopards, elephants, and exotic birds.",
        pkg2_dest: "Yala, Udawalawe, Minneriya, Wilpattu",
        pkg2_exp: "Luxury Tented Camps",
        pkg2_price: "From $1,150",
        pkg3_badge: "8 Days / 7 Nights",
        pkg3_title: "Romantic Escape",
        pkg3_desc: "Boutique hotels, private dinners, and secluded beaches for the perfect honeymoon.",
        pkg3_dest: "Kandy, Nuwara Eliya, Bentota",
        pkg3_exp: "Romantic Experiences",
        pkg3_price: "From $1,450",
        stat_happy_travelers: "Happy Travelers",
        stat_destinations: "Destinations",
        stat_custom_trips: "Custom Trips",
        stat_years_experience: "Years Experience",
        art_tag: "Travel Journal",
        art_title: "Explore <span>Sri Lanka</span>",
        art_desc: "Read our latest travel guides, tips, and stories.",
        art1_cat: "Guides",
        art1_title: "The Complete Guide to the Kandy to Ella Train Journey",
        art1_desc: "Everything you need to know about taking the most scenic train ride in the world.",
        art1_read: "5 min read",
        art2_cat: "Culture",
        art2_title: "10 Sri Lankan Dishes You Must Try",
        art2_desc: "A culinary journey through the spices, curries, and street food of the island.",
        art2_read: "4 min read",
        art3_cat: "Wildlife",
        art3_title: "Spotting Leopards in Yala National Park",
        art3_desc: "Expert tips for maximizing your chances of seeing the elusive Sri Lankan leopard.",
        art3_read: "6 min read",
        contact_tag: "Let's Connect",
        contact_title: "Plan Your <span>Journey</span>",
        contact_desc: "Ready to discover Sri Lanka? Send us an inquiry and our travel experts will craft the perfect itinerary for you.",
        contact_phone_title: "WhatsApp / Phone",
        contact_email_title: "Email",
        contact_office_title: "Office",
        contact_office_address: "kariyapperuma holdings, Ambanpola, Sri Lanka",
        form_title: "Send an Inquiry",
        form_note: "This is a request form, not a final booking.",
        label_name: "Full Name",
        placeholder_name: "John Doe",
        label_email: "Email",
        placeholder_email: "john@example.com",
        label_phone: "WhatsApp / Phone",
        placeholder_phone: "0714966436",
        label_dates: "Travel Dates",
        placeholder_dates: "E.g., Dec 2026",
        label_package: "Preferred Package (Optional)",
        opt_custom: "Custom Itinerary",
        opt_essentials: "Sri Lanka Essentials",
        opt_wild: "Wild Sri Lanka",
        opt_romantic: "Romantic Escape",
        label_message: "Special Requests / Interests",
        placeholder_message: "Tell us what you'd like to experience...",
        btn_submit_inquiry: "Submit Inquiry",
        footer_brand_desc: "Curating premium, authentic, and unforgettable travel experiences across the teardrop island.",
        footer_quick_links: "Quick Links",
        footer_support: "Support",
        footer_about: "About Us",
        footer_contact: "Contact Us",
        footer_faqs: "FAQs",
        footer_newsletter_title: "Newsletter",
        footer_newsletter_desc: "Subscribe for travel inspiration and offers.",
        placeholder_newsletter: "Your Email Address",
        footer_copy: "© 2026 Taprobane Compass. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        modal_best_time_label: "Best Time:",
        modal_experiences_label: "Experiences:",
        modal_btn_plan: "Plan a Trip Here"
    },
    ar: {
        nav_destinations: "الوجهات",
        nav_packages: "الباقات السياحية",
        nav_experiences: "التجارب",
        nav_journal: "مجلة السفر",
        btn_plan_trip: "خطط لرحلتك",
        hero_title: "اكتشف سريلانكا، <br><span>على طريقتك</span>",
        hero_subtitle: "من الجبال الضبابية والشواطئ الذهبية الساحرة إلى الممالك الأثرية والمغامرات الاستثنائية.",
        btn_explore_packages: "استكشف الباقات",
        btn_discover_destinations: "اكتشف الوجهات",
        story_tag: "قصتنا",
        story_title: "أكثر من مجرد <span>وجهة</span>",
        story_p1: "سريلانكا ليست مجرد وجهة تزورها فحسب، بل هي أرض تكتشف أسرارها بتأنٍ — مع كل شروق شمس، وكل فنجان شاي سيلاني فاخر، وكل طريق جبلي ساحر. هنا، دفء شعبها يضاهي شمسها الذهبية، وكل مسار يدعوك لمغامرة لا تُنسى.",
        story_p2: "من قطعان الفيلة والنمور التي تتجول بحرية في يالا إلى أصالة التاريخ العريق في سيجيريا، نصمم لك برامج سياحية تربطك بأعماق وروح هذه الجزيرة الخلابة.",
        btn_start_journey: "ابدأ رحلتك معنا <i class=\"fas fa-arrow-right\"></i>",
        dest_tag: "استكشف",
        dest_title: "أشهر <span>الوجهات</span>",
        dest_desc: "اكتشف روعة التنوع الطبيعي والثقافي الذي يجعل من جزيرتنا الفردوسية جنة حقيقية للاستجمام والمغامرة.",
        sigiriya_title: "سيجيريا",
        sigiriya_sub: "قلعة الصخرة القديمة",
        ella_title: "إيلا",
        ella_sub: "الجبال الضبابية ومزارع الشاي",
        galle_title: "غالي",
        galle_sub: "الحصن الهولندي التاريخي",
        mirissa_title: "ميريسا",
        mirissa_sub: "مشاهدة الحيتان والشواطئ الذهبية",
        btn_explore: "استكشف الوجهة",
        pkg_tag: "رحلاتنا",
        pkg_title: "باقاتنا <span>المميزة</span>",
        pkg_desc: "برامج سياحية متكاملة ومصممة بعناية لتمنحك أرقى وأجمل تجارب الإقامة والاستكشاف في سريلانكا.",
        pkg1_badge: "7 أيام / 6 ليالٍ",
        pkg1_title: "روائع سريلانكا الأساسية",
        pkg1_desc: "الخيار الأمثل لزيارتك الأولى، تشمل المثلث الثقافي، مرتفعات الشاي الجبلية الخضراء، والساحل الجنوبي.",
        pkg1_dest: "كولومبو، سيجيريا، كاندي، إيلا، غالي",
        pkg1_exp: "أكثر من 5 تجارب متميزة",
        pkg1_price: "ابتداءً من $890",
        btn_view_details: "عرض التفاصيل",
        pkg2_badge: "6 أيام / 5 ليالٍ",
        pkg2_title: "سريلانكا البرية وسفاري الطبيعة",
        pkg2_desc: "مغامرة سفاري غامرة تركز على مشاهدة النمور السريلانكية، الفيلة البرية، والطيور والحيوانات النادرة.",
        pkg2_dest: "يالا، أوداوالاوي، مينيريا، ويلباتو",
        pkg2_exp: "مخيمات سفاري وفنادق فاخرة",
        pkg2_price: "ابتداءً من $1,150",
        pkg3_badge: "8 أيام / 7 ليالٍ",
        pkg3_title: "رحلة الرومانسية وشهر العسل",
        pkg3_desc: "فنادق بوتيك فاخرة، عشاء خاص على ضوء الشموع، وشواطئ هادئة منعزلة لقضاء أجمل شهر عسل.",
        pkg3_dest: "كاندي، نوارا إليا، بينتوتا",
        pkg3_exp: "تجارب وأنشطة رومانسية خاصة",
        pkg3_price: "ابتداءً من $1,450",
        stat_happy_travelers: "مسافر سعيد وموثوق",
        stat_destinations: "وجهة سياحية ساحرة",
        stat_custom_trips: "برنامج سياحي مخصص",
        stat_years_experience: "سنوات من الخبرة والتميز",
        art_tag: "مجلة السفر",
        art_title: "اكتشف <span>سريلانكا</span>",
        art_desc: "اقرأ أحدث المقالات السياحية، نصائح السفر، ودليل الجولات الميدانية في الجزيرة.",
        art1_cat: "أدلة السفر",
        art1_title: "الدليل الشامل لرحلة القطار الأسطورية من كاندي إلى إيلا",
        art1_desc: "كل ما تحتاج لمعرفته حول تجربة أجمل وأشهر رحلة قطار جبلية في العالم عبر مزارع الشاي.",
        art1_read: "5 دقائق قراءة",
        art2_cat: "الثقافة والمطبخ",
        art2_title: "10 أطباق سريلانكية تقليدية يجب عليك تذوقها",
        art2_desc: "رحلة استكشافية في عالم النكهات والبهارات السيلانية الأصيلة والمأكولات الشعبية اللذيذة.",
        art2_read: "4 دقائق قراءة",
        art3_cat: "الحياة البرية",
        art3_title: "دليلك لمشاهدة النمور في متنزه يالا الوطني الشهير",
        art3_desc: "نصائح المرشدين الخبراء لزيادة فرصك في مشاهدة النمر السريلانكي النادر في بيئته البرية.",
        art3_read: "6 دقائق قراءة",
        contact_tag: "تواصل معنا",
        contact_title: "خطط <span>لرحلتك</span>",
        contact_desc: "هل أنت مستعد لاكتشاف جمال سريلانكا؟ أرسل استفسارك الآن وسيقوم خبراؤنا بتصميم البرنامج السياحي المثالي لك.",
        contact_phone_title: "واتساب / هاتف",
        contact_email_title: "البريد الإلكتروني",
        contact_office_title: "المكتب الرئيسي",
        contact_office_address: "كاريابيروما القابضة، أمبانبولا، سريلانكا (kariyapperuma holdings, Ambanpola, Sri Lanka)",
        form_title: "أرسل استفسارك السياحي",
        form_note: "هذا نموذج لطلب الاستفسار والتخطيط، وليس حجزاً نهائياً.",
        label_name: "الاسم الكامل",
        placeholder_name: "مثال: عبد الله أحمد",
        label_email: "البريد الإلكتروني",
        placeholder_email: "abdullah@example.com",
        label_phone: "رقم الواتساب / الهاتف",
        placeholder_phone: "0714966436",
        label_dates: "تاريخ السفر المتوقع",
        placeholder_dates: "مثال: ديسمبر 2026",
        label_package: "الباقة المفضلة (اختياري)",
        opt_custom: "برنامج مخصص حسب رغبتي",
        opt_essentials: "روائع سريلانكا الأساسية",
        opt_wild: "سريلانكا البرية وسفاري الطبيعة",
        opt_romantic: "رحلة الرومانسية وشهر العسل",
        label_message: "طلبات خاصة / الأنشطة المفضلة",
        placeholder_message: "أخبرنا بعدد المسافرين والتجارب التي ترغب بالاستمتاع بها...",
        btn_submit_inquiry: "إرسال طلب الرحلة",
        footer_brand_desc: "نصنع لك أرقى الرحلات السياحية الفاخرة والذكريات التي تدوم مدى الحياة عبر لؤلؤة المحيط الهندي.",
        footer_quick_links: "روابط سريعة",
        footer_support: "المساعدة والمعلومات",
        footer_about: "من نحن",
        footer_contact: "تواصل معنا",
        footer_faqs: "الأسئلة الشائعة",
        footer_newsletter_title: "النشرة البريدية",
        footer_newsletter_desc: "اشترك لتصلك أحدث العروض والبرامج السياحية الحصرية.",
        placeholder_newsletter: "أدخل بريدك الإلكتروني",
        footer_copy: "© 2026 تامروبان كومباس (Taprobane Compass). جميع الحقوق محفوظة.",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "الشروط والأحكام",
        modal_best_time_label: "أفضل وقت للزيارة:",
        modal_experiences_label: "أبرز التجارب والأنشطة:",
        modal_btn_plan: "خطط لرحلة إلى هنا"
    }
};

// Current active language
let currentLang = localStorage.getItem('site_lang') || 'en';

// --- Localization Function ---
function applyLanguage(lang) {
    const htmlTag = document.documentElement;
    const langBtnText = document.getElementById('lang-text');

    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        if (langBtnText) langBtnText.innerText = 'English';
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        if (langBtnText) langBtnText.innerText = 'العربية';
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    localStorage.setItem('site_lang', lang);
    currentLang = lang;
}

// 1-Click Toggle function
window.toggleLanguage = function() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(newLang);
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Apply saved language preference
    applyLanguage(currentLang);

    // --- Sticky Header ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Lower inc to slow and higher to fast
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };

            // Only animate if in view
            const elementTop = counter.getBoundingClientRect().top;
            if (elementTop < window.innerHeight && counter.innerText === '0') {
                updateCount();
            }
        });
    };

    window.addEventListener('scroll', animateCounters);

    // --- Inquiry Form Submission ---
    // (Form now submits directly to FormSubmit endpoint)

});

// --- Modal for Packages (Global function) ---
window.openModal = function(packageName) {
    const isArabic = currentLang === 'ar';
    const message = isArabic
        ? `تفاصيل باقة: ${packageName}\nفي النسخة الكاملة، سيتم فتح صفحة تفاصيل البرنامج السياحي.`
        : `View details for: ${packageName}\nIn the full version, this opens a detailed itinerary page.`;
    alert(message);
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

// --- Destination Data (Bilingual) ---
const destinationsData = {
    'sigiriya': {
        en: {
            title: 'Sigiriya',
            subtitle: 'Ancient Rock Fortress',
            description: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock around 200 metres high. Selected by King Kashyapa (477 – 495 AD) for his royal palace and fortress.',
            bestTime: 'January to April',
            experiences: 'Hiking, Ancient Ruins, Frescoes, Photography'
        },
        ar: {
            title: 'سيجيريا',
            subtitle: 'قلعة الصخرة القديمة وعجيبة سريلانكا',
            description: 'سيجيريا أو صخرة الأسد هي قلعة وموقع أثري وتاريخي عالمي يرتفع حوالي 200 متر عن الغابات المحيطة بالقرب من دامبولا. اختارها الملك كاشيابا (477 - 495 م) لتكون عاصمة ملكية وحصناً منيعاً، وتشتهر بجدارياتها الفنية القديمة وحدائقها المائية الساحرة وإطلالتها البانورامية المذهلة.',
            bestTime: 'من يناير إلى أبريل',
            experiences: 'تسلق الصخرة، الآثار التاريخية، اللوحات الجدارية، التصوير الفوتوغرافي'
        },
        image: 'assets/images (9).jfif',
        gallery: [
            'assets/images (9).jfif',
            'assets/images (10).jfif',
            'assets/images (11).jfif',
            'assets/images (12).jfif'
        ]
    },
    'ella': {
        en: {
            title: 'Ella',
            subtitle: 'Misty Mountains & Tea',
            description: 'Ella is a picturesque mountain village in the Badulla District surrounded by cloud forests, cascading waterfalls, and lush Ceylon tea plantations. Situated at over 1,000 meters above sea level, it offers cool mountain breezes and some of the finest hiking trails on the island.',
            bestTime: 'January to May',
            experiences: 'Nine Arch Bridge, Little Adam’s Peak, Tea Factories, Ravana Falls'
        },
        ar: {
            title: 'إيلا',
            subtitle: 'الجبال الضبابية ومزارع الشاي الخضراء',
            description: 'بلدة إيلا الجبلية الهادئة المحاطة بقمم الضباب وشلالات المياه المتدفقة ومزارع الشاي السيلاني الشاسعة. تقع على ارتفاع أكثر من 1,000 متر فوق سطح البحر، وتتميز بجوها العليل ومسارات المشي الساحرة، وهي محطة رئيسية لأشهر رحلات القطار في العالم.',
            bestTime: 'من يناير إلى مايو',
            experiences: 'جسر الأقواس التسعة، قمة آدم الصغيرة، مصانع الشاي السيلاني، شلالات رافانا'
        },
        image: 'assets/images (10).jfif',
        gallery: [
            'assets/images (10).jfif',
            'assets/images (11).jfif',
            'assets/images (9).jfif',
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif'
        ]
    },
    'galle': {
        en: {
            title: 'Galle',
            subtitle: 'Historic Dutch Fort',
            description: 'Galle is a jewel on the southwest coast of Sri Lanka. Known for its UNESCO World Heritage Galle Fort, the stone ramparts encircle pedestrian-friendly cobblestone streets with boutique cafes, historic churches, and colonial-era architecture overlooking the Indian Ocean.',
            bestTime: 'December to April',
            experiences: 'Galle Fort Walk, Historic Lighthouse, Boutiques, Ocean Sunsets'
        },
        ar: {
            title: 'غالي',
            subtitle: 'الحصن الهولندي التاريخي وسحر الاستعمار',
            description: 'غالي هي درة الساحل الجنوبي الغربي لسريلانكا، وتشتهر بحصن غالي المدرج ضمن مواقع التراث العالمي لليونسكو. تحيط أسوار الحجر القديمة بشوارع مرصوفة بالحصى تزخر بالمقاهي العصرية ومتاجر المجوهرات والهندسة المعمارية الاستعمارية الأوروبية المطلة على المحيط الهندي.',
            bestTime: 'من ديسمبر إلى أبريل',
            experiences: 'المشي على أسوار الحصن، المنارة التاريخية، التسوق والمقاهي، غروب الشمس'
        },
        image: 'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
        gallery: [
            'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
            'assets/images (13).jfif',
            'assets/images (12).jfif'
        ]
    },
    'mirissa': {
        en: {
            title: 'Mirissa',
            subtitle: 'Whales & Golden Sands',
            description: 'Mirissa is a tropical paradise on the south coast renowned for coconut tree hills, crystal-clear surf breaks, and world-class blue whale and dolphin watching expeditions. It boasts relaxed beachside cafes and breathtaking golden sunsets.',
            bestTime: 'November to April',
            experiences: 'Blue Whale Watching, Coconut Tree Hill, Surfing, Secret Beach'
        },
        ar: {
            title: 'ميريسا',
            subtitle: 'مشاهدة الحيتان والشواطئ الاستوائية الذهبية',
            description: 'ميريسا هي جنة استوائية على الساحل الجنوبي تشتهر بتلال نخيل جوز الهند وشواطئها الهادئة ذات الرمال الذهبية. تُعد إحدى أفضل الوجهات العالمية لرحلات مشاهدة الحيتان الزرقاء والدلافين في بيئتها الطبيعية، مع أجواء استرخاء ومطاعم شاطئية راقية.',
            bestTime: 'من نوفمبر إلى أبريل',
            experiences: 'مشاهدة الحيتان الزرقاء، تلة نخيل جوز الهند، ركوب الأمواج، الشاطئ السري'
        },
        image: 'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
        gallery: [
            'assets/2a4e8148-1891-4cd0-890e-3bb8c23c8fca.jfif',
            'assets/images (13).jfif',
            'assets/29679305-a018-4ba0-9fb9-8cd730d72efa.jfif',
            'assets/images (10).jfif'
        ]
    }
};

// --- Destination Modal Logic (Bilingual) ---
window.openDestModal = function(destId) {
    const data = destinationsData[destId];
    if (data) {
        const langData = data[currentLang] || data['en'];
        
        document.getElementById('modal-img').src = data.image;
        document.getElementById('modal-title').innerText = langData.title;
        document.getElementById('modal-subtitle').innerText = langData.subtitle;
        document.getElementById('modal-desc').innerText = langData.description;
        document.getElementById('modal-best-time').innerText = langData.bestTime;
        document.getElementById('modal-experiences').innerText = langData.experiences;
        
        // Build gallery
        const galleryContainer = document.getElementById('modal-gallery');
        galleryContainer.innerHTML = '';
        if (data.gallery && data.gallery.length > 0) {
            data.gallery.forEach(function(imgSrc, index) {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = langData.title + ' photo ' + (index + 1);
                thumb.className = 'gallery-thumb' + (index === 0 ? ' active' : '');
                thumb.addEventListener('click', function() {
                    document.getElementById('modal-img').src = imgSrc;
                    document.querySelectorAll('.gallery-thumb').forEach(function(t) { t.classList.remove('active'); });
                    thumb.classList.add('active');
                });
                galleryContainer.appendChild(thumb);
            });
        }
        
        document.getElementById('dest-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeDestModal = function() {
    document.getElementById('dest-modal').classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('dest-modal');
    if (event.target === modal) {
        window.closeDestModal();
    }
});

