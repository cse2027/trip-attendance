// ================= DATA =================

// Dummy Train Data
const trainData = {
    Nellore: [
        "MANVITH KUMAR REDDY DEVARAPALLI"
    ],

    Nidubrolu: [
        "ALAMURI YAMINI",
        "ANKALA PREETHI",
        "KALINTA SHALINI"
    ],

    Ongole: [
        "Y.PUJITHA"
    ],

    Singarayakonda: [
        "JAYAPRAKASH"
    ],

    Tenali: [
        "AKURATI BHAVYASREE",
        "ALAKUNTA HARSHITHA SAI",
        "A.ASHOK REDDY",
        "ANGOTHU SAI BALAJI NAYAK",
        "SARVANTHI",
        "BANDI LAKSHMIDHAR REDDY",
        "MANOGNA",
        "CH SANATH KUMAR",
        "CHENDIKA NOUNITH KASI VISWANADH",
        "DAVULURI MARUTHI PRASAD",
        "D.NAGA SRINIDHI",
        "MEGHANA MATHI",
        "PAPADASU SATISH",
        "TUMMA BHANU VENKATA PAVAN REDDY",
        "VIPPARLA VENKATESWARLU",
        "KUVALESH MYLA",
        "ANGIREKULA LAKSHMI SIVA NAGA MANIKANTA",
        "GAMINI MAHESWARI SRI",
        "AKSHAI MANIDEV BORUGADDA",
        "Sanganu Lakshman Reddy"
    ],

    Vijayawada: [
        "ADARSH KIRAN TAPPITA",
        "SHAKEENA RANI",
        "AMRUTHALURI SAMARPAN",
        "A. LAKSHMI SUSHMA SRI",
        "BAPATHU SRIMANI JASHITHA",
        "PRUDHVI",
        "UDAY KIRAN",
        "SRI VARSHA BATTINENI",
        "BATTULA TEJA SWAROOP",
        "BEJAWADA MANOJ PRAVEEN",
        "BH. VAISHNAVI REDDY",
        "BHUPATHI PRAGYNA",
        "BITRA SRI LAKSHMI NIVAS",
        "BOLLA JAHNAVI",
        "UMA CHANDRA",
        "CH.HARSHITHA REDDY",
        "CHANDRAPATI LAKSHMI KEERTHANA",
        "CHATTU BHAVANI",
        "CHATTU KUMARA VISHNU",
        "CH RAHUL CHANDU",
        "MOHITH CHIMATA",
        "CHITTIBOMMA UMA MAHESWARA RAO",
        "CH. VENKATESH",
        "HARIKA DADI",
        "D A V S SAI SANJEEV",
        "DASARI BHARGAVI JYOSHNA",
        "D MANISH KUMAR REDDY",
        "DINESH CHANDRA",
        "SREE NIKHIL",
        "G MRUDU NAYANA",
        "LOKADITYA",
        "G. LOKESH",
        "G.THRILOK KUMAR",
        "KEERTHI GUDDANTI",
        "HIMA SRILAKSHMI",
        "G KUNDANA SRIVALLI",
        "G.SNEHA",
        "J JAHNAVI",
        "J.SUBHA SRI PRIYA",
        "JUJJURI LEELA NAGA MANOJ KUMAR",
        "KALVAPALLI KARTHIKEYA REDDY",
        "K ASWANI BAI",
        "K TEJASWI VYSHNAVI",
        "K POOJITHA MENON",
        "K.KOMALI",
        "LUKKA VEENA RAJASRI",
        "M DHARANI SRI",
        "MADIVADA KAVYA SREE",
        "MANDALA RESHMA",
        "M.SATHVIKA",
        "M S N SAHITHI",
        "MUNTHA SIVA SAI NIKHIL",
        "M. LAKSHMANACHARI",
        "MURUGULA DIVYA",
        "NALLURI KAUSIK",
        "NAMBURU GAGAN SAI",
        "NOORBASHA KARISHMA",
        "N REVANTH REDDY",
        "PARAVASTHU YOGENDRA SURI",
        "NAVYA PARUCHURI",
        "PATHURI SATWIK SHARAN",
        "VASTALYA PENDEM",
        "P.K.LAYA SADHANA",
        "SRAVYA PRODDUTURI",
        "PULLALACHERUVU ROHINI",
        "PUTTA SUJITHA",
        "SHAIK FARHANARUHI",
        "SHAIK FASEEHA IFFAT",
        "SHAIK PYARIJAN",
        "S. KUSUMA SRI",
        "SYAMALA LAKSHMI SRAVYA",
        "TIRUVEEDHULA YASWANTH",
        "VADLAMUDI RAMYA",
        "VALLAPUNENI BHARATHI",
        "VELAGA ABHINAYA SATHVIKA CHOWDARY",
        "JYOTIRMY SRAVANI VINJAMURI",
        "VUYYALA DIVYA",
        "YALAMANCHILI SEHITHA",
        "PULI SINDHOORI",
        "YESWIN DASYAM",
        "R.GAYATHRI",
        "UDAY KIRAN MITNALA",
        "ADARI SAI KOTI",
        "B SRI RAMYA",
        "CH. DIVYA KRISHNA",
        "K.SRAVAN KUMAR",
        "CHAITHANYA NEELURI",
        "POTHINA PAVAN KALYAN",
        "PUVVULA SAI SURYA ROHITH",
        "DHANUMJAY SURAGANI",
        "M.MAHENDRA SIVA",
        "Sai Prasad",
        "Sanjay",
        "Nikhita"
    ]
};


