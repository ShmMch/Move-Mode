/* Install copy is intentionally separate from the app data layer. */
(()=>{const content={
he:{title:'התראות גם כשסוגרים את האתר?',intro:'אפשר להוסיף תוסף קטן ל־Chrome. האתר עצמו עובד מצוין גם בלעדיו.',download:'↓ הורדת התוסף (ZIP)',how:'איך מתקינים? דקה וסיימנו',steps:[
'מורידים את קובץ ה־ZIP ומחלצים אותו לתיקייה קבועה במחשב.',
'פותחים ב־Chrome את <code>chrome://extensions</code>.',
'מפעילים <strong>מצב מפתח / Developer mode</strong> בפינה העליונה.',
'לוחצים <strong>Load unpacked / טעינת פריט לא ארוז</strong> ובוחרים את התיקייה שחילצת (זו שמכילה <code>manifest.json</code>).',
'זהו. כש־Chrome פועל וההתראות מאופשרות במחשב, התוסף שולח עד 3 תזכורות אקראיות ביום, גם כשהאתר סגור.'
],fine:'אל תמחקי את תיקיית התוסף אחרי ההתקנה. הנתונים באתר ובתוסף נשמרים בנפרד; אפשר להעביר היסטוריה באמצעות ייצוא/ייבוא JSON.'},
en:{title:'Want reminders even when this site is closed?',intro:'Install a tiny Chrome extension. The website works just fine without it.',download:'↓ Download Chrome extension (ZIP)',how:'How to install — just a minute',steps:[
'Download the ZIP and extract it to a permanent folder on your computer.',
'Open <code>chrome://extensions</code> in Chrome.',
'Turn on <strong>Developer mode</strong> (top right).',
'Click <strong>Load unpacked</strong> and select the extracted folder containing <code>manifest.json</code>.',
'Done! While Chrome is running and system notifications are enabled, the extension can send up to 3 randomized reminders daily even with this site closed.'
],fine:'Keep the extracted extension folder. Website and extension history are stored separately; you can transfer your history with JSON export/import.'}};
function update(){const c=content[document.documentElement.lang==='en'?'en':'he'];for(const [id,v] of [['extensionTitle',c.title],['extensionIntro',c.intro],['extensionDownload',c.download],['extensionHow',c.how],['extensionFinePrint',c.fine]]){const e=document.getElementById(id);if(e)e.textContent=v}const list=document.getElementById('extensionSteps');if(list)list.innerHTML=c.steps.map(x=>`<li>${x}</li>`).join('')}
document.addEventListener('DOMContentLoaded',()=>{update();new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})});
})();
