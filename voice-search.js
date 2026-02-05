// ═══════════════════════════════════════════════════════════════
// 🎤 Voice Search Module V4 - OPTIMIZED!
// ═══════════════════════════════════════════════════════════════
// Keywords: Pre-selected questions (ZERO API COST!)
// Alphabet: Database search with limit 5 (low cost)
// Date: February 5, 2026
// ═══════════════════════════════════════════════════════════════

console.log('Loading Voice-Search V4 (Optimized)...');

// ═══════════════════════════════════════════════════════════════
// 🎯 PRE-SELECTED QUESTIONS FOR KEYWORDS (Zero Cost!)
// ═══════════════════════════════════════════════════════════════

window.KEYWORD_QUESTIONS = {
    
    // כאב (Pain)
    "כאב": [
        { question_hebrew: "היכן בדיוק ממוקם הכאב, והאם הוא מקרין לאזורים אחרים בגוף?", category_hebrew: "אבחון כאב" },
        { question_hebrew: "מהו אופי הכאב - חד, קהה, דוקר, צורב, או לוחץ?", category_hebrew: "אבחון כאב" },
        { question_hebrew: "מה מחמיר את הכאב - קור, חום, לחץ, תנועה, או מנוחה?", category_hebrew: "אבחון כאב" },
        { question_hebrew: "מה מקל על הכאב - חימום, קירור, עיסוי, או מנוחה?", category_hebrew: "אבחון כאב" },
        { question_hebrew: "מתי הכאב מתגבר - בבוקר, בערב, בלילה, או לאחר מאמץ?", category_hebrew: "אבחון כאב" }
    ],
    
    // חרדה (Anxiety)
    "חרדה": [
        { question_hebrew: "האם החרדה מלווה בדפיקות לב, קוצר נשימה, או לחץ בחזה?", category_hebrew: "בריאות רגשית" },
        { question_hebrew: "האם החרדה מתעוררת בזמנים מסוימים ביום או בעקבות מצבים ספציפיים?", category_hebrew: "בריאות רגשית" },
        { question_hebrew: "האם יש קושי להירדם בגלל מחשבות שלא נפסקות או דאגות?", category_hebrew: "בריאות רגשית" },
        { question_hebrew: "האם מרגיש/ה תחושת גוש בגרון או קושי לבלוע בזמני מתח?", category_hebrew: "בריאות רגשית" },
        { question_hebrew: "האם החרדה משפיעה על התיאבון או גורמת לבעיות עיכול?", category_hebrew: "בריאות רגשית" }
    ],
    
    // עייפות (Fatigue)
    "עייפות": [
        { question_hebrew: "האם העייפות גרועה יותר בבוקר, במהלך היום, או לקראת הערב?", category_hebrew: "חיוניות ואנרגיה" },
        { question_hebrew: "האם מנוחה ושינה משפרות את העייפות, או שהיא נמשכת גם אחרי שינה?", category_hebrew: "חיוניות ואנרגיה" },
        { question_hebrew: "האם העייפות מלווה בכבדות בגפיים, סחרחורת, או טשטוש?", category_hebrew: "חיוניות ואנרגיה" },
        { question_hebrew: "האם יש קושי להתרכז או תחושת ערפול מחשבתי יחד עם העייפות?", category_hebrew: "חיוניות ואנרגיה" },
        { question_hebrew: "האם העייפות החלה בעקבות מחלה, לידה, או תקופת לחץ ממושכת?", category_hebrew: "חיוניות ואנרגיה" }
    ],
    
    // שינה (Sleep)
    "שינה": [
        { question_hebrew: "האם הקושי הוא בהירדמות, בהתעוררויות באמצע הלילה, או בשניהם?", category_hebrew: "הפרעות שינה" },
        { question_hebrew: "באיזו שעה בלילה מתעורר/ת, והאם זה קורה באופן קבוע?", category_hebrew: "הפרעות שינה" },
        { question_hebrew: "האם יש חלומות רבים, סיוטים, או חלומות מטרידים?", category_hebrew: "הפרעות שינה" },
        { question_hebrew: "האם מתעורר/ת עם הזעות לילה, תחושת חום, או צמא?", category_hebrew: "הפרעות שינה" },
        { question_hebrew: "האם מרגיש/ה רענן/ה בבוקר, או עייף/ה גם אחרי שינה ארוכה?", category_hebrew: "הפרעות שינה" }
    ],
    
    // עיכול (Digestion)
    "עיכול": [
        { question_hebrew: "האם יש נפיחות בבטן, גזים, או תחושת מלאות לאחר אכילה?", category_hebrew: "בריאות מערכת העיכול" },
        { question_hebrew: "כיצד התיאבון - חזק, חלש, או משתנה? האם יש תשוקה למאכלים מסוימים?", category_hebrew: "בריאות מערכת העיכול" },
        { question_hebrew: "מה מצב היציאות - תדירות, צורה, וצבע? האם יש עצירות או שלשול?", category_hebrew: "בריאות מערכת העיכול" },
        { question_hebrew: "האם יש צרבת, גיהוקים, בחילה, או טעם מר בפה?", category_hebrew: "בריאות מערכת העיכול" },
        { question_hebrew: "האם מאכלים קרים או חמים משפיעים על העיכול לטובה או לרעה?", category_hebrew: "בריאות מערכת העיכול" }
    ],
    
    // עור (Skin)
    "עור": [
        { question_hebrew: "היכן ממוקמות הבעיות בעור, והאם יש דפוס מסוים להופעתן?", category_hebrew: "מחלות עור" },
        { question_hebrew: "האם העור יבש, שומני, או משתנה בין אזורים שונים בגוף?", category_hebrew: "מחלות עור" },
        { question_hebrew: "האם יש גירוד, והאם הוא מחמיר בחום, בקור, בלילה, או בלחץ?", category_hebrew: "מחלות עור" },
        { question_hebrew: "האם בעיות העור קשורות לעונות השנה, מזון, או מצבים רגשיים?", category_hebrew: "מחלות עור" },
        { question_hebrew: "האם היו בעיות עור בעבר, ואיך הן טופלו?", category_hebrew: "מחלות עור" }
    ]
};

