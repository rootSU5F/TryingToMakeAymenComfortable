// ==UserScript==
// @name         Mark All Students Absent
// @namespace    SaeedScript
// @version      1.0
// @description  Automatically check all absence checkboxes
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function markAllAbsent() {
        // Select all checkboxes whose ID ends with :studentAbsence
        const boxes = document.querySelectorAll("input[id$=':studentAbsence']");

        boxes.forEach(box => {
            if (!box.checked) {
                box.click(); // triggers the onclick event (studentAbsence)
            }
        });

        alert(`Done! Marked ${boxes.length} students absent.`);
    }

    // Add a button on screen
    const btn = document.createElement("button");
    btn.textContent = "Mark All Absent";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = 9999;
    btn.style.padding = "10px 15px";
    btn.style.background = "#d9534f";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";

    btn.onclick = markAllAbsent;
    document.body.appendChild(btn);
})();
