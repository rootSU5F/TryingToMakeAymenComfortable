// ==UserScript==
// @name         Auto Mark All Absent (No Button)
// @namespace    SaeedScript
// @version      1.3
// @description  Automatically mark all absence checkboxes, even with AJAX
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function markAllAbsent() {
        const boxes = document.querySelectorAll("input[id$=':studentAbsence']");
        let count = 0;

        boxes.forEach(box => {
            if (!box.checked) {
                box.click(); // triggers studentAbsence(this, id)
                count++;
            }
        });

        if (count > 0) {
            console.log(`Auto-Absence: Marked ${count} students absent.`);
        }
    }

    // Run once when page loads
    setTimeout(markAllAbsent, 800);

    // Watch for AJAX content changes
    const observer = new MutationObserver(() => {
        markAllAbsent();
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