// ═══════════════════════════════════════════════════════════════
// 🎤 VOICE RECOGNITION
// ═══════════════════════════════════════════════════════════════

window.voiceRecognition = null;
window.isVoiceListening = false;

window.initVoiceSearch = function() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        window.voiceRecognition = new SpeechRecognition();
        window.voiceRecognition.lang = 'he-IL';
        window.voiceRecognition.continuous = false;
        window.voiceRecognition.interimResults = false;
        
        window.voiceRecognition.onstart = function() {
            window.isVoiceListening = true;
            console.log('Voice started - speak now!');
            var btn = document.getElementById('voiceSearchBtn');
            var input = document.getElementById('smartSearchInput');
            var status = document.getElementById('voiceStatus');
            if (btn) btn.classList.add('listening');
            if (input) input.classList.add('listening');
            if (status) status.textContent = 'מקשיב...';
        };
        
        window.voiceRecognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            console.log('User said:', transcript);
            var input = document.getElementById('smartSearchInput');
            var status = document.getElementById('voiceStatus');
            if (input) input.value = transcript;
            if (status) status.textContent = 'הבנתי: ' + transcript;
            
            setTimeout(function() { 
                window.searchSmartInput(); 
            }, 500);
        };
        
        window.voiceRecognition.onerror = function(event) {
            console.error('Voice error:', event.error);
            var status = document.getElementById('voiceStatus');
            if (status) {
                if (event.error === 'not-allowed') {
                    status.textContent = 'נא לאפשר גישה למיקרופון';
                } else {
                    status.textContent = 'שגיאה - נסה שוב';
                }
            }
        };
        
        window.voiceRecognition.onend = function() {
            window.isVoiceListening = false;
            var btn = document.getElementById('voiceSearchBtn');
            var input = document.getElementById('smartSearchInput');
            if (btn) btn.classList.remove('listening');
            if (input) input.classList.remove('listening');
        };
        
        console.log('Voice recognition initialized');
    }
};

window.toggleVoiceSearch = function() {
    if (!window.voiceRecognition) {
        window.initVoiceSearch();
    }
    
    if (!window.voiceRecognition) {
        alert('חיפוש קולי זמין רק בדפדפן Chrome');
        return;
    }
    
    if (window.isVoiceListening) {
        window.voiceRecognition.stop();
    } else {
        try {
            window.voiceRecognition.start();
        } catch (error) {
            console.error('Error starting voice:', error);
        }
    }
};

// ═══════════════════════════════════════════════════════════════
// 🔍 SMART INPUT SEARCH
// ═══════════════════════════════════════════════════════════════

window.searchSmartInput = function() {
    var input = document.getElementById('smartSearchInput');
    if (!input) return;
    
    var query = input.value.trim();
    if (!query) {
        alert('נא להזין שאילתה');
        return;
    }
    
    console.log('Smart search for:', query);
    
    // Paste into first available query box
    var boxes = ['searchInput1', 'searchInput2', 'searchInput3', 'searchInput4'];
    for (var i = 0; i < boxes.length; i++) {
        var box = document.getElementById(boxes[i]);
        if (box && !box.value.trim()) {
            box.value = query;
            if (typeof window.updateQueryBox === 'function') {
                window.updateQueryBox(i + 1);
            }
            console.log('Pasted into Box ' + (i + 1));
            
            var status = document.getElementById('voiceStatus');
            if (status) {
                setTimeout(function() { status.textContent = ''; }, 2000);
            }
            return;
        }
    }
    
    alert('כל תיבות השאלות מלאות!');
};

