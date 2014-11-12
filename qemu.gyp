{
  "variables": {
    "linker_path": "<(pwd)/m3rig/src/lm3s6965.ld"
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
        'm3rig/src/startup_lpc1800.s',
        'm3rig/src/startup.c',
        'm3rig/src/syscalls.c',
        'm3rig/src/m3rig.c',
        'src/tm_m3rig.c',
        'src/main.c',
      ],
      "include_dirs": [
        'm3rig/src/',
        'm3rig/cmsis_lm3s/',
        'runtime/src/',
        'runtime/src/colony/',
        "<(colony_luajit_path)/src",
        'src/',
      ],
      "dependencies": [
        'runtime/libcolony.gyp:libcolony',
        'runtime/libtm.gyp:libtm',
      ]
    }
  ]
}
