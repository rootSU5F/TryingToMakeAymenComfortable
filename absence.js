// ==UserScript==
// @name         Mark All Students Absent (AJAX Safe)
// @namespace    SaeedScript
// @version      1.2
// @description  Automatically check all absence checkboxes even when loaded by AJAX
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
                box.click();
                count++;
            }
        });

        alert(`Done! Marked ${count} students absent.`);
    }

    // Add floating button
    function addButton() {
        if (document.getElementById("absentBtnSaeed")) return;

        const btn = document.createElement("button");
        btn.id = "absentBtnSaeed";
        btn.textContent = "Mark All Absent";
        btn.style.position = "fixed";
        btn.style.top = "20px";
        btn.style.right = "20px";
        btn.style.zIndex = "999999";
        btn.style.padding = "10px 15px";
        btn.style.background = "#d9534f";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";

        btn.onclick = markAllAbsent;
        document.body.appendChild(btn);
    }

    addButton();

    // 🔥 Watch for AJAX / dynamic content
    const observer = new MutationObserver(() => {
        addButton(); // ensure the button always exists
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
