module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      // Следим за файлами, выполняем таски при каждом изменении
      options: {
        // При вызове в терминале `grunt watch`
        // сначала выполнятся все таски и потом начнётся слежение
        atBegin: true
      },
      js: {
        // Все файлы в папке www/js (включая подпапки)
        files: 'src/application/**/*.js',
        tasks: ['concat:js', 'uglify']
      },
      css: {
        // Тоже самое с www/css
        files: 'src/css/**/*.css',
        tasks: ['concat:css', 'autoprefixer']
      }
    },
    concat: {
      // Склеить
      js: {
        files: {
          // Все файлы разом, подключаются в алфавитном порядке
          'bild/js/all.js': [
            'src/application/application.js',
            'src/application/board.js',
            'src/application/board/cell.js',
            'src/application/board/cell/chip.js',
            'src/application/players.js',
            'src/application/players/player.js',
            'src/application/ui.js',
            'src/application/ui/painter.js',
            'src/application/game.js',
            'src/application/game/turn.js',
            'src/application/run.js'
          ] 
        }
      },
      css: {
        files: {
          'bild/css/all.css': 'src/css/**/*.css'
        }
      }
    },
    autoprefixer: {
      // Расставить необходимые префиксы в ЦСС
      main: {
        files: {
          'bild/css/all.css': 'bild/css/all.css'
        }
      }
    },
    uglify: {
      // Сжать скрипты
      main: {
        files: {
          'bild/js/all.js': 'bild/js/all.js'
        }
      }
    },
    csso: {
      // Cжать стили
      // Ссылаемся на autoprefixer, чтобы не повторяться
      main: '<%= autoprefixer.main %>'
    }
  });

  // Загружаем установленные задачи
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csso');

  // Задача по умолчанию (`grunt` в терминале)
  grunt.registerTask('default', ['concat', 'autoprefixer', 'uglify', 'csso']);
};