// ═══════════════════════════════════════════════════════════════
// 🎯 KEYWORD SEARCH - PRE-SELECTED QUESTIONS (ZERO COST!)
// ═══════════════════════════════════════════════════════════════

window.searchKeyword = function(keyword) {
    console.log('Keyword clicked:', keyword);
    
    // Get pre-selected questions (NO DATABASE CALL!)
    var questions = window.KEYWORD_QUESTIONS[keyword];
    
    if (!questions || questions.length === 0) {
        console.log('No pre-selected questions for:', keyword);
        alert('אין שאלות מוגדרות עבור: ' + keyword);
        return;
    }
    
    console.log('Showing ' + questions.length + ' pre-selected questions for "' + keyword + '"');
    
    // Display questions
    if (typeof window.displayModule1Questions === 'function') {
        window.displayModule1Questions({
            questions: questions,
            category: 'מילת מפתח: "' + keyword + '"',
            has_more: false,
            total_count: questions.length
        });
    } else {
        // Fallback: display in quickQuestions container
        displayKeywordQuestions(questions, keyword);
    }
    
    // Expand Module 1 if collapsed
    var content = document.getElementById('module1Content');
    var arrow = document.getElementById('module1Arrow');
    if (content && content.style.display === 'none') {
        content.style.display = 'block';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        window.module1IsExpanded = true;
    }
    
    // Scroll to results
    var module1Header = document.querySelector('[onclick="toggleModule1Panel()"]');
    if (module1Header) {
        module1Header.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Fallback display function for keyword questions
function displayKeywordQuestions(questions, keyword) {
    var container = document.getElementById('quickQuestions');
    if (!container) {
        console.error('quickQuestions container not found!');
        return;
    }
    
    container.innerHTML = '';
    
    // Add header
    var header = document.createElement('div');
    header.style.cssText = 'background: #fef3c7; color: #92400e; padding: 8px; margin-bottom: 8px; border-radius: 6px; font-weight: bold; text-align: center;';
    header.textContent = 'מילת מפתח: "' + keyword + '" (' + questions.length + ' שאלות)';
    container.appendChild(header);
    
    // Add questions
    questions.forEach(function(q) {
        var div = document.createElement('div');
        div.style.cssText = 'background: white; border: 2px solid #e5e7eb; border-radius: 8px; padding: 10px; margin: 8px 0; cursor: pointer; transition: all 0.2s;';
        div.innerHTML = '<div style="font-weight: 600; font-size: 13px; color: #1f2937; margin-bottom: 4px;">' + q.question_hebrew + '</div>' +
                        '<div style="font-size: 11px; color: #6b7280; background: #f3f4f6; display: inline-block; padding: 2px 8px; border-radius: 4px;">' + q.category_hebrew + '</div>';
        
        div.onclick = function() {
            if (typeof window.pasteModule1ToQueryBox === 'function') {
                window.pasteModule1ToQueryBox(q.question_hebrew);
            } else {
                pasteToQueryBox(q.question_hebrew);
            }
        };
        
        div.onmouseover = function() { this.style.borderColor = '#3b82f6'; this.style.background = '#eff6ff'; };
        div.onmouseout = function() { this.style.borderColor = '#e5e7eb'; this.style.background = 'white'; };
        
        container.appendChild(div);
    });
}

// Simple paste function
function pasteToQueryBox(text) {
    var boxes = ['searchInput1', 'searchInput2', 'searchInput3', 'searchInput4'];
    for (var i = 0; i < boxes.length; i++) {
        var input = document.getElementById(boxes[i]);
        if (input && !input.value.trim()) {
            input.value = text;
            if (typeof window.updateQueryBox === 'function') {
                window.updateQueryBox(i + 1);
            }
            console.log('Pasted to Box ' + (i + 1));
            return;
        }
    }
    alert('כל תיבות השאלות מלאות!');
}

// ═══════════════════════════════════════════════════════════════
// 🔤 ALPHABET SEARCH - DATABASE WITH LIMIT 5 (Low Cost)
// ═══════════════════════════════════════════════════════════════

window.searchByLetter = async function(letter) {
    console.log('Alphabet search for letter:', letter);
    
    if (typeof supabaseClient === 'undefined') {
        console.error('supabaseClient not defined!');
        alert('שגיאת חיבור למסד נתונים');
        return;
    }
    
    try {
        // Search 411 - LIMIT 5
        var result411 = await supabaseClient
            .from('411_hebrew_quick_questions_20260131')
            .select('question_he, category_he')
            .ilike('question_he', letter + '%')
            .order('question_he', { ascending: true })
            .limit(5);
        
        var data411 = result411.data || [];
        
        // Search 589 - LIMIT 5
        var result589 = await supabaseClient
            .from('csv_32_589_hebrew_questions_20260201')
            .select('question_hebrew, category')
            .ilike('question_hebrew', letter + '%')
            .order('question_hebrew', { ascending: true })
            .limit(5);
        
        var data589 = result589.data || [];
        
        // Combine results (max 10 total)
        var combined = [];
        
        data411.forEach(function(q) {
            combined.push({
                question_hebrew: q.question_he,
                category_hebrew: q.category_he || '411',
                source: '411'
            });
        });
        
        data589.forEach(function(q) {
            combined.push({
                question_hebrew: q.question_hebrew,
                category_hebrew: q.category || '589',
                source: '589'
            });
        });
        
        console.log('Found ' + combined.length + ' questions for letter "' + letter + '"');
        
        if (combined.length > 0) {
            if (typeof window.displayModule1Questions === 'function') {
                window.displayModule1Questions({
                    questions: combined,
                    category: 'אות: "' + letter + '" (411+589)',
                    has_more: false,
                    total_count: combined.length
                });
            } else {
                displayAlphabetQuestions(combined, letter);
            }
            
            // Expand Module 1
            var content = document.getElementById('module1Content');
            var arrow = document.getElementById('module1Arrow');
            if (content && content.style.display === 'none') {
                content.style.display = 'block';
                if (arrow) arrow.style.transform = 'rotate(180deg)';
            }
            
            var module1Header = document.querySelector('[onclick="toggleModule1Panel()"]');
            if (module1Header) {
                module1Header.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            alert('לא נמצאו שאלות המתחילות באות: "' + letter + '"');
        }
        
    } catch (error) {
        console.error('Alphabet search error:', error);
        alert('שגיאה בחיפוש');
    }
};

// Display function for alphabet search results
function displayAlphabetQuestions(questions, letter) {
    var container = document.getElementById('quickQuestions');
    if (!container) return;
    
    container.innerHTML = '';
    
    var header = document.createElement('div');
    header.style.cssText = 'background: #e9d5ff; color: #6b21a8; padding: 8px; margin-bottom: 8px; border-radius: 6px; font-weight: bold; text-align: center;';
    header.textContent = 'אות: "' + letter + '" (' + questions.length + ' שאלות)';
    container.appendChild(header);
    
    questions.forEach(function(q) {
        var div = document.createElement('div');
        div.style.cssText = 'background: white; border: 2px solid #e5e7eb; border-radius: 8px; padding: 10px; margin: 8px 0; cursor: pointer; transition: all 0.2s;';
        div.innerHTML = '<div style="font-weight: 600; font-size: 13px; color: #1f2937; margin-bottom: 4px;">' + q.question_hebrew + '</div>' +
                        '<div style="font-size: 11px; color: #6b7280; background: #f3f4f6; display: inline-block; padding: 2px 8px; border-radius: 4px;">' + q.category_hebrew + '</div>';
        
        div.onclick = function() {
            pasteToQueryBox(q.question_hebrew);
        };
        
        div.onmouseover = function() { this.style.borderColor = '#a855f7'; this.style.background = '#faf5ff'; };
        div.onmouseout = function() { this.style.borderColor = '#e5e7eb'; this.style.background = 'white'; };
        
        container.appendChild(div);
    });
}

// ═══════════════════════════════════════════════════════════════
// 🔤 ALPHABET NAVIGATION BUTTONS
// ═══════════════════════════════════════════════════════════════

window.initAlphabetNav = function() {
    var hebrewAlphabet = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
    var container = document.getElementById('alphabetNav');
    
    if (container && container.children.length === 0) {
        hebrewAlphabet.forEach(function(letter) {
            var btn = document.createElement('button');
            btn.textContent = letter;
            btn.className = 'w-8 h-8 bg-white border-2 border-purple-300 text-purple-700 rounded-lg text-sm font-bold hover:bg-purple-100 hover:border-purple-500 transition-all cursor-pointer';
            btn.setAttribute('data-letter', letter);
            btn.onclick = function() { 
                var clickedLetter = this.getAttribute('data-letter');
                window.searchByLetter(clickedLetter); 
            };
            container.appendChild(btn);
        });
        console.log('Alphabet initialized (22 letters)');
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    window.initAlphabetNav();
});
window.initAlphabetNav();

console.log('Voice-Search V4 loaded!');
console.log('  Keywords: Pre-selected (FREE!)');
console.log('  Alphabet: DB search limit 5');
