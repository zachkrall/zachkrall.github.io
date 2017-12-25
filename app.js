var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    portfolio: [
      {
        title: 'Websites',
        data: [
        {
          title: 'Zach Krall',
          desc: 'My portfolio built with Gatsby',
          link: {
            url: 'https://zachkrall.com',
            title: 'Live Website'
          }
        },
        {
          title: 'Shaun Gladwell',
          desc: 'An archive for Shaun\'s publications',
          link: {
            url: 'https://zachkrall.github.io/shaun-gladwell/',
            title: 'GitHub'
          }
        },
        {
          title: 'BadFaith VR',
          desc: 'Website for VR artist collective',
          link: {
            url: 'http://zachkrall.github.io/BadfaithVR/',
            title: 'Retired'
          }
        }
      ]
    },
    {
      title: 'Personal Projects',
      data: [
        {
          title: 'Stylized Text Generator',
          desc: '👏 get 👏 your 👏 point 👏 across 👏',
          link: {
            url: 'https://zachkrall.github.io/stylized-text-generator/',
            title: 'GitHub'
          }
        },
        {
          title: 'Krall Bot',
          desc: 'A twitter bot based on my tweets',
          link: {
            url: 'https://twitter.com/krallbot',
            title: 'Twitter'
          }
        },
        {
          title: 'Resume Chat',
          desc: 'A chat interface to learn about me',
          link: {
            url: 'https://zachkrall.github.io/resume-chat/',
            title: 'GitHub'
          }
        },
        {
          title: 'Conservative Hashtag Generator',
          desc: '#lyinsnowflake',
          link: {
            url: 'https://zachkrall.github.io/conservative-hashtag/',
            title: 'GitHub'
          }
        }
      ]
    },
    {
      title: 'Sketchbooks',
      data: [
        {
          title: 'p5.js',
          desc: '',
          link: {
            url: 'https://zachkrall.github.io/p5-sketches',
            title: 'View'
          }
        },
        {
          title: 'three.js',
          desc: '',
          link: {
            url: 'https://zachkrall.github.io/p5-sketches',
            title: 'View'
          }
        }
      ]
    }
  ]
  }
})

Vue.nextTick(function () {
   document.getElementById('loading').style.display = 'none';
   document.getElementById('app').style.display = 'block';
})
