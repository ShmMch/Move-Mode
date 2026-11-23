const MOVE_MODES = [
 {id:'ai',label:{he:'Claude / AI',en:'Claude / AI'},tag:'AI MODE',icon:'✳',messages:[
  ['קלוד עדיין חושב?','בינתיים 10 החלקות עקב.','Claude still thinking?','Try 10 heel slides while you wait.','heel'],
  ['Codex מריץ בדיקות?','יש זמן לגשר ישבן.','Codex running tests?','There’s time for a glute bridge set.','bridge'],
  ['ChatGPT כותב מגילה?','בין הפסקאות אפשר להספיק 8 פתיחות ברך.','ChatGPT writing a novel?','Sneak in 8 knee fallouts between paragraphs.','knee'],
  ['ה־AI עושה את העבודה?','תני גם לגוף משימה קטנה.','AI doing the heavy lifting?','Give your body a tiny task too.','clam'],
  ['קלוד שוב מבקש אישור?','יש אישור לשחרר כתפיים.','Claude wants approval again?','Approved: a quick shoulder reset.','shoulders'],
  ['עוד רגע הוא מסיים. בטח.','10 החלקות עקב, בלי להמר על זמן הסיום.','Almost done. Any minute now.','10 heel slides. No need to bet on the ETA.','heel'],
  ['Codex מתקן באג שהוא יצר?','מוכר. קחי 30 שניות למתיחה.','Codex fixing its own bug?','Classic. Take a 30-second stretch.','neck'],
  ['הפרומפט יצא משליטה?','הכתפיים לא צריכות להצטרף.','Prompt getting out of hand?','Your shoulders don’t have to join in.','shoulders'] ]},
 {id:'meetings',label:{he:'זום ופגישות',en:'Meetings & Zoom'},tag:'MEETING MODE',icon:'◉',messages:[
  ['זום בלי מצלמה?','זמן לשחרר את הצוואר בעדינות. אף אחד לא יראה 😉','Camera off in Zoom?','Time for a gentle neck stretch. Nobody will know 😉','neck'],
  ['את על מיוט?','אפשר לשחרר גם את הכתפיים.','On mute?','Unclench those shoulders, too.','shoulders'],
  ['״רואים את המסך שלי?״','בינתיים כמה סיבובי כתפיים.','“Can you see my screen?”','A few shoulder rolls while they figure it out.','shoulders'],
  ['הפגישה הייתה יכולה להיות מייל?','לפחות הרווחת מתיחה קצרה.','Could this meeting be an email?','At least you got a little stretch.','neck'],
  ['מישהו משתף מסך בפונט 8?','תני לעיניים מבט למרחק.','Someone sharing a screen in 8pt font?','Give your eyes a look into the distance.','eyes'],
  ['״רק שאלה קטנה״?','הכתפיים יכולות לרדת בינתיים.','“Just one quick question”?','Meanwhile, let your shoulders drop.','shoulders'],
  ['מחכים שכולם יתחברו?','10 קירובים עדינים של השכמות.','Waiting for everyone to join?','Try 10 gentle shoulder-blade squeezes.','shoulders'],
  ['עוד סבב קצר?','אפשר גם סבב קטן של מתיחות.','One more quick round?','A tiny stretch round works too.','neck'] ]},
 {id:'browser',label:{he:'דפדפן וטעינות',en:'Browser & Loading'},tag:'BROWSER MODE',icon:'◎',messages:[
  ['הדפדפן תקוע?','את לא חייבת להיתקע איתו. 10 גשרים.','Browser frozen?','You don’t have to freeze too. 10 bridges.','bridge'],
  ['העמוד עדיין נטען?','8 פתיחות ברך והזמן עובר.','Page still loading?','8 knee fallouts while it catches up.','knee'],
  ['עוד פעם Refresh?','גם הגב ישמח לרענון קטן.','Refreshing again?','Your back could use a little reset too.','bridge'],
  ['יש 37 טאבים פתוחים?','לפחות הכתפיים יכולות להיפתח.','37 tabs open?','At least your shoulders can loosen up.','shoulders'],
  ['הגלגל מסתובב ומסתובב?','סיבובי קרסוליים. לפחות משהו זז.','Spinning wheel again?','Ankle circles. At least something moves.','ankles'],
  ['המערכת חושבת...','10 החלקות עקב זה בדיוק הזמן.','System thinking...','A perfect moment for 10 heel slides.','heel'],
  ['האתר החליט לקחת הפסקה?','רעיון לא רע, האמת.','Website taking a break?','Not the worst idea, honestly.','neck'],
  ['עוד מסך טעינה?','בונוס של כמה תנועות.','Another loading screen?','Bonus time for a few moves.','clam'] ]},
 {id:'work',label:{he:'משימות ועבודה',en:'Work & Tasks'},tag:'WORK MODE',icon:'▣',messages:[
  ['עוד מייל של ״רק מוודאת״?','רק מוודאת שגם הכתפיים זזו היום.','Another “just checking in” email?','Checking that your shoulders moved today too.','shoulders'],
  ['מחכה לתשובה בסלאק?','10 החלקות עקב על הדרך.','Waiting on Slack?','10 heel slides while you wait.','heel'],
  ['הדדליין מתקרב?','30 שניות תנועה לא יבריחו אותו.','Deadline getting close?','30 seconds of movement won’t scare it away.','neck'],
  ['המשימה עברה ל־In Review?','מעולה. עכשיו 10 גשרים.','Task moved to In Review?','Nice. Now 10 glute bridges.','bridge'],
  ['סיימת משהו מהטו־דו?','חגיגה צנועה: כמה חזרות.','Finished a to-do?','Small celebration: a few reps.','clam'],
  ['עוד שינוי של הרגע האחרון?','לפחות הכתפיים יכולות להשתחרר.','Another last-minute change?','At least your shoulders can relax.','shoulders'],
  ['מחכה לאישור?','יש אישור לזוז.','Waiting for approval?','Movement approved.','heel'],
  ['״יש לך דקה?״','כן, אפילו דקה למתיחה.','“Got a minute?”','Yep. Even enough for a stretch.','neck'] ]},
 {id:'bed',label:{he:'עבודה מהמיטה',en:'Working from Bed'},tag:'BED MODE',icon:'☾',messages:[
  ['הלפטופ על המיטה?','10 החלקות עקב בלי לקום.','Laptop in bed?','10 heel slides without getting up.','heel'],
  ['כבר שעה באותה תנוחה?','הגב ביקש למסור ד״ש.','An hour in the same position?','Your back says hi.','bridge'],
  ['נוח לך מדי?','לא צריך לקום. 8 פתיחות ברך.','Too comfy?','No need to get up. 8 knee fallouts.','knee'],
  ['המיטה היא המשרד היום?','אפשר גם קצת תנועה בין המשימות.','Bed is the office today?','A little movement between tasks.','clam'],
  ['השמיכה ניצחה?','10 החלקות עקב גם מתחתיה.','Blanket won?','10 heel slides work under it too.','heel'],
  ['הלפטופ על 2%?','כמה חזרות לפני מצב חיסכון בסוללה.','Laptop at 2%?','A few reps before low-power mode.','bridge'],
  ['מצאת תנוחה מושלמת?','יופי. עוד רגע מחליפים.','Found the perfect position?','Nice. Let’s change it in a moment.','neck'],
  ['עוד משימה מהמיטה?','תני גם לשרירים משהו לעשות.','Another task from bed?','Give your muscles something to do too.','clam'] ]}
];
const MOVE_BY_ID = Object.fromEntries(MOVE_MODES.map(m=>[m.id,m]));
