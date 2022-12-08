// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-03/sw.js", {
    scope: "/ICS2O-Unit-3-03/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
/**
 * This function calculates volumeof a sphere.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("radius").value)
  // process
  const sphere = (3 / 4) * 3.14 * radius * 3

  // output
  document.getElementById("Volume").innerHTML = "Volume: " + sphere + " mm² "
}
