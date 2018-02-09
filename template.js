import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Mailto from './react-mailto.js';

class ProjectItem extends React.Component{
  render(){
    return (
      <div className="project">
        <div className="image">
          <a href={this.props.link.url}><img src={this.props.image} alt={this.props.title}/></a>
        </div>
        <h2>{this.props.title}</h2>
        <div className="desc">{this.props.desc}</div>
        <div className="tags">
          {this.props.tags.map((item) =>
            <span>#{item}&nbsp;</span>
          )}
        </div>
        <a href={this.props.link.url}>{this.props.link.title} &rarr;</a>
      </div>
)}
};
ProjectItem.defaultProps = {
  image: '/img_placeholder.jpg'
};

export const ProjectList = () => [
  {
    title: 'Chinatown Soup',
    desc: 'Built a fun little homepage interaction for their homepage in addition to building out their Squarespace content',
    tags: ['jquery'],
    link: {
      url: 'https://zachkrall.github.io/chinatown-soup',
      title: 'View'
    },
    image: '/img_ChinatownSoup.png'
  },
  {
    title: 'zachkrall.com',
    desc: 'My portfolio built with Gatsby',
    tags: ['react', 'gatsby'],
    link: {
      url: 'https://zachkrall.com',
      title: 'Live Website'
    },
    image: '/img_ZachKrall.png'
  },
  {
    title: 'Shaun Gladwell',
    desc: 'An archive for Shaun\'s publications',
    tags: ['jquery'],
    link: {
      url: 'https://zachkrall.github.io/shaun-gladwell/',
      title: 'View'
    },
    image: '/img_ShaunGladwell.png'
  },
  {
    title: 'zachkrall.github.io',
    desc: 'This site you are currently browsing uses Phenomic and React',
    tags: ['react', 'phenomic'],
    link: {
      url: 'https://github.com/zachkrall/zachkrall.github.io/tree/dev',
      title: 'View Source Code'
    },
    image: '/img_this.png'
  },
  {
    title: '404 Particle System',
    desc: 'How did it end up like this?',
    tags: ['p5.js'],
    link: {
      url: 'https://codepen.io/zachkrall/full/ZJbgLJ/',
      title: 'View on CodePen'
    },
    image: '/img_404.png'
  },
  {
    title: 'Stylized Text Generator',
    desc: '👏 get 👏 your 👏 point 👏 across 👏',
    tags: ['vanilla-js'],
    link: {
      url: 'https://zachkrall.github.io/stylized-text-generator/',
      title: 'View'
    },
    image: '/img_Clap.png'
  },
  {
    title: 'Resume Chat',
    desc: 'A chat interface to learn about me',
    tags: ['jquery'],
    link: {
      url: 'https://zachkrall.github.io/resume-chat/',
      title: 'View'
    },
    image: '/img_ResumeChat.png'
  },
  {
    title: 'Kinect VR @ Art-A-Hack',
    desc: '',
    tags: ['node', 'unity3d', 'virtualreality'],
    link: {
      url: 'https://artahack.io/projects/kinect-vr/',
      title: 'View Project Page'
    },
    image: '/img_KinectVR.png'
  },
  {
    title: 'Business Hours Indicator',
    desc: 'Provides quick feedback to website visit if business is currently open or closed',
    tags: ['jquery', 'sass'],
    link: {
      url: 'https://codepen.io/zachkrall/full/Qgzzjg/',
      title: 'CodePen'
    },
    image: '/img_Hours.png'
  },
  {
    title: 'Political Discourse Hashtag Generator',
    desc: 'This is how it seems like people communicate on Twitter',
    tags: ['jquery'],
    link: {
      url: 'https://zachkrall.github.io/conservative-hashtag/',
      title: 'View'
    },
    image: '/img_ConservativeHashtag.png'
  },
  {
    title: 'Donation Button',
    desc: 'Cash Rules Everything Around Me',
    tags: ['jquery'],
    link: {
      url: 'https://codepen.io/zachkrall/full/wdZpPY/',
      title: 'View on CodePen'
    },
    image: '/img_Donations.png'
  },
  {
    title: 'ReaderRx Custom CSS',
    desc: 'Redesigned applicant review portal to improve legibility',
    tags: ['css'],
    link: {
      url: 'https://gist.github.com/zachkrall/83c3bef9925fda700e275a29478f775d',
      title: 'View Gist on GitHub'
    },
    image: '/img_ReaderRx.png'
  }
].map( ( { title, desc, link, tags, image } ) => {
    return <ProjectItem title={title} desc={desc} link={link} tags={tags} image={image} />
});