// Dummy Travel Data
const travelData = {
    A: [
        "ADARSH KIRAN TAPPITA",
        "AKSHAII MANIDEV BORUGADDA",
        "AKURATI BHAVYASREE",
        "ALAKUNTA HARSHITHA SAI",
        "ALAMURI YAMINI",
        "ALETI SHAKEENA RANI",
        "ALLAM ASHOK REDDY",
        "AMRUTHALURI SAMARPAN",
        "JAYAPRAKASH",
        "ANGOTHU SAI BALAJI NAYAK",
        "ANKALA PREETHI",
        "A.LAKSHMI SUSHMA SRI",
        "SARVANTHI",
        "BANDI LAKSHMIDHAR REDDY",
        "BAPATHU SRIMANI JASHITHA",
        "PRUDHVI.B",
        "BATCHALAKURI UDAY KIRAN",
        "SRI VARSHA BATTINENI",
        "BATTULA TEJA SWAROOP",
        "MANOJ PRAVEEN BEJAWADA",
        "BH.VAISHNAVI REDDY",
        "BHUPATHI PRAGYNA",
        "BITRA SRI LAKSHMI NIVAS",
        "MANOGNA",
        "BOLLA.JAHNAVI",
        "UMA CHANDRA",
        "HARSHITHA REDDY",
        "CH SANATH KUMAR",
        "CH.LAKSHMI KEERTHANA",
        "BHAVANI.CH",
        "CHATTU KUMARA VISHNU",
        "CH RAHUL CHANDU",
        "CHENDIKA NOUNITH KASI VISWANADH",
        "MOHITH CHIMATA",
        "CHITTIBOMMA UMA",
        "CH VENKATESH",
        "HARIKA DADI",
        "D SAI SANJEEV",
        "DASARI BHARGAVI JYOSHNA",
        "DAVULURI MARUTHI PRASAD",
        "DAVULURI NAGA SRNIDHI",
        "MANVITH KUMAR REDDY",
        "ADARI SAI KOTI",
        "ANGIREKULA LAKSHMI SIVA NAGA MANIKANTA",
        "BANDARU SRI RAMYA",
        "CH DIVYAKRISHNA",
        "GAMINI MAHESWARI SRI",
        "JONNALAGADDA SAI PRASAD",
        "KALINTA SHALINI",
        "KODALI SANJAY"
    ],
    B: [
        "EVURI SREE NIKHIL",
        "G MRUDU NAYANA",
        "G LOKADITYA",
        "GOPARAJU LOKESH PHANI SAI KRISHNA",
        "G THRILOK",
        "KEERTHI GUDDANTI",
        "HIMA SRILAKSHMI",
        "SRIVALLI",
        "G.SNEHA",
        "J JAHNAVI",
        "SUBHA SRI PRIYA",
        "JUJJURI LEELA NAGA MANOJ KUMAR",
        "KALVAPALLI KARTHIKEYA REDDY",
        "DINESH CHANDRA",
        "K.ASWINI BAI",
        "K TEJASWI VYSHNAVI",
        "NIKHITHA KOSURI",
        "K. POOJITHA MENON",
        "K.KOMALI",
        "LUKKA VEENA RAJASRI",
        "M DHARANI SRI",
        "K.SRAVAN KUMAR"
    ],
    C: [
        "MADIVADA KAVYA SREE",
        "MAHENDRA SIVA",
        "MANDALA RESHMA",
        "MATHI MEGHANA",
        "M.SATHVIKA",
        "UDAY KIRAN MITNALA",
        "MUNTHA SIVA SAI NIKHIL",
        "LAKSHMANACHARI",
        "MURUGULA DIVYA",
        "KAUSIK NALLURI",
        "NAMBURU GAGAN SAI",
        "NOORBASHA KARISHMA",
        "N REVANTH REDDY",
        "PARAVASTHU YOGENDRA SURI",
        "SATISH TAPADASU",
        "NAVYA PARUCHURI",
        "PATHURI SATWIK SHARAN",
        "VASTALYA PENDEM",
        "P.K.LAYA SADHANA",
        "P.SRAVYA",
        "PULLALACHERUVU ROHINI",
        "CHAITANYA NELLURI",
        "POTHINA. PAVAN KALYAN",
        "DHANUMJAY SURAGANI",
        "MSN SAHATI"
    ],
    D: [
        "PUTTA SUJITHA",
        "RANGALA ANJI",
        "SANGANI LAKSHMAN REDDY",
        "FARHANARUHI SHAIK",
        "SHAIK FASEEHA IFFAT",
        "SHAIK PYARIJAN",
        "KUSUMA SRI . S",
        "SYAMALA LAKSHMI SRAVYA",
        "TIRUVEEDHULA YASWANTH",
        "TUMMA BHANU VENKATA PAVAN REDDY",
        "VADLAMUDI RAMYA",
        "VALLAPUNENI BHARATHI",
        "VELAGA ABHINAYA SATHVIKA CHOWDARY",
        "JYOTIRMY SRAVANI VINJAMURI",
        "VIPPARLA VENKATESWARLU",
        "VUYYALA DIVYA",
        "YALAMANCHILI SEHITHA",
        "YENUGANTI PUJITHA",
        "KUVALESH",
        "SINDHOORI PULI",
        "YESWIN DASYAM",
        "REDDY GAYATHRI",
        "MARUBOYINA VENKATA BHAVANI",
        "PUVVULA SAI SURYA ROHITH"
    ]
};


