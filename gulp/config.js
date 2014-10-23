module.exports = {
  verb: {
    src: ['docs/readme/readme.config.md'],
    name: 'README.md',
    dest: './'
  },
  js: {
    src: ['gulpfile.js', 'gulp/**/*.js', 'lib/**/*.js']
  },
  dotfiles: {
    src: [
      {
        url: 'https://git.availity.com/projects/API/repos/availity-dotfiles/browse/jshint/.jshintrc?raw',
        dest: './.jshintrc'
      },
      {
        url: 'https://git.availity.com/projects/API/repos/availity-dotfiles/browse/jshint/.jshintignore?raw',
        dest: './.jshintignore'
      },
      {
        url: 'https://git.availity.com/projects/API/repos/availity-dotfiles/browse/jscs/.jscsrc?raw',
        dest: './.jscsrc'
      }
    ]
  }
};
