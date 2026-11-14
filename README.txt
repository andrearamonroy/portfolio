DREAM DESK PORTFOLIO
====================

Open index.html in your browser to see the site.

WHAT TO EDIT
  content.js    Your name, photo, projects, languages, links and the contact form.
                Every field is labeled. Save, then refresh the page.
  images/       andrea.png is your photo. images/projects/ holds project screenshots.
  files/        resume.pdf is your resume. Replace it with your own PDF (same name).

YOUR PHOTO
  A transparent PNG (background removed) looks best. The photo is shown in a circle
  (about 1.4 wide to 1 tall), so use a head-and-shoulders picture. If your head is cut
  off, change the second number in photoPos in content.js.

PROJECT PICTURES AND LINKS
  Copy any project block in content.js. Add screenshots to images/projects and list their
  paths under pics. Links you leave out (github, appstore, web) simply don't show.

CONTACT FORM (Formspree)
  1. In Formspree, open your form. Its address looks like https://formspree.io/f/xyzabcde
  2. Copy the last part (xyzabcde).
  3. In content.js, find:   formspree: ''
     and change it to:      formspree: 'xyzabcde'
  4. Put the site online (Netlify, GitHub Pages, etc.), then send yourself a test message.
     If Formspree restricts domains, add your site's address in the form's settings.
  Until the ID is added the form is only a demo and sends nothing.

TOP BAR BUTTONS
  Resume, GitHub, LinkedIn and Contact come from "links" in content.js.
  Leave a line empty and that button disappears.

NOTE: the page loads two fonts (Syne and DM Sans) from Google Fonts, so it needs internet
to show them exactly as designed.

RESUME
  The Resume button opens a viewer with Download PDF and Open in new tab buttons.
  The viewer shows files/resume.png (a picture of page 1) and downloads files/resume.pdf.
  If you replace the PDF, also replace files/resume.png with a picture of it,
  or delete resume.png and the viewer will show the PDF itself instead.
