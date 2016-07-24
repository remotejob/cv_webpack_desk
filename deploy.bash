#! /bin/bash


tar zcf -  static/ |ssh juno@104.131.38.162 tar zxf - -C cv_webpack_desk