// ================= PAGE SWITCH =================

function showPage(page) {

    document.getElementById("home-page").style.display = "none";
    document.getElementById("train-page").classList.remove("active");
    document.getElementById("travel-page").classList.remove("active");

    if (page === "home") {
        document.getElementById("home-page").style.display = "block";
    }

    if (page === "train") {
        document.getElementById("train-page").classList.add("active");
    }

    if (page === "travel") {
        document.getElementById("travel-page").classList.add("active");
    }
}

// ================= LOAD TRAIN =================

function loadTrain() {

    const station = document.getElementById("train-select").value;
    const container = document.getElementById("train-container");

    if (!station) {
        container.innerHTML = "";
        return;
    }

    createAttendanceUI(trainData[station], "train", station, container);
}

// ================= LOAD TRAVEL =================

function loadTravel() {

    const section = document.getElementById("travel-select").value;
    const container = document.getElementById("travel-container");

    if (!section) {
        container.innerHTML = "";
        return;
    }

    createAttendanceUI(travelData[section], "travel", section, container);
}

// ================= COMMON UI GENERATOR =================

function createAttendanceUI(list, type, label, container) {

    let html = "";

    list.forEach((name, index) => {
        html += `
        <div class="row">
            <div><strong>${name}</strong></div>
            <div>
                <label>
                    <input type="radio" name="${type}-${index}" value="Arrived">
                    Arrived
                </label>

                <label style="margin-left:10px;">
                    <input type="radio" name="${type}-${index}" value="Not Arrived" checked>
                    Not Arrived
                </label>
            </div>
        </div>
        `;
    });

    html += `
    <div class="action-buttons">
        <button class="save-btn" onclick="saveAttendance('${type}','${label}')">
            ✅ Save Attendance
        </button>

        <button class="pdf-btn" onclick="downloadPDF('${type}','${label}')">
            📄 Download PDF
        </button>
    </div>
    `;

    container.innerHTML = html;
}

// ================= SAVE ATTENDANCE =================

function saveAttendance(type, label) {

    let dataList = type === "train" ? trainData[label] : travelData[label];
    let data = [];

    dataList.forEach((name, index) => {

        const selected = document.querySelector(
            `input[name="${type}-${index}"]:checked`
        );

        if (!selected) return;

        data.push({
            name: name,
            status: selected.value,
            place: label,            // 🔥 IMPORTANT
            category: type.toUpperCase()
        });
    });

    console.log(data);  // 🔥 ADD THIS LINE

    fetch("https://script.google.com/macros/s/AKfycbyNJoZOYoIaHhAXzeWXMjz1DltgWsnqKKhgzMVTR5PIaBcPKf5wFxHzW3nnW6A3VArQPA/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    alert("Saved!");
}


// ================= DOWNLOAD PDF =================

function downloadPDF(type, label) {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 15;

    doc.setFontSize(16);
    doc.text(`${type.toUpperCase()} Attendance - ${label}`, 10, y);
    y += 10;

    doc.setFontSize(12);

    let dataList = type === "train" ? trainData[label] : travelData[label];

    dataList.forEach((name, index) => {

        const selected = document.querySelector(
            `input[name="${type}-${index}"]:checked`
        );

        const status = selected ? selected.value : "Not Marked";

        doc.text(`${name} - ${status}`, 10, y);
        y += 8;
    });

    doc.save(`${type}_${label}_attendance.pdf`);
}

// ================= INITIAL LOAD =================

window.onload = function () {
    showPage("home");
};
