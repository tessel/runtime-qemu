// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

#include <m3rig.h>

#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <tm.h>
#include <colony.h>
#include <lua.h>
#include <lauxlib.h>
#include <lualib.h>
#include <luajit.h>

unsigned char test_lua[] = {
    #include "test.h"
    , 0x00
};

int main ()
{
  int ret = 0;

  hirestimer_start();

  setvbuf(stdout, NULL, _IOLBF, BUFSIZ);
  setvbuf(stderr, NULL, _IOLBF, BUFSIZ);

  char inputpath[255] = {0};
  int c, idx = 0;
  while ((c = getchar()) != '\n') {
    inputpath[idx++] = c;
  }

  // TODO: load tar ball
  // tm_fs_file_handle ok;
  // tm_fs_ent* dir = tm_fs_dir_create_entry();
  tm_fs_root = tm_fs_dir_create_entry();
  ret = tm_fs_mount_tar(tm_fs_root, ".", test_lua, sizeof(test_lua));
  printf("tm_fs_mount_tar(): %d\n", ret);

  // tm_fs_root = tm_fs_dir_create_entry();
  // tm_fs_file_handle ok;
  // ret = tm_fs_open(&ok, tm_fs_root, "test.js", TM_CREAT);
  // // printf("open(): %s\n", strerror(-ret));
  // ret = tm_fs_write (&ok, test_lua, strlen((const char *) test_lua));
  // // printf("write(): %s\n", strerror(-ret));
  // ret = tm_fs_close(&ok);
  // // printf("close(): %s\n", strerror(-ret));

  colony_runtime_open();
  const char *argv[3] = {"colony", inputpath, NULL};
  ret = tm_runtime_run(argv[1], argv, 2);
  colony_runtime_close();

  // {
  //   tm_fs_dir_t suite;
  //   ret = tm_fs_dir_open(&suite, tm_fs_root, "/suite");
  //   const char* filename = 0;
  //   while (true) {
  //     ret = tm_fs_dir_read(&suite, &filename);
  //     if (filename == NULL) {
  //       break;
  //     }

  //     // get pathname
  //     char pathname[255] = { 0 };
  //     strncat(pathname, "suite/", sizeof(pathname));
  //     strncat(pathname, filename, sizeof(pathname));
  //     // tm_logf(10, "--> %s", pathname);

  //     tm_logf(11, "@@@ %s @@@", pathname);

  //     colony_runtime_open();
  //     // tm_eval_lua()
  //     const char *argv[3] = {"colony", pathname, NULL};
  //     ret = tm_runtime_run(argv[1], argv, 2);
  //     colony_runtime_close();

  //     tm_logf(11, "\n\n\n\n");
  //   }
  //   ret = tm_fs_dir_close(&suite);
  // }

  // colony_runtime_open();
  // // tm_eval_lua()
  // const char *argv[3] = {"colony", "suite/floatint.js", NULL};

  // ret = tm_runtime_run(argv[1], argv, 2);
  
  // tm_logf(10, "\n# terminate.\n\n");
  // return 0;
  
  // colony_runtime_close();

  exit(0);

  return ret;
}