export const InProgressList = () => [
  {
    title: 'Untitled Voice Art',
    desc: 'Phonetic sound play in a random sequence allowing chance to carve out words and language',
    tags: ['openFrameworks'],
    link: {
      url: 'https://vimeo.com/243547454',
      title: 'Preview on Vimeo'
    },
    image: '/img_untitledvoice.png'
  },{
    title: 'Targeted Installation',
    desc: 'A visual reminder that you devices are targets for surveillance',
    tags: ['p5.js'],
    link: {
      url: 'https://vimeo.com/249224545',
      title: 'Preview on Vimeo'
    },
    image: '/img_targeted.png'
  }
].map( ( { title, desc, link, tags, image } ) => {
    return <ProjectItem title={title} desc={desc} link={link} tags={tags} image={image} />
});

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="contact">
          <li>
            <Mailto email="zach@zachkrall.com" obfuscate={true}>
                Contact
            </Mailto>
          </li>
          <li>
            <a href="https://keybase.io/zachkrall/">Message on Keybase</a>
          </li>
        </ul>

        <ul className="social">
          <li><a href="https://twitter.com/zachkrall"><svg width="100" height="100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg></a></li>
          <li><a href="https://instragram.com/zachkrall"><svg width="100" height="100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg></a></li>
          <li><a href="https://github.com/zachkrall"><svg width="100" height="100" aria-labelledby="title" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a></li>
          <li><a href="https://are.na/zach-krall"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"  viewBox="0 0 150.38 88.986"><path d="M148.93 62.356l-20.847-16.384c-1.276-1-1.276-2.642 0-3.645l20.848-16.38c1.28-1.002 1.815-2.695 1.19-3.76-.626-1.062-2.374-1.44-3.88-.84l-24.79 9.874c-1.507.606-2.927-.22-3.153-1.83L114.57 2.926C114.34 1.317 113.13 0 111.877 0c-1.247 0-2.456 1.317-2.68 2.925l-3.73 26.467c-.228 1.61-1.646 2.434-3.155 1.83l-24.38-9.71c-1.512-.602-3.975-.602-5.483 0l-24.384 9.71c-1.508.604-2.928-.22-3.154-1.83L41.186 2.925C40.956 1.317 39.748 0 38.5 0c-1.252 0-2.463 1.317-2.688 2.925l-3.73 26.467c-.226 1.61-1.645 2.434-3.153 1.83L4.14 21.35c-1.507-.603-3.252-.223-3.878.838-.625 1.066-.092 2.76 1.184 3.76l20.85 16.38c1.277 1.003 1.277 2.645 0 3.646L1.446 62.356C.166 63.358-.364 65.152.26 66.34c.627 1.19 2.372 1.668 3.877 1.064l24.567-9.866c1.51-.603 2.914.218 3.125 1.828l3.544 26.696c.214 1.607 1.618 2.923 3.12 2.923 1.5 0 2.905-1.315 3.12-2.923l3.55-26.696c.21-1.61 1.62-2.43 3.122-1.828l24.164 9.698c1.506.606 3.97.606 5.477 0l24.16-9.698c1.504-.603 2.91.218 3.125 1.828l3.55 26.696c.212 1.607 1.617 2.923 3.115 2.923 1.502 0 2.907-1.315 3.12-2.923l3.55-26.696c.216-1.61 1.62-2.43 3.124-1.828l24.57 9.866c1.5.604 3.25.125 3.876-1.063.627-1.186.094-2.98-1.185-3.982zM95.89 46.18L77.53 60.315c-1.285.99-3.393.99-4.674 0L54.49 46.18c-1.284-.99-1.294-2.62-.02-3.625l18.4-14.493c1.274-1.005 3.363-1.005 4.638 0l18.4 14.493c1.277 1.004 1.267 2.634-.02 3.626z"></path></svg></a></li>
        </ul>
      </footer>
    );
  }
};
