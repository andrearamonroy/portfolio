// =====================================================================
//  YOUR CONTENT. Edit only this file, save, then refresh index.html.
//  Anything you leave as '' (empty) is simply hidden on the page.
// =====================================================================
window.SITE_CONTENT = {

  // ---------- ABOUT YOU (the round photo with skills orbiting it) ----------
  me: {
    name: 'Andrea Monroy',
    role: 'Software developer',
    skills: ['iOS apps', 'Websites', 'Desktop apps', 'DBMS', 'APIs', 'Servers', 'AWS'],
    tagline: 'I like being creative while exploring the latest kits and technologies.',
    photo: 'images/andrea.png',   // your picture (see README: transparent PNG looks best)
    photoPos: '50% 30%'           // keeps your face in frame; change the 2nd number if your head is cut off
  },

  // ---------- TOP BAR BUTTONS + CONTACT FORM ----------
  links: {
    resume:   'files/resume.pdf',                 // put your PDF in the files folder
    github:   'https://github.com/andrearamonroy',
    linkedin: 'https://www.linkedin.com/in/andrea-monroy-93045918a/',
    email:    'andrearamonroy@gmail.com',                // shown under the contact form

    // >>> PUT YOUR FORMSPREE FORM ID HERE <<<
    // Your form's address looks like https://formspree.io/f/xyzabcde
    // Paste only the last part, e.g.  formspree: 'xyzabcde'
    // (Already filled in with your form. Set it back to '' to turn the form into a demo.)
    formspree: 'xbgjqzya'
  },

  // ---------- DESKTOP: the Projects and Languages windows on the computer ----------
  // Project fields: n = name, d = short description, t = tags,
  // info = longer text (optional), pics = list of image paths (optional),
  // links = { github, appstore, web }. Delete any link you don't have.
  desktop: {
    projects: [
      { n: 'French learning app', d: 'Web app for learning French with Google sign-in. Launching soon.', t: ['Flask', 'Python', 'JavaScript', 'Google Auth'],
        info: 'A French learning web app built with a Flask server in Python, plus JavaScript, HTML and CSS on the front end and a database behind it. Users sign in with Google. Live very soon.' },
      { n: 'The Daily Steps website', d: 'Landing, support and privacy pages for the Daily Steps app.', t: ['HTML', 'CSS'],
        links: { github: 'https://github.com/andrearamonroy/TheDailySteps', web: 'https://andrearamonroy.github.io/TheDailySteps/' } },
      { n: 'Bloom', d: 'Period tracker desktop app with a Rust core. In progress.', t: ['Rust', 'Desktop app'],
        info: 'A period tracker I am building as a desktop app, with a Rust core. It records periods, works out your average cycle and period length, and counts the days until the next one.',
        links: { github: 'https://github.com/andrearamonroy/bloom-core' } },
      { n: 'Portfolio site', d: 'This site: scroll animation, project gallery and a contact form.', t: ['HTML', 'CSS', 'JavaScript'],
        info: 'Hand-built with HTML, CSS and JavaScript. A scroll animation takes you from the intro to the laptop and phone, and the contact form sends to my inbox through Formspree.' }
    ],
    languages: [
      { n: 'Python', d: 'Flask servers, REST APIs and scripts.', t: ['Often'] },
      { n: 'JavaScript', d: 'Front-end interactions and web apps.', t: ['Often'] },
      { n: 'HTML & CSS', d: 'Layouts, animation and responsive design.', t: ['Often'] },
      { n: 'C++', d: 'Server and client communication with custom commands.', t: ['Work'] },
      { n: 'SQL & databases', d: 'PostgreSQL, SQLite, Firebase and DynamoDB.', t: ['Often'] },
      { n: 'GraphQL & REST', d: 'API design, AWS AppSync and JSON.', t: ['Often'] }
    ]
  },

  // ---------- MOBILE: the Projects and Languages buttons on the phone ----------
  mobile: {
    projects: [
      { n: 'The Daily Steps', d: 'Step goals, streaks and weekly challenges. Live on the App Store.', t: ['Swift', 'SwiftUI', 'iOS'],
        info: 'Track your daily steps with Apple Health and Apple Watch, set a personal goal and build a streak that survives up to three rest days. Join challenges like 7K Everyday or 10K Monday, earn badges, and get encouraging reminders. Your goal and streak carry over whatever happens in a challenge.',
        pics: [
          'images/projects/daily-steps-1.jpg',
          'images/projects/daily-steps-2.jpg',
          'images/projects/daily-steps-3.jpg',
          'images/projects/daily-steps-4.jpg'
        ],
        links: { github: 'https://github.com/andrearamonroy/dailySteps', appstore: 'https://apps.apple.com/us/app/thedailysteps/id6759303366', web: 'https://andrearamonroy.github.io/TheDailySteps/' } },
      { n: 'Slow French', d: 'French podcasts at three levels with adjustable audio speed. Backend fully on AWS.', t: ['Swift', 'SwiftUI', 'AWS', 'GraphQL'],
        info: 'Beginner, intermediate and advanced French podcasts, each with a French transcript and an English translation, and a choice of slow, medium or fast audio. Built with Swift, SwiftUI and UIKit, Combine, dependency injection and MVVM. The backend is fully on AWS: a GraphQL API on Amplify and AppSync, podcast and episode info in DynamoDB, and audio files in S3, saved on the device so they are not downloaded again.',
        pics: [
          'images/projects/slow-french-1.jpg',
          'images/projects/slow-french-2.jpg',
          'images/projects/slow-french-3.jpg',
          'images/projects/slow-french-4.jpg',
          'images/projects/slow-french-5.jpg'
        ],
        links: { github: 'https://github.com/andrearamonroy/AWSGraphQLApi' } },
      { n: 'Dessert Recipes', d: 'Browse dessert recipes with ingredients and instructions.', t: ['Swift', 'SwiftUI', 'MVVM'],
        info: 'A SwiftUI app that loads a list of desserts from the TheMealDB API, then fetches each recipe on tap to show its ingredients and instructions. Built with Combine, the MVVM architecture and unit tests. The repo is called Dessert Menu, but the app is named Dessert Recipes.',
        pics: [
          'images/projects/dessert-recipes-1.jpg',
          'images/projects/dessert-recipes-2.jpg'
        ],
        links: { github: 'https://github.com/andrearamonroy/DessertMenu' } }
    ],
    languages: [
      { n: 'Swift & SwiftUI', d: 'iPhone, iPad and Apple TV apps.', t: ['Daily'] },
      { n: 'UIKit', d: 'Legacy apps and custom UI.', t: ['Often'] },
      { n: 'Core Data', d: 'Local storage and persistence.', t: ['Often'] },
      { n: 'Rust', d: 'Learning it with the period tracker.', t: ['Learning'] },
      { n: 'AWS', d: 'Amplify, Cognito, DynamoDB, AppSync, S3.', t: ['Often'] }
    ]
  }
};
