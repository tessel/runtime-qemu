{
  "variables": {
    "linker_path": "<(pwd)/inc/lm3s6965.ld"
  },

  "includes": [
    "./runtime/common.gypi",
  ],

  "targets":  [
    {
      "target_name": "main",
      "product_name": "main",
      "type": "executable",
      'cflags': [ '-Wall', '-Wextra', '-Werror', '-mthumb', '-gdwarf-2', '-ggdb', '-fno-inline-small-functions', '-march=armv7-m', '-msoft-float', '-mfix-cortex-m3-ldrd' ],
      'ldflags': [
        '-T', '<(linker_path)', '-mthumb', '-gdwarf-2', '-ggdb', '-fno-inline-small-functions', '-march=armv7-m', '-msoft-float', '-mfix-cortex-m3-ldrd',
      ],
      "sources": [
        'inc/startup_lpc1800.s',
        'inc/startup.c',
        'inc/syscalls.c',
        'main.c',
      ],
      "include_dirs": [
        'cmsis_lm3s/',
        'runtime/src/',
        'runtime/src/colony/',
        "<(colony_luajit_path)/src",
      ],
      "dependencies": [
        'runtime/libcolony.gyp:libcolony',
        'runtime/libtm.gyp:libtm',
      ]
    }
  ]
}
