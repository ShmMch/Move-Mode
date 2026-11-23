<<<<<<< HEAD
# MOVE//MODE — ready for GitHub Pages

## Upload (no editing needed)
1. Create a **public** repository in GitHub (e.g. `move-mode`).
2. Upload **the files and folders inside this ZIP**, not the ZIP itself, to the repository root. In particular, `index.html` must be in the root. (GitHub website: **Add file → Upload files → Commit changes**.)
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select **main** and **/ (root)**, and save.
4. Your site will appear at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` after Pages finishes deployment.

All links are relative, including the Chrome extension download; no username, URL, environment variable, hosting service, or backend to configure.

## What's included
- Hebrew/English dashboard, RTL, five rotating work-themed modes, daily exercise checkboxes, charts, local storage, history JSON import/export, installable PWA shell.
- Three random reminders when the page is open (subject to browser throttling).
- A **small extension download link and expandable installation guide inside the site**. File: `downloads/move-mode-chrome-extension.zip`.
- Optional Chrome extension for background reminders while Chrome is running, even if the website is closed. Chrome extension must be installed manually with Developer mode → Load unpacked. No Chrome Web Store publication is included.

## Limitations
- GitHub Pages is static hosting; **the website alone cannot send reliable reminders while closed**. Optional extension handles Chrome background alarms. If Chrome is fully shut down, reminders may be missed. OS notification settings apply.
- Website and extension have **separate local storage**. Neither syncs to GitHub or across devices. Use Export/Import JSON to transfer exercise history.
- Website reminders are three random daily slots and will be delayed/missed when the browser throttles/suspends the tab.
- Content is general movement guidance, not individual medical advice. Avoid any activity that creates pain or significant bulging.

## Local preview
Run `python3 -m http.server 8000` inside this folder, then open `http://localhost:8000`.
=======
# Move-Mode
Move-Mode — a GitHub Pages project
>>>>>>> 64daa2331a690f696aeb73cf23ca74d2f44d5f8e
