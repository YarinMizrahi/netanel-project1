document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Redirect 'More Details' buttons to contact section
    document.querySelectorAll(".more-details").forEach(button => {
        button.addEventListener("click", function () {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });


    // Section scroll animation
    const section = document.getElementById("services");
    function checkScroll() {
        let sectionPosition = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.9;
        if (sectionPosition < screenPosition) {
            section.classList.add("show");
        }
    }
    window.addEventListener("scroll", checkScroll);

    // Initialize language on page load
    changeLanguage(document.documentElement.lang || "he");
});
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.category-item').forEach(other => {
            if (other !== item) {
                other.style.flex = '0.7';
            }
        });
        item.style.flex = '3';
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll('.category-item').forEach(other => {
            other.style.flex = '1';
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // מניעת השליחה הרגילה

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("ההודעה נשלחה בהצלחה!");
            form.reset(); // ניקוי הטופס אחרי שליחה מוצלחת
        } else {
            alert("אירעה שגיאה בשליחת ההודעה, נסה שוב מאוחר יותר.");
        }
    }).catch(error => {
        alert("אירעה שגיאה, אנא בדוק את החיבור שלך ונסה שוב.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const detailsButtons = document.querySelectorAll(".details-btn");
    const sectorDetails = document.getElementById("sector-details");
    const sectorImage = document.getElementById("sector-image");
    const sectorTitle = document.getElementById("sector-title");
    const sectorDescription = document.getElementById("sector-description");
    const closeButton = document.getElementById("close-btn");

    

    detailsButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectorKey = this.getAttribute("data-sector");
            if (sectorData[sectorKey]) {
                sectorImage.src = sectorData[sectorKey].img;
                sectorTitle.textContent = sectorData[sectorKey].title;
                sectorDescription.textContent = sectorData[sectorKey].description;

                sectorDetails.classList.remove("hidden");
                sectorDetails.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    closeButton.addEventListener("click", function () {
        sectorDetails.classList.add("hidden");
    });
});
const sectorData = {
    private: {
        img: "assent/images/WhatsApp Image 2025-02-19 at 21.26.29.jpeg",
        title: "מגזר פרטי",
        description : "מערכות אבטחה מתקדמות לבית הפרטי, הכוללות מצלמות חכמות מבוססות בינה מלאכותית לזיהוי פנים, ניתוח תנועה בזמן אמת, והתראות מיידיות במקרה של פעילות חשודה. אנו מספקים פתרונות המאפשרים לך לנטר ולשלוט על הנעשה בביתך מכל מקום בעולם באמצעות אפליקציה ייעודית, כולל גיבוי הקלטות ושילוב חיישני דלתות וחלונות למיגון מקיף."
    },
    business: {
        img: "assent/images/WhatsApp Image 2025-02-19 at 21.16.36.jpeg",
        title: "מגזר עסקי",
        description: "אנו מציעים פתרונות אבטחה חכמים לעסקים קטנים וגדולים, הכוללים מצלמות אבטחה מתקדמות עם יכולות ניתוח וידאו חכמות לזיהוי עובדים, בקרת כניסה מבוססת זיהוי פנים וטביעת אצבע, והתראות בזמן אמת על ניסיונות חדירה לא מורשים. המערכת שלנו מאפשרת לך לנהל ולנטר את רמת האבטחה בבית העסק בצורה אוטומטית ולמנוע אובדן ציוד או חדירת גורמים בלתי רצויים."
    },
    security: {
        img: "assent/images/DALL·E 2025-02-19 02.04.06 - A realistic farmland scene with security cameras monitoring the area. A small ATV is trespassing on the private field, and the cameras are actively de.webp",
        title: "מגזר ביטחוני",
        description: "מערכות האבטחה שלנו למגזר הביטחוני כוללות פתרונות מתקדמים לשמירה על אתרים רגישים כגון אתרים חקלאיים,אתרי בניה, מתקנים אסטרטגיים ואזורי אבטחה קריטיים. אנו משלבים מצלמות אבטחה באיכות גבוהה עם בינה מלאכותית המסוגלת לזהות התנהגויות חשודות, מערכת בקרת כניסה חכמה לניהול גישה מורשית בלבד, וניתוח נתוני וידאו למניעת איומים פוטנציאליים בזמן אמת."
    },
    corporate: {
        img: "assent/images/WhatsApp Image 2025-02-19 at 21.16.32.jpeg",
        title: "מגזר תאגידי",
        description: "פתרונות אבטחה מותאמים במיוחד לתאגידים גדולים ולארגונים בינלאומיים, עם אינטגרציה מלאה למערכות קיימות לניהול אבטחה ארגונית. אנו מספקים מצלמות אבטחה חכמות המאפשרות מעקב בזמן אמת אחר פעילות עובדים, מערכות בקרת כניסה המאפשרות זיהוי עובדים וסינון אורחים באמצעות טכנולוגיית בינה מלאכותית , ופלטפורמות ניתוח נתונים מתקדמות לזיהוי דפוסים חריגים ולמניעת איומים פנים-ארגוניים."
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let infoBtns = document.querySelectorAll(".details-btn"); // כל כפתורי "פרטים נוספים"
    let detailsDiv = document.getElementById("sector-details"); // החלון עצמו
    let closeBtn = document.getElementById("close-btn"); // כפתור סגירה
    let sectorImage = document.getElementById("sector-image"); // תמונה
    let sectorTitle = document.getElementById("sector-title"); // כותרת
    let sectorDescription = document.getElementById("sector-description"); // תיאור

    infoBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            let sectorKey = btn.getAttribute("data-sector"); // קבלת שם המגזר מהכפתור
            let sectorInfo = sectorData[sectorKey]; // קבלת המידע מתוך ה-sectorData

            if (sectorInfo) { // בדיקה שהנתונים קיימים
                console.log("🔹 נתונים שנבחרו:", sectorInfo); // בדיקה בקונסול

                // עדכון הנתונים בפופ-אפ
                sectorImage.src = sectorInfo.img;
                sectorTitle.textContent = sectorInfo.title;
                sectorDescription.textContent = sectorInfo.description;

                // הצגת הפופ-אפ
                detailsDiv.classList.add("show");
            } else {
                console.error("❌ שגיאה: המגזר לא נמצא ב-sectorData!", sectorKey);
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        detailsDiv.classList.remove("show"); // סגירת הפופ-אפ
    });
});

