// Copyright (c) 2024 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function findIntegerClicked() {
  const integer = parseInt(document.getElementById("num-entered").value)
  let answer = 0
  for (let counter = 1; counter <= integer; counter++) {
    answer += Math.abs(counter)
    console.log(counter)
  }
  document.getElementById("answer").innerHTML = "Your answer is: " + answer
}

